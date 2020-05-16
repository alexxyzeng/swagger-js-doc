{
  "path": "/demand/common/{demandId}",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "评论内容",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "demandId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增需求评论表",
      "consumes": [
        "application/json"
      ],
      "operationId": "createCommonUsingPOST",
      "tags": [
        "demand-common"
      ]
    }
  }
}