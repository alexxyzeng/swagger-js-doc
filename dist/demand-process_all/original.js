{
  "path": "/demand-process/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "demandId",
            "description": "需求ID",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "需求ID(批量查询)",
            "name": "demandIds"
          }
        ]
      },
      "summary": "需求处理记录-列表-不分页",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_7",
      "tags": [
        "service-center-demand-process"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf需求处理记录-响应"
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