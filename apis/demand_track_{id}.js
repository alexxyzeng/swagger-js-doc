{
  "path": "/demand/track/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "需求跟进记录-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_6",
      "tags": [
        "service-center-demand-track"
      ]
    },
    "put": {
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
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改需求跟进记录-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_6",
      "tags": [
        "service-center-demand-track"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除需求跟进记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_4",
      "tags": [
        "service-center-demand-track"
      ]
    }
  }
}