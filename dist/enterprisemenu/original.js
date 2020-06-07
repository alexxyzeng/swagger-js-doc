{
  "path": "/enterprisemenu",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "tenantId",
            "description": "tenantId",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "根据企业查询菜单",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_19",
      "tags": [
        "base-menu"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of-响应"
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
            "permissionId": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "权限id"
            },
            "tenantId": {
              "type": "number",
              "description": "tenantId",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "修改企业菜单",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_15",
      "tags": [
        "base-menu"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofboolean"
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
    }
  }
}