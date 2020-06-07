{
  "path": "/facilityType/{id}",
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
      "summary": "拼接设施编码",
      "consumes": [
        "application/json"
      ],
      "operationId": "getSplicingCodeUsingGET",
      "tags": [
        "facility-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofstring"
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
            "children": {
              "type": "array",
              "valueType": {
                "type": "UNABLE_TO_PARSE",
                "description": "Seems to be stack overflow. You need to checkout why?",
                "enum": []
              },
              "required": false,
              "description": "子节点"
            },
            "fullName": {
              "type": "string",
              "description": "设施分类全称",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "设施分类id",
              "required": false,
              "enum": []
            },
            "parentId": {
              "type": "number",
              "description": "上级id",
              "required": false,
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
              "description": "排序字段",
              "required": false,
              "enum": []
            },
            "typeCode": {
              "type": "string",
              "description": "设施分类编码",
              "enum": []
            },
            "typeName": {
              "type": "string",
              "description": "设施分类名称",
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
      "summary": "修改设施分类",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_20",
      "tags": [
        "facility-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of设施分类"
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
      "summary": "根据id删除设施分类",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_18",
      "tags": [
        "facility-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofint"
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