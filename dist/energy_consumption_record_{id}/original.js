{
  "path": "/energy/consumption/record/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "能耗记录表-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_12",
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
    "put": {
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
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改能耗记录表-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_13",
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
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除能耗记录表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_13",
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