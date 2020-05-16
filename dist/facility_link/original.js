{
  "path": "/facility/link",
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
            "name": "id",
            "description": "设备台帐ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "exId",
            "description": "不包含设备ID(编辑时使用)",
            "required": false,
            "enum": []
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
            "name": "facilityLevel",
            "description": "设备级别dict_type=facility_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
            "enum": []
          },
          {
            "type": "string",
            "name": "currentLevel",
            "description": "设备级别dict_type=facility_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "levels",
            "name": "levels"
          },
          {
            "type": "string",
            "name": "facilityType",
            "description": "设备分类",
            "enum": []
          },
          {
            "type": "string",
            "name": "mountSpace",
            "description": "安装位置",
            "enum": []
          }
        ]
      },
      "summary": "设备台帐-选择关联设备(默认上级设备)",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUpAndDownFacilityUsingGET",
      "tags": [
        "facility"
      ]
    }
  }
}