{
  "path": "/app/index/check-offline-data-update",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "facilityLastUpdatedTimestamp",
            "description": "设备信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "facilityTypeLastUpdatedTimestamp",
            "description": "设备类型信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "spaceLastUpdatedTimestamp",
            "description": "位置信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "departmentLastUpdatedTimestamp",
            "description": "部门信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "woPriorityLastUpdatedTimestamp",
            "description": "工单优先级信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "woSlaLastUpdatedTimestamp",
            "description": "工单工作流程信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "serviceTypeLastUpdatedTimestamp",
            "description": "服务类型信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "demandTypeLastUpdatedTimestamp",
            "description": "需求类型信息最后一次更新时间",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "离线数据是否有更新",
      "consumes": [
        "application/json"
      ],
      "operationId": "offlineDataHasUpdateUsingGET",
      "tags": [
        "app-index"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of基础数据是否有更新，为空代表没有检测更新"
          }
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