{
  "path": "/inspect-task/handle",
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
            "name": "taskId",
            "description": "巡检任务ID",
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
            "type": "number",
            "name": "taskJobId",
            "description": "巡检任务-工作任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskObjectId",
            "description": "巡检任务-工作对象ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskContentId",
            "description": "巡检任务内容ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-处理记录-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_41",
      "tags": [
        "inspect-task"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检任务-工单-响应"
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