{
  "path": "/energy/consumption/record",
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
            "name": "energyConsumptionCycle",
            "description": "能耗周期",
            "enum": []
          },
          {
            "type": "string",
            "name": "energyConsumptionType",
            "description": "能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}",
            "enum": []
          },
          {},
          {}
        ]
      },
      "summary": "能耗记录表-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_16",
      "tags": [
        "energy-consumption-record"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of能耗记录表-响应"
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
    },
    "post": {
      "parameters": {
        "body": [
          {
            "currentCost": {
              "type": "number",
              "description": "本期费用：分",
              "enum": []
            },
            "currentDosage": {
              "type": "number",
              "description": "本期用量",
              "enum": []
            },
            "energyConsumptionCycle": {
              "type": "string",
              "description": "能耗周期",
              "enum": []
            },
            "energyConsumptionType": {
              "type": "number",
              "description": "能耗类型",
              "required": false,
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增能耗记录表",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_8",
      "tags": [
        "energy-consumption-record"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of能耗记录表-响应"
          }
        },
        "201": {
          "description": "Created"
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
    },
    "delete": {
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
      "summary": "批量删除能耗记录表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_14",
      "tags": [
        "energy-consumption-record"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  }
}