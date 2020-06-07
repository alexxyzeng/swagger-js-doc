{
  "path": "/energy/consumption/record/template/export",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "能耗记录模版导出",
      "consumes": [
        "application/json"
      ],
      "operationId": "exportTemplateUsingGET",
      "tags": [
        "energy-consumption-record"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of任务执行结果"
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