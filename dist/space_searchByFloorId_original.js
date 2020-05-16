{
  "path": "/space/searchByFloorId",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "楼层ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "根据sp_floor_id 查找空间列",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByFloorIdUsingGET",
      "tags": [
        "base-building-space"
      ]
    }
  }
}