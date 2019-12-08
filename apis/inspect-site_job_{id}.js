{
  "path": "/inspect-site/job/{id}",
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
      "summary": "巡检点位-工作任务-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_18",
      "tags": [
        "inspect-site"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "intro": {
              "type": "string",
              "description": "内容介绍",
              "enum": []
            },
            "job": {
              "type": "string",
              "description": "工作任务",
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
      "summary": "修改巡检点位-工作任务-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_26",
      "tags": [
        "inspect-site"
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
      "summary": "删除巡检点位-工作任务",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_23",
      "tags": [
        "inspect-site"
      ]
    }
  }
}