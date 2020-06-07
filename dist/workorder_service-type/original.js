{
  "path": "/workorder/service-type",
  "methods": {
    "post": {
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
        "path": [],
        "query": []
      },
      "summary": "新增服务类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_41",
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
    }
  }
}