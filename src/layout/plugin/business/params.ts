export const headers = {
  Authorization: 'Bearer 2611c2f925244425ab64654ef40d724a',
  SSSH: 'sssh'
};

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
          url: '/apiAmis/admin-api/infra/sys/lov-header/page?pageNo=1&pageSize=10',
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
                    url: '/apiAmis/admin-api/infra/dynamic/create/1',
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

export const demoDefaultBody_CRUD = [
  {
    type: 'page',
    body: [
      {
        type: 'crud',
        id: 'u:8d0f86a226b5',
        syncLocation: false,
        api: {
          method: 'get',
          url: '/apiAmis/admin-api/infra/sys/lov-header/page?pageNo=1&pageSize=10',
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
                    url: '/apiAmis/admin-api/infra/dynamic/create/1',
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



export const demoDefaultBody_MST_STA = [
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
            actionType: 'drawer',
            drawer: {
              position: 'left',
              size: 'lg',
              title: '编辑',
              body: {
                type: 'form',
                name: 'sample-edit-form',
                api: '/amis/api/sample/$id',
                body: [
                  {
                    type: 'input-text',
                    name: 'engine',
                    label: 'Engine',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'browser',
                    label: 'Browser',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'platform',
                    label: 'Platform(s)',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'version',
                    label: 'Engine version'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'select',
                    name: 'grade',
                    label: 'CSS grade',
                    options: ['A', 'B', 'C', 'D', 'X']
                  }
                ]
              }
            },
            id: 'u:8ff22d526935'
          },
          {
            type: 'button',
            icon: 'fa fa-times text-danger',
            actionType: 'ajax',
            confirmText: '您确认要删除?',
            api: 'delete:/amis/api/sample/$id',
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
                url: '/apiAmis/admin-api/infra/dynamic/create/1',
                headers
              },
              body: [
                {
                  type: 'input-text',
                  name: 'id',
                  label: '岗位编号',
                  id: 'u:b4dad0d17e42'
                },
                {
                  type: 'input-text',
                  name: 'name',
                  label: '岗位名称',
                  id: 'u:c6f46b470ee9'
                },
                {
                  type: 'input-text',
                  name: 'code',
                  label: '岗位编码',
                  id: 'u:61e7352285ef'
                },
                {
                  type: 'input-text',
                  name: 'sort',
                  label: '岗位顺序',
                  id: 'u:657d068e6659'
                },
                {
                  type: 'input-text',
                  name: 'remark',
                  label: '岗位备注',
                  id: 'u:2196e52c6e8a'
                },
                {
                  type: 'select',
                  name: 'status',
                  label: '状态',
                  id: 'u:4cd1616eb8df',
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
              id: 'u:a764f621a01f'
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

export const demoDefaultBody_MST_EMB = [
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
            actionType: 'drawer',
            drawer: {
              position: 'left',
              size: 'lg',
              title: '编辑',
              body: {
                type: 'form',
                name: 'sample-edit-form',
                api: '/amis/api/sample/$id',
                body: [
                  {
                    type: 'input-text',
                    name: 'engine',
                    label: 'Engine',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'browser',
                    label: 'Browser',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'platform',
                    label: 'Platform(s)',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'version',
                    label: 'Engine version'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'select',
                    name: 'grade',
                    label: 'CSS grade',
                    options: ['A', 'B', 'C', 'D', 'X']
                  }
                ]
              }
            },
            id: 'u:8ff22d526935'
          },
          {
            type: 'button',
            icon: 'fa fa-times text-danger',
            actionType: 'ajax',
            confirmText: '您确认要删除?',
            api: 'delete:/amis/api/sample/$id',
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
                url: '/apiAmis/admin-api/infra/dynamic/create/1',
                headers
              },
              body: [
                {
                  type: 'input-text',
                  name: 'id',
                  label: '岗位编号',
                  id: 'u:b4dad0d17e42'
                },
                {
                  type: 'input-text',
                  name: 'name',
                  label: '岗位名称',
                  id: 'u:c6f46b470ee9'
                },
                {
                  type: 'input-text',
                  name: 'code',
                  label: '岗位编码',
                  id: 'u:61e7352285ef'
                },
                {
                  type: 'input-text',
                  name: 'sort',
                  label: '岗位顺序',
                  id: 'u:657d068e6659'
                },
                {
                  type: 'input-text',
                  name: 'remark',
                  label: '岗位备注',
                  id: 'u:2196e52c6e8a'
                },
                {
                  type: 'select',
                  name: 'status',
                  label: '状态',
                  id: 'u:4cd1616eb8df',
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
              id: 'u:a764f621a01f'
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
                  size: 'md'
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

export const demoDefaultBody_MST_ERP = [
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
            actionType: 'drawer',
            drawer: {
              position: 'left',
              size: 'lg',
              title: '编辑',
              body: {
                type: 'form',
                name: 'sample-edit-form',
                api: '/amis/api/sample/$id',
                body: [
                  {
                    type: 'input-text',
                    name: 'engine',
                    label: 'Engine',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'browser',
                    label: 'Browser',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'platform',
                    label: 'Platform(s)',
                    required: true
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'input-text',
                    name: 'version',
                    label: 'Engine version'
                  },
                  {
                    type: 'divider'
                  },
                  {
                    type: 'select',
                    name: 'grade',
                    label: 'CSS grade',
                    options: ['A', 'B', 'C', 'D', 'X']
                  }
                ]
              }
            },
            id: 'u:8ff22d526935'
          },
          {
            type: 'button',
            icon: 'fa fa-times text-danger',
            actionType: 'ajax',
            confirmText: '您确认要删除?',
            api: 'delete:/amis/api/sample/$id',
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
                url: '/apiAmis/admin-api/infra/dynamic/create/1',
                headers
              },
              body: [
                {
                  type: 'input-text',
                  name: 'id',
                  label: '岗位编号',
                  id: 'u:b4dad0d17e42'
                },
                {
                  type: 'input-text',
                  name: 'name',
                  label: '岗位名称',
                  id: 'u:c6f46b470ee9'
                },
                {
                  type: 'input-text',
                  name: 'code',
                  label: '岗位编码',
                  id: 'u:61e7352285ef'
                },
                {
                  type: 'input-text',
                  name: 'sort',
                  label: '岗位顺序',
                  id: 'u:657d068e6659'
                },
                {
                  type: 'input-text',
                  name: 'remark',
                  label: '岗位备注',
                  id: 'u:2196e52c6e8a'
                },
                {
                  type: 'select',
                  name: 'status',
                  label: '状态',
                  id: 'u:4cd1616eb8df',
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
              id: 'u:a764f621a01f'
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
                  size: 'md'
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

// ------------------------------------------------------------------------------------------------------

// 默认code参数
export const demoDefaultPage = {
  type: 'page',
  body: demoDefaultBody,
  id: 'u:560eb8d924eb',
  regions: ['body']
};



export const demoDefaultPage_MST_STA = {
  type: 'page',
  body: demoDefaultBody_MST_STA,
  id: 'u:560eb8d924eb',
  regions: ['body']
};

export const demoDefaultPage_MST_EMB = {
  type: 'page',
  body: demoDefaultBody_MST_EMB,
  id: 'u:560eb8d924eb',
  regions: ['body']
};

export const demoDefaultPage_MST_ERP = {
  type: 'page',
  body: demoDefaultBody_MST_ERP,
  id: 'u:560eb8d924eb',
  regions: ['body']
};
