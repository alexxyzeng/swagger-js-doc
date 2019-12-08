{
  "path": "/demand/{id}/workorder",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "facilities": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "isRefFacility": {
              "type": "string",
              "description": "是否关联设备 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "priorityId": {
              "type": "number",
              "description": "优先级ID",
              "required": false,
              "enum": []
            },
            "serviceTypeId": {
              "type": "number",
              "description": "服务类型ID",
              "required": false,
              "enum": []
            },
            "slaId": {
              "type": "number",
              "description": "SLA",
              "required": false,
              "enum": []
            },
            "spaces": {
              "type": "array",
              "valueType": {
                "id": {
                  "type": "number",
                  "description": "由程序分配的唯一ID",
                  "required": false,
                  "enum": []
                },
                "spBuildingId": {
                  "type": "number",
                  "description": "大楼ID",
                  "required": false,
                  "enum": []
                },
                "spBuildingName": {
                  "type": "string",
                  "description": "大楼名称",
                  "enum": []
                },
                "spFloorId": {
                  "type": "number",
                  "description": "楼层ID",
                  "required": false,
                  "enum": []
                },
                "spFloorName": {
                  "type": "string",
                  "description": "楼层名称",
                  "enum": []
                },
                "spSpaceId": {
                  "type": "number",
                  "description": "空间ID",
                  "required": false,
                  "enum": []
                },
                "spSpaceName": {
                  "type": "string",
                  "description": "空间名称",
                  "enum": []
                }
              },
              "required": false
            },
            "workorderType": {
              "type": "string",
              "description": "工单类型 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
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
      "summary": "创建工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "createWorkorderUsingPUT",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}