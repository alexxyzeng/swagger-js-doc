{
  "path": "/facility/ref/{id}",
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
        "query": [
          {
            "type": "number",
            "description": "设备台帐ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "设备编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "设备名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "资产编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "固定编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "设备级别dict_type=facility_tally_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
            "enum": []
          },
          {
            "type": "string",
            "description": "facilitySearchLevel {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
            "enum": []
          },
          {
            "type": "string",
            "description": "设备分类",
            "enum": []
          },
          {
            "type": "string",
            "description": "设备状态dict_type=facility_tally_status 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}",
            "enum": []
          },
          {
            "type": "string",
            "description": "品牌",
            "enum": []
          },
          {
            "type": "string",
            "description": "型号",
            "enum": []
          },
          {
            "type": "string",
            "description": "安装位置",
            "enum": []
          },
          {
            "type": "number",
            "description": "大厦id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "楼层id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "空间id",
            "required": false,
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
            "description": "设备id集合"
          },
          {
            "type": "string",
            "description": "只查上级关联设备或者只查下级关联设备或全部关联设备 {上级设备=Up-0, 下级设备=Down-1, 全部关联设备=All-2}",
            "enum": []
          },
          {
            "type": "string",
            "description": "编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "设备名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "设备状态 1,2,3,4,5",
            "enum": []
          },
          {
            "type": "number",
            "description": "上次离线下载时间",
            "required": false,
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
            "description": "过滤设备id集合"
          }
        ]
      },
      "summary": "设备台帐-关联设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "findRefFacilitysUsingGET",
      "tags": [
        "facility"
      ]
    }
  }
}