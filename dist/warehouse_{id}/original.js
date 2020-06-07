{
  "path": "/warehouse/{id}",
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
      "summary": "库存仓库-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_47",
      "tags": [
        "warehouse"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of库存仓库-响应"
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
            "isEmail": {
              "type": "string",
              "description": "是否邮件通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isMobilePush": {
              "type": "string",
              "description": "是否移动推送通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSiteMessage": {
              "type": "string",
              "description": "是否站内信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSms": {
              "type": "string",
              "description": "是否短信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "managements": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "仓库管理员"
            },
            "name": {
              "type": "string",
              "description": "仓库名称",
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "spBuildingId": {
              "type": "number",
              "description": "大厦ID",
              "required": false,
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层ID",
              "required": false,
              "enum": []
            },
            "spSpaceId": {
              "type": "number",
              "description": "空间ID",
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
      "summary": "修改库存仓库-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_58",
      "tags": [
        "warehouse"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of库存仓库-响应"
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
      "summary": "删除库存仓库",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_60",
      "tags": [
        "warehouse"
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