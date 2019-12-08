{
  "path": "/inspect-plan",
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
            "type": "number",
            "description": "计划编号",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "计划名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "周期类型：1-周期 2-非周期 {周期=1, 非周期=2}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=1, 天/次=2, 次/周=3, 周/次=4, 次/月=5, 月/次=6}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "cycleUnit {天=1, 周=2, 月=3}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "模式 {常规=1, 夏季=2, 冬季=3}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "状态 {激活=1, 失效=2}",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "工作组名称",
            "enum": []
          }
        ]
      },
      "summary": "巡检计划-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_21",
      "tags": [
        "inspect-plan"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "copyNum": {
              "type": "number",
              "description": "已经拷贝次数",
              "required": false,
              "enum": []
            },
            "cycleNum": {
              "type": "number",
              "description": "周期数",
              "required": false,
              "enum": []
            },
            "cycleType": {
              "type": "string",
              "description": "周期类型：1-周期 2-非周期 {周期=Cycle, 非周期=Acyclic}",
              "enum": [
                "1",
                "2"
              ]
            },
            "cycleUnit": {
              "type": "string",
              "description": "周期单位 {天=Day, 周=Week, 月=Month}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "exceptDate": {
              "exceptDates": {
                "type": "array",
                "valueType": {
                  "date": {
                    "type": "string",
                    "description": "日期",
                    "enum": []
                  },
                  "isWorkday": {
                    "type": "string",
                    "description": "是否工作日 是否枚举{否=No, 是=Yes}",
                    "enum": [
                      "0",
                      "1"
                    ]
                  },
                  "seq": {
                    "type": "number",
                    "description": "序号",
                    "required": false,
                    "enum": []
                  }
                },
                "required": false
              }
            },
            "execNum": {
              "type": "number",
              "description": "次数",
              "required": false,
              "enum": []
            },
            "firstExecDate": {
              "type": "string",
              "description": "开始巡检日期",
              "enum": []
            },
            "inspectTimeInterval": {
              "aperiodic": {
                "type": "array",
                "valueType": {
                  "end": {
                    "type": "string",
                    "description": "结束时间",
                    "enum": []
                  },
                  "equals": {
                    "type": "boolean",
                    "description": "",
                    "enum": []
                  },
                  "start": {
                    "type": "string",
                    "description": "开始时间",
                    "enum": []
                  }
                },
                "required": false
              },
              "intervals": {
                "type": "array",
                "valueType": {
                  "endDay": {
                    "type": "number",
                    "description": "结束日",
                    "required": false,
                    "enum": []
                  },
                  "endIndex": {
                    "type": "number",
                    "description": "结束周期（从0开始）",
                    "required": false,
                    "enum": []
                  },
                  "endTime": {
                    "hour": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    },
                    "minute": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    },
                    "nano": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    },
                    "second": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    }
                  },
                  "startDay": {
                    "type": "number",
                    "description": "开始日",
                    "required": false,
                    "enum": []
                  },
                  "startIndex": {
                    "type": "number",
                    "description": "开始周期（从0开始）",
                    "required": false,
                    "enum": []
                  },
                  "startTime": {
                    "hour": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    },
                    "minute": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    },
                    "nano": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    },
                    "second": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    }
                  }
                },
                "required": false
              }
            },
            "jobs": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "model": {
              "type": "string",
              "description": "模式：1-不限 2-夏季 3-冬季 {常规=Normal, 夏季=Summer, 冬季=Winter}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "name": {
              "type": "string",
              "description": "名称",
              "enum": []
            },
            "reminds": {
              "type": "array",
              "valueType": {
                "action": {
                  "type": "string",
                  "description": "动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start, 巡检任务结束（未完成）=End, 任务异常提醒=Exception}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                },
                "earlyTime": {
                  "type": "number",
                  "description": "提前时间",
                  "required": false,
                  "enum": []
                },
                "earlyUnit": {
                  "type": "string",
                  "description": "提前单位 {分钟=Min, 小时=Hour, 天=Day}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                },
                "id": {
                  "type": "number",
                  "description": "唯一id",
                  "required": false,
                  "enum": []
                },
                "isEmail": {
                  "type": "string",
                  "description": "是否邮件通知：0-否 1-是 是否枚举{否=No, 是=Yes}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "isMobilePush": {
                  "type": "string",
                  "description": "是否移动推送：0-否 1-是 是否枚举{否=No, 是=Yes}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "isSiteMessage": {
                  "type": "string",
                  "description": "是否站内信通知：0-否 1-是 是否枚举{否=No, 是=Yes}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "isSms": {
                  "type": "string",
                  "description": "是否短信通知：0-否 1-是 是否枚举{否=No, 是=Yes}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "planId": {
                  "type": "number",
                  "description": "计划ID",
                  "required": false,
                  "enum": []
                },
                "projectId": {
                  "type": "number",
                  "description": "项目id",
                  "required": false,
                  "enum": []
                },
                "remindBy": {
                  "type": "number",
                  "description": "提前人（工作组）",
                  "required": false,
                  "enum": []
                }
              },
              "required": false
            },
            "repeatType": {
              "type": "string",
              "description": "重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay, 天/次=DayTimes, 次/周=TimesWeek, 周/次=WeekTimes, 次/月=TimesMonth, 月/次=MonthTimes}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
              ]
            },
            "status": {
              "type": "string",
              "description": "状态：1-激活 2-失效 {激活=Activate, 失效=Deactivate}",
              "enum": [
                "1",
                "2"
              ]
            },
            "useHoliday": {
              "type": "string",
              "description": "使用节假日 0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "workTeamId": {
              "type": "number",
              "description": "巡检人员(工作组)",
              "required": false,
              "enum": []
            },
            "workday": {
              "type": "string",
              "description": "工作日(多个逗号隔开)",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检计划",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_14",
      "tags": [
        "inspect-plan"
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
      "summary": "批量删除巡检计划",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_1",
      "tags": [
        "inspect-plan"
      ]
    }
  }
}