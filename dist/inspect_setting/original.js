{
  "path": "/inspect/setting",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "巡检设置-默认",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_25",
      "tags": [
        "inspect"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "setting": {
              "isNfcClockIn": {
                "type": "string",
                "description": "员工是否必须使用NFC打卡巡检 是否枚举{否=No-0, 是=Yes-1}",
                "enum": [
                  "0",
                  "1"
                ]
              },
              "isNfcCodeDone": {
                "type": "string",
                "description": "完成巡检内容时必须扫码或NFC打卡 是否枚举{否=No-0, 是=Yes-1}",
                "enum": [
                  "0",
                  "1"
                ]
              }
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检设置",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_18",
      "tags": [
        "inspect"
      ]
    }
  }
}