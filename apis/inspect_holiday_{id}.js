{
  "path": "/inspect/holiday/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "巡检节假日-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_12",
      "tags": [
        "inspect"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "endDate": {
              "type": "string",
              "description": "结束日期",
              "enum": []
            },
            "isWorkday": {
              "type": "number",
              "description": "是否工作日",
              "required": false,
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "名称",
              "enum": []
            },
            "startDate": {
              "type": "string",
              "description": "开始日期",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改巡检节假日-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_20",
      "tags": [
        "inspect"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除巡检节假日",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_17",
      "tags": [
        "inspect"
      ]
    }
  }
}