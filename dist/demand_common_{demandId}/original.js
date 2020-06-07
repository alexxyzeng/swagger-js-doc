{
  "path": "/demand/common/{demandId}",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "评论内容",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "demandId",
            "description": "demandId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增需求评论表",
      "consumes": [
        "application/json"
      ],
      "operationId": "createCommonUsingPOST",
      "tags": [
        "demand-common"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of需求评论表-响应"
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