{
  "path": "/workorder/tracing",
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
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
            "name": "woTypes"
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "工单编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "username",
            "description": "报障人名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "phone",
            "description": "联系电话",
            "enum": []
          },
          {
            "type": "number",
            "name": "orgDepartmentId",
            "description": "部门id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "woServiceTypeId",
            "description": "服务类型id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "woServiceTypeName",
            "description": "服务类型名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "facilityTypeId",
            "description": "设备分类ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "facilityId",
            "description": "设备ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "hasCost",
            "description": "是否收费 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          },
          {
            "type": "number",
            "name": "woServiceTypeRefId",
            "description": "服务类型关联id",
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
            "description": "优先级id",
            "name": "woPriorityIds"
          },
          {
            "type": "string",
            "name": "woPriorityName",
            "description": "优先级名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "spBuildingId",
            "description": "大楼ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "spFloorId",
            "description": "楼层ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "spSpaceId",
            "description": "空间ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "spBuildingName",
            "description": "大楼名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "spFloorName",
            "description": "楼层名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "spSpaceName",
            "description": "空间名称",
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
            "description": "工作组ID",
            "name": "workTeamIds"
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
            "description": "执行人ID",
            "name": "workerIds"
          },
          {
            "type": "string",
            "name": "description",
            "description": "问题描述",
            "enum": []
          },
          {
            "type": "number",
            "name": "deDemandId",
            "description": "关联的需求Id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "deDemandCode",
            "description": "关联的需求编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "createStartTime",
            "description": "创建开始日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "createEndTime",
            "description": "创建结束日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "actualEndStartTime",
            "description": "完成日期开始",
            "enum": []
          },
          {
            "type": "string",
            "name": "actualEndEndTime",
            "description": "完成日期结束",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}",
            "name": "status"
          },
          {
            "type": "string",
            "name": "keyWord",
            "description": "关键字筛选",
            "enum": []
          }
        ]
      },
      "summary": "工单追踪",
      "consumes": [
        "application/json"
      ],
      "operationId": "tracingUsingGET",
      "tags": [
        "workorder"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of工单查询响应对象"
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