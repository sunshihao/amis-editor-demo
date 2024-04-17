// 默认code参数
export const demoDefaultPage = {
  type: 'page',
  body: [
    {
      type: 'crud',
      id: 'u:b177ad503333',
      syncLocation: false,
      api: {
        method: 'post',
        url: '/apiAmis/admin-api/infra/dynamic/page/1',
        header: {
          Authorization: 'Bearer 4cf05561858440e7a99f8a24a47d7c3b'
        }
      },
      columns: [
        {
          name: 'id',
          label: '岗位编号',
          type: 'text',
          id: 'u:9ca787fe78b9',
          placeholder: '-',
          sortable: false
        },
        {
          name: 'name',
          label: '岗位名称',
          type: 'text',
          id: 'u:a2420766f453'
        },
        {
          type: 'text',
          label: '岗位编码',
          name: 'code',
          id: 'u:f486f1dfc9bb',
          placeholder: '-',
          sortable: true,
          copyable: false
        },
        {
          type: 'text',
          label: '岗位顺序',
          name: 'sort',
          id: 'u:9f074482d4ee'
        },
        {
          type: 'text',
          label: '岗位备注',
          name: 'remark',
          id: 'u:2b70a8a3b55f',
          placeholder: '-',
          copyable: false
        },
        {
          type: 'status',
          label: '状态',
          name: 'status',
          id: 'u:84f2479564c6'
        },
        {
          type: 'tpl',
          name: 'createTime',
          label: '创建时间',
          className: '',
          labelClassName: '',
          tpl: '<%formatDate(data[\'createTime\'], "YYYY-MM-DD HH:mm:ss")%>',
          id: 'u:b3aa8cc83ec7'
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
                        id: 'u:4b075e56ba3e',
                        readOnly: true
                      },
                      {
                        name: 'name',
                        label: '岗位名称',
                        type: 'input-text',
                        id: 'u:881ab8a2e8eb'
                      },
                      {
                        label: '岗位编码',
                        name: 'code',
                        type: 'input-text',
                        id: 'u:2959589a9dbc'
                      },
                      {
                        label: '岗位顺序',
                        name: 'sort',
                        type: 'input-text',
                        id: 'u:00639235b3e9'
                      },
                      {
                        label: '岗位备注',
                        name: 'remark',
                        type: 'input-text',
                        id: 'u:5f4c290b136f'
                      },
                      {
                        label: '状态',
                        name: 'status',
                        type: 'select',
                        id: 'u:f487a82f9e4c',
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
                    id: 'u:8079256a4c59'
                  }
                ],
                id: 'u:5b822c7c29af'
              },
              id: 'u:d6abc6d8a5d8'
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
              id: 'u:e33854ba9b23',
              reload: ''
            }
          ],
          id: 'u:4afc5bd50a17'
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
                  url: '/infra/dynamic/create/1'
                },
                body: [
                  {
                    type: 'input-text',
                    name: 'id',
                    label: '岗位编号',
                    id: 'u:2eccdc004130'
                  },
                  {
                    type: 'input-text',
                    name: 'name',
                    label: '岗位名称',
                    id: 'u:4ff836d6d84b'
                  },
                  {
                    type: 'input-text',
                    name: 'code',
                    label: '岗位编码',
                    id: 'u:70b9fb44a1b5'
                  },
                  {
                    type: 'input-text',
                    name: 'sort',
                    label: '岗位顺序',
                    id: 'u:781ad885af3a'
                  },
                  {
                    type: 'input-text',
                    name: 'remark',
                    label: '岗位备注',
                    id: 'u:fadcc9dd8f5b'
                  },
                  {
                    type: 'select',
                    name: 'status',
                    label: '状态',
                    id: 'u:4d1e09d7c1e5',
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
                id: 'u:2bd3a3446681'
              }
            ],
            id: 'u:4cd8aef1c434'
          },
          id: 'u:afbf53c0617f'
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
                    label: '岗位名称',
                    name: 'name',
                    id: 'u:14af6293e9b2',
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
                    label: '状态',
                    name: 'status',
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
                    id: 'u:f3131b12370a',
                    multiple: false,
                    clearable: true,
                    className: '',
                    size: 'md',
                    mode: 'inline'
                  }
                ]
              }
            ],
            id: 'u:84258f283994'
          }
        ],
        id: 'u:9caf0fcb0dc6',
        preventEnterSubmit: true
      },
      filterTogglable: true,
      pageField: 'pageNo',
      perPageField: 'pageSize',
      syncResponse2Query: false,
      draggable: true
    }
  ],
  id: 'u:560eb8d924eb',
  regions: ['body']
};

export const demoDefaultBody = [
  {
    type: 'crud',
    id: 'u:b177ad503333',
    syncLocation: false,
    api: {
      method: 'post',
      url: '/apiAmis/admin-api/infra/dynamic/page/1',
      header: {
        Authorization: 'Bearer 4cf05561858440e7a99f8a24a47d7c3b'
      }
    },
    columns: [
      {
        name: 'id',
        label: '岗位编号',
        type: 'text',
        id: 'u:9ca787fe78b9',
        placeholder: '-',
        sortable: false
      },
      {
        name: 'name',
        label: '岗位名称',
        type: 'text',
        id: 'u:a2420766f453'
      },
      {
        type: 'text',
        label: '岗位编码',
        name: 'code',
        id: 'u:f486f1dfc9bb',
        placeholder: '-',
        sortable: true,
        copyable: false
      },
      {
        type: 'text',
        label: '岗位顺序',
        name: 'sort',
        id: 'u:9f074482d4ee'
      },
      {
        type: 'text',
        label: '岗位备注',
        name: 'remark',
        id: 'u:2b70a8a3b55f',
        placeholder: '-',
        copyable: false
      },
      {
        type: 'status',
        label: '状态',
        name: 'status',
        id: 'u:84f2479564c6'
      },
      {
        type: 'tpl',
        name: 'createTime',
        label: '创建时间',
        className: '',
        labelClassName: '',
        tpl: '<%formatDate(data[\'createTime\'], "YYYY-MM-DD HH:mm:ss")%>',
        id: 'u:b3aa8cc83ec7'
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
                      id: 'u:4b075e56ba3e',
                      readOnly: true
                    },
                    {
                      name: 'name',
                      label: '岗位名称',
                      type: 'input-text',
                      id: 'u:881ab8a2e8eb'
                    },
                    {
                      label: '岗位编码',
                      name: 'code',
                      type: 'input-text',
                      id: 'u:2959589a9dbc'
                    },
                    {
                      label: '岗位顺序',
                      name: 'sort',
                      type: 'input-text',
                      id: 'u:00639235b3e9'
                    },
                    {
                      label: '岗位备注',
                      name: 'remark',
                      type: 'input-text',
                      id: 'u:5f4c290b136f'
                    },
                    {
                      label: '状态',
                      name: 'status',
                      type: 'select',
                      id: 'u:f487a82f9e4c',
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
                  id: 'u:8079256a4c59'
                }
              ],
              id: 'u:5b822c7c29af'
            },
            id: 'u:d6abc6d8a5d8'
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
            id: 'u:e33854ba9b23',
            reload: ''
          }
        ],
        id: 'u:4afc5bd50a17'
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
                url: '/infra/dynamic/create/1'
              },
              body: [
                {
                  type: 'input-text',
                  name: 'id',
                  label: '岗位编号',
                  id: 'u:2eccdc004130'
                },
                {
                  type: 'input-text',
                  name: 'name',
                  label: '岗位名称',
                  id: 'u:4ff836d6d84b'
                },
                {
                  type: 'input-text',
                  name: 'code',
                  label: '岗位编码',
                  id: 'u:70b9fb44a1b5'
                },
                {
                  type: 'input-text',
                  name: 'sort',
                  label: '岗位顺序',
                  id: 'u:781ad885af3a'
                },
                {
                  type: 'input-text',
                  name: 'remark',
                  label: '岗位备注',
                  id: 'u:fadcc9dd8f5b'
                },
                {
                  type: 'select',
                  name: 'status',
                  label: '状态',
                  id: 'u:4d1e09d7c1e5',
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
              id: 'u:2bd3a3446681'
            }
          ],
          id: 'u:4cd8aef1c434'
        },
        id: 'u:afbf53c0617f'
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
                  label: '岗位名称',
                  name: 'name',
                  id: 'u:14af6293e9b2',
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
                  label: '状态',
                  name: 'status',
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
                  id: 'u:f3131b12370a',
                  multiple: false,
                  clearable: true,
                  className: '',
                  size: 'md',
                  mode: 'inline'
                }
              ]
            }
          ],
          id: 'u:84258f283994'
        }
      ],
      id: 'u:9caf0fcb0dc6',
      preventEnterSubmit: true
    },
    filterTogglable: true,
    pageField: 'pageNo',
    perPageField: 'pageSize',
    syncResponse2Query: false,
    draggable: true
  }
];
