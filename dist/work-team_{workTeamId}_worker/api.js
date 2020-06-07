[
  "/work-team/{workTeamId}/worker",
  {
    "get": {
      "tags": [
        "work-team"
      ],
      "summary": "工作组执行人列表&搜索",
      "operationId": "findWorkersUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "workTeamId",
          "in": "path",
          "description": "workTeamId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "teamRole",
          "in": "query",
          "description": "团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}",
          "required": false,
          "type": "string"
        },
        {
          "name": "employeeName",
          "in": "query",
          "description": "成员姓名",
          "required": false,
          "type": "string"
        },
        {
          "name": "emNo",
          "in": "query",
          "description": "员工编号",
          "required": false,
          "type": "string"
        },
        {
          "name": "phone",
          "in": "query",
          "description": "手机号",
          "required": false,
          "type": "string"
        },
        {
          "name": "orgDepartmentName",
          "in": "query",
          "description": "部门名",
          "required": false,
          "type": "string"
        },
        {
          "name": "skills",
          "in": "query",
          "description": "技能",
          "required": false,
          "type": "string"
        },
        {
          "name": "employeeId",
          "in": "query",
          "description": "员工id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "isProcessWorkorderCount",
          "in": "query",
          "description": "是否查询处理中工单数量 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "teamRoles",
          "in": "query",
          "description": "团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "pageSort",
          "in": "query",
          "description": "排序",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工作组成员信息"
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
      "tags": [
        "work-team"
      ],
      "summary": "新增工作组执行人",
      "operationId": "createWorkersUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "workTeamId",
          "in": "path",
          "description": "workTeamId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "in": "body",
          "name": "workers",
          "description": "workers",
          "required": true,
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/工作组成员参数"
            }
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工作组成员信息"
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
    }
  }
]