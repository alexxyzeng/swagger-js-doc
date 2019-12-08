{
  "path": "/facility/param/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "extend": {
              "type": "string",
              "description": "扩展",
              "enum": []
            },
            "facilityId": {
              "type": "number",
              "description": "设备id",
              "required": false,
              "enum": []
            },
            "paramDesc": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "paramName": {
              "type": "string",
              "description": "参数名称",
              "enum": []
            },
            "paramType": {
              "type": "string",
              "description": "参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text, 数字=Number, 日期=Date, 单选=Elect}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            },
            "paramUnit": {
              "type": "string",
              "description": "单位",
              "enum": []
            },
            "paramValue": {
              "type": "string",
              "description": "参数值",
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "typeParamId": {
              "type": "number",
              "description": "设备分类参数id",
              "required": false,
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
      "summary": "修改设备参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_15",
      "tags": [
        "facility-param"
      ]
    }
  }
}