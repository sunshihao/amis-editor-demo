export const list = [
  {
    templateName: '树表(增删改查)',
    name: '树表(增删改查)',
    description: '树表(增删改查)',
    tags: '业务页面',
    icon: 'fa fa-columns',
    id: 'template_crud',
    scaffold: {
      type: 'page',
      region: ['body'],
      id: 'u:560eb8d924eb',
      body: [
        {
          type: 'crud',
          api: {
            method: 'get',
            url: '/admin-api/infra/demo02-category/list?pageNo=1&pageSize=10',
            headers: '*headers*',
            adaptor:
              "const handleTree = (data, id, parentId, children) => {\r\n    if (!Array.isArray(data)) {\r\n        console.warn('data must be an array')\r\n        return []\r\n    }\r\n    const config = {\r\n        id: id || 'id',\r\n        parentId: parentId || 'parentId',\r\n        childrenList: children || 'children'\r\n    }\r\n    const childrenListMap = {}\r\n    const nodeIds = {}\r\n    const tree = []\r\n    for (const d of data) {\r\n        const parentId = d[config.parentId]\r\n        if (childrenListMap[parentId] == null) {\r\n            childrenListMap[parentId] = []\r\n        }\r\n        nodeIds[d[config.id]] = d\r\n        childrenListMap[parentId].push(d)\r\n    }\r\n    for (const d of data) {\r\n        const parentId = d[config.parentId]\r\n        if (nodeIds[parentId] == null) {\r\n            tree.push(d)\r\n        }\r\n    }\r\n    for (const t of tree) {\r\n        adaptToChildrenList(t)\r\n    }\r\n    function adaptToChildrenList(o) {\r\n        if (childrenListMap[o[config.id]] !== null) {\r\n            o[config.childrenList] = childrenListMap[o[config.id]]\r\n        }\r\n        if (o[config.childrenList]) {\r\n            for (const c of o[config.childrenList]) {\r\n                adaptToChildrenList(c)\r\n            }\r\n        }\r\n    }\r\n    return tree\r\n}\r\nreturn {\r\n    ...payload,\r\n    data: payload.data ? handleTree(payload.data, 'id', 'parentId', 'children') : (payload.data || [] )\r\n}"
          },
          deferApi: '',
          columns: [
            {
              name: 'id',
              label: '编号',
              sortable: true,
              type: 'text',
              toggled: true,
              width: 150,
              id: 'u:0fbcba633fae',
              placeholder: '-'
            },
            {
              name: 'name',
              label: '名字',
              sortable: true,
              type: 'text',
              toggled: true,
              id: 'u:f5ae9f30aa98',
              placeholder: '-'
            },
            {
              type: 'text',
              name: 'createTime',
              label: '创建时间',
              sortable: true,
              toggled: true,
              id: 'u:1d28457fe590',
              placeholder: '-',
              popOver: false,
              inline: true,
              tpl: "${DATETOSTR(createTime,'YYYY-MM-DD hh:mm:ss')}"
            },
            {
              type: 'operation',
              label: '操作',
              width: 100,
              buttons: [
                {
                  type: 'button',
                  actionType: 'dialog',
                  dialog: {
                    type: 'dialog',
                    title: '新增',
                    body: [
                      {
                        type: 'form',
                        api: {
                          method: 'put',
                          url: '/admin-api/infra/demo02-category/update',
                          headers: '*headers*'
                        },
                        body: [
                          {
                            type: 'input-text',
                            name: 'id',
                            label: '编号',
                            required: true,
                            hidden: false,
                            visible: false
                          },
                          {
                            type: 'input-text',
                            name: 'name',
                            label: '名字',
                            required: true,
                            id: 'u:5194b2d73d7c'
                          },
                          {
                            type: 'tree-select',
                            name: 'parentId',
                            id: 'u:cedbea6b021a',
                            label: '父级编号',
                            labelField: 'name',
                            valueField: 'id',
                            source: {
                              url: '/admin-api/infra/demo02-category/list',
                              method: 'get',
                              headers: '*headers*',
                              adaptor:
                                "const handleTree = (data, id, parentId, children) => {\r\n    const _root = { id: '0', name: '顶级分类', children: [] }\r\n    if (!Array.isArray(data)) {\r\n        console.warn('data must be an array')\r\n        return []\r\n    }\r\n    const config = {\r\n        id: id || 'id',\r\n        parentId: parentId || 'parentId',\r\n        childrenList: children || 'children'\r\n    }\r\n    const childrenListMap = {}\r\n    const nodeIds = {}\r\n    const tree = []\r\n    for (const d of data) {\r\n        const parentId = d[config.parentId]\r\n        if (childrenListMap[parentId] == null) {\r\n            childrenListMap[parentId] = []\r\n        }\r\n        nodeIds[d[config.id]] = d\r\n        childrenListMap[parentId].push(d)\r\n    }\r\n    for (const d of data) {\r\n        const parentId = d[config.parentId]\r\n        if (nodeIds[parentId] == null) {\r\n            tree.push(d)\r\n        }\r\n    }\r\n    for (const t of tree) {\r\n        adaptToChildrenList(t)\r\n    }\r\n    function adaptToChildrenList(o) {\r\n        if (childrenListMap[o[config.id]] !== null) {\r\n            o[config.childrenList] = childrenListMap[o[config.id]]\r\n        }\r\n        if (o[config.childrenList]) {\r\n            for (const c of o[config.childrenList]) {\r\n                adaptToChildrenList(c)\r\n            }\r\n        }\r\n    }\r\n    _root.children = tree\r\n    return [_root]\r\n}\r\nreturn {\r\n    ...payload,\r\n    data: payload.data ? handleTree(payload.data) : payload.data\r\n}"
                            },
                            showIcon: false,
                            options: [],
                            required: true,
                            enableNodePath: false,
                            initiallyOpen: true,
                            hideNodePathLabel: true
                          }
                        ],
                        id: 'u:6f8bf2172553'
                      }
                    ],
                    id: 'u:517ec5106224'
                  },
                  id: 'u:8ff22d526935',
                  label: '编辑',
                  level: 'link'
                },
                {
                  type: 'button',
                  actionType: 'ajax',
                  confirmText: '您确认要删除?',
                  api: {
                    method: 'delete',
                    url: '/admin-api/infra/demo02-category/delete?id=$id',
                    headers: '*headers*'
                  },
                  id: 'u:45a0a1848451',
                  label: '删除',
                  level: 'link',
                  themeCss: {className: {'font:default': {color: 'var(--colors-error-5)'}}}
                }
              ],
              toggled: true,
              id: 'u:d8288d56ec21'
            }
          ],
          bulkActions: [],
          itemActions: [],
          features: ['create', 'bulkDelete', 'update', 'delete', 'filter'],
          filterColumnCount: 3,
          headerToolbar: [
            {
              label: '新增',
              type: 'button',
              actionType: 'dialog',
              level: 'primary',
              dialog: {
                type: 'dialog',
                title: '新增',
                body: [
                  {
                    type: 'form',
                    api: {
                      method: 'post',
                      url: '/admin-api/infra/demo02-category/create',
                      headers: '*headers*'
                    },
                    body: [
                      {
                        type: 'input-text',
                        name: 'name',
                        label: '名字',
                        id: 'u:5194b2d73d7c',
                        required: true
                      },
                      {
                        type: 'tree-select',
                        name: 'parentId',
                        id: 'u:cedbea6b021a',
                        label: '父级编号',
                        labelField: 'name',
                        valueField: 'id',
                        source: {
                          url: '/admin-api/infra/demo02-category/list',
                          method: 'get',
                          headers: '*headers*',
                          adaptor:
                            "const handleTree = (data, id, parentId, children) => {\r\n    const _root = { id: '0', name: '顶级分类', children: [] }\r\n    if (!Array.isArray(data)) {\r\n        console.warn('data must be an array')\r\n        return []\r\n    }\r\n    const config = {\r\n        id: id || 'id',\r\n        parentId: parentId || 'parentId',\r\n        childrenList: children || 'children'\r\n    }\r\n    const childrenListMap = {}\r\n    const nodeIds = {}\r\n    const tree = []\r\n    for (const d of data) {\r\n        const parentId = d[config.parentId]\r\n        if (childrenListMap[parentId] == null) {\r\n            childrenListMap[parentId] = []\r\n        }\r\n        nodeIds[d[config.id]] = d\r\n        childrenListMap[parentId].push(d)\r\n    }\r\n    for (const d of data) {\r\n        const parentId = d[config.parentId]\r\n        if (nodeIds[parentId] == null) {\r\n            tree.push(d)\r\n        }\r\n    }\r\n    for (const t of tree) {\r\n        adaptToChildrenList(t)\r\n    }\r\n    function adaptToChildrenList(o) {\r\n        if (childrenListMap[o[config.id]] !== null) {\r\n            o[config.childrenList] = childrenListMap[o[config.id]]\r\n        }\r\n        if (o[config.childrenList]) {\r\n            for (const c of o[config.childrenList]) {\r\n                adaptToChildrenList(c)\r\n            }\r\n        }\r\n    }\r\n    _root.children = tree\r\n    return [_root]\r\n}\r\nreturn {\r\n    ...payload,\r\n    data: payload.data ? handleTree(payload.data) : payload.data\r\n}"
                        },
                        showIcon: false,
                        required: true,
                        enableNodePath: false,
                        initiallyOpen: true,
                        hideNodePathLabel: true
                      }
                    ],
                    id: 'u:6f8bf2172553'
                  }
                ],
                id: 'u:517ec5106224'
              },
              id: 'u:9737be67a7d1'
            },
            {
              label: '导出',
              type: 'button',
              level: 'success',
              id: 'u:b36b802a5777',
              onEvent: {
                click: {
                  weight: 0,
                  actions: [
                    {
                      ignoreError: false,
                      outputVar: 'responseResult',
                      actionType: 'ajax',
                      api: {
                        url: '/admin-api/infra/demo02-category/export-excel?pageNo=1',
                        method: 'get',
                        headers: '*headers*'
                      }
                    }
                  ]
                }
              }
            },
            'bulkActions'
          ],
          perPageAvailable: [10],
          messages: {},
          filter: {
            title: '',
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
                        id: 'u:ac3598450fa5',
                        size: 'md',
                        mode: 'inline',
                        placeholder: '请输入名称'
                      }
                    ],
                    id: 'u:840eaa455087'
                  },
                  {
                    id: 'u:a94fe152fcbf',
                    body: [
                      {
                        type: 'input-date-range',
                        label: '创建时间',
                        name: 'createTime',
                        id: 'u:843f3a84fa08',
                        size: 'md',
                        shortcuts: [],
                        displayFormat: 'YYYY-MM-DD',
                        valueFormat: 'YYYY-MM-DD hh:mm:ss'
                      }
                    ]
                  }
                ],
                id: 'u:c27c3bd45672'
              }
            ],
            id: 'u:9caf0fcb0dc6',
            preventEnterSubmit: true,
            actions: [
              {type: 'submit', label: '搜索', primary: true, id: 'u:2256c9c6500c'},
              {type: 'reset', label: '重置', primary: true, id: 'u:a228e48898c9', level: 'default'}
            ],
            feat: 'Insert'
          },
          filterTogglable: true,
          pageField: 'pageNo',
          perPageField: 'pageSize',
          syncResponse2Query: false,
          id: 'u:ee9b84d989a0'
        }
      ]
    }
  },
  {
    templateName: '主子表(STA)',
    name: '主子表(STA)',
    description: '主子表(STA)',
    tags: '业务页面',
    icon: 'fa fa-columns',
    id: 'template_mst_sta',
    scaffold: {
      type: 'page',
      body: [
        {
          type: 'crud',
          api: {
            method: 'get',
            url: '/admin-api/infra/demo03-student/page?pageNo=1&pageSize=10',
            headers: '',
            adaptor:
              'if (!payload.data.list) {\r\n  payload.data.list = []\r\n}\r\nreturn {\r\n  ...payload,\r\n}'
          },
          deferApi: '',
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
                          headers: ''
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
                              {label: '男', value: '1'},
                              {label: '女', value: '2'}
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
                            type: 'service',
                            api: {
                              method: 'get',
                              url: '/admin-api/infra/demo03-student/demo03-grade/get-by-student-id?studentId=$id',
                              headers: '',
                              adaptor:
                                'if (payload.code == 0) {\r\n    return {\r\n        ...payload,\r\n        data: {\r\n            demo03Grade: {\r\n                ...payload.data\r\n            }\r\n        }\r\n    }\r\n}\r\nreturn {\r\n    ...payload\r\n}'
                            },
                            body: {
                              type: 'combo',
                              label: '学生班级',
                              require: true,
                              name: 'demo03Grade',
                              items: [
                                {
                                  type: 'input-text',
                                  label: '名字',
                                  name: 'name',
                                  value: '',
                                  id: 'u:d51b8a6e1f9f',
                                  placeholder: '请输入',
                                  required: true
                                },
                                {
                                  type: 'input-text',
                                  label: '班主任',
                                  name: 'teacher',
                                  value: '',
                                  id: 'u:da320a735efc',
                                  required: true,
                                  placeholder: '请输入'
                                }
                              ],
                              id: 'u:4b0f1612fb28'
                            }
                          },
                          {
                            type: 'service',
                            api: {
                              method: 'get',
                              url: '/admin-api/infra/demo03-student/demo03-course/list-by-student-id?studentId=$id',
                              headers: '',
                              adaptor:
                                'if (payload.code == 0) {\r\n    return {\r\n        ...payload,\r\n        data: {\r\n            demo03Courses: payload.data\r\n        }\r\n    }\r\n} else {\r\n    return payload\r\n}'
                            },
                            body: [
                              {
                                label: '学生课程',
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
                        id: 'u:58c8732187fd',
                        actions: [{type: 'submit', label: '提交', primary: true}],
                        feat: 'Insert'
                      }
                    ],
                    id: 'u:fde1e58a17bf',
                    actions: [
                      {type: 'button', actionType: 'cancel', label: '取消', id: 'u:e591d58ab822'},
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
                    headers: ''
                  },
                  id: 'u:8cca9431be2e',
                  themeCss: {className: {'font:default': {color: 'var(--colors-error-5)'}}}
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
                        headers: ''
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
                      headers: ''
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
                          {label: '男', value: '1'},
                          {label: '女', value: '2'}
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
                        type: 'combo',
                        name: 'demo03Grade',
                        label: '学生班级',
                        required: true,
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
                      },
                      {
                        type: 'input-table',
                        name: 'demo03Courses',
                        addable: true,
                        label: '学生课程',
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
                    id: 'u:fb2d57e7950e',
                    actions: [{type: 'submit', label: '提交', primary: true}],
                    feat: 'Insert'
                  }
                ],
                id: 'u:092efc66837f',
                actions: [
                  {type: 'button', actionType: 'cancel', label: '取消', id: 'u:3c9b1dcc0bb8'},
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
                    {type: 'reset', label: '重置', id: 'u:28af56966419', size: 'sm'}
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
                              {label: '男', value: '1'},
                              {label: '女', value: '2'}
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
              {type: 'submit', label: '搜索', primary: true, id: 'u:aac6fa5bbd97'},
              {type: 'reset', label: '重置', primary: true, id: 'u:e239f5ab200b', level: 'default'}
            ],
            feat: 'Insert',
            wrapWithPanel: false
          },
          filterTogglable: true,
          pageField: 'pageNo',
          perPageField: 'pageSize',
          syncResponse2Query: false,
          bodyClassName: 'p-r p-l',
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
          'border-bottom': '2px solid #f7f7f9'
        },
        '.collapse_content': {padding: '20px'},
        '.collapse_body': {'border-bottom': '10px solid #F4F5F7'}
      }
    }
  }
];
