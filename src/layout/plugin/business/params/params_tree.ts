// TODO 改动为接口请求 本地性调试,已弃用
import {headers, base_path} from './index';

export const demoDefaultBody_TREE = [
  {
    type: 'crud',
    api: {
      method: 'get',
      url: base_path + '/admin-api/infra/demo02-category/list?pageNo=1&pageSize=10',
      headers,
      adaptor:
        "const handleTree = (data, id, parentId, children) => {\r\n    if (!Array.isArray(data)) {\r\n        console.warn('data must be an array')\r\n        return []\r\n    }\r\n    const config = {\r\n        id: id || 'id',\r\n        parentId: parentId || 'parentId',\r\n        childrenList: children || 'children'\r\n    }\r\n    const childrenListMap = {}\r\n    const nodeIds = {}\r\n    const tree = []\r\n    for (const d of data) {\r\n        const parentId = d[config.parentId]\r\n        if (childrenListMap[parentId] == null) {\r\n            childrenListMap[parentId] = []\r\n        }\r\n        nodeIds[d[config.id]] = d\r\n        childrenListMap[parentId].push(d)\r\n    }\r\n    for (const d of data) {\r\n        const parentId = d[config.parentId]\r\n        if (nodeIds[parentId] == null) {\r\n            tree.push(d)\r\n        }\r\n    }\r\n    for (const t of tree) {\r\n        adaptToChildrenList(t)\r\n    }\r\n    function adaptToChildrenList(o) {\r\n        if (childrenListMap[o[config.id]] !== null) {\r\n            o[config.childrenList] = childrenListMap[o[config.id]]\r\n        }\r\n        if (o[config.childrenList]) {\r\n            for (const c of o[config.childrenList]) {\r\n                adaptToChildrenList(c)\r\n            }\r\n        }\r\n    }\r\n    return tree\r\n}\r\nreturn {\r\n    ...payload,\r\n    data: payload.data ? handleTree(payload.data, 'id', 'parentId', 'children') : (payload.data || [] )\r\n}"
    },
    deferApi: '/amis/api/mock2/crud/table6?parentId=${id}',
    // draggable: true,
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
                    url: base_path + '/admin-api/infra/demo02-category/update', // 修改接口
                    headers
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
                        url: base_path + '/admin-api/infra/demo02-category/list',
                        method: 'get',
                        headers,
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
              url: base_path + '/admin-api/infra/demo02-category/delete?id=$id',
              headers
            },
            id: 'u:45a0a1848451',
            label: '删除',
            level: 'link',
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
                url: base_path + '/admin-api/infra/demo02-category/create', // 新增接口
                headers
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
                    url: base_path + '/admin-api/infra/demo02-category/list',
                    method: 'get',
                    headers,
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
                  url: base_path + '/admin-api/infra/demo02-category/export-excel?pageNo=1',
                  method: 'get',
                  headers
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
        {
          type: 'submit',
          label: '搜索',
          primary: true,
          id: 'u:2256c9c6500c'
        },
        {
          type: 'reset',
          label: '重置',
          primary: true,
          id: 'u:a228e48898c9',
          level: 'default'
        }
      ],
      feat: 'Insert'
    },
    filterTogglable: true,
    pageField: 'pageNo',
    perPageField: 'pageSize',
    syncResponse2Query: false,
    id: 'u:ee9b84d989a0'
  }
];

console.log(JSON.stringify(demoDefaultBody_TREE))

export const demoDefaultPage_TREE = {
  type: 'page',
  body: demoDefaultBody_TREE,
  id: 'u:560eb8d924eb',
  regions: ['body']
};
