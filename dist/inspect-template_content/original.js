{
  "path": "/inspect-template/content",
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
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "templateId",
            "description": "模板ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "content",
            "description": "内容",
            "enum": []
          },
          {
            "type": "string",
            "name": "model",
            "description": "模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "type",
            "description": "类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}",
            "enum": []
          },
          {
            "type": "string",
            "name": "runStatus",
            "description": "运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "defaultVal",
            "description": "默认值",
            "enum": []
          }
        ]
      },
      "summary": "巡检模板-内容-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_39",
      "tags": [
        "inspect-template"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "idx",
            "name": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除巡检模板-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_9",
      "tags": [
        "inspect-template"
      ]
    }
  }
}