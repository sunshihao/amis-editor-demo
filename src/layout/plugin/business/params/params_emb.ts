import {headers, base_path} from './index';

export const demoDefaultBody_MST_EMB = [
  {
    type: 'crud',
    api: {
      method: 'get',
      url: base_path + '/admin-api/infra/demo03-student/page?pageNo=1&pageSize=10',
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
        name: 'sex',
        label: '性别',
        sortable: true,
        toggled: true,
        id: 'u:178b8eeeb864',
        placeholder: '-',
        tpl: "${IF(sex == '1', '男', '女')}"
      },
      {
        type: 'text',
        name: 'birthday',
        label: '出生日期',
        sortable: true,
        toggled: true,
        placeholder: '-',
        tpl: "${DATETOSTR(createTime,'YYYY-MM-DD hh:mm:ss')}"
      },
      {
        type: 'text',
        name: 'description',
        label: '简介',
        sortable: true,
        toggled: true,
        placeholder: '-'
      },
      {
        name: 'createTime',
        label: '创建时间',
        sortable: true,
        type: 'text',
        toggled: true,
        id: 'u:aeff54d19d2c',
        placeholder: '-',
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
                    url: base_path + '/admin-api/infra/demo03-student/create',
                    headers
                  },
                  body: [
                    {
                      type: 'input-text',
                      name: 'name',
                      label: '名字',
                      id: 'u:0a765e089985',
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
                      id: 'u:8b0950251b17',
                      required: true
                    },
                    {
                      type: 'input-date',
                      label: '出生日期',
                      name: 'birthday',
                      id: 'u:755ef0589ead',
                      required: true,
                      valueFormat: 'x'
                    },
                    {
                      type: 'input-rich-text',
                      label: '简介',
                      name: 'description',
                      vendor: 'tinymce',
                      id: 'u:1796c6b905ad',
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
                                url:
                                  base_path +
                                  '/admin-api/infra/demo03-student/demo03-course/list-by-student-id?studentId=$id',
                                headers,
                                "adaptor": "if (payload.code == 0) {\r\n    return {\r\n        ...payload,\r\n        data: {\r\n            demo03Courses: payload.data\r\n        }\r\n    }\r\n} else {\r\n    return payload\r\n}",
                              },
                              body: [
                                {
                                  type: 'input-table',
                                  name: 'demo03Courses',
                                  addable: true,
                                  showIndex: true,
                                  editable: true,
                                  id: 'table_course',
                                  value: "$demo03Courses",
                                  columns: [
                                    {
                                      type: 'input-text',
                                      label: '名字',
                                      name: 'name',
                                      id: 'u:c93cbd62cfb7',
                                      required: true
                                    },
                                    {
                                      type: 'input-text',
                                      label: '分数',
                                      name: 'score',
                                      id: 'u:be791df2a2e3',
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
                                url:
                                  base_path +
                                  '/admin-api/infra/demo03-student/demo03-grade/get-by-student-id?studentId=$id',
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
                                    id: 'u:5204011ac95a',
                                    placeholder: '请输入',
                                    required: true
                                  },
                                  {
                                    type: 'input-text',
                                    label: '班主任',
                                    name: 'teacher',
                                    value: '${demo03Grade.teacher}',
                                    id: 'u:299efd720b52',
                                    required: true,
                                    placeholder: '请输入'
                                  }
                                ],
                                id: 'u:b58304935519'
                              }
                            }
                          ],
                          id: 'u:8c8fcb60e883'
                        }
                      ],
                      mountOnEnter: true,
                      id: 'u:314c3385bcab'
                    }
                  ],
                  id: 'u:b12c9b0c40f3',
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
              id: 'u:1db3944a0b57',
              actions: [
                {
                  type: 'button',
                  actionType: 'cancel',
                  label: '取消',
                  id: 'u:22b785db415c'
                },
                {
                  type: 'button',
                  actionType: 'confirm',
                  label: '确定',
                  primary: true,
                  id: 'u:b1aa2440a175'
                }
              ]
            },
            id: 'u:8ff22d526935'
          },
          {
            type: 'button',
            actionType: 'ajax',
            label: '删除',
            level: 'link',
            confirmText: '您确认要删除?',
            api: {
              method: 'delete',
              url: base_path + '/admin-api/infra/demo03-student/delete?id=$id',
              headers
            },
            id: 'u:45a0a1848451',
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
          size: 'md',
          title: '新增',
          body: [
            {
              type: 'form',
              api: {
                method: 'post',
                url: base_path + '/admin-api/infra/demo03-student/create',
                headers
              },
              body: [
                {
                  type: 'input-text',
                  name: 'name',
                  label: '名字',
                  id: 'u:0a765e089985',
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
                  id: 'u:8b0950251b17',
                  required: true
                },
                {
                  type: 'input-date',
                  label: '出生日期',
                  name: 'birthday',
                  id: 'u:755ef0589ead',
                  required: true,
                  valueFormat: 'x'
                },
                {
                  type: 'input-rich-text',
                  label: '简介',
                  name: 'description',
                  vendor: 'tinymce',
                  id: 'u:1796c6b905ad',
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
                              id: 'u:c93cbd62cfb7',
                              required: true
                            },
                            {
                              type: 'input-text',
                              label: '分数',
                              name: 'score',
                              id: 'u:be791df2a2e3',
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
                              id: 'u:5204011ac95a',
                              placeholder: '请输入',
                              required: true
                            },
                            {
                              type: 'input-text',
                              label: '班主任',
                              name: 'teacher',
                              id: 'u:299efd720b52',
                              required: true,
                              placeholder: '请输入'
                            }
                          ],
                          id: 'u:b58304935519'
                        }
                      ],
                      id: 'u:8c8fcb60e883'
                    }
                  ],
                  mountOnEnter: true,
                  id: 'u:314c3385bcab'
                }
              ],
              id: 'u:b12c9b0c40f3',
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
          id: 'u:1db3944a0b57',
          actions: [
            {
              type: 'button',
              actionType: 'cancel',
              label: '取消',
              id: 'u:22b785db415c'
            },
            {
              type: 'button',
              actionType: 'confirm',
              label: '确定',
              primary: true,
              id: 'u:b1aa2440a175'
            }
          ]
        },
        id: 'u:9737be67a7d1'
      },
      {
        label: '导出',
        type: 'button',
        level: 'success',
        id: 'u:b36b802a5777',
        confirmText: '是否确认导出数据项？',
        onEvent: {
          click: {
            weight: 0,
            actions: [
              {
                ignoreError: false,
                outputVar: 'responseResult',
                actionType: 'ajax',
                api: {
                  url: base_path + '/admin-api/infra/demo03-student/export-excel?pageNo=1',
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
                  id: 'u:bae66db897f1',
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


export const demoDefaultPage_MST_EMB = {
  type: 'page',
  body: demoDefaultBody_MST_EMB,
  id: 'u:560eb8d924eb',
  regions: ['body']
};
