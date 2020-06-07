{
  "path": "/demand/{id}",
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
        "query": [
          {
            "type": "string",
            "name": "isClearUnreadCommonCount",
            "description": "isClearUnreadCommonCount",
            "enum": [
              "0",
              "1"
            ]
          }
        ]
      },
      "summary": "需求-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_4",
      "tags": [
        "service-center-demand"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of需求-响应"
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
    }
  }
}