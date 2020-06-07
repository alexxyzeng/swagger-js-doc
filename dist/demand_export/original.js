{
  "path": "/demand/export",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "customerId",
            "description": "客户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "search",
            "description": "查询：编号、姓名、描述、需求类型、工单号、联系方式",
            "enum": []
          },
          {
            "type": "string",
            "name": "workorderCode",
            "description": "查询：工单编号",
            "enum": []
          },
          {
            "type": "string",
            "name": "hfmSearch",
            "description": "查询：编号、项目名称、描述、需求类型",
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "需求编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "username",
            "description": "保障人",
            "enum": []
          },
          {
            "type": "string",
            "name": "createByName",
            "description": "创建人",
            "enum": []
          },
          {
            "type": "string",
            "name": "demandTypeName",
            "description": "需求类型名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "demandTypeId",
            "description": "需求类型ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "description",
            "description": "需求内容",
            "enum": []
          },
          {
            "type": "string",
            "name": "evaluateStatus",
            "description": "是否评价 {未评价=No-1, 手动评价=YesHand-2, 自动评价=YesAuto-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "visitStatus",
            "description": "是否回访 {未回访=No-1, 已回访=Yes-2}",
            "enum": []
          },
          {
            "type": "string",
            "name": "isRefOrder",
            "description": "是否有关联的工单 是否枚举{否=No-0, 是=Yes-1}",
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
            "description": "是否关联工单列表 是否枚举{否=No-0, 是=Yes-1}",
            "name": "refOrders"
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "状态 {待审核=PendingCheck-1, 待处理=PendingDispose-2, 跟进中=Follow-3, 已建单=CreatedOrder-4, 待验收=PendingConfirm-5, 待评价=PendingEvaluate-6, 已完成=Done-7, 已评价=Evaluate-9, 已取消=Cancel-8}",
            "name": "statusList"
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "来源 {微信=Wechat-1, 手机=Phone-2, 邮件=Email-3, PC=Web-4}",
            "name": "sourceList"
          },
          {
            "type": "string",
            "name": "startDate",
            "description": "开始日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "endDate",
            "description": "结束日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "completeStartDate",
            "description": "工单完成开始日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "completeEndDate",
            "description": "工单完成结束日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "feedback",
            "description": "反馈意见",
            "enum": []
          },
          {
            "type": "number",
            "name": "responseDuration",
            "description": "响应时长",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "completionDuration",
            "description": "完成时长",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "additionalApproveStatus",
            "description": "追加处理审核状态 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "isReadCommon",
            "description": "需求评论是否已读 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          },
          {
            "type": "string",
            "name": "clientType",
            "description": "查询来源 1-web 2-h5 {PC浏览器=Web-1, 手机浏览器=H5-2}",
            "enum": []
          }
        ]
      },
      "summary": "需求列表导出",
      "consumes": [
        "application/json"
      ],
      "operationId": "exportUsingGET",
      "tags": [
        "service-center-demand"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfResponseEntityOfArrayOfbyte"
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