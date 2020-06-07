{
  "path": "/inspect-template/{id}",
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
      "summary": "巡检模板-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_31",
      "tags": [
        "inspect-template"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检模板-响应"
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
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "模板名称",
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
              ]
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
      "summary": "修改巡检模板-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_39",
      "tags": [
        "inspect-template"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检模板-响应"
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
      "summary": "删除巡检模板",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_31",
      "tags": [
        "inspect-template"
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