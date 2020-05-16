{
  "path": "/inspect-plan/site/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "巡检计划-点位-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_16",
      "tags": [
        "inspect-plan"
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
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改巡检计划-点位-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_24",
      "tags": [
        "inspect-plan"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除巡检计划-点位",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_20",
      "tags": [
        "inspect-plan"
      ]
    }
  }
}