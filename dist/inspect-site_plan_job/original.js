{
  "path": "/inspect-site/plan/job",
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
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "siteId",
            "description": "点位ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "spBuildingId",
            "description": "大厦ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "spFloorId",
            "description": "楼层ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "spSpaceId",
            "description": "空间ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "mountSpace",
            "description": "安装位置",
            "enum": []
          },
          {
            "type": "string",
            "name": "site",
            "description": "点位名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "job",
            "description": "工作任务",
            "enum": []
          }
        ]
      },
      "summary": "巡检点位-工作任务-计划添加列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findForPlanUsingGET",
      "tags": [
        "inspect-site"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检点位-工作任务-计划选择响应"
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