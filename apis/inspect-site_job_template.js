{
  "path": "/inspect-site/job/template",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "number",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "点位工作任务ID",
            "required": false,
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
            "required": false
          },
          {
            "type": "number",
            "description": "点位工作类型1-综合巡检 2-设备巡检 {综合巡检=1, 设备巡检=2}",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "模板名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "模板类型：1-清洁 2-安保 3-设备 4-机房 5-抄表 6-绿化 {清洁=1, 安保=2, 设备=3, 机房=4, 抄表=5, 绿化=6}",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "模版描述",
            "enum": []
          }
        ]
      },
      "summary": "巡检点位-工作任务-模板-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_28",
      "tags": [
        "inspect-site"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "facilityIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "jobId": {
              "type": "number",
              "description": "工作任务ID",
              "required": false,
              "enum": []
            },
            "jobType": {
              "type": "string",
              "description": "任务类型：综合巡检、设备巡检 {综合巡检=Synthesize, 设备巡检=Facility}",
              "enum": [
                "1",
                "2"
              ]
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "templateIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检点位-工作任务-模板",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_21",
      "tags": [
        "inspect-site"
      ]
    }
  }
}