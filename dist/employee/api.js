[
  "/employee",
  {
    "get": {
      "tags": [
        "base-employee"
      ],
      "summary": "用户列表&搜索",
      "operationId": "findUsingGET_17",
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
          "name": "pageNumber",
          "in": "query",
          "description": "获取当前页",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "pageSize",
          "in": "query",
          "description": "每页显示的数量",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "pageSort",
          "in": "query",
          "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
          "required": false,
          "type": "string"
        },
        {
          "name": "name",
          "in": "query",
          "description": "姓名",
          "required": false,
          "type": "string"
        },
        {
          "name": "eqBindAccount",
          "in": "query",
          "description": "精确匹配账号",
          "required": false,
          "type": "string"
        },
        {
          "name": "likeBindAccount",
          "in": "query",
          "description": "模糊匹配账号",
          "required": false,
          "type": "string"
        },
        {
          "name": "likeRoleName",
          "in": "query",
          "description": "模糊匹配角色",
          "required": false,
          "type": "string"
        },
        {
          "name": "likePartitionName",
          "in": "query",
          "description": "模糊匹配分区",
          "required": false,
          "type": "string"
        },
        {
          "name": "likeProjectName",
          "in": "query",
          "description": "模糊匹配项目",
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
          "name": "telephone",
          "in": "query",
          "description": "固定电话",
          "required": false,
          "type": "string"
        },
        {
          "name": "emType",
          "in": "query",
          "description": "用户类型：1、员工 2、领导层 3、管理层 4、供应商 5、内置用户 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}",
          "required": false,
          "type": "string"
        },
        {
          "name": "accountActivationStatus",
          "in": "query",
          "description": "账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "orgPositionId",
          "in": "query",
          "description": "岗位ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "employeeId",
          "in": "query",
          "description": "查询主管的用户ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "idx",
          "in": "query",
          "description": "岗位ID",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "orgDepartmentName",
          "in": "query",
          "description": "部门名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "source",
          "in": "query",
          "description": "用户来源 {手动增加=ManualIncrease-0, 一事通=SystemSync-2, HR系统推送=HRPush-3, 汇管家=HGJSync-4}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "likeYstId",
          "in": "query",
          "description": "模糊匹配一事通号",
          "required": false,
          "type": "string"
        },
        {
          "name": "workTeamId",
          "in": "query",
          "description": "工作组ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体OfEmployeeInfoRspDto"
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
        "base-employee"
      ],
      "summary": "新增用户",
      "operationId": "createUsingPOST_9",
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
          "in": "body",
          "name": "createDto",
          "description": "createDto",
          "required": true,
          "schema": {
            "$ref": "#/definitions/创建用户参数"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfEmployeeInfoRspDto"
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