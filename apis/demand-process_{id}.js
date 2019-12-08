{
  "path": "/demand-process/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
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
      "summary": "需求处理记录-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_5",
      "tags": [
        "service-center-demand-process"
      ]
    },
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
              "description": "处理类型 {创建=Create, 审核=Approve, 更新=Update, 跟进=Follow, 建单=CreateOrder, 完成=Done, 验收=Confirm, 评价=Evaluate, 回访=Visit, 作废=Cancel}",
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
                "10"
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
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改需求处理记录-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_5",
      "tags": [
        "service-center-demand-process"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
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
      "summary": "删除需求处理记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_3",
      "tags": [
        "service-center-demand-process"
      ]
    }
  }
}