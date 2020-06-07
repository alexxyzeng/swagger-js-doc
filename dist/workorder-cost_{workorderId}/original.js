{
  "path": "/workorder-cost/{workorderId}",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "cost": {
              "type": "number",
              "description": "花费",
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
            "name": {
              "type": "string",
              "description": "收费项名称",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "woWorkorderId": {
              "type": "number",
              "description": "工单id",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "workorderId",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增费用",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_58",
      "tags": [
        "workorder-cost"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-费用表-响应"
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