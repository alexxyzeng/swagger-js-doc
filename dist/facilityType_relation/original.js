{
  "path": "/facilityType/relation",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查询设施分类是否被预防性维护和巡检关联",
      "consumes": [
        "application/json"
      ],
      "operationId": "relationUsingGET_1",
      "tags": [
        "facility-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofint"
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