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
      "operationId": "findByIdUsingGET_18",
      "tags": [
        "inspect-plan"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检计划-点位-响应"
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
      "operationId": "updateUsingPUT_26",
      "tags": [
        "inspect-plan"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检计划-点位-响应"
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
      "summary": "删除巡检计划-点位",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_24",
      "tags": [
        "inspect-plan"
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