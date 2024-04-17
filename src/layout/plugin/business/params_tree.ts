import {headers} from './params';

export const demoDefaultBody_TREE = [
  {
    type: 'crud',
    api: {
      method: 'get',
      url: '/apiAmis/admin-api/infra/demo02-category/list?pageNo=1&pageSize=10',
      headers
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
        id: 'u:0fbcba633fae',
        placeholder: '-'
      },
      {
        name: 'name',
        label: '名字',
        sortable: true,
        searchable: true,
        type: 'text',
        toggled: true,
        id: 'u:f5ae9f30aa98',
        placeholder: '-'
      },
      {
        name: 'createTime',
        label: '创建时间',
        sortable: true,
        type: 'text',
        toggled: true,
        id: 'u:aeff54d19d2c',
        placeholder: '-'
      },
      {
        type: 'operation',
        label: '操作',
        width: 100,
        buttons: [
          {
            type: 'button',
            icon: 'fa fa-pencil',
            actionType: 'dialog',
            dialog: {
              type: 'dialog',
              title: '新增',
              body: [
                {
                  type: 'form',
                  api: {
                    method: 'put',
                    url: '/apiAmis/admin-api/infra/demo02-category/update', // 修改接口
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
                        url: '/apiAmis/admin-api/infra/demo02-category/list',
                        method: 'get',
                        headers
                      },
                      showIcon: false,
                      options: []
                    }
                  ],
                  id: 'u:6f8bf2172553'
                }
              ],
              id: 'u:517ec5106224'
            },
            id: 'u:8ff22d526935'
          },
          {
            type: 'button',
            icon: 'fa fa-times text-danger',
            actionType: 'ajax',
            confirmText: '您确认要删除?',
            api: {
              method: 'delete',
              url: '/apiAmis/admin-api/infra/demo02-category/delete?id=$id',
              headers
            },
            id: 'u:45a0a1848451'
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
                url: '/apiAmis/admin-api/infra/demo02-category/create', // 新增接口
                headers
              },
              body: [
                {
                  type: 'input-text',
                  name: 'name',
                  label: '名字',
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
                    url: '/apiAmis/admin-api/infra/demo02-category/list',
                    method: 'get',
                    headers
                  },
                  showIcon: false,
                  options: []
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
        actionType: 'dialog',
        level: 'success',
        dialog: {
          type: 'dialog',
          title: '新增',
          body: [
            {
              type: 'form',
              api: {
                method: 'post',
                url: '/apiAmis/admin-api/infra/dynamic/create/1',
                headers
              },
              body: [
                {
                  type: 'input-text',
                  name: 'id',
                  label: '岗位编号',
                  id: 'u:ea1ac138c95c'
                },
                {
                  type: 'input-text',
                  name: 'name',
                  label: '岗位名称',
                  id: 'u:07709ef1d0c9'
                },
                {
                  type: 'input-text',
                  name: 'code',
                  label: '岗位编码',
                  id: 'u:746c5d648611'
                },
                {
                  type: 'input-text',
                  name: 'sort',
                  label: '岗位顺序',
                  id: 'u:6a7b006257f3'
                },
                {
                  type: 'input-text',
                  name: 'remark',
                  label: '岗位备注',
                  id: 'u:799610a0849f'
                },
                {
                  type: 'select',
                  name: 'status',
                  label: '状态',
                  id: 'u:e22112d1267d',
                  multiple: false,
                  options: [
                    {
                      label: 'A',
                      value: '0'
                    },
                    {
                      label: 'B',
                      value: '1'
                    }
                  ]
                }
              ],
              id: 'u:d6b65df1295a'
            }
          ],
          id: 'u:dc17266e9a67'
        },
        id: 'u:b36b802a5777'
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
                  name: 'date-range',
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

export const demoDefaultPage_TREE = {
  type: 'page',
  body: demoDefaultBody_TREE,
  id: 'u:560eb8d924eb',
  regions: ['body']
};
