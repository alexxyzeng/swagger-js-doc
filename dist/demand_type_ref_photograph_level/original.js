{
  "path": "/demand/type/ref/photograph/level",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "parentId",
            "description": "parentId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "需求类型-随手拍-层级查询",
      "consumes": [
        "application/json"
      ],
      "operationId": "findLevelOfPhotographUsingGET_2",
      "tags": [
        "service-center-demand-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf需求类型关联-响应"
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