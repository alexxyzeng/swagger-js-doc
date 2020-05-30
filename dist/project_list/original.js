{
  "path": "/project/list",
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
            "type": "string",
            "name": "projectName",
            "description": "项目名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "projectGroupName",
            "description": "项目组名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "projectStatus",
            "description": "项目状态: 1、未开始 2、服务中 3、预警 4、过期 {未开始=NotStart-1, 服务中=Serving-2, 预警中=Warning-3, 已过期=Expired-4}",
            "enum": []
          },
          {
            "type": "string",
            "name": "createTimeStartDate",
            "description": "创建开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "createTimeEndDate",
            "description": "创建结束时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "serviceStartDate",
            "description": "服务开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "serviceEndDate",
            "description": "服务结束时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "serviceEndDateStartDate",
            "description": "服务结束时间查询开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "serviceEndDateEndDate",
            "description": "服务结束时间查询结束时间",
            "enum": []
          },
          {
            "type": "number",
            "name": "maxUser",
            "description": "授权用户数",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "usedUser",
            "description": "使用用户数",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "项目编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "identifier",
            "description": "项目标识号",
            "enum": []
          },
          {
            "type": "string",
            "name": "bizType",
            "description": "项目业态",
            "enum": []
          },
          {
            "type": "number",
            "name": "geoId",
            "description": "地理位置ID，可以是省、市、区",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "area",
            "description": "项目(建筑)面积",
            "enum": []
          },
          {
            "type": "string",
            "name": "usedArea",
            "description": "项目(使用)面积",
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
            "description": "需排除项目ID",
            "name": "exIdx"
          }
        ]
      },
      "summary": "项目列表&搜索-无数据权限",
      "consumes": [
        "application/json"
      ],
      "operationId": "listUsingGET_2",
      "tags": [
        "base-project"
      ]
    }
  }
}