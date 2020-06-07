{
  "path": "/pm/plan",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "maintId": {
              "type": "number",
              "description": "维保设置id",
              "required": false,
              "enum": []
            },
            "planDate": {
              "type": "string",
              "description": "维保日期",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增计划",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_30",
      "tags": [
        "pm-plan"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of维保计划-响应"
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
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "计划id",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "name": "maintId",
            "description": "设置id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "planDate",
            "description": "计划时间",
            "enum": []
          }
        ]
      },
      "summary": "删除计划",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_34",
      "tags": [
        "pm-plan"
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