{
  "path": "/inspect-site",
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
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "点位名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "空间名称",
            "enum": []
          }
        ]
      },
      "summary": "巡检点位-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_25",
      "tags": [
        "inspect-site"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "code": {
              "type": "string",
              "description": "编号",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "名称",
              "enum": []
            },
            "nfcLabel": {
              "type": "string",
              "description": "NFC标签",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "qrcode": {
              "type": "string",
              "description": "二维码",
              "enum": []
            },
            "spBuildingId": {
              "type": "number",
              "description": "大楼ID",
              "required": false,
              "enum": []
            },
            "spBuildingName": {
              "type": "string",
              "description": "大楼名称",
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层ID",
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
              "description": "空间ID",
              "required": false,
              "enum": []
            },
            "spSpaceName": {
              "type": "string",
              "description": "空间名称",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检点位",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_18",
      "tags": [
        "inspect-site"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "description": "idx",
            "enum": []
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除巡检点位",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_4",
      "tags": [
        "inspect-site"
      ]
    }
  }
}