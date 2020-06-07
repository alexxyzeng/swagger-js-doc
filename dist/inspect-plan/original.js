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
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "计划编号",
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "计划名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "cycleType",
            "description": "周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}",
            "enum": []
          },
          {
            "type": "string",
            "name": "repeatType",
            "description": "重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}",
            "enum": []
          },
          {
            "type": "string",
            "name": "cycleUnit",
            "description": "cycleUnit {天=Day-1, 周=Week-2, 月=Month-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "model",
            "description": "模式 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "status",
            "description": "状态 {激活=Activate-1, 失效=Deactivate-2}",
            "enum": []
          },
          {
            "type": "string",
            "name": "workTeamName",
            "description": "工作组名称",
            "enum": []
          }
        ]
      },
      "summary": "巡检计划-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_25",
      "tags": [
        "inspect-plan"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检计划-响应"
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
            "copyNum": {
              "type": "number",
              "description": "已经拷贝次数",
              "required": false,
              "enum": []
            },
            "cycleType": {
              "type": "string",
              "description": "周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "exceptDate": {
              "exceptDates": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "date": {
                    "type": "string",
                    "description": "日期",
                    "enum": []
                  },
                  "isWorkday": {
                    "type": "string",
                    "description": "是否工作日 是否枚举{否=No-0, 是=Yes-1}",
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
                "required": false,
                "description": "例外日期列表"
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
              "description": "开始巡检日期 yyyy-MM-dd",
              "enum": []
            },
            "inspectTimeInterval": {
              "aperiodic": {
                "type": "array",
                "valueType": {
                  "type": "object",
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
                "required": false,
                "description": "非周期"
              },
              "intervals": {
                "type": "array",
                "valueType": {
                  "type": "object",
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
                "required": false,
                "description": "天"
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
              "required": false,
              "description": "点位列表"
            },
            "model": {
              "type": "string",
              "description": "模式：1-常规 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}",
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
            "originPlanId": {
              "type": "number",
              "description": "拷贝来源计划ID（新增时为空）",
              "required": false,
              "enum": []
            },
            "reminds": {
              "type": "array",
              "valueType": {
                "type": "object",
                "action": {
                  "type": "string",
                  "description": "动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}",
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
                  "description": "提前单位 1-分钟 2-小时 3-天 {分钟=Min-1, 小时=Hour-2, 天=Day-3}",
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
                  "description": "是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "isMobilePush": {
                  "type": "string",
                  "description": "是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "isOnlyExecutor": {
                  "type": "string",
                  "description": "是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "isSiteMessage": {
                  "type": "string",
                  "description": "是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "isSms": {
                  "type": "string",
                  "description": "是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
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
                  "description": "提醒人（工作组）",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "任务提醒"
            },
            "repeatType": {
              "type": "string",
              "description": "重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}",
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
              "description": "状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "useHoliday": {
              "type": "string",
              "description": "使用节假日 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
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
      "operationId": "createUsingPOST_17",
      "tags": [
        "inspect-plan"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检计划-响应"
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
    "put": {
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
      "summary": "批量删除巡检计划",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_2",
      "tags": [
        "inspect-plan"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
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
}