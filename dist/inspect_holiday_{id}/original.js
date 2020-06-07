{
  "path": "/inspect/holiday/{id}",
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
      "summary": "巡检节假日-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_15",
      "tags": [
        "inspect"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检节假日-响应"
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
              "type": "string",
              "description": "是否工作日 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
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
            "name": "id",
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
      "operationId": "updateUsingPUT_23",
      "tags": [
        "inspect"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检节假日-响应"
          }
        },
        "201": {
          "description": "Created"
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
      "summary": "删除巡检节假日",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_21",
      "tags": [
        "inspect"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  }
}