import * as React from 'react';
import {Editor, ShortcutKey, setThemeConfig} from 'amis-editor';
import {Button} from 'amis';
import {currentLocale} from 'i18n-runtime';
import {Portal} from 'react-overlays';
import LayoutList from './layout/index';
import {antdData} from 'amis-theme-editor-helper';
import FullScreen from './views/fullScreen';
import template_new from './layout/plugin/index';
import {headers} from '@/utils/params';
import {schema, schemas, variableSchemas, variableDefaultData} from '@/utils';
import request from '@/utils/request';
import {getTemplateList, saveRemote, reflaseRemote} from './api';
import {debounce} from 'lodash';

const i18nEnabled = false; // 国际化
setThemeConfig(antdData);

const formSchema = {
  type: 'doc-entity',
  fields: []
};

const variables: any = [
  {
    name: 'appVariables',
    title: '内存变量',
    parentId: 'root',
    order: 1,
    schema: variableSchemas
  }
];

const EditorType = {
  EDITOR: 'editor',
  MOBILE: 'mobile',
  FORM: 'form'
};

export default class AMisSchemaEditor extends React.Component<any, any> {
  state: any = {
    preview: localStorage.getItem('editting_preview') ? true : false,
    type: localStorage.getItem('editting_preview_type') || EditorType.EDITOR,
    schema: localStorage.getItem('editting_schema')
      ? JSON.parse(localStorage.getItem('editting_schema')!)
      : schema,
    // schema: schema,
    curLanguage: currentLocale(), // 获取当前语料类型
    loadEditor: false,
    templateLoadingTip: '模板加载中...',
    timer: null,
    template: null,
    settings: null,
    title: '页面名称',
    listener: null
  };

  constructor(props: any) {
    super(props);
    this.state = {
      ...this.state
    };
    const type = localStorage.getItem('editting_preview_type') || EditorType.EDITOR;
    this.state.schema = this.getSchema(type);
  }

  isString(v: any) {
    return Object.prototype.toString.call(v) === '[object String]';
  }

  postMsg(msg: any) {
    const str = this.isString(msg) ? msg : JSON.stringify(msg);
    window.parent?.postMessage(str, '*');
  }

  inited = false;

  obj: any;

  // 初始化Iframe通讯
  initCommunication = (event: any) => {
    const that = this;
    let data = event.data;

    if (!data) return;

    if (this.isString(data) && data.startsWith('{')) {
      data = JSON.parse(data);
    }

    if (data.type === 'setSchema') {
      console.log('-----------iframe入参-----------', data);

      this.inited = true;
      this.obj = data.data;

      that.setState({
        schema: data.data,
        template: data.templateList,
        title: data.title
      });

      if (data.templateList) {
        that.initTemplatePlugin(data.templateList); // 初始化模板信息
      }

      that.setState({
        loadEditor: true
      });
    } else if (data.type === 'alert') {
      alert(data.message);
    } else if (data.type === 'toast') {
      const level: string = data.level || 'info';
    }
  };

  componentDidMount(): void {
    window.addEventListener('message', this.initCommunication);

    this.setState({
      loadEditor: true
    });

    if (!this.inited) {
      this.inited = true;
      this.postMsg('amis-editor-inited');
    }
  }

  // 页面销毁时清除监听
  componentWillUnmount(): void {
    window.removeEventListener('message', this.initCommunication);
  }

  // 模板设置初始化
  initTemplatePlugin(templateList: Array<any>) {
    const that = this;

    if (Array.isArray(templateList) && templateList.length) {
      templateList.map((item: any, index: Number) => {
        const {templateName, description, scaffold} = item;

        // headers 替换
        const replaceRes = JSON.stringify(scaffold, (key, value) => {
          if (key == 'headers') {
            return headers;
          }
          return value;
        });

        class itemNew extends template_new {
          name = templateName || 'define Name';
          description = description || '';
          scaffold: any = JSON.parse(replaceRes); //scaffold
        }
        LayoutList.push(itemNew);
      });

      that.setState({
        loadEditor: true
      });
    } else {
      getTemplateList()
        .then(res => {
          res.map((item: any, index: Number) => {
            const {templateName, description, scaffold} = item;

            // headers 替换
            const replaceRes = JSON.stringify(scaffold, (key, value) => {
              if (key == 'headers') {
                return headers;
              }
              return value;
            });

            class itemNew extends template_new {
              name = templateName || 'define Name';
              description = description || '';
              scaffold: any = JSON.parse(replaceRes); //scaffold
            }
            LayoutList.push(itemNew); //new Template(item)
          });

          that.setState({
            loadEditor: true
          });
        })
        .catch(err => {
          that.setState({
            loadEditor: true
          });
        });
    }
  }

  getSchema(type: string) {
    if (type === EditorType.FORM) {
      const schema = localStorage.getItem('editting_schema_form');

      if (schema) {
        return JSON.parse(schema);
      }
      return formSchema;
    }

    const lsSchema = localStorage.getItem('editting_schema');

    if (lsSchema) {
      return JSON.parse(lsSchema);
    }

    return schema;
  }

  handleChange = (value: any) => {
    const type = this.state.type;

    if (type === EditorType.FORM) {
      localStorage.setItem('editting_schema_form', JSON.stringify(value));
    } else {
      localStorage.setItem('editting_schema', JSON.stringify(value));
    }

    this.setState({
      schema: value
    });
  };

  changeLocale(value: any) {
    localStorage.setItem('suda-i18n-locale', value);
    window.location.reload();
  }

  onSave = () => {
    const curSchema = this.state.schema;
    localStorage.setItem('editting_schema', JSON.stringify(curSchema));
  };

  handlePreviewChange = (preview: any) => {
    localStorage.setItem('editting_preview', preview ? 'true' : '');

    this.setState({
      preview: !!preview
    });
  };

  togglePreview = () => {
    this.handlePreviewChange(!this.state.preview);
  };

  handleTypeChange = (editorType: any) => {
    const type = editorType || EditorType.EDITOR;
    localStorage.setItem('editting_preview_type', type);

    this.setState({
      type: type,
      schema: this.getSchema(type)
    });
  };

  clearCache = () => {
    localStorage.removeItem('editting_schema');
    this.setState({
      schema: schema
    });
  };

  // 触发保存操作
  onSaveSchema = debounce(() => {
    this.onSave();
    const res = {
      type: 'save',
      data: this.state.schema
    };
    this.postMsg(res);
  }, 500);

  _id = 10001

  onSaveRemote = () => {
    saveRemote({
      id: this._id,
      content: JSON.stringify(this.state.schema)
    }).then(res => {
      console.log('res--', res);
    });
  };

  onReflaseRemote = () => {
    reflaseRemote(this._id).then(res => {
      this.setState({
        schema: JSON.parse(res.content || '{}')
      });
    });
  };

  renderEditor() {
    const {theme} = this.props;
    const {preview, type, schema} = this.state;
    const isMobile = type === EditorType.MOBILE;
    const {replaceText} = this.state;

    return (
      <Editor
        preview={preview}
        isMobile={isMobile}
        value={schema}
        schemas={schemas}
        variables={variables}
        onChange={this.handleChange}
        onPreview={this.handlePreviewChange}
        onSave={this.onSave}
        className="is-fixed"
        i18nEnabled={i18nEnabled}
        theme={theme || 'cxd'}
        showCustomRenderersPanel={true}
        plugins={LayoutList} // 存放常见布局组件
        $schemaUrl={`${location.protocol}//${location.host}/schema.json`}
        actionOptions={{
          showOldEntry: false
        }}
        amisEnv={
          {
            // TODO url过滤
            fetcher: request,
            variable: {
              id: 'appVariables',
              namespace: 'appVariables',
              schema: variableSchemas,
              data: variableDefaultData
            },
            replaceText
          } as any
        }
        ctx={{
          __page: {
            num: 2
          },
          ...variableDefaultData
        }}
      />
    );
  }

  render() {
    const {preview, title, loadEditor, templateLoadingTip} = this.state;
    return (
      <div className="Editor-inner">
        <Portal container={() => document.querySelector('#headerBar') as any}>
          <>
            <div className="Editor-view-mode-group-container" style={{fontWeight: 'bold'}}>
              {title}
            </div>
            <div className="Editor-header-actions">
              <FullScreen />
              <ShortcutKey />
              {preview ? (
                <></>
              ) : (
                <>
                  <Button className={`header-action-btn primary`} onClick={this.onSaveSchema}>
                    保存
                  </Button>
                  <Button className={`header-action-btn primary`} onClick={this.onSaveRemote}>
                    保存(远程)
                  </Button>
                  <Button className={`header-action-btn`} onClick={this.onReflaseRemote}>
                    刷新(远程)
                  </Button>
                </>
              )}
              <Button
                className={`header-action-btn ${preview ? 'primary' : ''}`}
                onClick={() => {
                  this.togglePreview();
                }}
              >
                {preview ? '编辑' : '预览'}
              </Button>
            </div>
          </>
        </Portal>
        {loadEditor ? (
          this.renderEditor()
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {templateLoadingTip}
          </div>
        )}
      </div>
    );
  }
}
