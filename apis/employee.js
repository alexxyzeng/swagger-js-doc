{
  "path": "/employee",
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
            "type": "string",
            "description": "姓名",
            "enum": []
          },
          {
            "type": "string",
            "description": "精确匹配账号",
            "enum": []
          },
          {
            "type": "string",
            "description": "模糊匹配账号",
            "enum": []
          },
          {
            "type": "string",
            "description": "员工编号",
            "enum": []
          },
          {
            "type": "string",
            "description": "手机号",
            "enum": []
          },
          {
            "type": "string",
            "description": "固定电话",
            "enum": []
          },
          {
            "type": "number",
            "description": "用户类型：1、员工 2、领导层 3、管理层 4、供应商 5、内置用户 {员工=1, 领导层=2, 管理层=3, 供应商=4, 内置用户=5}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "账号激活状态。0、未激活 1、已激活 {未激活=0, 已激活=1}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "岗位ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
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
            "required": false
          }
        ]
      },
      "summary": "用户列表&搜索",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_13",
      "tags": [
        "base-employee"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "accountActivationStatus": {
              "type": "string",
              "description": "账号激活状态。0、未激活 1、已激活 {未激活=Failure, 已激活=Activate}",
              "enum": [
                "0",
                "1"
              ]
            },
            "avatarUrl": {
              "type": "string",
              "description": "头像地址",
              "enum": []
            },
            "bindAccount": {
              "type": "string",
              "description": "绑定的账号",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "emNo": {
              "type": "string",
              "description": "员工编号",
              "enum": []
            },
            "emStatus": {
              "type": "string",
              "description": "用户状态：0、离职 1、在职 {员工=EmStatusEnum, 在职=EmStatusEnum}",
              "enum": [
                "1",
                "2"
              ]
            },
            "emType": {
              "type": "string",
              "description": "用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum, 领导层=EmTypeEnum, 管理层=EmTypeEnum, 供应商=EmTypeEnum, 内置用户=EmTypeEnum}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            },
            "email": {
              "type": "string",
              "description": "邮箱",
              "enum": []
            },
            "gender": {
              "type": "string",
              "description": "性别: 0、女 1、男 {女=GenderEnum, 男=GenderEnum}",
              "enum": [
                "0",
                "1"
              ]
            },
            "grantProjectIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "inspectionScope": {
              "type": "string",
              "description": "巡检权限：0、所有巡检可见 1、相关巡检可见 {所有巡检可见=InspectionScopeEnum, 相关巡检可见=InspectionScopeEnum}",
              "enum": [
                "0",
                "1"
              ]
            },
            "name": {
              "type": "string",
              "description": "姓名",
              "enum": []
            },
            "orgDepartmentId": {
              "type": "number",
              "description": "部门ID",
              "required": false,
              "enum": []
            },
            "orgPositionId": {
              "type": "number",
              "description": "岗位ID",
              "required": false,
              "enum": []
            },
            "password": {
              "type": "string",
              "description": "账号初始密码",
              "enum": []
            },
            "phone": {
              "type": "string",
              "description": "手机号",
              "enum": []
            },
            "roles": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "skills": {
              "type": "string",
              "description": "技能",
              "enum": []
            },
            "spBuildingId": {
              "type": "number",
              "description": "大楼ID",
              "required": false,
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层ID",
              "required": false,
              "enum": []
            },
            "spSpaceId": {
              "type": "number",
              "description": "空间ID",
              "required": false,
              "enum": []
            },
            "telephone": {
              "type": "string",
              "description": "固定电话",
              "enum": []
            },
            "userId": {
              "type": "number",
              "description": "ID",
              "required": false,
              "enum": []
            },
            "workOrderScope": {
              "type": "string",
              "description": "工单权限：0、所有工单可见 1、相关工单可见 {所有工单可见=WorkorderScopeEnum, 相关工单可见=WorkorderScopeEnum}",
              "enum": [
                "0",
                "1"
              ]
            },
            "workTeamIds": {
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
      "summary": "新增用户",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_6",
      "tags": [
        "base-employee"
      ]
    }
  }
}