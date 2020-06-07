{
  "path": "/demand/track/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "tenantId",
            "description": "租户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "demandId",
            "description": "需求ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "需求跟进记录-全部",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_8",
      "tags": [
        "service-center-demand-track"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf需求跟进记录-响应"
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