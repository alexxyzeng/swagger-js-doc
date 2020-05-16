{
  "path": "/demand/{id}/affirm",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "内容",
              "enum": []
            },
            "isPass": {
              "type": "string",
              "description": "是否通过 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
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
      "summary": "需求验收",
      "consumes": [
        "application/json"
      ],
      "operationId": "affirmUsingPUT",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}