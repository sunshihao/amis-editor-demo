import {headers, base_path} from './index';

export const demoDefaultBody_MST_EMB = [
  {
    type: 'crud',
    api: {
      method: 'get',
      url:
        base_path + '/admin-api/infra/demo03-student/page?pageNo=1&pageSize=10',
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
        placeholder: '-'
      },
      {
        type: 'text',
        name: 'birthday',
        label: '出生日期',
        sortable: true,
        toggled: true,
        placeholder: '-'
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
                        url:
                          base_path + '/admin-api/infra/demo02-category/list',
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
              url: base_path + '/admin-api/infra/demo02-category/delete?id=$id',
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
        size: 'md',
        dialog: {
          type: 'dialog',
          title: '新增',
          body: [
            {
              type: 'form',
              api: {
                method: 'post',
                url: base_path + '/admin-api/infra/demo02-category/create',
                headers: {
                  Authorization: 'Bearer 2611c2f925244425ab64654ef40d724a',
                  SSSH: 'sssh'
                }
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
                  name: 'radios',
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
                  name: 'birshday',
                  id: 'u:755ef0589ead',
                  required: true
                },
                {
                  type: 'input-rich-text',
                  label: '简介',
                  name: 'rich-text',
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
                          type: 'table',
                          columns: [
                            {
                              label: '序号',
                              name: 'id',
                              type: 'text',
                              id: 'u:06b0f8e786a9'
                            },
                            {
                              type: 'text',
                              label: '名字',
                              name: 'name',
                              id: 'u:b3281c16b3df'
                            },
                            {
                              type: 'text',
                              label: '分数',
                              name: 'number',
                              id: 'u:9aa81594fce2'
                            },
                            {
                              type: 'operation',
                              label: '操作',
                              id: 'u:1a5b4bc5e5be'
                            }
                          ],
                          id: 'u:468a0ec1cc99',
                          footer: [],
                          columnsTogglable: 'auto'
                        },
                        {
                          type: 'grid',
                          columns: [
                            {
                              body: [
                                {
                                  type: 'button',
                                  label: '添加学生课程',
                                  onEvent: {
                                    click: {
                                      actions: []
                                    }
                                  },
                                  id: 'u:cd12617142f3',
                                  size: 'sm'
                                }
                              ],
                              id: 'u:955e1ad675be',
                              md: 'auto',
                              valign: 'middle'
                            }
                          ],
                          id: 'u:3c6c0318577d',
                          align: 'center'
                        }
                      ],
                      id: 'u:e4cd9b76a7a6'
                    },
                    {
                      title: '学生班级',
                      body: [
                        {
                          type: 'input-text',
                          label: '名字',
                          name: 'text',
                          id: 'u:9a1e79da8edb',
                          placeholder: '请输入',
                          required: true
                        },
                        {
                          type: 'input-text',
                          label: '班主任',
                          name: 'text',
                          id: 'u:e9ebda3d55d2',
                          required: true,
                          placeholder: '请输入'
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
                url: base_path + '/admin-api/infra/dynamic/create/1',
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

export const demoDefaultPage_MST_EMB = {
  type: 'page',
  body: demoDefaultBody_MST_EMB,
  id: 'u:560eb8d924eb',
  regions: ['body']
};
