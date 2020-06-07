{
  "path": "/workorder-tool/{workorderToolId}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "cost": {
              "type": "number",
              "description": "花费 单位：元",
              "enum": []
            },
            "count": {
              "type": "number",
              "description": "数量",
              "required": false,
              "enum": []
            },
            "createTime": {
              "type": "string",
              "description": "创建时间",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "model": {
              "type": "string",
              "description": "工具型号",
              "enum": []
            },
            "modifyTime": {
              "type": "string",
              "description": "最后的修改时间",
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "工具名称",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "unit": {
              "type": "string",
              "description": "单位",
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
            "name": "workorderToolId",
            "description": "workorderToolId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改工单关联的工具",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_64",
      "tags": [
        "workorder-tool"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-工具表"
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
            "name": "workorderToolId",
            "description": "workorderToolId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除工单关联的工具",
      "consumes": [
        "application/json"
      ],
      "operationId": "removeByIdUsingDELETE_2",
      "tags": [
        "workorder-tool"
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