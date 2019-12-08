{
  "path": "/demand/type/ref/{id}",
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
      "summary": "需求类型关联-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_8",
      "tags": [
        "service-center-demand-type"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "isReqScope": {
              "type": "string",
              "description": "需求位置是否必填 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "spaceInfo": {
              "spaces": {
                "type": "array",
                "valueType": {
                  "spBuildingId": {
                    "type": "number",
                    "description": "大楼ID",
                    "required": false,
                    "enum": []
                  },
                  "spBuildingName": {
                    "type": "string",
                    "description": "楼层名称",
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
                },
                "required": false
              }
            },
            "workTeams": {
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
      "summary": "修改需求类型关联-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_9",
      "tags": [
        "service-center-demand-type"
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
      "summary": "删除需求类型关联",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_8",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}