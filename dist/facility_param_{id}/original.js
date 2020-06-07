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
              "description": "参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}",
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
            "name": "id",
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
      "operationId": "updateUsingPUT_18",
      "tags": [
        "facility-param"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of设备参数展示信息"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
}