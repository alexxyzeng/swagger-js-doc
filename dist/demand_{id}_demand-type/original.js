{
  "path": "/demand/{id}/demand-type",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "demandTypeRefId": {
              "type": "number",
              "description": "需求类型改关联ID",
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
      "summary": "修改需求-需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateDemandTypeUsingPUT",
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