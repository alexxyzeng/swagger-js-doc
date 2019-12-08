{
  "path": "/role",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "由程序分配的唯一ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "租户ID，做数据隔离用",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "应用ID，做数据隔离用",
            "enum": []
          },
          {
            "type": "string",
            "description": "业务ID，做数据隔离用",
            "enum": []
          },
          {
            "type": "number",
            "description": "数据作用域：1、私有 2、应用公用 3、租户公用",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "创建时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "最后的修改时间",
            "enum": []
          },
          {
            "type": "number",
            "description": "父ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "角色编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "角色名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "角色描述",
            "enum": []
          },
          {
            "type": "number",
            "description": "状态: 0、正常；1、禁用",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "每页条数",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false
          }
        ]
      },
      "summary": "查询角色",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_5",
      "tags": [
        "base-role"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "appId": {
              "type": "string",
              "description": "应用ID，做数据隔离用",
              "enum": []
            },
            "bizId": {
              "type": "string",
              "description": "业务ID，做数据隔离用",
              "enum": []
            },
            "code": {
              "type": "string",
              "description": "角色编码",
              "enum": []
            },
            "dataScope": {
              "type": "number",
              "description": "数据作用域：1、私有 2、应用公用 3、租户公用",
              "required": false,
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "角色描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "parentId": {
              "type": "number",
              "description": "父ID",
              "required": false,
              "enum": []
            },
            "permissions": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "roleName": {
              "type": "string",
              "description": "角色名称",
              "enum": []
            },
            "status": {
              "type": "number",
              "description": "状态: 0、正常；1、禁用",
              "required": false,
              "enum": []
            },
            "tenantId": {
              "type": "number",
              "description": "租户ID，做数据隔离用",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "创建角色",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_35",
      "tags": [
        "base-role"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "appId": {
              "type": "string",
              "description": "应用ID，做数据隔离用",
              "enum": []
            },
            "bizId": {
              "type": "string",
              "description": "业务ID，做数据隔离用",
              "enum": []
            },
            "code": {
              "type": "string",
              "description": "角色编码",
              "enum": []
            },
            "dataScope": {
              "type": "number",
              "description": "数据作用域：1、私有 2、应用公用 3、租户公用",
              "required": false,
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "角色描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "parentId": {
              "type": "number",
              "description": "父ID",
              "required": false,
              "enum": []
            },
            "permissions": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "roleName": {
              "type": "string",
              "description": "角色名称",
              "enum": []
            },
            "status": {
              "type": "number",
              "description": "状态: 0、正常；1、禁用",
              "required": false,
              "enum": []
            },
            "tenantId": {
              "type": "number",
              "description": "租户ID，做数据隔离用",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "修改角色",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_45",
      "tags": [
        "base-role"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "id",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "删除角色",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_45",
      "tags": [
        "base-role"
      ]
    }
  }
}