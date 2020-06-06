{
  "type": "object",
  "properties": {
    "code": {
      "type": "integer",
      "format": "int32",
      "example": 200,
      "description": "业务响应状态"
    },
    "data": {
      "type": "array",
      "description": "数据",
      "items": {
        "type": "object",
        "properties": {
          "emNo": {
            "type": "string",
            "description": "员工编号"
          },
          "employeeId": {
            "type": "integer",
            "format": "int64",
            "description": "成员ID"
          },
          "employeeName": {
            "type": "string",
            "description": "成员姓名"
          },
          "id": {
            "type": "integer",
            "format": "int64",
            "description": "工作组成员ID"
          },
          "orgDepartmentName": {
            "type": "string",
            "description": "部门名"
          },
          "phone": {
            "type": "string",
            "description": "手机号"
          },
          "processWorkorderCount": {
            "type": "integer",
            "format": "int32",
            "description": "处理中工单数量"
          },
          "skills": {
            "type": "string",
            "description": "技能"
          },
          "sort": {
            "type": "integer",
            "format": "int32",
            "description": "工作组中的排序号"
          },
          "teamRole": {
            "type": "string",
            "description": "团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}",
            "enum": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6"
            ]
          },
          "workTeamId": {
            "type": "integer",
            "format": "int64",
            "description": "工作组ID"
          },
          "workTeamName": {
            "type": "string",
            "description": "工作组名称"
          }
        }
      }
    },
    "message": {
      "type": "string",
      "description": "消息"
    },
    "traceId": {
      "type": "string",
      "description": "用于链路追踪的ID"
    }
  }
}{
  "code": {
    "type": "number",
    "description": "业务响应状态",
    "required": false,
    "enum": []
  },
  "data": {
    "type": "array",
    "valueType": {
      "type": "object",
      "emNo": {
        "type": "string",
        "description": "员工编号",
        "enum": []
      },
      "employeeId": {
        "type": "number",
        "description": "成员ID",
        "required": false,
        "enum": []
      },
      "employeeName": {
        "type": "string",
        "description": "成员姓名",
        "enum": []
      },
      "id": {
        "type": "number",
        "description": "工作组成员ID",
        "required": false,
        "enum": []
      },
      "orgDepartmentName": {
        "type": "string",
        "description": "部门名",
        "enum": []
      },
      "phone": {
        "type": "string",
        "description": "手机号",
        "enum": []
      },
      "processWorkorderCount": {
        "type": "number",
        "description": "处理中工单数量",
        "required": false,
        "enum": []
      },
      "skills": {
        "type": "string",
        "description": "技能",
        "enum": []
      },
      "sort": {
        "type": "number",
        "description": "工作组中的排序号",
        "required": false,
        "enum": []
      },
      "teamRole": {
        "type": "string",
        "description": "团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}",
        "enum": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      "workTeamId": {
        "type": "number",
        "description": "工作组ID",
        "required": false,
        "enum": []
      },
      "workTeamName": {
        "type": "string",
        "description": "工作组名称",
        "enum": []
      }
    },
    "required": false,
    "description": "数据"
  },
  "message": {
    "type": "string",
    "description": "消息",
    "enum": []
  },
  "traceId": {
    "type": "string",
    "description": "用于链路追踪的ID",
    "enum": []
  }
}