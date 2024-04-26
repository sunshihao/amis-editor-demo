// TODO 改动为接口请求 本地性调试,已弃用
import {headers} from './index';

export const demoDefaultBody_MST_STA = [
  {
    type: 'page',
    body: [
      {
        type: 'crud',
        api: {
          method: 'get',
          url: '/admin-api/infra/demo03-student/page?pageNo=1&pageSize=10',
          headers,
          adaptor:
            'if (!payload.data.list) {\r\n  payload.data.list = []\r\n}\r\nreturn {\r\n  ...payload,\r\n}'
        },
        deferApi: '/amis/api/mock2/crud/table6?parentId=${id}',
        saveOrderApi: '/amis/api/mock2/form/saveData',
        draggable: true,
        columns: [
          {
            name: 'id',
            label: '编号',
            sortable: true,
            type: 'text',
            toggled: true,
            width: 150,
            id: 'u:9958cb027c3f',
            placeholder: '-',
            className: 'font-bold',
            innerClassName: 'font-normal'
          },
          {
            name: 'name',
            label: '名字',
            sortable: true,
            type: 'text',
            toggled: true,
            id: 'u:85065d997a1c',
            placeholder: '-',
            className: 'font-bold',
            innerClassName: 'font-normal'
          },
          {
            type: 'text',
            name: 'sex',
            label: '性别',
            sortable: true,
            toggled: true,
            id: 'u:8c71ded89bf2',
            placeholder: '-',
            tpl: "${IF(sex == '1', '男', '女')}",
            className: 'font-bold',
            innerClassName: 'font-normal'
          },
          {
            type: 'text',
            name: 'birthday',
            label: '出生日期',
            sortable: true,
            toggled: true,
            placeholder: '-',
            tpl: "${DATETOSTR(createTime,'YYYY-MM-DD hh:mm:ss')}",
            className: 'font-bold',
            innerClassName: 'font-normal',
            id: 'u:bd8b3e7f7b2d'
          },
          {
            type: 'text',
            name: 'description',
            label: '简介',
            sortable: true,
            toggled: true,
            placeholder: '-',
            className: 'font-bold',
            innerClassName: 'font-normal',
            id: 'u:de71b3ae6d87'
          },
          {
            name: 'createTime',
            label: '创建时间',
            sortable: true,
            type: 'text',
            toggled: true,
            id: 'u:af4f77ef9099',
            placeholder: '-',
            tpl: "${DATETOSTR(createTime,'YYYY-MM-DD hh:mm:ss')}",
            className: 'font-bold',
            innerClassName: 'font-normal'
          },
          {
            type: 'operation',
            label: '操作',
            width: 100,
            buttons: [
              {
                type: 'button',
                actionType: 'dialog',
                label: '编辑',
                level: 'link',
                dialog: {
                  type: 'dialog',
                  size: 'md',
                  title: '编辑',
                  body: [
                    {
                      type: 'form',
                      api: {
                        method: 'post',
                        url: '/admin-api/infra/demo03-student/create',
                        headers
                      },
                      body: [
                        {
                          type: 'input-text',
                          name: 'name',
                          label: '名字',
                          id: 'u:68627e3ffacf',
                          required: true
                        },
                        {
                          type: 'radios',
                          label: '性别',
                          name: 'sex',
                          options: [
                            {
                              label: '男',
                              value: '1'
                            },
                            {
                              label: '女',
                              value: '2'
                            }
                          ],
                          id: 'u:156353934dd3',
                          required: true
                        },
                        {
                          type: 'input-date',
                          label: '出生日期',
                          name: 'birthday',
                          id: 'u:1adc2292ca53',
                          required: true,
                          valueFormat: 'x'
                        },
                        {
                          type: 'input-rich-text',
                          label: '简介',
                          name: 'description',
                          vendor: 'tinymce',
                          id: 'u:74326e9419cd',
                          options: {
                            plugins:
                              'advlist,autolink,link,image,lists,charmap,preview,anchor,pagebreak,searchreplace,wordcount,visualblocks,visualchars,code,fullscreen,insertdatetime,media,nonbreaking,table,emoticons,template,help',
                            toolbar:
                              'undo redo formatselect bold italic backcolor alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat help',
                            menubar: true
                          },
                          required: true
                        },
                        {
                          type: 'tabs',
                          tabs: [
                            {
                              title: '学生课程',
                              body: [
                                {
                                  type: 'service',
                                  api: {
                                    method: 'get',
                                    url: '/admin-api/infra/demo03-student/demo03-course/list-by-student-id?studentId=$id',
                                    headers,
                                    adaptor:
                                      'if (payload.code == 0) {\r\n    return {\r\n        ...payload,\r\n        data: {\r\n            demo03Courses: payload.data\r\n        }\r\n    }\r\n} else {\r\n    return payload\r\n}'
                                  },
                                  body: [
                                    {
                                      type: 'input-table',
                                      name: 'demo03Courses',
                                      addable: true,
                                      showIndex: true,
                                      editable: true,
                                      id: 'table_course',
                                      value: '$demo03Courses',
                                      columns: [
                                        {
                                          type: 'input-text',
                                          label: '名字',
                                          name: 'name',
                                          id: 'u:0a14ea5a2167',
                                          required: true
                                        },
                                        {
                                          type: 'input-text',
                                          label: '分数',
                                          name: 'score',
                                          id: 'u:40c7918139e6',
                                          required: true
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ],
                              id: 'u:e4cd9b76a7a6'
                            },
                            {
                              title: '学生班级',
                              body: [
                                {
                                  type: 'service',
                                  api: {
                                    method: 'get',
                                    url: '/admin-api/infra/demo03-student/demo03-grade/get-by-student-id?studentId=$id',
                                    headers,
                                    adaptor:
                                      'if (payload.code == 0) {\r\n    return {\r\n        ...payload,\r\n        data: {\r\n            demo03Grade: {\r\n                ...payload.data\r\n            }\r\n        }\r\n    }\r\n}\r\nreturn {\r\n    ...payload\r\n}'
                                  },
                                  body: {
                                    type: 'combo',
                                    name: 'demo03Grade',
                                    items: [
                                      {
                                        type: 'input-text',
                                        label: '名字',
                                        name: 'name',
                                        value: '${demo03Grade.name}',
                                        id: 'u:d51b8a6e1f9f',
                                        placeholder: '请输入',
                                        required: true
                                      },
                                      {
                                        type: 'input-text',
                                        label: '班主任',
                                        name: 'teacher',
                                        value: '${demo03Grade.teacher}',
                                        id: 'u:da320a735efc',
                                        required: true,
                                        placeholder: '请输入'
                                      }
                                    ],
                                    id: 'u:4b0f1612fb28'
                                  }
                                }
                              ],
                              id: 'u:8c8fcb60e883'
                            }
                          ],
                          mountOnEnter: true,
                          id: 'u:a40fe12dceb0'
                        }
                      ],
                      id: 'u:58c8732187fd',
                      actions: [
                        {
                          type: 'submit',
                          label: '提交',
                          primary: true
                        }
                      ],
                      feat: 'Insert'
                    }
                  ],
                  id: 'u:fde1e58a17bf',
                  actions: [
                    {
                      type: 'button',
                      actionType: 'cancel',
                      label: '取消',
                      id: 'u:e591d58ab822'
                    },
                    {
                      type: 'button',
                      actionType: 'confirm',
                      label: '确定',
                      primary: true,
                      id: 'u:7a1d83f1fd39'
                    }
                  ]
                },
                id: 'u:539456cb2997'
              },
              {
                type: 'button',
                actionType: 'ajax',
                label: '删除',
                level: 'link',
                confirmText: '您确认要删除?',
                api: {
                  method: 'delete',
                  url: '/admin-api/infra/demo03-student/delete?id=$id',
                  headers
                },
                id: 'u:8cca9431be2e',
                themeCss: {
                  className: {
                    'font:default': {
                      color: 'var(--colors-error-5)'
                    }
                  }
                }
              }
            ],
            toggled: true,
            id: 'u:98b33e29dd41',
            className: 'font-bold',
            innerClassName: 'font-normal'
          }
        ],
        bulkActions: [],
        itemActions: [],
        features: ['create', 'bulkDelete', 'update', 'delete', 'filter'],
        filterColumnCount: 3,
        headerToolbar: [
          {
            label: '导出',
            type: 'button',
            level: 'success',
            id: 'u:8ae79e8dbfac',
            confirmText: '是否确认导出数据项？',
            align: 'right',
            onEvent: {
              click: {
                weight: 0,
                actions: [
                  {
                    ignoreError: false,
                    outputVar: 'responseResult',
                    actionType: 'ajax',
                    api: {
                      url: '/admin-api/infra/demo03-student/export-excel?pageNo=1',
                      method: 'get',
                      headers
                    }
                  }
                ]
              }
            }
          },
          {
            label: '新增',
            type: 'button',
            actionType: 'dialog',
            level: 'primary',
            align: 'right',
            dialog: {
              type: 'dialog',
              size: 'md',
              title: '新增',
              body: [
                {
                  type: 'form',
                  api: {
                    method: 'post',
                    url: '/admin-api/infra/demo03-student/create',
                    headers
                  },
                  body: [
                    {
                      type: 'input-text',
                      name: 'name',
                      label: '名字',
                      id: 'u:68cb82e38ff0',
                      required: true
                    },
                    {
                      type: 'radios',
                      label: '性别',
                      name: 'sex',
                      options: [
                        {
                          label: '男',
                          value: '1'
                        },
                        {
                          label: '女',
                          value: '2'
                        }
                      ],
                      id: 'u:c66fc0c5df0a',
                      required: true
                    },
                    {
                      type: 'input-date',
                      label: '出生日期',
                      name: 'birthday',
                      id: 'u:61adee8dbec6',
                      required: true,
                      valueFormat: 'x'
                    },
                    {
                      type: 'input-rich-text',
                      label: '简介',
                      name: 'description',
                      vendor: 'tinymce',
                      id: 'u:e6a7eb23eeb6',
                      options: {
                        plugins:
                          'advlist,autolink,link,image,lists,charmap,preview,anchor,pagebreak,searchreplace,wordcount,visualblocks,visualchars,code,fullscreen,insertdatetime,media,nonbreaking,table,emoticons,template,help',
                        toolbar:
                          'undo redo formatselect bold italic backcolor alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat help',
                        menubar: true
                      },
                      required: true
                    },
                    {
                      type: 'tabs',
                      tabs: [
                        {
                          title: '学生课程',
                          body: [
                            {
                              type: 'input-table',
                              name: 'demo03Courses',
                              addable: true,
                              showIndex: true,
                              editable: true,
                              id: 'table_course',
                              value: [],
                              columns: [
                                {
                                  type: 'input-text',
                                  label: '名字',
                                  name: 'name',
                                  id: 'u:c25c77792921',
                                  required: true
                                },
                                {
                                  type: 'input-text',
                                  label: '分数',
                                  name: 'score',
                                  id: 'u:75ca7ba434f3',
                                  required: true
                                }
                              ]
                            }
                          ],
                          id: 'u:e4cd9b76a7a6'
                        },
                        {
                          title: '学生班级',
                          body: [
                            {
                              type: 'combo',
                              name: 'demo03Grade',
                              items: [
                                {
                                  type: 'input-text',
                                  label: '名字',
                                  name: 'name',
                                  id: 'u:e021016fe96c',
                                  placeholder: '请输入',
                                  required: true
                                },
                                {
                                  type: 'input-text',
                                  label: '班主任',
                                  name: 'teacher',
                                  id: 'u:355e28779fea',
                                  required: true,
                                  placeholder: '请输入'
                                }
                              ],
                              id: 'u:c300ab60fa8e'
                            }
                          ],
                          id: 'u:8c8fcb60e883'
                        }
                      ],
                      mountOnEnter: true,
                      id: 'u:d5a48b41e061'
                    }
                  ],
                  id: 'u:fb2d57e7950e',
                  actions: [
                    {
                      type: 'submit',
                      label: '提交',
                      primary: true
                    }
                  ],
                  feat: 'Insert'
                }
              ],
              id: 'u:092efc66837f',
              actions: [
                {
                  type: 'button',
                  actionType: 'cancel',
                  label: '取消',
                  id: 'u:3c9b1dcc0bb8'
                },
                {
                  type: 'button',
                  actionType: 'confirm',
                  label: '确定',
                  primary: true,
                  id: 'u:f885e41a58d2'
                }
              ]
            },
            id: 'u:9fb81e17cbda'
          },
          'bulkActions'
        ],
        perPageAvailable: [10],
        messages: {},
        filter: {
          title: '',
          body: [
            {
              type: 'collapse',
              key: '1',
              header: {
                type: 'button-toolbar',
                buttons: [
                  {
                    type: 'submit',
                    label: '搜索',
                    level: 'primary',
                    id: 'u:993f86899268',
                    size: 'sm'
                  },
                  {
                    type: 'reset',
                    label: '重置',
                    id: 'u:28af56966419',
                    size: 'sm'
                  }
                ],
                id: 'u:e16d5179b7be',
                mode: 'inline',
                labelClassName: '',
                className: '',
                inputClassName: ''
              },
              body: [
                {
                  type: 'grid',
                  columns: [
                    {
                      body: [
                        {
                          type: 'input-text',
                          label: '名字',
                          name: 'name',
                          id: 'u:f252863e4dfc',
                          size: 'md',
                          mode: 'inline',
                          placeholder: '请输入名称'
                        }
                      ],
                      id: 'u:840eaa455087'
                    },
                    {
                      body: [
                        {
                          type: 'select',
                          label: '性别',
                          name: 'sex',
                          options: [
                            {
                              label: '男',
                              value: '1'
                            },
                            {
                              label: '女',
                              value: '2'
                            }
                          ],
                          id: 'u:fc070d56cb50',
                          multiple: false,
                          mode: 'inline',
                          size: 'md'
                        }
                      ],
                      id: 'u:9a81d4c0ae78'
                    },
                    {
                      id: 'u:a94fe152fcbf',
                      body: [
                        {
                          type: 'input-date-range',
                          label: '创建时间',
                          name: 'createTime',
                          id: 'u:957e2c4cf4d5',
                          size: 'md',
                          shortcuts: [],
                          displayFormat: 'YYYY-MM-DD',
                          valueFormat: 'YYYY-MM-DD hh:mm:ss'
                        }
                      ]
                    }
                  ],
                  id: 'u:8444ecfc0372'
                }
              ],
              id: 'u:d8212d52146a',
              showArrow: true,
              collapsable: true,
              headingClassName:
                'collapse_head flex items-center justify-between h-14 p-0 pl-4 bg-white divide-solid border-slate-400 border-b',
              className: 'collapse_body',
              bodyClassName: 'collapse_content'
            }
          ],
          id: 'u:9caf0fcb0dc6',
          preventEnterSubmit: true,
          actions: [
            {
              type: 'submit',
              label: '搜索',
              primary: true,
              id: 'u:aac6fa5bbd97'
            },
            {
              type: 'reset',
              label: '重置',
              primary: true,
              id: 'u:e239f5ab200b',
              level: 'default'
            }
          ],
          feat: 'Insert',
          wrapWithPanel: false,
          className: 'm-b'
        },
        filterTogglable: true,
        pageField: 'pageNo',
        perPageField: 'pageSize',
        syncResponse2Query: false,
        id: 'u:f4c7c1e12ce4'
      }
    ],
    id: 'u:af145332528b',
    regions: ['body'],
    themeCss: {
      bodyControlClassName: {
        'padding-and-margin:default': {
          marginTop: '0px',
          marginRight: '0px',
          marginBottom: '0px',
          marginLeft: '0px',
          paddingTop: '0px',
          paddingRight: '0px',
          paddingBottom: '0px',
          paddingLeft: '0px'
        }
      }
    },
    wrapperCustomStyle: {
      '.collapse_head': {
        'width': '100%',
        'display': 'flex !important',
        'align-items': 'center !important',
        'justify-content': 'space-between !important',
        'flex-direction': 'row !important',
        'border-bottom': '1px solid #F4F5F7'
      },
      '.collapse_content': {
        padding: '20px'
      },
      '.collapse_body': {
        'border-bottom': '10px solid #F4F5F7',
        
        
      },
      '.ae-Preview': {
        'box-shadow': 'none !important'
      }
    }
  }
];

export const demoDefaultPage_MST_STA = {
  type: 'page',
  body: demoDefaultBody_MST_STA,
  id: 'u:560eb8d924eb',
  regions: ['body'],
  themeCss: {
    bodyControlClassName: {
      'padding-and-margin:default': {
        marginTop: '0px',
        marginRight: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
        paddingTop: '0px',
        paddingRight: '0px',
        paddingBottom: '0px',
        paddingLeft: '0px'
      }
    }
  }
};
