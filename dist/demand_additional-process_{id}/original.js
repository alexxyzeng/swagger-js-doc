{
  "path": "/demand/additional-process/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
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
      "summary": "需求追加处理记录-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_2",
      "tags": [
        "service-center-demand-process"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "additionalBy": {
              "type": "number",
              "description": "追加人ID",
              "required": false,
              "enum": []
            },
            "approveOpinion": {
              "type": "string",
              "description": "审核意见",
              "enum": []
            },
            "approveStatus": {
              "type": "string",
              "description": "审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "approveTime": {
              "type": "string",
              "description": "审核时间",
              "enum": []
            },
            "approverId": {
              "type": "number",
              "description": "审核人ID",
              "required": false,
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
            "processOpinion": {
              "type": "string",
              "description": "追加处理意见",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "tenantId": {
              "type": "number",
              "description": "租户ID",
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
      "summary": "审核需求追加处理记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_4",
      "tags": [
        "service-center-demand-process"
      ]
    }
  }
}