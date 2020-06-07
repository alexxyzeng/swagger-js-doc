{
  "path": "/employee/{userId}/unbind-device",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "deviceId": {
              "type": "string",
              "description": "设备信息",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "userId",
            "description": "userId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "解绑设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "unbindDeviceUsingPUT",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
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