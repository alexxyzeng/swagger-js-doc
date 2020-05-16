{
  "path": "/pm/maint/facility",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "设备ID",
            "name": "facilityIds"
          },
          {
            "type": "string",
            "name": "facilityCode",
            "description": "设备编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "facilityName",
            "description": "设备名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "facilityType",
            "description": "系统分类",
            "enum": []
          },
          {
            "type": "string",
            "name": "mountSpace",
            "description": "安装位置",
            "enum": []
          },
          {
            "type": "number",
            "name": "pageNumber",
            "description": "当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页条数",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "排序",
            "name": "pageSort"
          }
        ]
      },
      "summary": "维保设备列表筛选",
      "consumes": [
        "application/json"
      ],
      "operationId": "findFacilityUsingPUT",
      "tags": [
        "pm"
      ]
    }
  }
}