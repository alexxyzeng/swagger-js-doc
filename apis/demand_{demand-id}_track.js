{
  "path": "/demand/{demand-id}/track",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "跟进内容",
              "enum": []
            },
            "files": {
              "type": "string",
              "description": "文件",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "demand-id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增需求跟进记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_3",
      "tags": [
        "service-center-demand-track"
      ]
    }
  }
}