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
            "type": "number",
            "description": "设备级别dict_type=facility_tally_level 0-一级设备 1-二级设备 2-三级设备 3-四级设备 4-五级设备 {一级设备=0, 二级设备=1, 三级设备=2, 四级设备=3, 五级设备=4}",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "设备分类",
            "enum": []
          },
          {
            "type": "number",
            "description": "设备状态dict_type=facility_tally_status 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=1, 停运=2, 在用=3, 维修中=4, 待机=5, 待机=6, 维保中=7}",
            "required": false,
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
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
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