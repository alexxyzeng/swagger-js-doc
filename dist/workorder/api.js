[
  "/workorder",
  {
    "get": {
      "tags": [
        "workorder"
      ],
      "summary": "工单查询",
      "operationId": "searchUsingGET_7",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "pageNumber",
          "in": "query",
          "description": "获取当前页",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "pageSize",
          "in": "query",
          "description": "每页显示的数量",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "pageSort",
          "in": "query",
          "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
          "required": false,
          "type": "string"
        },
        {
          "name": "woTypes",
          "in": "query",
          "description": "工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "projectId",
          "in": "query",
          "description": "项目id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "code",
          "in": "query",
          "description": "工单编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "username",
          "in": "query",
          "description": "报障人名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "phone",
          "in": "query",
          "description": "联系电话",
          "required": false,
          "type": "string"
        },
        {
          "name": "orgDepartmentId",
          "in": "query",
          "description": "部门id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "woServiceTypeId",
          "in": "query",
          "description": "服务类型id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "woServiceTypeName",
          "in": "query",
          "description": "服务类型名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityTypeId",
          "in": "query",
          "description": "设备分类ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "facilityId",
          "in": "query",
          "description": "设备ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "hasCost",
          "in": "query",
          "description": "是否收费 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "woServiceTypeRefId",
          "in": "query",
          "description": "服务类型关联id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "woPriorityIds",
          "in": "query",
          "description": "优先级id",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "woPriorityName",
          "in": "query",
          "description": "优先级名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "spBuildingId",
          "in": "query",
          "description": "大楼ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spFloorId",
          "in": "query",
          "description": "楼层ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spSpaceId",
          "in": "query",
          "description": "空间ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spBuildingName",
          "in": "query",
          "description": "大楼名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "spFloorName",
          "in": "query",
          "description": "楼层名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "spSpaceName",
          "in": "query",
          "description": "空间名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "workTeamIds",
          "in": "query",
          "description": "工作组ID",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "workerIds",
          "in": "query",
          "description": "执行人ID",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "description",
          "in": "query",
          "description": "问题描述",
          "required": false,
          "type": "string"
        },
        {
          "name": "deDemandId",
          "in": "query",
          "description": "关联的需求Id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "deDemandCode",
          "in": "query",
          "description": "关联的需求编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "createStartTime",
          "in": "query",
          "description": "创建开始日期",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "createEndTime",
          "in": "query",
          "description": "创建结束日期",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "actualEndStartTime",
          "in": "query",
          "description": "完成日期开始",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "actualEndEndTime",
          "in": "query",
          "description": "完成日期结束",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "status",
          "in": "query",
          "description": "工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "keyWord",
          "in": "query",
          "description": "关键字筛选",
          "required": false,
          "type": "string"
        }
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
    },
    "post": {
      "tags": [
        "workorder"
      ],
      "summary": "创建工单",
      "operationId": "createUsingPOST_57",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "in": "body",
          "name": "dto",
          "description": "dto",
          "required": true,
          "schema": {
            "$ref": "#/definitions/工单表-请求"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单详情"
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
]