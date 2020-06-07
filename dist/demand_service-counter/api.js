[
  "/demand/service-counter",
  {
    "get": {
      "tags": [
        "service-center-demand"
      ],
      "summary": "需求-列表-服务台",
      "operationId": "centreUsingGET",
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
          "name": "customerId",
          "in": "query",
          "description": "客户ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "search",
          "in": "query",
          "description": "查询：编号、姓名、描述、需求类型、工单号、联系方式",
          "required": false,
          "type": "string"
        },
        {
          "name": "workorderCode",
          "in": "query",
          "description": "查询：工单编号",
          "required": false,
          "type": "string"
        },
        {
          "name": "hfmSearch",
          "in": "query",
          "description": "查询：编号、项目名称、描述、需求类型",
          "required": false,
          "type": "string"
        },
        {
          "name": "code",
          "in": "query",
          "description": "需求编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "username",
          "in": "query",
          "description": "保障人",
          "required": false,
          "type": "string"
        },
        {
          "name": "createByName",
          "in": "query",
          "description": "创建人",
          "required": false,
          "type": "string"
        },
        {
          "name": "demandTypeName",
          "in": "query",
          "description": "需求类型名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "demandTypeId",
          "in": "query",
          "description": "需求类型ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "description",
          "in": "query",
          "description": "需求内容",
          "required": false,
          "type": "string"
        },
        {
          "name": "evaluateStatus",
          "in": "query",
          "description": "是否评价 {未评价=No-1, 手动评价=YesHand-2, 自动评价=YesAuto-3}",
          "required": false,
          "type": "string"
        },
        {
          "name": "visitStatus",
          "in": "query",
          "description": "是否回访 {未回访=No-1, 已回访=Yes-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "isRefOrder",
          "in": "query",
          "description": "是否有关联的工单 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "refOrders",
          "in": "query",
          "description": "是否关联工单列表 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "statusList",
          "in": "query",
          "description": "状态 {待审核=PendingCheck-1, 待处理=PendingDispose-2, 跟进中=Follow-3, 已建单=CreatedOrder-4, 待验收=PendingConfirm-5, 待评价=PendingEvaluate-6, 已完成=Done-7, 已评价=Evaluate-9, 已取消=Cancel-8}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "sourceList",
          "in": "query",
          "description": "来源 {微信=Wechat-1, 手机=Phone-2, 邮件=Email-3, PC=Web-4}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "startDate",
          "in": "query",
          "description": "开始日期",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "endDate",
          "in": "query",
          "description": "结束日期",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "completeStartDate",
          "in": "query",
          "description": "工单完成开始日期",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "completeEndDate",
          "in": "query",
          "description": "工单完成结束日期",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "feedback",
          "in": "query",
          "description": "反馈意见",
          "required": false,
          "type": "string"
        },
        {
          "name": "responseDuration",
          "in": "query",
          "description": "响应时长",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "completionDuration",
          "in": "query",
          "description": "完成时长",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "additionalApproveStatus",
          "in": "query",
          "description": "追加处理审核状态 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}",
          "required": false,
          "type": "string"
        },
        {
          "name": "isReadCommon",
          "in": "query",
          "description": "需求评论是否已读 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "clientType",
          "in": "query",
          "description": "查询来源 1-web 2-h5 {PC浏览器=Web-1, 手机浏览器=H5-2}",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of需求-响应"
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
]