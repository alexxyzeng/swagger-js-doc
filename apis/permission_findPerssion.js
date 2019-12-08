{
  "path": "/permission/findPerssion",
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
            "type": "number",
            "description": "父ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "分类：0：页面；1：APP",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "权限类型：0、模块；1、菜单；2：按钮；3：接口权限",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "权限编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "权限名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "描述",
            "enum": []
          },
          {
            "type": "string",
            "description": "菜单url",
            "enum": []
          },
          {
            "type": "string",
            "description": "icon",
            "enum": []
          },
          {
            "type": "number",
            "description": "排序",
            "required": false,
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
      "summary": "查询权限的基本信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchPermissionUsingGET_1",
      "tags": [
        "base-permission"
      ]
    }
  }
}