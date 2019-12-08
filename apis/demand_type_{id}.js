{
  "path": "/demand/type/{id}",
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
      "summary": "需求类型-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_7",
      "tags": [
        "service-center-demand-type"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "code": {
              "type": "string",
              "description": "需求类型编码",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "需求描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "isRefOrder": {
              "type": "string",
              "description": "是否关联工单 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "parentId": {
              "type": "number",
              "description": "父ID",
              "required": false,
              "enum": []
            },
            "pathName": {
              "type": "string",
              "description": "全称",
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "排序",
              "required": false,
              "enum": []
            },
            "typeName": {
              "type": "string",
              "description": "类型名称",
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
      "summary": "修改需求类型-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_8",
      "tags": [
        "service-center-demand-type"
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
      "summary": "删除需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_6",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}