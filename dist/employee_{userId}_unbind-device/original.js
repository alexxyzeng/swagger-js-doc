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
      ]
    }
  }
}