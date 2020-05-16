{
  "path": "/inspect-site/job/{id}/custom-content",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "内容",
              "enum": []
            },
            "defaultVal": {
              "type": "string",
              "description": "默认值",
              "enum": []
            },
            "exceptions": {
              "exceptions": {
                "type": "array",
                "valueType": {
                  "type": "string",
                  "description": "",
                  "enum": []
                },
                "required": false,
                "description": "异常列表"
              }
            },
            "facilityId": {
              "type": "number",
              "description": "设备ID",
              "required": false,
              "enum": []
            },
            "facilityIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "选择的设备"
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "isCustom": {
              "type": "string",
              "description": "是否自定义 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "jobType": {
              "type": "string",
              "description": "任务类型：1-综合巡检、2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "model": {
              "type": "string",
              "description": "模式：1-常规、2-夏季、3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "options": {
              "inputRange": {
                "ceiling": {
                  "type": "number",
                  "description": "上限",
                  "enum": []
                },
                "lower": {
                  "type": "number",
                  "description": "下限",
                  "enum": []
                }
              },
              "options": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "isRight": {
                    "type": "boolean",
                    "description": "选项是否正确",
                    "enum": []
                  },
                  "option": {
                    "type": "string",
                    "description": "选项值",
                    "enum": []
                  }
                },
                "required": false,
                "description": ""
              }
            },
            "runStatus": {
              "type": "string",
              "description": "运行状态：1-不限、2-在线、3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "sort": {
              "type": "number",
              "description": "顺序",
              "required": false,
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "类型：1-输入、2-选择 {输入=Input-1, 选择=Select-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "unit": {
              "type": "string",
              "description": "单位",
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
      "summary": "自定义巡检点位-工作任务-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "createJobContentUsingPOST",
      "tags": [
        "inspect-site"
      ]
    }
  }
}