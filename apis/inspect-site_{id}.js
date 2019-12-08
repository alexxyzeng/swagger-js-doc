{
  "path": "/inspect-site/{id}",
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
      "summary": "巡检点位-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_16",
      "tags": [
        "inspect-site"
      ]
    },
    "put": {
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
      "summary": "修改巡检点位-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_24",
      "tags": [
        "inspect-site"
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
      "summary": "删除巡检点位",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_21",
      "tags": [
        "inspect-site"
      ]
    }
  }
}