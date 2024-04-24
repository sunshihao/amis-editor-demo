// TODO 改动为接口请求 本地性调试,已弃用
import {headers, base_path} from './index';

export const demoDefaultBody = [
  {
    type: 'page',
    body: [
      {
        type: 'crud',
        id: 'u:8d0f86a226b5',
        syncLocation: false,
        api: {
          method: 'get',
          url:
            base_path +
            '/admin-api/infra/sys/lov-header/page?pageNo=1&pageSize=10',
          headers
        },
        columns: [
          {
            name: 'lovCode',
            label: '编码',
            type: 'text',
            id: 'u:e39ac4bc31e1',
            placeholder: '-',
            sortable: false
          },
          {
            name: 'lovName',
            label: '名称',
            type: 'text',
            id: 'u:a38fbb229d3a',
            placeholder: '-'
          },
          {
            type: 'text',
            label: '描述',
            name: 'lovDesc',
            id: 'u:feb1bb7a295c',
            placeholder: '-',
            sortable: true,
            copyable: false
          },
          {
            type: 'text',
            label: '分类',
            name: 'lovCategoryId',
            id: 'u:8f1db8810377',
            placeholder: '-'
          },
          {
            type: 'text',
            label: '类型',
            name: 'lovTypeId',
            id: 'u:3f66453900cb',
            placeholder: '-',
            copyable: false
          },
          {
            type: 'operation',
            label: '操作',
            buttons: [
              {
                label: '编辑',
                type: 'button',
                actionType: 'dialog',
                level: 'link',
                dialog: {
                  type: 'dialog',
                  title: '编辑',
                  body: [
                    {
                      type: 'form',
                      api: {
                        method: 'put',
                        url: '/infra/dynamic/update/1',
                        messages: {}
                      },
                      body: [
                        {
                          name: 'id',
                          label: '岗位编号',
                          type: 'input-text',
                          id: 'u:1b010cd05bf9',
                          readOnly: true
                        },
                        {
                          name: 'name',
                          label: '岗位名称',
                          type: 'input-text',
                          id: 'u:3a030334f23c'
                        },
                        {
                          label: '岗位编码',
                          name: 'code',
                          type: 'input-text',
                          id: 'u:0e7a8a0bd7e9'
                        },
                        {
                          label: '岗位顺序',
                          name: 'sort',
                          type: 'input-text',
                          id: 'u:ed2adea2dc64'
                        },
                        {
                          label: '岗位备注',
                          name: 'remark',
                          type: 'input-text',
                          id: 'u:336f818790d3'
                        },
                        {
                          label: '状态',
                          name: 'status',
                          type: 'select',
                          id: 'u:37987ff4afdf',
                          options: [
                            {
                              label: '选项A',
                              value: 0
                            },
                            {
                              label: '选项B',
                              value: 1
                            }
                          ],
                          multiple: false,
                          value: ''
                        }
                      ],
                      id: 'u:2d96c33012a3'
                    }
                  ],
                  id: 'u:074bc8687a32'
                },
                id: 'u:7be2140e75a0'
              },
              {
                type: 'button',
                label: '删除',
                actionType: 'ajax',
                level: 'link',
                className: 'text-danger',
                confirmText: '确定要删除${name}？',
                api: {
                  method: 'delete',
                  url: '/infra/dynamic/delete/1/',
                  data: '${id}'
                },
                id: 'u:f9b9a0e4e4a0',
                reload: ''
              }
            ],
            id: 'u:747e0ac45364'
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
                    url: base_path + '/admin-api/infra/dynamic/create/1',
                    headers
                  },
                  body: [
                    {
                      type: 'input-text',
                      name: 'id',
                      label: '岗位编号',
                      id: 'u:3e4b99c41ce2'
                    },
                    {
                      type: 'input-text',
                      name: 'name',
                      label: '岗位名称',
                      id: 'u:89d7b9deff71'
                    },
                    {
                      type: 'input-text',
                      name: 'code',
                      label: '岗位编码',
                      id: 'u:9ee9db860b27'
                    },
                    {
                      type: 'input-text',
                      name: 'sort',
                      label: '岗位顺序',
                      id: 'u:9d719cb7e958'
                    },
                    {
                      type: 'input-text',
                      name: 'remark',
                      label: '岗位备注',
                      id: 'u:92743e4d43b6'
                    },
                    {
                      type: 'select',
                      name: 'status',
                      label: '状态',
                      id: 'u:bbbdbeabd1b5',
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
                  id: 'u:8a3bff62b41b'
                }
              ],
              id: 'u:66c857549d94'
            },
            id: 'u:55fade2cf7ce'
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
                      label: '编码',
                      name: 'lovCode',
                      id: 'u:6e272c43e5d1',
                      size: 'md',
                      mode: 'inline'
                    }
                  ],
                  id: 'u:840eaa455087'
                },
                {
                  id: 'u:a94fe152fcbf',
                  body: [
                    {
                      type: 'select',
                      label: '分类',
                      name: 'lovCategoryId',
                      options: [
                        {
                          label: '选项A',
                          value: '0'
                        },
                        {
                          label: '选项B',
                          value: '1'
                        }
                      ],
                      id: 'u:a2fb49dae8ea',
                      multiple: false,
                      clearable: true,
                      className: '',
                      size: 'md',
                      mode: 'inline'
                    }
                  ]
                }
              ],
              id: 'u:20867a58d188'
            }
          ],
          id: 'u:9caf0fcb0dc6',
          preventEnterSubmit: true,
          actions: [
            {
              type: 'submit',
              label: '搜索',
              primary: true,
              id: 'u:fb462fb84074'
            }
          ],
          feat: 'Insert'
        },
        filterTogglable: true,
        pageField: 'pageNo',
        perPageField: 'pageSize',
        syncResponse2Query: false,
        draggable: true
      }
    ],
    id: 'u:a687240669c4',
    regions: ['body']
  }
];