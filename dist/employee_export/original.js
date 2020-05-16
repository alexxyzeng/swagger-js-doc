{
  "path": "/employee/export",
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
            "name": "name",
            "description": "姓名",
            "enum": []
          },
          {
            "type": "string",
            "name": "eqBindAccount",
            "description": "精确匹配账号",
            "enum": []
          },
          {
            "type": "string",
            "name": "likeBindAccount",
            "description": "模糊匹配账号",
            "enum": []
          },
          {
            "type": "string",
            "name": "emNo",
            "description": "员工编号",
            "enum": []
          },
          {
            "type": "string",
            "name": "phone",
            "description": "手机号",
            "enum": []
          },
          {
            "type": "string",
            "name": "telephone",
            "description": "固定电话",
            "enum": []
          },
          {
            "type": "string",
            "name": "emType",
            "description": "用户类型：1、员工 2、领导层 3、管理层 4、供应商 5、内置用户 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}",
            "enum": []
          },
          {
            "type": "string",
            "name": "accountActivationStatus",
            "description": "账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}",
            "enum": []
          },
          {
            "type": "number",
            "name": "orgPositionId",
            "description": "岗位ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "employeeId",
            "description": "查询主管的用户ID",
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
            "required": false,
            "description": "岗位ID",
            "name": "idx"
          },
          {
            "type": "string",
            "name": "orgDepartmentName",
            "description": "部门名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "frontSource",
            "description": "用户来源 {系统创建=SystemCreate-0, 第三方同步=ThirdPartSync-1}",
            "enum": []
          },
          {
            "type": "string",
            "name": "ext1",
            "description": "一事通号",
            "enum": []
          },
          {
            "type": "number",
            "name": "workTeamId",
            "description": "工作组id",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "用户列表导出",
      "consumes": [
        "application/json"
      ],
      "operationId": "exportUsingGET_1",
      "tags": [
        "base-employee"
      ]
    }
  }
}