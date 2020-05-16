{
  "path": "/demand/additional-process",
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
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "demandId",
            "description": "需求ID",
            "required": false,
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
            "description": "审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}",
            "name": "approveStatus"
          },
          {
            "type": "string",
            "name": "processOpinion",
            "description": "追加处理意见",
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
            "description": "需求ID(批量查询)",
            "name": "demandIds"
          }
        ]
      },
      "summary": "需求追加处理记录-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_2",
      "tags": [
        "service-center-demand-process"
      ]
    },
    "post": {
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
        "path": [],
        "query": []
      },
      "summary": "新增需求追加处理记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_2",
      "tags": [
        "service-center-demand-process"
      ]
    }
  }
}