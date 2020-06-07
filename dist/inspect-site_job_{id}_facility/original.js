{
  "path": "/inspect-site/job/{id}/facility",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "facilityId": {
              "type": "number",
              "description": "设备ID",
              "required": false,
              "enum": []
            },
            "facilityStatus": {
              "type": "string",
              "description": "设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "顺序",
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
      "summary": "新增巡检点位-工作任务-设备(单个)",
      "consumes": [
        "application/json"
      ],
      "operationId": "createFacilityUsingPOST",
      "tags": [
        "inspect-site"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检点位-工作任务-设备-响应"
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