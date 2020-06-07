{
  "path": "/pm/plan/facility-type/facility",
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
            "type": "number",
            "name": "maintId",
            "description": "设置id",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "name": "planDate",
            "description": "计划日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "facilityCode",
            "description": "设备编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "facilityName",
            "description": "设备名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "facilityType",
            "description": "系统分类",
            "enum": []
          },
          {
            "type": "string",
            "name": "mountSpace",
            "description": "安装位置",
            "enum": []
          },
          {
            "type": "string",
            "name": "isMaintained",
            "description": "是否维保 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          }
        ]
      },
      "summary": "查询维保设备分类关联设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "findFacilitiesUsingGET",
      "tags": [
        "pm-plan"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of维保设置-设备分类关联设备-响应"
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