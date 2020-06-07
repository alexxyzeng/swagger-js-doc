{
  "path": "/employee/yst/sync",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": true,
            "description": "ystIds",
            "name": "ystIds"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "根据一事通号同步相应一事通人员信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "ystUpdateUsingPOST",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOfUserInfo"
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