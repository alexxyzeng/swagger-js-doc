{
  "path": "/demand-process/{demandId}/last",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "跟进内容",
              "enum": []
            },
            "demandId": {
              "type": "number",
              "description": "需求ID",
              "required": false,
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "otherData": {
              "type": "string",
              "description": "其他数据",
              "enum": []
            },
            "processBy": {
              "type": "number",
              "description": "处理人",
              "required": false,
              "enum": []
            },
            "processType": {
              "type": "string",
              "description": "处理类型 {创建=Create-1, 审核=Approve-2, 更新=Update-3, 跟进=Follow-4, 建单=CreateOrder-5, 处理完成=Done-6, 验证=Confirm-7, 评价=Evaluate-8, 回访=Visit-9, 取消=Cancel-10, 转派=Redeploy-11, 追加处理=Additional-12, 评论=Comment-13}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13"
              ]
            },
            "refId": {
              "type": "number",
              "description": "关联ID",
              "required": false,
              "enum": []
            },
            "refType": {
              "type": "number",
              "description": "关联类型",
              "required": false,
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "demandId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改需求验证未通过描述",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateLastUsingPUT",
      "tags": [
        "service-center-demand-process"
      ]
    }
  }
}