// 默认原始页面
const schema = {
  type: 'page',
  title: 'Simple Form Page',
  regions: ['body'],
  body: [
    {
      type: 'form',
      body: [
        {
          type: 'input-text',
          name: 'a',
          label: 'Text'
        }
      ]
    }
  ]
};

const schemas = [
  {
    type: 'object',
    properties: {
      'amisUser': {
        type: 'object',
        title: '用户信息',
        properties: {
          id: {
            type: 'string',
            title: '用户ID'
          },
          name: {
            type: 'string',
            title: '用户名'
          },
          email: {
            type: 'string',
            title: '邮箱'
          },
          nickName: {
            type: 'string',
            title: '昵称'
          },
          phone: {
            type: 'string',
            title: '手机号'
          },
          avatar: {
            type: 'string',
            title: '用户头像'
          }
        }
      },
      'amisApp': {
        type: 'object',
        title: '应用信息',
        properties: {
          id: {
            type: 'string',
            title: '应用ID'
          },
          name: {
            type: 'string',
            title: '应用名称'
          },
          logo: {
            type: 'string',
            title: '应用Logo'
          },
          env: {
            type: 'string',
            title: '当前运行环境'
          }
        }
      },
      'amisCompany': {
        type: 'object',
        title: '组织信息',
        properties: {
          id: {
            type: 'string',
            title: '组织ID'
          },
          name: {
            type: 'string',
            title: '组织名称'
          },
          logo: {
            type: 'string',
            title: '组织Logo'
          },
          key: {
            type: 'string',
            title: '组织标识'
          }
        }
      },
      'window:location': {
        type: 'object',
        title: '浏览器变量',
        properties: {
          href: {
            type: 'string',
            title: 'href'
          },
          origin: {
            type: 'string',
            title: 'origin'
          },
          protocol: {
            type: 'string',
            title: 'protocol'
          },
          host: {
            type: 'string',
            title: 'host'
          },
          hostname: {
            type: 'string',
            title: 'hostname'
          },
          port: {
            type: 'string',
            title: 'port'
          },
          pathname: {
            type: 'string',
            title: 'pathname'
          },
          search: {
            type: 'string',
            title: 'search'
          },
          hash: {
            type: 'string',
            title: 'hash'
          }
        }
      }
    }
  },
  {
    type: 'object',
    properties: {
      __query: {
        title: '页面入参',
        type: 'object',
        required: [],
        properties: {
          name: {
            type: 'string',
            title: '用户名'
          }
        }
      },
      __page: {
        title: '页面变量',
        type: 'object',
        required: [],
        properties: {
          num: {
            type: 'number',
            title: '数量'
          }
        }
      }
    }
  }
];

const variableSchemas = {
  type: 'object',
  $id: 'appVariables',
  properties: {
    ProductName: {
      type: 'string',
      title: '产品名称',
      default: '对象存储'
    },
    Banlance: {
      type: 'number',
      title: '账户余额',
      default: '0.00'
    },
    ProductNum: {
      type: 'integer',
      title: '产品数量',
      default: '0.00'
    },
    isOnline: {
      type: 'boolean',
      title: '是否线上环境',
      default: 'false'
    },
    ProductList: {
      type: 'array',
      items: {
        type: 'string',
        title: '产品名称'
      },
      title: '产品列表',
      default: '["BOS", "CFS", "PFS", "CloudFlow", "MongoDB"]'
    },
    PROFILE: {
      type: 'object',
      title: '个人信息',
      properties: {
        FirstName: {
          type: 'string',
          title: '名字'
        },
        Age: {
          type: 'integer',
          title: '年龄'
        },
        Address: {
          type: 'object',
          title: '地址',
          required: ['street', 'postcode'],
          properties: {
            street: {
              type: 'string',
              title: '街道名称'
            },
            postcode: {
              type: 'number',
              title: '邮编'
            }
          }
        }
      }
    }
  },
  default: {
    ProductName: 'BCC',
    Banlance: 1234.888,
    ProductNum: 10,
    isOnline: false,
    ProductList: ['BCC', 'BOS', 'VPC'],
    PROFILE: {
      FirstName: 'Amis',
      Age: 18,
      Address: {
        street: 'ShangDi',
        postcode: 100001
      }
    }
  }
};

const variableDefaultData = {
  appVariables: {
    ProductName: 'BCC',
    Banlance: 1234.888,
    ProductNum: 10,
    isOnline: false,
    ProductList: ['BCC', 'BOS', 'VPC'],
    PROFILE: {
      FirstName: 'Amis',
      Age: 18,
      Address: {
        street: 'ShangDi',
        postcode: 100001
      }
    }
  }
};

export {schema, schemas, variableSchemas, variableDefaultData};
