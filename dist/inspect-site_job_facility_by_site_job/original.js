{
  "path": "/inspect-site/job/facility/by_site_job",
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
            "description": "projectId",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "jobId",
            "description": "点位工作任务ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检点位-工作任务-设备-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllOfSiteJobUsingGET",
      "tags": [
        "inspect-site"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检点位-工作任务-设备-响应"
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