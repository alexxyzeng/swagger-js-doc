{
  "path": "/inspect-template/content/reorder/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": [
          {
            "type": "string",
            "name": "reorderType",
            "description": "调整方向1-向上 2-向下 {向上=Up-1, 向下=Down-2}",
            "enum": []
          }
        ]
      },
      "summary": "修改巡检模板-内容-顺序",
      "consumes": [
        "application/json"
      ],
      "operationId": "reorderUsingPUT",
      "tags": [
        "inspect-template"
      ]
    }
  }
}