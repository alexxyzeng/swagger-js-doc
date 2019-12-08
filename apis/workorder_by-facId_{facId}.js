{
  "path": "/workorder/by-facId/{facId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "facId",
            "required": true,
            "enum": []
          }
        ],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            },
            "required": true
          },
          {
            "type": "number",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          }
        ]
      },
      "summary": "查询设备关联工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchByFaIdUsingGET",
      "tags": [
        "workorder"
      ]
    }
  }
}