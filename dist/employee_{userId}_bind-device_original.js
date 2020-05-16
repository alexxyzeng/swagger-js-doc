{
  "path": "/employee/{userId}/bind-device",
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
            "description": "userId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "绑定设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "bindDeviceUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}