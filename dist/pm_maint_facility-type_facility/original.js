{
  "path": "/pm/maint/facility-type/facility",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "number",
            "name": "maintId",
            "description": "维保设置ID",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "设备分类ID",
            "name": "facilityTypeIds"
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
            "type": "string",
            "name": "isMaintained",
            "description": "是否维保 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          }
        ]
      },
      "summary": "查询维保设备分类关联设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "findFacilityOfFacilityTypeByIdUsingGET",
      "tags": [
        "pm"
      ]
    }
  }
}