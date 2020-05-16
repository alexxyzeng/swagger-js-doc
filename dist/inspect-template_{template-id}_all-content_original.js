{
  "path": "/inspect-template/{template-id}/all-content",
  "methods": {
    "post": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "template-id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "全选巡检模板-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllIdUsingPOST",
      "tags": [
        "inspect-template"
      ]
    }
  }
}