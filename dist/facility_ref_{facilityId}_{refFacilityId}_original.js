{
  "path": "/facility/ref/{facilityId}/{refFacilityId}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "facilityId",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "description": "refFacilityId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "设备关系-取消关联",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_12",
      "tags": [
        "facility-ref"
      ]
    }
  }
}