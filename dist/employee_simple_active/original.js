{
  "path": "/employee/simple/active",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "姓名",
            "enum": []
          },
          {
            "type": "string",
            "name": "emNo",
            "description": "员工编号",
            "enum": []
          },
          {
            "type": "string",
            "name": "accountActivationStatus",
            "description": "账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}",
            "enum": []
          }
        ]
      },
      "summary": "有效用户列表-simple",
      "consumes": [
        "application/json"
      ],
      "operationId": "findSimpleOfActiveUsingGET",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of用户信息-VO"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
}