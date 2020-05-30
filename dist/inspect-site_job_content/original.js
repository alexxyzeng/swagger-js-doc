{
  "path": "/inspect-site/job/content",
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
            "name": "jobId",
            "description": "工作任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "jobType",
            "description": "任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}",
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
            "name": "model",
            "description": "模式 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "runStatus",
            "description": "运行状态 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "content",
            "description": "巡检内容",
            "enum": []
          },
          {
            "type": "string",
            "name": "templateName",
            "description": "巡检模板名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "result",
            "description": "结果",
            "enum": []
          }
        ]
      },
      "summary": "巡检点位-工作任务-内容-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_30",
      "tags": [
        "inspect-site"
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
      "summary": "批量删除巡检点位-工作任务-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_6",
      "tags": [
        "inspect-site"
      ]
    }
  }
}