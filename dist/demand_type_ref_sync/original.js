{
  "path": "/demand/type/ref/sync",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "typeRefs": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "需求类型应用列表"
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "同步需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "syncDemandTypeUsingPUT",
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