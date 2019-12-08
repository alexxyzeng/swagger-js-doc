{
  "path": "/workorder/sla/match",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "orgDepartmentId": {
              "type": "number",
              "description": "部门id",
              "required": false,
              "enum": []
            },
            "spaceDtos": {
              "type": "array",
              "valueType": {
                "createTime": {
                  "type": "string",
                  "description": "创建时间",
                  "enum": []
                },
                "description": {
                  "type": "string",
                  "description": "描述",
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "由程序分配的唯一ID",
                  "required": false,
                  "enum": []
                },
                "modifyTime": {
                  "type": "string",
                  "description": "最后的修改时间",
                  "enum": []
                },
                "projectId": {
                  "type": "number",
                  "description": "项目ID",
                  "required": false,
                  "enum": []
                },
                "spBuildingId": {
                  "type": "number",
                  "description": "大楼id",
                  "required": false,
                  "enum": []
                },
                "spBuildingName": {
                  "type": "string",
                  "description": "楼宇名称",
                  "enum": []
                },
                "spFloorId": {
                  "type": "number",
                  "description": "楼层id",
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
                  "description": "房间id",
                  "required": false,
                  "enum": []
                },
                "spSpaceName": {
                  "type": "string",
                  "description": "房间名称",
                  "enum": []
                },
                "woWorkorderId": {
                  "type": "number",
                  "description": "工单id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false
            },
            "woServiceTypeId": {
              "type": "number",
              "description": "服务类型id",
              "required": false,
              "enum": []
            },
            "woServiceTypeRefId": {
              "type": "number",
              "description": "关联服务类型id",
              "required": false,
              "enum": []
            },
            "woType": {
              "type": "string",
              "description": "工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "匹配sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "matchUsingPOST",
      "tags": [
        "workorder-sla"
      ]
    }
  }
}