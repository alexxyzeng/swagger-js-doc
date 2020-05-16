{
  "path": "/inspect-plan/site",
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
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检计划-点位-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_24",
      "tags": [
        "inspect-plan"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "jobId": {
              "type": "number",
              "description": "点位工作任务ID",
              "required": false,
              "enum": []
            },
            "planId": {
              "type": "number",
              "description": "计划ID",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "siteId": {
              "type": "number",
              "description": "点位ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检计划-点位",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_17",
      "tags": [
        "inspect-plan"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "idx",
            "name": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除巡检计划-点位",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_4",
      "tags": [
        "inspect-plan"
      ]
    }
  }
}