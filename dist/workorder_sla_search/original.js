{
  "path": "/workorder/sla/search",
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
            "name": "serviceTypePathName",
            "description": "服务类型全称",
            "enum": []
          },
          {
            "type": "string",
            "name": "spaceWholeName",
            "description": "位置名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "orgDepartmentName",
            "description": "部门名称",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
            "name": "woType"
          },
          {
            "type": "string",
            "name": "priorityNames",
            "description": "优先级名称",
            "enum": []
          }
        ]
      },
      "summary": "查询sla列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_54",
      "tags": [
        "workorder-sla"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of工单-sla列表-响应"
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