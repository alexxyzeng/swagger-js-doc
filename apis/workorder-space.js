{
  "path": "/workorder-space",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "createTime": {
              "type": "string",
              "description": "创建时间",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "modifyTime": {
              "type": "string",
              "description": "最后的修改时间",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "spBuildingId": {
              "type": "number",
              "description": "大楼id",
              "required": false,
              "enum": []
            },
            "spBuildingName": {
              "type": "string",
              "description": "楼宇名称",
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层id",
              "required": false,
              "enum": []
            },
            "spFloorName": {
              "type": "string",
              "description": "楼层名称",
              "enum": []
            },
            "spSpaceId": {
              "type": "number",
              "description": "房间id",
              "required": false,
              "enum": []
            },
            "spSpaceName": {
              "type": "string",
              "description": "房间名称",
              "enum": []
            },
            "woWorkorderId": {
              "type": "number",
              "description": "工单id",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "创建工单对应的空间位置",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_54",
      "tags": [
        "workorder-space"
      ]
    }
  }
}