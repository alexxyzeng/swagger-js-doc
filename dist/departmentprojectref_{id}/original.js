{
  "path": "/departmentprojectref/{id}",
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
      "summary": "部门项目关联表-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_11",
      "tags": [
        "departmentprojectref"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of部门项目关联表-响应"
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
            "departmentId": {
              "type": "number",
              "description": "部门ID",
              "required": false,
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
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
      "summary": "修改部门项目关联表-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_12",
      "tags": [
        "departmentprojectref"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of部门项目关联表-响应"
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
      "summary": "删除部门项目关联表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_12",
      "tags": [
        "departmentprojectref"
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