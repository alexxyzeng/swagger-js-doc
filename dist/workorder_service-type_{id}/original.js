{
  "path": "/workorder/service-type/{id}",
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
      "summary": "查询服务类型-byId",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_41",
      "tags": [
        "workorder-service-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-服务类型表-响应"
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
            "code": {
              "type": "string",
              "description": "编码",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "level": {
              "type": "number",
              "description": "层级",
              "required": false,
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "服务类型名称",
              "enum": []
            },
            "parentId": {
              "type": "number",
              "description": "父ID",
              "required": false,
              "enum": []
            },
            "pathName": {
              "type": "string",
              "description": "全称",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "排序",
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
      "summary": "更新服务类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_49",
      "tags": [
        "workorder-service-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-服务类型表-响应"
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
      "summary": "删除服务类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_47",
      "tags": [
        "workorder-service-type"
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