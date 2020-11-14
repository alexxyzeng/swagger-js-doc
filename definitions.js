{
  "NamedSingleValueDto": {
    "type": "object",
    "properties": {
      "data": {
        "properties": {
          "value": {}
        }
      },
      "name": {
        "type": "string"
      }
    }
  },
  "周转房-人才周转房概况": {
    "type": "object",
    "properties": {
      "capacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "套间总数量 86.3"
      },
      "capacityTotalCount": {
        "type": "integer",
        "format": "int32",
        "description": "员工周转房房源总量 86.3"
      },
      "emptySuiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "空置 套间数量 84.3"
      },
      "suiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "套间数量 78.3"
      },
      "unusedCapacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "未分配数量 88.3"
      },
      "usedCapacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "已分配数量 87.3"
      },
      "usedPercent": {
        "type": "number",
        "description": "已分配 百分比  92"
      },
      "usedSuiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "已分配 套间数量 85.3"
      }
    }
  },
  "房产-决策-全部结果": {
    "type": "object",
    "properties": {
      "allocationRspDto": {
        "properties": {
          "inUsedAreaList": {
            "type": "array",
            "description": "分配面积列表",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "地址"
                },
                "buildArea": {
                  "type": "number",
                  "description": "面积"
                }
              }
            }
          },
          "unUsedAreaList": {
            "type": "array",
            "description": "未分配面积列表",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "地址"
                },
                "buildArea": {
                  "type": "number",
                  "description": "面积"
                }
              }
            }
          }
        }
      },
      "areaTotalRspDto": {
        "properties": {
          "buildArea": {
            "type": "number",
            "description": "建筑面积"
          },
          "ownBuildArea": {
            "type": "number",
            "description": "自有面积"
          },
          "propertyEmployeeCount": {
            "type": "integer",
            "format": "int64",
            "description": "物业口径人数（人）"
          },
          "propertyPointCount": {
            "type": "integer",
            "format": "int64",
            "description": "物业点数量（个）"
          },
          "rentBuildArea": {
            "type": "number",
            "description": "租入面积"
          }
        }
      },
      "decisionDstTotalRspDto": {
        "properties": {
          "ownAreaItemRspDtoList": {
            "type": "array",
            "description": "自有面积",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "x轴坐标名称"
                },
                "propertyArea": {
                  "type": "number",
                  "description": "物业面积值"
                }
              }
            }
          },
          "ownCountItemRspDtoList": {
            "type": "array",
            "description": "自有数量",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "x轴坐标名称"
                },
                "propertyCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "物业（房产）数量(处)"
                }
              }
            }
          },
          "rentAreaItemRspDtoList": {
            "type": "array",
            "description": "租入面积",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "x轴坐标名称"
                },
                "propertyArea": {
                  "type": "number",
                  "description": "物业面积值"
                }
              }
            }
          },
          "rentCountItemRspDtoList": {
            "type": "array",
            "description": "租入数量",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "x轴坐标名称"
                },
                "propertyCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "物业（房产）数量(处)"
                }
              }
            }
          }
        }
      },
      "departmentUsedRspDtoList": {
        "type": "array",
        "description": "办公物业面积排行（部门）",
        "items": {
          "properties": {
            "departmentId": {
              "type": "integer",
              "format": "int64",
              "description": "部门ID"
            },
            "departmentName": {
              "type": "string",
              "description": "部门名称"
            },
            "usedArea": {
              "type": "number",
              "description": "使用面积"
            }
          }
        }
      },
      "departmentUsedTopList": {
        "type": "array",
        "description": "部门人均使用面积分布（TOP100）",
        "items": {
          "properties": {
            "departmentName": {
              "type": "string",
              "description": "部门名称"
            },
            "deptOrder": {
              "type": "integer",
              "format": "int32",
              "description": "部门序号(横坐标）"
            },
            "usedPercent": {
              "type": "number",
              "description": "使用率"
            }
          }
        }
      },
      "officeBuildAreaRspDto": {
        "properties": {
          "buildArea": {
            "type": "number",
            "description": "办公物业总面积"
          },
          "ownBuildArea": {
            "type": "number",
            "description": "自有办公物业面积"
          },
          "rentBuildArea": {
            "type": "number",
            "description": "租入办公物业面积"
          }
        }
      },
      "officePropertyPlanRspDto": {
        "properties": {
          "buildArea": {
            "type": "number",
            "description": "房产管理面积"
          },
          "items": {
            "type": "array",
            "description": "规划类型面积分布",
            "items": {
              "properties": {
                "planningArea": {
                  "type": "number",
                  "description": "规划面积"
                },
                "planningTypeName": {
                  "type": "string",
                  "description": "规划类型名称"
                }
              }
            }
          },
          "planBuildArea": {
            "type": "number",
            "description": "已规划面积"
          },
          "unPlanBuildArea": {
            "type": "number",
            "description": "未规划面积"
          }
        }
      },
      "personDstRspDto": {
        "properties": {
          "allList": {
            "type": "array",
            "description": "物业口径人数变化:全部",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "employeeList": {
            "type": "array",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "leaseList": {
            "type": "array",
            "description": "物业口径人数变化:租户",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "outsourceList": {
            "type": "array",
            "description": "物业口径人数变化:外包",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "personCountPctRspDto": {
            "properties": {
              "employeeCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 员工"
              },
              "leaseCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 租户"
              },
              "outsourceCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 外包"
              },
              "propertyCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 物业"
              },
              "visitorCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 访客"
              }
            }
          },
          "propertyList": {
            "type": "array",
            "description": "物业口径人数变化:物业",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "visitorList": {
            "type": "array",
            "description": "物业口径人数变化:访客",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          }
        }
      },
      "planEmptyRspDto": {
        "properties": {
          "ownPlanBuildArea": {
            "type": "number",
            "description": "自有建筑面积 9"
          },
          "ownUnusedArea": {
            "type": "number",
            "description": "自有办公空置面积 40"
          },
          "ownUnusedPercent": {
            "type": "number",
            "description": "自有空置率 50"
          },
          "planBuildArea": {
            "type": "number",
            "description": "规划建筑面积 7"
          },
          "rentPlanBuildArea": {
            "type": "number",
            "description": "租入建筑面积 10"
          },
          "rentUnusedArea": {
            "type": "number",
            "description": "租入办公空置面积 41"
          },
          "rentUnusedPercent": {
            "type": "number",
            "description": "租入空置率 51"
          },
          "unUsedArea": {
            "type": "number",
            "description": "空置面积 52"
          },
          "unusedPercent": {
            "type": "number",
            "description": "办公空置率,平均空置率 43"
          }
        }
      },
      "usedAreaAvgRspDto": {
        "properties": {
          "deptCount": {
            "type": "array",
            "description": "人均使用面积分段内的部门数",
            "items": {
              "type": "integer",
              "format": "int32"
            }
          },
          "first": {
            "type": "array",
            "description": "步长第一",
            "items": {
              "type": "integer",
              "format": "int64"
            }
          },
          "second": {
            "type": "array",
            "description": "步长第二",
            "items": {
              "type": "integer",
              "format": "int64"
            }
          }
        }
      }
    }
  },
  "预算汇总-响应": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址"
      },
      "budgetMonth": {
        "type": "string",
        "description": "月"
      },
      "budgetYear": {
        "type": "string",
        "description": "年"
      },
      "city": {
        "type": "string",
        "description": "市级行政区划"
      },
      "cityId": {
        "type": "integer",
        "format": "int64",
        "description": "城市id"
      },
      "country": {
        "type": "string",
        "description": "国家"
      },
      "countryId": {
        "type": "integer",
        "format": "int64",
        "description": "国家id"
      },
      "district": {
        "type": "string",
        "description": "区县级行政区划"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区县id"
      },
      "districtLat": {
        "type": "number",
        "description": "区县纬度"
      },
      "districtLng": {
        "type": "number",
        "description": "区县经度"
      },
      "finMExeAmt": {
        "type": "number",
        "description": "月度执行(发生)数"
      },
      "finYrBgtAmt": {
        "type": "number",
        "description": "年度预算数"
      },
      "finYtdExeAmt": {
        "type": "number",
        "description": "年累计预算执行数"
      },
      "finYtdExeAmtPct": {
        "type": "number",
        "description": "年累计预算执行率"
      },
      "gdLat": {
        "type": "number",
        "description": "物业点纬度"
      },
      "gdLng": {
        "type": "number",
        "description": "物业点经度"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "数据库主键"
      },
      "orgId": {
        "type": "integer",
        "format": "int64",
        "description": "组织id，1默认招行"
      },
      "orgName": {
        "type": "string",
        "description": "组织名，1写死招商银行"
      },
      "period": {
        "type": "string",
        "description": "年月期间"
      },
      "ppId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点id"
      },
      "ppName": {
        "type": "string",
        "description": "物业点名称"
      },
      "province": {
        "type": "string",
        "description": "省级行政区划"
      },
      "provinceId": {
        "type": "integer",
        "format": "int64",
        "description": "省份id"
      },
      "region": {
        "type": "string",
        "description": "分区名称"
      },
      "regionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区id"
      },
      "supplierId": {
        "type": "integer",
        "format": "int64",
        "description": "物业商id"
      },
      "supplierName": {
        "type": "string"
      }
    }
  },
  "统一响应体Of预算-决策-全部数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "accExecMonth": {
            "type": "array",
            "description": "累计预算执行率分月趋势 74.2",
            "items": {
              "properties": {
                "execPercent": {
                  "type": "number",
                  "description": "执行率"
                },
                "period": {
                  "type": "string",
                  "description": "预算执行期间"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "accExecPercent": {
            "type": "array",
            "description": "累计预算执行率 74.1",
            "items": {
              "properties": {
                "execPercent": {
                  "type": "number",
                  "description": "执行率"
                },
                "period": {
                  "type": "string",
                  "description": "预算执行期间"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "accExecPercentDst": {
            "type": "array",
            "description": "累计预算执行率分布 77",
            "items": {
              "properties": {
                "budgetAmount": {
                  "type": "number",
                  "description": "预算数"
                },
                "execAmount": {
                  "type": "number",
                  "description": "执行数"
                },
                "period": {
                  "type": "string",
                  "description": "预算执行期间"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "accExecPercentOrder": {
            "type": "array",
            "description": "累计预算执行物业点排名 74.1",
            "items": {
              "properties": {
                "execPercent": {
                  "type": "number",
                  "description": "执行率"
                },
                "period": {
                  "type": "string",
                  "description": "预算执行期间"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "accExecStructure": {
            "type": "array",
            "description": "累计预算执行数结构 73.1",
            "items": {
              "properties": {
                "money": {
                  "type": "number",
                  "description": "金额"
                },
                "moneyPercent": {
                  "type": "number",
                  "description": "比率"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "accExecStructureOrder": {
            "type": "array",
            "description": "累计预算执行数物业点排名 73.1",
            "items": {
              "properties": {
                "money": {
                  "type": "number",
                  "description": "金额"
                },
                "moneyPercent": {
                  "type": "number",
                  "description": "比率"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "execMonthPercent": {
            "type": "array",
            "description": "月度预算执行率 75.1",
            "items": {
              "properties": {
                "execPercent": {
                  "type": "number",
                  "description": "执行率"
                },
                "period": {
                  "type": "string",
                  "description": "预算执行期间"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "execMonthPropertyPointOrder": {
            "type": "array",
            "description": "月度预算执行数物业点排名 72.1",
            "items": {
              "properties": {
                "money": {
                  "type": "number",
                  "description": "金额"
                },
                "moneyPercent": {
                  "type": "number",
                  "description": "比率"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "summaryRspDto": {
            "properties": {
              "exec": {
                "type": "number",
                "description": "预算执行（费用被选发生）总额（元）"
              },
              "execPercent": {
                "type": "number",
                "description": "预算执行率"
              },
              "total": {
                "type": "number",
                "description": "预算总额"
              }
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
  },
  "RevolveReqDto": {
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "市"
      },
      "communityName": {
        "type": "string",
        "description": "小区名称"
      },
      "country": {
        "type": "string",
        "description": "国家:固定值，中国"
      },
      "district": {
        "type": "string",
        "description": "区"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区ID"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "partitionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区ID"
      },
      "period": {
        "type": "string",
        "description": "月度"
      },
      "propertyPointId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "province": {
        "type": "string",
        "description": "省"
      },
      "statDate": {
        "type": "string",
        "description": "统计时间,默认为当前时间的前一天"
      }
    }
  },
  "房产-楼层统计信息-全信息-最终结果": {
    "type": "object",
    "properties": {
      "abstractInfoRspDto": {
        "properties": {
          "buildArea": {
            "type": "number",
            "description": "建筑面积"
          },
          "levelCount": {
            "type": "integer",
            "format": "int64",
            "description": "楼层数"
          },
          "propertyPersonCount": {
            "type": "integer",
            "format": "int64",
            "description": "物业口径人数"
          }
        }
      },
      "allocationPctRspDtoList": {
        "type": "array",
        "description": "房产分配率变化趋势",
        "items": {
          "properties": {
            "allocationPct": {
              "type": "number",
              "description": "分配率"
            },
            "hisDate": {
              "type": "string",
              "description": "时间"
            }
          }
        }
      },
      "emptyRspDto": {
        "properties": {
          "ownPlanBuildArea": {
            "type": "number",
            "description": "自有建筑面积 9"
          },
          "ownUnusedArea": {
            "type": "number",
            "description": "自有办公空置面积 40"
          },
          "ownUnusedPercent": {
            "type": "number",
            "description": "自有空置率 50"
          },
          "planBuildArea": {
            "type": "number",
            "description": "规划建筑面积 7"
          },
          "rentPlanBuildArea": {
            "type": "number",
            "description": "租入建筑面积 10"
          },
          "rentUnusedArea": {
            "type": "number",
            "description": "租入办公空置面积 41"
          },
          "rentUnusedPercent": {
            "type": "number",
            "description": "租入空置率 51"
          },
          "unUsedArea": {
            "type": "number",
            "description": "空置面积 52"
          },
          "unusedPercent": {
            "type": "number",
            "description": "办公空置率,平均空置率 43"
          }
        }
      },
      "personDstRspDto": {
        "properties": {
          "allList": {
            "type": "array",
            "description": "物业口径人数变化:全部",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "employeeList": {
            "type": "array",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "leaseList": {
            "type": "array",
            "description": "物业口径人数变化:租户",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "outsourceList": {
            "type": "array",
            "description": "物业口径人数变化:外包",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "personCountPctRspDto": {
            "properties": {
              "employeeCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 员工"
              },
              "leaseCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 租户"
              },
              "outsourceCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 外包"
              },
              "propertyCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 物业"
              },
              "visitorCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点办公人数： 访客"
              }
            }
          },
          "propertyList": {
            "type": "array",
            "description": "物业口径人数变化:物业",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          },
          "visitorList": {
            "type": "array",
            "description": "物业口径人数变化:访客",
            "items": {
              "properties": {
                "attendDate": {
                  "type": "string",
                  "description": "加入时间"
                },
                "groupType": {
                  "type": "string",
                  "description": "员工类型"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人员数量"
                }
              }
            }
          }
        }
      }
    }
  },
  "房产-物业口径人口信息-分布情况": {
    "type": "object",
    "properties": {
      "allList": {
        "type": "array",
        "description": "物业口径人数变化:全部",
        "items": {
          "properties": {
            "attendDate": {
              "type": "string",
              "description": "加入时间"
            },
            "groupType": {
              "type": "string",
              "description": "员工类型"
            },
            "personCount": {
              "type": "integer",
              "format": "int64",
              "description": "人员数量"
            }
          }
        }
      },
      "employeeList": {
        "type": "array",
        "items": {
          "properties": {
            "attendDate": {
              "type": "string",
              "description": "加入时间"
            },
            "groupType": {
              "type": "string",
              "description": "员工类型"
            },
            "personCount": {
              "type": "integer",
              "format": "int64",
              "description": "人员数量"
            }
          }
        }
      },
      "leaseList": {
        "type": "array",
        "description": "物业口径人数变化:租户",
        "items": {
          "properties": {
            "attendDate": {
              "type": "string",
              "description": "加入时间"
            },
            "groupType": {
              "type": "string",
              "description": "员工类型"
            },
            "personCount": {
              "type": "integer",
              "format": "int64",
              "description": "人员数量"
            }
          }
        }
      },
      "outsourceList": {
        "type": "array",
        "description": "物业口径人数变化:外包",
        "items": {
          "properties": {
            "attendDate": {
              "type": "string",
              "description": "加入时间"
            },
            "groupType": {
              "type": "string",
              "description": "员工类型"
            },
            "personCount": {
              "type": "integer",
              "format": "int64",
              "description": "人员数量"
            }
          }
        }
      },
      "personCountPctRspDto": {
        "properties": {
          "employeeCount": {
            "type": "integer",
            "format": "int64",
            "description": "物业点办公人数： 员工"
          },
          "leaseCount": {
            "type": "integer",
            "format": "int64",
            "description": "物业点办公人数： 租户"
          },
          "outsourceCount": {
            "type": "integer",
            "format": "int64",
            "description": "物业点办公人数： 外包"
          },
          "propertyCount": {
            "type": "integer",
            "format": "int64",
            "description": "物业点办公人数： 物业"
          },
          "visitorCount": {
            "type": "integer",
            "format": "int64",
            "description": "物业点办公人数： 访客"
          }
        }
      },
      "propertyList": {
        "type": "array",
        "description": "物业口径人数变化:物业",
        "items": {
          "properties": {
            "attendDate": {
              "type": "string",
              "description": "加入时间"
            },
            "groupType": {
              "type": "string",
              "description": "员工类型"
            },
            "personCount": {
              "type": "integer",
              "format": "int64",
              "description": "人员数量"
            }
          }
        }
      },
      "visitorList": {
        "type": "array",
        "description": "物业口径人数变化:访客",
        "items": {
          "properties": {
            "attendDate": {
              "type": "string",
              "description": "加入时间"
            },
            "groupType": {
              "type": "string",
              "description": "员工类型"
            },
            "personCount": {
              "type": "integer",
              "format": "int64",
              "description": "人员数量"
            }
          }
        }
      }
    }
  },
  "FM指标统计-响应": {
    "type": "object",
    "properties": {
      "area": {
        "type": "integer",
        "format": "int64",
        "description": "面积"
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "当前数据日期"
      },
      "deAvgAttitudeScore": {
        "type": "integer",
        "format": "int32",
        "description": "平均服务态度评分"
      },
      "deAvgQualityScore": {
        "type": "integer",
        "format": "int32",
        "description": "平均服务质量评分"
      },
      "deAvgResTime": {
        "type": "number",
        "description": "平均响应时间（分钟）"
      },
      "deAvgSpeedScore": {
        "type": "integer",
        "format": "int32",
        "description": "平均服务速度评分"
      },
      "deComRate": {
        "type": "number",
        "description": "完成率"
      },
      "deTotal": {
        "type": "integer",
        "format": "int32",
        "description": "需求总量"
      },
      "employeeNum": {
        "type": "integer",
        "format": "int64",
        "description": "人数"
      },
      "facImprotantRate": {
        "type": "number",
        "description": "重要设备完好率"
      },
      "facNormalRate": {
        "type": "number",
        "description": "一般设备完好率"
      },
      "facVeryImpRate": {
        "type": "number",
        "description": "非常重要设备完好率"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "标识"
      },
      "ipPiontComRate": {
        "type": "number",
        "description": "巡检点完成率"
      },
      "ipPiontExceptionRate": {
        "type": "number",
        "description": "巡检点异常率"
      },
      "ipPiontOntimeRate": {
        "type": "number",
        "description": "巡检点及时完成率"
      },
      "ipPiontReComRate": {
        "type": "number",
        "description": "巡检点位异常报修完成率"
      },
      "ipPiontRepairRate": {
        "type": "number",
        "description": "巡检点异常报修率"
      },
      "ipPiontTotal": {
        "type": "integer",
        "format": "int32",
        "description": "巡检点总量"
      },
      "ipTaskComRate": {
        "type": "number",
        "description": "巡检任务完成率"
      },
      "ipTaskOntimeRate": {
        "type": "number",
        "description": "巡检任务及时完成率"
      },
      "ipTaskTotal": {
        "type": "integer",
        "format": "int32",
        "description": "巡检任务总量"
      },
      "maintTaskComRate": {
        "type": "number",
        "description": "维护任务完成率"
      },
      "maintTaskOntimeRate": {
        "type": "number",
        "description": "维护任务及时完成率"
      },
      "miantTaskTotal": {
        "type": "integer",
        "format": "int32",
        "description": "维护任务总量"
      },
      "refId": {
        "type": "integer",
        "format": "int64",
        "description": "关联ID"
      },
      "refName": {
        "type": "string",
        "description": "关联名称"
      },
      "refType": {
        "type": "string",
        "description": "1-项目，2-物业"
      },
      "timeIndex": {
        "type": "string",
        "description": "1-天，2-周，3-月，4-季度，5-年"
      },
      "woComOntimeRate": {
        "type": "number",
        "description": "及时完成率"
      },
      "woComRate": {
        "type": "number",
        "description": "派单完成率"
      },
      "woReRate": {
        "type": "number",
        "description": "接单响应及时率"
      },
      "woSeRate": {
        "type": "number",
        "description": "派单响应及时率"
      },
      "woTotal": {
        "type": "integer",
        "format": "int32",
        "description": "工单总量"
      }
    }
  },
  "OperationInspectStRspDto": {
    "type": "object",
    "properties": {
      "inspectExceptionStatisticInfo": {
        "properties": {
          "data": {
            "properties": {
              "columns": {
                "type": "array",
                "description": "列表数据格式",
                "items": {
                  "properties": {
                    "dataIndex": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    }
                  }
                }
              },
              "dataSource": {
                "type": "array",
                "description": "数据源",
                "items": {
                  "additionalProperties": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "inspectFinishStatisticInfo": {
        "properties": {
          "data": {
            "properties": {
              "columns": {
                "type": "array",
                "description": "列表数据格式",
                "items": {
                  "properties": {
                    "dataIndex": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    }
                  }
                }
              },
              "dataSource": {
                "type": "array",
                "description": "数据源",
                "items": {
                  "additionalProperties": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "inspectSiteAndCompRate": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "inspectSiteExceptionInfo": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "inspectTaskAndCompRate": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "projectInfo": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "周转房-统计项-员工类型汇总": {
    "type": "object",
    "properties": {
      "personCount": {
        "type": "integer",
        "format": "int32",
        "description": "员工数量"
      },
      "personType": {
        "type": "string",
        "description": "员工类型"
      }
    }
  },
  "统一响应体Of逆经纬度解析-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "geoIds": {
            "type": "string",
            "description": "省市区Id"
          },
          "geoLabels": {
            "type": "string",
            "description": "省市区名称"
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
  },
  "周转房-统计项-员工周转房房源状态-响应": {
    "type": "object",
    "properties": {
      "emptyData": {
        "properties": {
          "num": {
            "type": "integer",
            "format": "int32",
            "description": "周转房数量"
          },
          "rate": {
            "type": "number",
            "description": "百分比（num/总数量）"
          }
        }
      },
      "emptyRate": {
        "type": "number",
        "description": "平均空置率"
      },
      "fullData": {
        "properties": {
          "num": {
            "type": "integer",
            "format": "int32",
            "description": "周转房数量"
          },
          "rate": {
            "type": "number",
            "description": "百分比（num/总数量）"
          }
        }
      },
      "partialData": {
        "properties": {
          "num": {
            "type": "integer",
            "format": "int32",
            "description": "周转房数量"
          },
          "rate": {
            "type": "number",
            "description": "百分比（num/总数量）"
          }
        }
      },
      "total": {
        "type": "integer",
        "format": "int32",
        "description": "房产总数"
      }
    }
  },
  "统一响应体Of房产-决策-全部结果": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "allocationRspDto": {
            "properties": {
              "inUsedAreaList": {
                "type": "array",
                "description": "分配面积列表",
                "items": {
                  "properties": {
                    "address": {
                      "type": "string",
                      "description": "地址"
                    },
                    "buildArea": {
                      "type": "number",
                      "description": "面积"
                    }
                  }
                }
              },
              "unUsedAreaList": {
                "type": "array",
                "description": "未分配面积列表",
                "items": {
                  "properties": {
                    "address": {
                      "type": "string",
                      "description": "地址"
                    },
                    "buildArea": {
                      "type": "number",
                      "description": "面积"
                    }
                  }
                }
              }
            }
          },
          "areaTotalRspDto": {
            "properties": {
              "buildArea": {
                "type": "number",
                "description": "建筑面积"
              },
              "ownBuildArea": {
                "type": "number",
                "description": "自有面积"
              },
              "propertyEmployeeCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业口径人数（人）"
              },
              "propertyPointCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业点数量（个）"
              },
              "rentBuildArea": {
                "type": "number",
                "description": "租入面积"
              }
            }
          },
          "decisionDstTotalRspDto": {
            "properties": {
              "ownAreaItemRspDtoList": {
                "type": "array",
                "description": "自有面积",
                "items": {
                  "properties": {
                    "address": {
                      "type": "string",
                      "description": "x轴坐标名称"
                    },
                    "propertyArea": {
                      "type": "number",
                      "description": "物业面积值"
                    }
                  }
                }
              },
              "ownCountItemRspDtoList": {
                "type": "array",
                "description": "自有数量",
                "items": {
                  "properties": {
                    "address": {
                      "type": "string",
                      "description": "x轴坐标名称"
                    },
                    "propertyCount": {
                      "type": "integer",
                      "format": "int32",
                      "description": "物业（房产）数量(处)"
                    }
                  }
                }
              },
              "rentAreaItemRspDtoList": {
                "type": "array",
                "description": "租入面积",
                "items": {
                  "properties": {
                    "address": {
                      "type": "string",
                      "description": "x轴坐标名称"
                    },
                    "propertyArea": {
                      "type": "number",
                      "description": "物业面积值"
                    }
                  }
                }
              },
              "rentCountItemRspDtoList": {
                "type": "array",
                "description": "租入数量",
                "items": {
                  "properties": {
                    "address": {
                      "type": "string",
                      "description": "x轴坐标名称"
                    },
                    "propertyCount": {
                      "type": "integer",
                      "format": "int32",
                      "description": "物业（房产）数量(处)"
                    }
                  }
                }
              }
            }
          },
          "departmentUsedRspDtoList": {
            "type": "array",
            "description": "办公物业面积排行（部门）",
            "items": {
              "properties": {
                "departmentId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "部门ID"
                },
                "departmentName": {
                  "type": "string",
                  "description": "部门名称"
                },
                "usedArea": {
                  "type": "number",
                  "description": "使用面积"
                }
              }
            }
          },
          "departmentUsedTopList": {
            "type": "array",
            "description": "部门人均使用面积分布（TOP100）",
            "items": {
              "properties": {
                "departmentName": {
                  "type": "string",
                  "description": "部门名称"
                },
                "deptOrder": {
                  "type": "integer",
                  "format": "int32",
                  "description": "部门序号(横坐标）"
                },
                "usedPercent": {
                  "type": "number",
                  "description": "使用率"
                }
              }
            }
          },
          "officeBuildAreaRspDto": {
            "properties": {
              "buildArea": {
                "type": "number",
                "description": "办公物业总面积"
              },
              "ownBuildArea": {
                "type": "number",
                "description": "自有办公物业面积"
              },
              "rentBuildArea": {
                "type": "number",
                "description": "租入办公物业面积"
              }
            }
          },
          "officePropertyPlanRspDto": {
            "properties": {
              "buildArea": {
                "type": "number",
                "description": "房产管理面积"
              },
              "items": {
                "type": "array",
                "description": "规划类型面积分布",
                "items": {
                  "properties": {
                    "planningArea": {
                      "type": "number",
                      "description": "规划面积"
                    },
                    "planningTypeName": {
                      "type": "string",
                      "description": "规划类型名称"
                    }
                  }
                }
              },
              "planBuildArea": {
                "type": "number",
                "description": "已规划面积"
              },
              "unPlanBuildArea": {
                "type": "number",
                "description": "未规划面积"
              }
            }
          },
          "personDstRspDto": {
            "properties": {
              "allList": {
                "type": "array",
                "description": "物业口径人数变化:全部",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "employeeList": {
                "type": "array",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "leaseList": {
                "type": "array",
                "description": "物业口径人数变化:租户",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "outsourceList": {
                "type": "array",
                "description": "物业口径人数变化:外包",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "personCountPctRspDto": {
                "properties": {
                  "employeeCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 员工"
                  },
                  "leaseCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 租户"
                  },
                  "outsourceCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 外包"
                  },
                  "propertyCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 物业"
                  },
                  "visitorCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 访客"
                  }
                }
              },
              "propertyList": {
                "type": "array",
                "description": "物业口径人数变化:物业",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "visitorList": {
                "type": "array",
                "description": "物业口径人数变化:访客",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              }
            }
          },
          "planEmptyRspDto": {
            "properties": {
              "ownPlanBuildArea": {
                "type": "number",
                "description": "自有建筑面积 9"
              },
              "ownUnusedArea": {
                "type": "number",
                "description": "自有办公空置面积 40"
              },
              "ownUnusedPercent": {
                "type": "number",
                "description": "自有空置率 50"
              },
              "planBuildArea": {
                "type": "number",
                "description": "规划建筑面积 7"
              },
              "rentPlanBuildArea": {
                "type": "number",
                "description": "租入建筑面积 10"
              },
              "rentUnusedArea": {
                "type": "number",
                "description": "租入办公空置面积 41"
              },
              "rentUnusedPercent": {
                "type": "number",
                "description": "租入空置率 51"
              },
              "unUsedArea": {
                "type": "number",
                "description": "空置面积 52"
              },
              "unusedPercent": {
                "type": "number",
                "description": "办公空置率,平均空置率 43"
              }
            }
          },
          "usedAreaAvgRspDto": {
            "properties": {
              "deptCount": {
                "type": "array",
                "description": "人均使用面积分段内的部门数",
                "items": {
                  "type": "integer",
                  "format": "int32"
                }
              },
              "first": {
                "type": "array",
                "description": "步长第一",
                "items": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "second": {
                "type": "array",
                "description": "步长第二",
                "items": {
                  "type": "integer",
                  "format": "int64"
                }
              }
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
  },
  "周转房-月度人员变动人数": {
    "type": "object",
    "properties": {
      "ciItems": {
        "type": "array",
        "items": {
          "properties": {
            "period": {
              "type": "string",
              "description": "月度"
            },
            "personCount": {
              "type": "integer",
              "format": "int32",
              "description": "数量"
            },
            "statusDesc": {
              "type": "string",
              "description": "状态"
            }
          }
        }
      },
      "coItems": {
        "type": "array",
        "items": {
          "properties": {
            "period": {
              "type": "string",
              "description": "月度"
            },
            "personCount": {
              "type": "integer",
              "format": "int32",
              "description": "数量"
            },
            "statusDesc": {
              "type": "string",
              "description": "状态"
            }
          }
        }
      },
      "periods": {
        "type": "array",
        "description": "月份",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "房产-决策-部门人均使用面积分布": {
    "type": "object",
    "properties": {
      "departmentId": {
        "type": "integer",
        "format": "int64",
        "description": "部门ID"
      },
      "departmentName": {
        "type": "string",
        "description": "部门名称"
      },
      "usedArea": {
        "type": "number",
        "description": "使用面积"
      }
    }
  },
  "全部项目列表-数据": {
    "type": "object",
    "properties": {
      "area": {
        "type": "integer",
        "format": "int64",
        "description": "项目面积"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "项目ID"
      },
      "name": {
        "type": "string",
        "description": "项目名称"
      }
    }
  },
  "雷达数据-series": {
    "type": "object",
    "properties": {
      "data": {
        "type": "array",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "array",
              "items": {}
            }
          }
        }
      },
      "name": {
        "type": "string"
      }
    }
  },
  "统一响应体Of预算-预算执行期间项": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "defaultValue": {
            "type": "string",
            "description": "默认值"
          },
          "periods": {
            "type": "array",
            "description": "预算期间",
            "items": {
              "type": "string"
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
  },
  "列表数据结构": {
    "type": "object",
    "properties": {
      "columns": {
        "type": "array",
        "description": "列表数据格式",
        "items": {
          "properties": {
            "dataIndex": {
              "type": "string"
            },
            "title": {
              "type": "string"
            }
          }
        }
      },
      "dataSource": {
        "type": "array",
        "description": "数据源",
        "items": {
          "additionalProperties": {
            "type": "object"
          }
        }
      }
    }
  },
  "YAxisShow": {
    "type": "object",
    "properties": {
      "show": {
        "type": "boolean"
      }
    }
  },
  "周转房-员工周转房概况": {
    "type": "object",
    "properties": {
      "capacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "套间总数量 86.1"
      },
      "capacityTotalCount": {
        "type": "integer",
        "format": "int32",
        "description": "员工周转房房源总量 86.1"
      },
      "emptySuiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "空置 套间数量 84.1"
      },
      "suiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "套间数量 78.1"
      },
      "unusedCapacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "未分配数量 88.1"
      },
      "usedCapacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "已分配数量 87.1"
      },
      "usedPercent": {
        "type": "number",
        "description": "已分配 百分比  81"
      },
      "usedSuiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "已分配 套间数量 85.1"
      }
    }
  },
  "NamedRankDto": {
    "type": "object",
    "properties": {
      "data": {
        "properties": {
          "columns": {
            "type": "array",
            "description": "列表数据格式",
            "items": {
              "properties": {
                "dataIndex": {
                  "type": "string"
                },
                "title": {
                  "type": "string"
                }
              }
            }
          },
          "dataSource": {
            "type": "array",
            "description": "数据源",
            "items": {
              "additionalProperties": {
                "type": "object"
              }
            }
          }
        }
      },
      "name": {
        "type": "string"
      }
    }
  },
  "统一响应体OfListOf房产统计-按房产统计的房产信息": {
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
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "basements": {
              "type": "array",
              "description": "地下室楼层列表",
              "items": {
                "properties": {
                  "address": {
                    "type": "string",
                    "description": "地址"
                  },
                  "amBuildArea": {
                    "type": "number",
                    "format": "double",
                    "description": "建筑面积"
                  },
                  "amUnusedArea": {
                    "type": "number",
                    "format": "double",
                    "description": "空置面积"
                  },
                  "amUsedArea": {
                    "type": "number",
                    "format": "double",
                    "description": "使用面积"
                  },
                  "amUsedAreaPct": {
                    "type": "number",
                    "format": "double",
                    "description": "空置率"
                  },
                  "buildingId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "房产ID"
                  },
                  "buildingName": {
                    "type": "string",
                    "description": "房产名称"
                  },
                  "files": {
                    "type": "string",
                    "description": "房产图片信息：JSON字符串"
                  },
                  "floorFiles": {
                    "type": "string",
                    "description": "楼层图片信息：JSON字符串"
                  },
                  "floorId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "楼层ID"
                  },
                  "floorName": {
                    "type": "string",
                    "description": "楼层名称"
                  },
                  "floorPositionText": {
                    "type": "string",
                    "description": "楼体名称"
                  },
                  "floorSort": {
                    "type": "integer",
                    "format": "int64",
                    "description": "楼层排序"
                  },
                  "partitionName": {
                    "type": "string",
                    "description": "分区"
                  },
                  "propertyPointName": {
                    "type": "string",
                    "description": "物业点"
                  }
                }
              }
            },
            "buildingArea": {
              "type": "number",
              "description": "房产面积"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "mains": {
              "type": "array",
              "description": "主楼楼层列表",
              "items": {
                "properties": {
                  "address": {
                    "type": "string",
                    "description": "地址"
                  },
                  "amBuildArea": {
                    "type": "number",
                    "format": "double",
                    "description": "建筑面积"
                  },
                  "amUnusedArea": {
                    "type": "number",
                    "format": "double",
                    "description": "空置面积"
                  },
                  "amUsedArea": {
                    "type": "number",
                    "format": "double",
                    "description": "使用面积"
                  },
                  "amUsedAreaPct": {
                    "type": "number",
                    "format": "double",
                    "description": "空置率"
                  },
                  "buildingId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "房产ID"
                  },
                  "buildingName": {
                    "type": "string",
                    "description": "房产名称"
                  },
                  "files": {
                    "type": "string",
                    "description": "房产图片信息：JSON字符串"
                  },
                  "floorFiles": {
                    "type": "string",
                    "description": "楼层图片信息：JSON字符串"
                  },
                  "floorId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "楼层ID"
                  },
                  "floorName": {
                    "type": "string",
                    "description": "楼层名称"
                  },
                  "floorPositionText": {
                    "type": "string",
                    "description": "楼体名称"
                  },
                  "floorSort": {
                    "type": "integer",
                    "format": "int64",
                    "description": "楼层排序"
                  },
                  "partitionName": {
                    "type": "string",
                    "description": "分区"
                  },
                  "propertyPointName": {
                    "type": "string",
                    "description": "物业点"
                  }
                }
              }
            },
            "partitionName": {
              "type": "string",
              "description": "分区"
            },
            "pics": {
              "type": "string",
              "description": "房产图片：JSON"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点"
            },
            "skirts": {
              "type": "array",
              "description": "裙楼楼层列表",
              "items": {
                "properties": {
                  "address": {
                    "type": "string",
                    "description": "地址"
                  },
                  "amBuildArea": {
                    "type": "number",
                    "format": "double",
                    "description": "建筑面积"
                  },
                  "amUnusedArea": {
                    "type": "number",
                    "format": "double",
                    "description": "空置面积"
                  },
                  "amUsedArea": {
                    "type": "number",
                    "format": "double",
                    "description": "使用面积"
                  },
                  "amUsedAreaPct": {
                    "type": "number",
                    "format": "double",
                    "description": "空置率"
                  },
                  "buildingId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "房产ID"
                  },
                  "buildingName": {
                    "type": "string",
                    "description": "房产名称"
                  },
                  "files": {
                    "type": "string",
                    "description": "房产图片信息：JSON字符串"
                  },
                  "floorFiles": {
                    "type": "string",
                    "description": "楼层图片信息：JSON字符串"
                  },
                  "floorId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "楼层ID"
                  },
                  "floorName": {
                    "type": "string",
                    "description": "楼层名称"
                  },
                  "floorPositionText": {
                    "type": "string",
                    "description": "楼体名称"
                  },
                  "floorSort": {
                    "type": "integer",
                    "format": "int64",
                    "description": "楼层排序"
                  },
                  "partitionName": {
                    "type": "string",
                    "description": "分区"
                  },
                  "propertyPointName": {
                    "type": "string",
                    "description": "物业点"
                  }
                }
              }
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
  },
  "房产-规划面积-总数": {
    "type": "object",
    "properties": {
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "notPlan": {
        "type": "number",
        "description": "未规划面积"
      },
      "plan": {
        "type": "number",
        "description": "已规划面积"
      },
      "statDate": {
        "type": "string",
        "description": "统计时间,默认为当前时间的前一天"
      }
    }
  },
  "预算-决策-全部数据": {
    "type": "object",
    "properties": {
      "accExecMonth": {
        "type": "array",
        "description": "累计预算执行率分月趋势 74.2",
        "items": {
          "properties": {
            "execPercent": {
              "type": "number",
              "description": "执行率"
            },
            "period": {
              "type": "string",
              "description": "预算执行期间"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "accExecPercent": {
        "type": "array",
        "description": "累计预算执行率 74.1",
        "items": {
          "properties": {
            "execPercent": {
              "type": "number",
              "description": "执行率"
            },
            "period": {
              "type": "string",
              "description": "预算执行期间"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "accExecPercentDst": {
        "type": "array",
        "description": "累计预算执行率分布 77",
        "items": {
          "properties": {
            "budgetAmount": {
              "type": "number",
              "description": "预算数"
            },
            "execAmount": {
              "type": "number",
              "description": "执行数"
            },
            "period": {
              "type": "string",
              "description": "预算执行期间"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "accExecPercentOrder": {
        "type": "array",
        "description": "累计预算执行物业点排名 74.1",
        "items": {
          "properties": {
            "execPercent": {
              "type": "number",
              "description": "执行率"
            },
            "period": {
              "type": "string",
              "description": "预算执行期间"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "accExecStructure": {
        "type": "array",
        "description": "累计预算执行数结构 73.1",
        "items": {
          "properties": {
            "money": {
              "type": "number",
              "description": "金额"
            },
            "moneyPercent": {
              "type": "number",
              "description": "比率"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "accExecStructureOrder": {
        "type": "array",
        "description": "累计预算执行数物业点排名 73.1",
        "items": {
          "properties": {
            "money": {
              "type": "number",
              "description": "金额"
            },
            "moneyPercent": {
              "type": "number",
              "description": "比率"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "execMonthPercent": {
        "type": "array",
        "description": "月度预算执行率 75.1",
        "items": {
          "properties": {
            "execPercent": {
              "type": "number",
              "description": "执行率"
            },
            "period": {
              "type": "string",
              "description": "预算执行期间"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "execMonthPropertyPointOrder": {
        "type": "array",
        "description": "月度预算执行数物业点排名 72.1",
        "items": {
          "properties": {
            "money": {
              "type": "number",
              "description": "金额"
            },
            "moneyPercent": {
              "type": "number",
              "description": "比率"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "summaryRspDto": {
        "properties": {
          "exec": {
            "type": "number",
            "description": "预算执行（费用被选发生）总额（元）"
          },
          "execPercent": {
            "type": "number",
            "description": "预算执行率"
          },
          "total": {
            "type": "number",
            "description": "预算总额"
          }
        }
      }
    }
  },
  "AM地图-房产明细": {
    "type": "object",
    "properties": {
      "addName": {
        "type": "string",
        "description": "房产名称"
      },
      "addressDesc": {
        "type": "string",
        "description": "房产所在具体位置"
      },
      "buildArea": {
        "type": "number",
        "format": "double",
        "description": "房产建筑面积"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产ID"
      },
      "files": {
        "type": "string",
        "description": "房产图片信息"
      },
      "lat": {
        "type": "string",
        "description": "房产所在经度"
      },
      "lng": {
        "type": "string",
        "description": "房产所在纬度"
      }
    }
  },
  "逆经纬度解析-响应": {
    "type": "object",
    "properties": {
      "geoIds": {
        "type": "string",
        "description": "省市区Id"
      },
      "geoLabels": {
        "type": "string",
        "description": "省市区名称"
      }
    }
  },
  "百分比": {
    "type": "object",
    "properties": {
      "amount": {},
      "percent": {
        "type": "number"
      },
      "total": {}
    }
  },
  "单值-百分比列表数据": {
    "type": "object",
    "properties": {
      "percentList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "amount": {},
                "percent": {
                  "type": "number"
                },
                "total": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "singleList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "统一响应体OfListOfAM-地图-物业点信息": {
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
          "properties": {
            "partId": {
              "type": "integer",
              "format": "int64",
              "description": "分区ID"
            },
            "partName": {
              "type": "string",
              "description": "分区名称"
            },
            "pints": {
              "type": "array",
              "description": "业务员点列表",
              "items": {
                "properties": {
                  "pointId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点ID"
                  },
                  "pointName": {
                    "type": "string",
                    "description": "物业点名称"
                  }
                }
              }
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
  },
  "统一响应体OfListOf物业点-列表项": {
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
          "properties": {
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
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
  },
  "统一响应体Of周转房-入住人员类型分布": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "personTypeCounts": {
            "type": "array",
            "items": {
              "properties": {
                "personCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "员工数量"
                },
                "personType": {
                  "type": "string",
                  "description": "员工类型"
                }
              }
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
  },
  "预算-决策-物业点（组）年度、月度执行率全部结果（两年的）": {
    "type": "object",
    "properties": {
      "items": {
        "type": "array",
        "description": "月度列表",
        "items": {
          "properties": {
            "budgetAmount": {
              "type": "number",
              "description": "预算数"
            },
            "budgetMonth": {
              "type": "string",
              "description": "预算月度"
            },
            "budgetYear": {
              "type": "string",
              "description": "预算年度"
            },
            "execAmount": {
              "type": "number",
              "description": "执行数"
            }
          }
        }
      },
      "year": {
        "type": "string",
        "description": "预算年度"
      }
    }
  },
  "分页响应体OfFM指标统计-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "area": {
              "type": "integer",
              "format": "int64",
              "description": "面积"
            },
            "createTime": {
              "type": "string",
              "format": "date-time",
              "description": "创建时间"
            },
            "date": {
              "type": "string",
              "format": "date",
              "description": "当前数据日期"
            },
            "deAvgAttitudeScore": {
              "type": "integer",
              "format": "int32",
              "description": "平均服务态度评分"
            },
            "deAvgQualityScore": {
              "type": "integer",
              "format": "int32",
              "description": "平均服务质量评分"
            },
            "deAvgResTime": {
              "type": "number",
              "description": "平均响应时间（分钟）"
            },
            "deAvgSpeedScore": {
              "type": "integer",
              "format": "int32",
              "description": "平均服务速度评分"
            },
            "deComRate": {
              "type": "number",
              "description": "完成率"
            },
            "deTotal": {
              "type": "integer",
              "format": "int32",
              "description": "需求总量"
            },
            "employeeNum": {
              "type": "integer",
              "format": "int64",
              "description": "人数"
            },
            "facImprotantRate": {
              "type": "number",
              "description": "重要设备完好率"
            },
            "facNormalRate": {
              "type": "number",
              "description": "一般设备完好率"
            },
            "facVeryImpRate": {
              "type": "number",
              "description": "非常重要设备完好率"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "标识"
            },
            "ipPiontComRate": {
              "type": "number",
              "description": "巡检点完成率"
            },
            "ipPiontExceptionRate": {
              "type": "number",
              "description": "巡检点异常率"
            },
            "ipPiontOntimeRate": {
              "type": "number",
              "description": "巡检点及时完成率"
            },
            "ipPiontReComRate": {
              "type": "number",
              "description": "巡检点位异常报修完成率"
            },
            "ipPiontRepairRate": {
              "type": "number",
              "description": "巡检点异常报修率"
            },
            "ipPiontTotal": {
              "type": "integer",
              "format": "int32",
              "description": "巡检点总量"
            },
            "ipTaskComRate": {
              "type": "number",
              "description": "巡检任务完成率"
            },
            "ipTaskOntimeRate": {
              "type": "number",
              "description": "巡检任务及时完成率"
            },
            "ipTaskTotal": {
              "type": "integer",
              "format": "int32",
              "description": "巡检任务总量"
            },
            "maintTaskComRate": {
              "type": "number",
              "description": "维护任务完成率"
            },
            "maintTaskOntimeRate": {
              "type": "number",
              "description": "维护任务及时完成率"
            },
            "miantTaskTotal": {
              "type": "integer",
              "format": "int32",
              "description": "维护任务总量"
            },
            "refId": {
              "type": "integer",
              "format": "int64",
              "description": "关联ID"
            },
            "refName": {
              "type": "string",
              "description": "关联名称"
            },
            "refType": {
              "type": "string",
              "description": "1-项目，2-物业"
            },
            "timeIndex": {
              "type": "string",
              "description": "1-天，2-周，3-月，4-季度，5-年"
            },
            "woComOntimeRate": {
              "type": "number",
              "description": "及时完成率"
            },
            "woComRate": {
              "type": "number",
              "description": "派单完成率"
            },
            "woReRate": {
              "type": "number",
              "description": "接单响应及时率"
            },
            "woSeRate": {
              "type": "number",
              "description": "派单响应及时率"
            },
            "woTotal": {
              "type": "integer",
              "format": "int32",
              "description": "工单总量"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "-响应": {
    "type": "object",
    "properties": {
      "alcId": {
        "type": "integer",
        "format": "int64",
        "description": "分配入住记录id"
      },
      "alcPeriod": {
        "type": "string",
        "description": "操作生效期间"
      },
      "alcType": {
        "type": "string",
        "description": "周转类型"
      },
      "bedId": {
        "type": "integer",
        "format": "int64",
        "description": "床位id"
      },
      "bedName": {
        "type": "string",
        "description": "床位名称"
      },
      "beginDate": {
        "type": "string",
        "format": "date",
        "description": "入住日期"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产id，关联维度的外键"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "分配记录创建时间"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "自然日"
      },
      "employeeGender": {
        "type": "string",
        "description": "入住员工性别"
      },
      "employeeId": {
        "type": "integer",
        "format": "int64",
        "description": "入住员工id"
      },
      "employeeName": {
        "type": "string",
        "description": "入住员工姓名"
      },
      "endDate": {
        "type": "string",
        "format": "date",
        "description": "预计搬出日期"
      },
      "etlTime": {
        "type": "string",
        "format": "date-time",
        "description": "记录创建时间"
      },
      "floorId": {
        "type": "integer",
        "format": "int64",
        "description": "楼层id"
      },
      "floorName": {
        "type": "string",
        "description": "楼层名称"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "数据库主键id"
      },
      "modifyTime": {
        "type": "string",
        "format": "date-time",
        "description": "分配记录更新时间"
      },
      "nature": {
        "type": "string",
        "description": "性质"
      },
      "orgDepartmentId": {
        "type": "integer",
        "format": "int64",
        "description": "入住员工部门id"
      },
      "orgDepartmentName": {
        "type": "string",
        "description": "入住员工部门名称"
      },
      "refCode": {
        "type": "string",
        "description": "周转房单元类型编码"
      },
      "refId": {
        "type": "integer",
        "format": "int64",
        "description": "周转房物业单元id"
      },
      "revBuildArea": {
        "type": "number",
        "description": "建筑面积"
      },
      "revCapacity": {
        "type": "integer",
        "format": "int32",
        "description": "周转房容量"
      },
      "spaceId": {
        "type": "integer",
        "format": "int64",
        "description": "房间id"
      },
      "spaceName": {
        "type": "string",
        "description": "房间名称"
      },
      "spaceType": {
        "type": "string",
        "description": "周转房物业单元类型"
      },
      "spaceTypeDesc": {
        "type": "string",
        "description": "周转房物业单元类型描述"
      },
      "status": {
        "type": "integer",
        "format": "int32",
        "description": "分配入住状态"
      },
      "statusDesc": {
        "type": "string",
        "description": "分配状态描述"
      },
      "suiteId": {
        "type": "integer",
        "format": "int64",
        "description": "套间id"
      },
      "suiteLayout": {
        "type": "string",
        "description": "套间户型"
      },
      "suiteName": {
        "type": "string",
        "description": "套间名称"
      },
      "type": {
        "type": "string",
        "description": "类型(员工周转房、干部、人才)"
      },
      "urn": {
        "type": "integer",
        "format": "int32",
        "description": "已分配入住间夜数"
      }
    }
  },
  "周转房-地图右侧详情": {
    "type": "object",
    "properties": {
      "digestAllRspDto": {
        "properties": {
          "capacity": {
            "type": "integer",
            "format": "int32",
            "description": "当前可入住人数"
          },
          "digestCapacityRspDto": {
            "properties": {
              "percent": {
                "type": "number",
                "description": "百分比 80"
              },
              "total": {
                "type": "integer",
                "format": "int32",
                "description": "周转房套间总容量 86"
              },
              "unused": {
                "type": "integer",
                "format": "int32",
                "description": "未分配套间容量 88"
              },
              "used": {
                "type": "integer",
                "format": "int32",
                "description": "已分配套间容量 87"
              }
            }
          },
          "digestTotalRspDto": {
            "properties": {
              "empty": {
                "type": "integer",
                "format": "int32",
                "description": "空置数量 84"
              },
              "percent": {
                "type": "number",
                "description": "百分比 79"
              },
              "total": {
                "type": "integer",
                "format": "int32",
                "description": "总数 78"
              },
              "used": {
                "type": "integer",
                "format": "int32",
                "description": "已分配数量 85"
              }
            }
          }
        }
      },
      "periodPersonRspDto": {
        "properties": {
          "ciItems": {
            "type": "array",
            "items": {
              "properties": {
                "period": {
                  "type": "string",
                  "description": "月度"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "数量"
                },
                "statusDesc": {
                  "type": "string",
                  "description": "状态"
                }
              }
            }
          },
          "coItems": {
            "type": "array",
            "items": {
              "properties": {
                "period": {
                  "type": "string",
                  "description": "月度"
                },
                "personCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "数量"
                },
                "statusDesc": {
                  "type": "string",
                  "description": "状态"
                }
              }
            }
          },
          "periods": {
            "type": "array",
            "description": "月份",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "suitePersonTypeRspDto": {
        "properties": {
          "suitePersonRspDto": {
            "properties": {
              "emptySuite": {
                "type": "integer",
                "format": "int32",
                "description": "空置套间数量"
              },
              "fullSuite": {
                "type": "integer",
                "format": "int32",
                "description": "已住满数量 82"
              },
              "partialSuite": {
                "type": "integer",
                "format": "int32",
                "description": "未住满数量 83"
              }
            }
          },
          "suiteTypeRspDto": {
            "properties": {
              "leader": {
                "type": "integer",
                "format": "int32",
                "description": "干部周转房数量 78.2"
              },
              "staff": {
                "type": "integer",
                "format": "int32",
                "description": "员工周转房数量 78.1"
              },
              "talents": {
                "type": "integer",
                "format": "int32",
                "description": "人才周转房数量 78.3"
              }
            }
          }
        }
      }
    }
  },
  "房产-管理面积-详情": {
    "type": "object",
    "properties": {
      "assignAreaTotalRspDto": {
        "properties": {
          "assign": {
            "type": "number",
            "description": "已分配面积"
          },
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "notAssign": {
            "type": "number",
            "description": "未分配面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          },
          "total": {
            "type": "number",
            "description": "总面积"
          }
        }
      },
      "buildAreaTotalRspDto": {
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "own": {
            "type": "number",
            "description": "自有面积"
          },
          "rent": {
            "type": "number",
            "description": "租赁面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          }
        }
      },
      "buildingManagementAreaOwn": {
        "type": "number",
        "description": "房产管理面积：自有"
      },
      "buildingManagementAreaRent": {
        "type": "number",
        "description": "房产管理面积：租入"
      },
      "buildingManagementAreaTotal": {
        "type": "number",
        "description": "房产管理面积：全部"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "ownBuildArea": {
        "type": "number",
        "description": "自有建筑面积"
      },
      "ownBuildAreaOperation": {
        "type": "number",
        "description": "自有建筑面积：营业"
      },
      "ownBuildAreaPublic": {
        "type": "number",
        "description": "自有建筑面积：公共"
      },
      "ownBuildAreaRent": {
        "type": "number",
        "description": "自有建筑面积：出租"
      },
      "ownBuildAreaSelf": {
        "type": "number",
        "description": "自有建筑面积：自用"
      },
      "ownBuildingCount": {
        "type": "integer",
        "format": "int64",
        "description": "自有房产数量（处）"
      },
      "ownNpPlanArea": {
        "type": "number",
        "description": "自有建筑面积：未规划"
      },
      "planAreaNotPlanOwn": {
        "type": "number",
        "description": "未规划面积：自有"
      },
      "planAreaNotPlanRent": {
        "type": "number",
        "description": "未规划面积：租入"
      },
      "planAreaNotPlanTotal": {
        "type": "number",
        "description": "未规划面积：全部"
      },
      "planAreaPlanOwn": {
        "type": "number",
        "description": "已规划面积：自有"
      },
      "planAreaPlanRent": {
        "type": "number",
        "description": "已规划面积：租入"
      },
      "planAreaPlanTotal": {
        "type": "number",
        "description": "已规划面积：全部"
      },
      "planAreaTotalRspDto": {
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "notPlan": {
            "type": "number",
            "description": "未规划面积"
          },
          "plan": {
            "type": "number",
            "description": "已规划面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          }
        }
      },
      "planningTypesAll": {
        "type": "array",
        "description": "办公物业规划，柱状图：全部",
        "items": {
          "properties": {
            "planningArea": {
              "type": "number",
              "description": "规划面积"
            },
            "planningTypeName": {
              "type": "string",
              "description": "规划类型名称"
            }
          }
        }
      },
      "planningTypesOwn": {
        "type": "array",
        "description": "办公物业规划，柱状图：自有",
        "items": {
          "properties": {
            "planningArea": {
              "type": "number",
              "description": "规划面积"
            },
            "planningTypeName": {
              "type": "string",
              "description": "规划类型名称"
            }
          }
        }
      },
      "planningTypesRent": {
        "type": "array",
        "description": "办公物业规划，柱状图：租入",
        "items": {
          "properties": {
            "planningArea": {
              "type": "number",
              "description": "规划面积"
            },
            "planningTypeName": {
              "type": "string",
              "description": "规划类型名称"
            }
          }
        }
      },
      "rentBuildArea": {
        "type": "number",
        "description": "租入建筑面积"
      },
      "rentBuildAreaOperation": {
        "type": "number",
        "description": "租入建筑面积：营业"
      },
      "rentBuildAreaPublic": {
        "type": "number",
        "description": "租入建筑面积：公共"
      },
      "rentBuildAreaRent": {
        "type": "number",
        "description": "租入建筑面积：出租"
      },
      "rentBuildAreaSelf": {
        "type": "number",
        "description": "租入建筑面积：自用"
      },
      "rentBuildingCount": {
        "type": "integer",
        "format": "int64",
        "description": "租入房产数量（处）"
      },
      "rentNpPlanArea": {
        "type": "number",
        "description": "租入建筑面积：未规划"
      },
      "statDate": {
        "type": "string",
        "description": "统计时间,默认为当前时间的前一天"
      }
    }
  },
  "统一响应体Of分页响应体Of周转房-周转房房产指标汇总表-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "地址"
                },
                "buildingName": {
                  "type": "string",
                  "description": "房产名称"
                },
                "city": {
                  "type": "string",
                  "description": "市"
                },
                "communityName": {
                  "type": "string",
                  "description": "小区名称"
                },
                "date": {
                  "type": "string",
                  "format": "date",
                  "description": "日期"
                },
                "district": {
                  "type": "string",
                  "description": "区"
                },
                "province": {
                  "type": "string",
                  "description": "省"
                },
                "rest": {
                  "type": "integer",
                  "format": "int32",
                  "description": "剩余数"
                },
                "revCapacity": {
                  "type": "integer",
                  "format": "int32",
                  "description": "容量，可容纳"
                },
                "revCnt": {
                  "type": "integer",
                  "format": "int32",
                  "description": "套间数"
                },
                "rev_build_area": {
                  "type": "number",
                  "description": "房产面积"
                },
                "suiteAlcStatus": {
                  "type": "string",
                  "description": "套间状态"
                },
                "suiteLayout": {
                  "type": "string",
                  "description": "套间布局"
                },
                "type": {
                  "type": "string",
                  "description": "周转房类型"
                },
                "urn": {
                  "type": "integer",
                  "format": "int32",
                  "description": "已入住"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "统一响应体Of分区表-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "code": {
            "type": "string",
            "description": "分区编码"
          },
          "createAccount": {
            "type": "integer",
            "format": "int64",
            "description": "创建者账户"
          },
          "createName": {
            "type": "string",
            "description": "创建者名字"
          },
          "createTime": {
            "type": "string",
            "format": "date-time",
            "description": "创建时间"
          },
          "id": {
            "type": "integer",
            "format": "int64",
            "description": "分区ID"
          },
          "modifyAccount": {
            "type": "integer",
            "format": "int64",
            "description": "最后修改者账户"
          },
          "modifyName": {
            "type": "string",
            "description": "最后修改者姓名"
          },
          "modifyTime": {
            "type": "string",
            "format": "date-time",
            "description": "最后的修改时间"
          },
          "name": {
            "type": "string",
            "description": "名称"
          },
          "status": {
            "type": "integer",
            "format": "int32",
            "description": "状态 1-正常 2-隐藏"
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
  },
  "分页响应体Of预算汇总-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "budgetMonth": {
              "type": "string",
              "description": "月"
            },
            "budgetYear": {
              "type": "string",
              "description": "年"
            },
            "city": {
              "type": "string",
              "description": "市级行政区划"
            },
            "cityId": {
              "type": "integer",
              "format": "int64",
              "description": "城市id"
            },
            "country": {
              "type": "string",
              "description": "国家"
            },
            "countryId": {
              "type": "integer",
              "format": "int64",
              "description": "国家id"
            },
            "district": {
              "type": "string",
              "description": "区县级行政区划"
            },
            "districtId": {
              "type": "integer",
              "format": "int64",
              "description": "区县id"
            },
            "districtLat": {
              "type": "number",
              "description": "区县纬度"
            },
            "districtLng": {
              "type": "number",
              "description": "区县经度"
            },
            "finMExeAmt": {
              "type": "number",
              "description": "月度执行(发生)数"
            },
            "finYrBgtAmt": {
              "type": "number",
              "description": "年度预算数"
            },
            "finYtdExeAmt": {
              "type": "number",
              "description": "年累计预算执行数"
            },
            "finYtdExeAmtPct": {
              "type": "number",
              "description": "年累计预算执行率"
            },
            "gdLat": {
              "type": "number",
              "description": "物业点纬度"
            },
            "gdLng": {
              "type": "number",
              "description": "物业点经度"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "数据库主键"
            },
            "orgId": {
              "type": "integer",
              "format": "int64",
              "description": "组织id，1默认招行"
            },
            "orgName": {
              "type": "string",
              "description": "组织名，1写死招商银行"
            },
            "period": {
              "type": "string",
              "description": "年月期间"
            },
            "ppId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点id"
            },
            "ppName": {
              "type": "string",
              "description": "物业点名称"
            },
            "province": {
              "type": "string",
              "description": "省级行政区划"
            },
            "provinceId": {
              "type": "integer",
              "format": "int64",
              "description": "省份id"
            },
            "region": {
              "type": "string",
              "description": "分区名称"
            },
            "regionId": {
              "type": "integer",
              "format": "int64",
              "description": "分区id"
            },
            "supplierId": {
              "type": "integer",
              "format": "int64",
              "description": "物业商id"
            },
            "supplierName": {
              "type": "string"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "OperationDemandStRspDto": {
    "type": "object",
    "properties": {
      "avgRespInfo": {
        "properties": {
          "categories": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "name": {
            "type": "string"
          },
          "series": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "type": "array",
                  "items": {}
                },
                "name": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "demandAndCompRate": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "evaluateInfo": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "indicator": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    }
                  }
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "value": {
                            "type": "array",
                            "items": {}
                          }
                        }
                      }
                    },
                    "name": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "projectInfo": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "statisticInfo": {
        "properties": {
          "data": {
            "properties": {
              "columns": {
                "type": "array",
                "description": "列表数据格式",
                "items": {
                  "properties": {
                    "dataIndex": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    }
                  }
                }
              },
              "dataSource": {
                "type": "array",
                "description": "数据源",
                "items": {
                  "additionalProperties": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      }
    }
  },
  "柱状、现状图数据结构": {
    "type": "object",
    "properties": {
      "legend": {
        "properties": {
          "data": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "series": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "type": "array",
              "items": {}
            },
            "name": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "yAxisIndex": {
              "type": "integer",
              "format": "int32"
            }
          }
        }
      },
      "xAxis": {
        "properties": {
          "data": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          }
        }
      },
      "yAxis": {
        "type": "array",
        "items": {
          "properties": {
            "axisLine": {
              "properties": {
                "show": {
                  "type": "boolean"
                }
              }
            },
            "axisTick": {
              "properties": {
                "show": {
                  "type": "boolean"
                }
              }
            },
            "name": {
              "type": "string"
            },
            "position": {
              "type": "string"
            },
            "splitLine": {
              "properties": {
                "show": {
                  "type": "boolean"
                }
              }
            },
            "type": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "分页响应体Of周转房-小区月度入住退住明细表-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "communityName": {
              "type": "string",
              "description": "小区名称"
            },
            "num": {
              "type": "integer",
              "format": "int32",
              "description": "数量"
            },
            "period": {
              "type": "string",
              "description": "月份"
            },
            "statusDesc": {
              "type": "string",
              "description": "入住状态"
            },
            "type": {
              "type": "string",
              "description": "周转房类型"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "统一响应体Of预算-决策-摘要展开": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "accExecMonth": {
            "type": "array",
            "description": "累计预算执行率分月趋势 74.2",
            "items": {
              "properties": {
                "execPercent": {
                  "type": "number",
                  "description": "执行率"
                },
                "period": {
                  "type": "string",
                  "description": "预算执行期间"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "accExecPercent": {
            "type": "array",
            "description": "累计预算执行率 74.1",
            "items": {
              "properties": {
                "execPercent": {
                  "type": "number",
                  "description": "执行率"
                },
                "period": {
                  "type": "string",
                  "description": "预算执行期间"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "accExecStructure": {
            "type": "array",
            "description": "累计预算执行数结构 73.1",
            "items": {
              "properties": {
                "money": {
                  "type": "number",
                  "description": "金额"
                },
                "moneyPercent": {
                  "type": "number",
                  "description": "比率"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
            }
          },
          "summaryRspDto": {
            "properties": {
              "exec": {
                "type": "number",
                "description": "预算执行（费用被选发生）总额（元）"
              },
              "execPercent": {
                "type": "number",
                "description": "预算执行率"
              },
              "total": {
                "type": "number",
                "description": "预算总额"
              }
            }
          },
          "yearBudgetStructure": {
            "type": "array",
            "description": "年度预算数结构 71.1",
            "items": {
              "properties": {
                "money": {
                  "type": "number",
                  "description": "金额"
                },
                "moneyPercent": {
                  "type": "number",
                  "description": "比率"
                },
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
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
  },
  "统一响应体Of房产-管理面积-详情": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "assignAreaTotalRspDto": {
            "properties": {
              "assign": {
                "type": "number",
                "description": "已分配面积"
              },
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "notAssign": {
                "type": "number",
                "description": "未分配面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              },
              "total": {
                "type": "number",
                "description": "总面积"
              }
            }
          },
          "buildAreaTotalRspDto": {
            "properties": {
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "own": {
                "type": "number",
                "description": "自有面积"
              },
              "rent": {
                "type": "number",
                "description": "租赁面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              }
            }
          },
          "buildingManagementAreaOwn": {
            "type": "number",
            "description": "房产管理面积：自有"
          },
          "buildingManagementAreaRent": {
            "type": "number",
            "description": "房产管理面积：租入"
          },
          "buildingManagementAreaTotal": {
            "type": "number",
            "description": "房产管理面积：全部"
          },
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "ownBuildArea": {
            "type": "number",
            "description": "自有建筑面积"
          },
          "ownBuildAreaOperation": {
            "type": "number",
            "description": "自有建筑面积：营业"
          },
          "ownBuildAreaPublic": {
            "type": "number",
            "description": "自有建筑面积：公共"
          },
          "ownBuildAreaRent": {
            "type": "number",
            "description": "自有建筑面积：出租"
          },
          "ownBuildAreaSelf": {
            "type": "number",
            "description": "自有建筑面积：自用"
          },
          "ownBuildingCount": {
            "type": "integer",
            "format": "int64",
            "description": "自有房产数量（处）"
          },
          "ownNpPlanArea": {
            "type": "number",
            "description": "自有建筑面积：未规划"
          },
          "planAreaNotPlanOwn": {
            "type": "number",
            "description": "未规划面积：自有"
          },
          "planAreaNotPlanRent": {
            "type": "number",
            "description": "未规划面积：租入"
          },
          "planAreaNotPlanTotal": {
            "type": "number",
            "description": "未规划面积：全部"
          },
          "planAreaPlanOwn": {
            "type": "number",
            "description": "已规划面积：自有"
          },
          "planAreaPlanRent": {
            "type": "number",
            "description": "已规划面积：租入"
          },
          "planAreaPlanTotal": {
            "type": "number",
            "description": "已规划面积：全部"
          },
          "planAreaTotalRspDto": {
            "properties": {
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "notPlan": {
                "type": "number",
                "description": "未规划面积"
              },
              "plan": {
                "type": "number",
                "description": "已规划面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              }
            }
          },
          "planningTypesAll": {
            "type": "array",
            "description": "办公物业规划，柱状图：全部",
            "items": {
              "properties": {
                "planningArea": {
                  "type": "number",
                  "description": "规划面积"
                },
                "planningTypeName": {
                  "type": "string",
                  "description": "规划类型名称"
                }
              }
            }
          },
          "planningTypesOwn": {
            "type": "array",
            "description": "办公物业规划，柱状图：自有",
            "items": {
              "properties": {
                "planningArea": {
                  "type": "number",
                  "description": "规划面积"
                },
                "planningTypeName": {
                  "type": "string",
                  "description": "规划类型名称"
                }
              }
            }
          },
          "planningTypesRent": {
            "type": "array",
            "description": "办公物业规划，柱状图：租入",
            "items": {
              "properties": {
                "planningArea": {
                  "type": "number",
                  "description": "规划面积"
                },
                "planningTypeName": {
                  "type": "string",
                  "description": "规划类型名称"
                }
              }
            }
          },
          "rentBuildArea": {
            "type": "number",
            "description": "租入建筑面积"
          },
          "rentBuildAreaOperation": {
            "type": "number",
            "description": "租入建筑面积：营业"
          },
          "rentBuildAreaPublic": {
            "type": "number",
            "description": "租入建筑面积：公共"
          },
          "rentBuildAreaRent": {
            "type": "number",
            "description": "租入建筑面积：出租"
          },
          "rentBuildAreaSelf": {
            "type": "number",
            "description": "租入建筑面积：自用"
          },
          "rentBuildingCount": {
            "type": "integer",
            "format": "int64",
            "description": "租入房产数量（处）"
          },
          "rentNpPlanArea": {
            "type": "number",
            "description": "租入建筑面积：未规划"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
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
  },
  "雷达图数据": {
    "type": "object",
    "properties": {
      "categories": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "indicator": {
        "type": "array",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            }
          }
        }
      },
      "series": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "value": {
                    "type": "array",
                    "items": {}
                  }
                }
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "统一响应体Of周转房-地图右侧详情": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "digestAllRspDto": {
            "properties": {
              "capacity": {
                "type": "integer",
                "format": "int32",
                "description": "当前可入住人数"
              },
              "digestCapacityRspDto": {
                "properties": {
                  "percent": {
                    "type": "number",
                    "description": "百分比 80"
                  },
                  "total": {
                    "type": "integer",
                    "format": "int32",
                    "description": "周转房套间总容量 86"
                  },
                  "unused": {
                    "type": "integer",
                    "format": "int32",
                    "description": "未分配套间容量 88"
                  },
                  "used": {
                    "type": "integer",
                    "format": "int32",
                    "description": "已分配套间容量 87"
                  }
                }
              },
              "digestTotalRspDto": {
                "properties": {
                  "empty": {
                    "type": "integer",
                    "format": "int32",
                    "description": "空置数量 84"
                  },
                  "percent": {
                    "type": "number",
                    "description": "百分比 79"
                  },
                  "total": {
                    "type": "integer",
                    "format": "int32",
                    "description": "总数 78"
                  },
                  "used": {
                    "type": "integer",
                    "format": "int32",
                    "description": "已分配数量 85"
                  }
                }
              }
            }
          },
          "periodPersonRspDto": {
            "properties": {
              "ciItems": {
                "type": "array",
                "items": {
                  "properties": {
                    "period": {
                      "type": "string",
                      "description": "月度"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int32",
                      "description": "数量"
                    },
                    "statusDesc": {
                      "type": "string",
                      "description": "状态"
                    }
                  }
                }
              },
              "coItems": {
                "type": "array",
                "items": {
                  "properties": {
                    "period": {
                      "type": "string",
                      "description": "月度"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int32",
                      "description": "数量"
                    },
                    "statusDesc": {
                      "type": "string",
                      "description": "状态"
                    }
                  }
                }
              },
              "periods": {
                "type": "array",
                "description": "月份",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "suitePersonTypeRspDto": {
            "properties": {
              "suitePersonRspDto": {
                "properties": {
                  "emptySuite": {
                    "type": "integer",
                    "format": "int32",
                    "description": "空置套间数量"
                  },
                  "fullSuite": {
                    "type": "integer",
                    "format": "int32",
                    "description": "已住满数量 82"
                  },
                  "partialSuite": {
                    "type": "integer",
                    "format": "int32",
                    "description": "未住满数量 83"
                  }
                }
              },
              "suiteTypeRspDto": {
                "properties": {
                  "leader": {
                    "type": "integer",
                    "format": "int32",
                    "description": "干部周转房数量 78.2"
                  },
                  "staff": {
                    "type": "integer",
                    "format": "int32",
                    "description": "员工周转房数量 78.1"
                  },
                  "talents": {
                    "type": "integer",
                    "format": "int32",
                    "description": "人才周转房数量 78.3"
                  }
                }
              }
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
  },
  "周转房-入住人员类型分布": {
    "type": "object",
    "properties": {
      "personTypeCounts": {
        "type": "array",
        "items": {
          "properties": {
            "personCount": {
              "type": "integer",
              "format": "int32",
              "description": "员工数量"
            },
            "personType": {
              "type": "string",
              "description": "员工类型"
            }
          }
        }
      }
    }
  },
  "NameValuesDto": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "value": {
        "type": "array",
        "items": {}
      }
    }
  },
  "预算-决策-摘要展开": {
    "type": "object",
    "properties": {
      "accExecMonth": {
        "type": "array",
        "description": "累计预算执行率分月趋势 74.2",
        "items": {
          "properties": {
            "execPercent": {
              "type": "number",
              "description": "执行率"
            },
            "period": {
              "type": "string",
              "description": "预算执行期间"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "accExecPercent": {
        "type": "array",
        "description": "累计预算执行率 74.1",
        "items": {
          "properties": {
            "execPercent": {
              "type": "number",
              "description": "执行率"
            },
            "period": {
              "type": "string",
              "description": "预算执行期间"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "accExecStructure": {
        "type": "array",
        "description": "累计预算执行数结构 73.1",
        "items": {
          "properties": {
            "money": {
              "type": "number",
              "description": "金额"
            },
            "moneyPercent": {
              "type": "number",
              "description": "比率"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      },
      "summaryRspDto": {
        "properties": {
          "exec": {
            "type": "number",
            "description": "预算执行（费用被选发生）总额（元）"
          },
          "execPercent": {
            "type": "number",
            "description": "预算执行率"
          },
          "total": {
            "type": "number",
            "description": "预算总额"
          }
        }
      },
      "yearBudgetStructure": {
        "type": "array",
        "description": "年度预算数结构 71.1",
        "items": {
          "properties": {
            "money": {
              "type": "number",
              "description": "金额"
            },
            "moneyPercent": {
              "type": "number",
              "description": "比率"
            },
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      }
    }
  },
  "单值-百分比-柱状/折线图列表数据": {
    "type": "object",
    "properties": {
      "chartList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "categories": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "series": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "data": {
                        "type": "array",
                        "items": {}
                      },
                      "name": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "percentList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "amount": {},
                "percent": {
                  "type": "number"
                },
                "total": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "singleList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "统一响应体Of单值-百分比列表数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "percentList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "amount": {},
                    "percent": {
                      "type": "number"
                    },
                    "total": {}
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "singleList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {}
                  }
                },
                "name": {
                  "type": "string"
                }
              }
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
  },
  "统一响应体Of列表数据结构": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "columns": {
            "type": "array",
            "description": "列表数据格式",
            "items": {
              "properties": {
                "dataIndex": {
                  "type": "string"
                },
                "title": {
                  "type": "string"
                }
              }
            }
          },
          "dataSource": {
            "type": "array",
            "description": "数据源",
            "items": {
              "additionalProperties": {
                "type": "object"
              }
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
  },
  "统一响应体Of各小区房源情况": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "communities": {
            "type": "array",
            "description": "小区名称",
            "items": {
              "type": "string"
            }
          },
          "leaderList": {
            "type": "array",
            "description": "干部周转房",
            "items": {
              "properties": {
                "buildingCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "房源数量"
                },
                "buildingType": {
                  "type": "string",
                  "description": "类型"
                },
                "communityName": {
                  "type": "string",
                  "description": "小区名称"
                }
              }
            }
          },
          "staffList": {
            "type": "array",
            "description": "员工周转房",
            "items": {
              "properties": {
                "buildingCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "房源数量"
                },
                "buildingType": {
                  "type": "string",
                  "description": "类型"
                },
                "communityName": {
                  "type": "string",
                  "description": "小区名称"
                }
              }
            }
          },
          "talentsList": {
            "type": "array",
            "description": "人才周转房",
            "items": {
              "properties": {
                "buildingCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "房源数量"
                },
                "buildingType": {
                  "type": "string",
                  "description": "类型"
                },
                "communityName": {
                  "type": "string",
                  "description": "小区名称"
                }
              }
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
  },
  "统一响应体OfNamedChartDto": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
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
  },
  "分区表-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "分区编码"
      },
      "createAccount": {
        "type": "integer",
        "format": "int64",
        "description": "创建者账户"
      },
      "createName": {
        "type": "string",
        "description": "创建者名字"
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "分区ID"
      },
      "modifyAccount": {
        "type": "integer",
        "format": "int64",
        "description": "最后修改者账户"
      },
      "modifyName": {
        "type": "string",
        "description": "最后修改者姓名"
      },
      "modifyTime": {
        "type": "string",
        "format": "date-time",
        "description": "最后的修改时间"
      },
      "name": {
        "type": "string",
        "description": "名称"
      },
      "status": {
        "type": "integer",
        "format": "int32",
        "description": "状态 1-正常 2-隐藏"
      }
    }
  },
  "YAxis": {
    "type": "object",
    "properties": {
      "axisLine": {
        "properties": {
          "show": {
            "type": "boolean"
          }
        }
      },
      "axisTick": {
        "properties": {
          "show": {
            "type": "boolean"
          }
        }
      },
      "name": {
        "type": "string"
      },
      "position": {
        "type": "string"
      },
      "splitLine": {
        "properties": {
          "show": {
            "type": "boolean"
          }
        }
      },
      "type": {
        "type": "string"
      }
    }
  },
  "统一响应体OfOperationInspectStRspDto": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "inspectExceptionStatisticInfo": {
            "properties": {
              "data": {
                "properties": {
                  "columns": {
                    "type": "array",
                    "description": "列表数据格式",
                    "items": {
                      "properties": {
                        "dataIndex": {
                          "type": "string"
                        },
                        "title": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "dataSource": {
                    "type": "array",
                    "description": "数据源",
                    "items": {
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "inspectFinishStatisticInfo": {
            "properties": {
              "data": {
                "properties": {
                  "columns": {
                    "type": "array",
                    "description": "列表数据格式",
                    "items": {
                      "properties": {
                        "dataIndex": {
                          "type": "string"
                        },
                        "title": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "dataSource": {
                    "type": "array",
                    "description": "数据源",
                    "items": {
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "inspectSiteAndCompRate": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "inspectSiteExceptionInfo": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "inspectTaskAndCompRate": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "projectInfo": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {}
                  }
                },
                "name": {
                  "type": "string"
                }
              }
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
  },
  "房产-决策-办公物业规划分布": {
    "type": "object",
    "properties": {
      "buildArea": {
        "type": "number",
        "description": "房产管理面积"
      },
      "items": {
        "type": "array",
        "description": "规划类型面积分布",
        "items": {
          "properties": {
            "planningArea": {
              "type": "number",
              "description": "规划面积"
            },
            "planningTypeName": {
              "type": "string",
              "description": "规划类型名称"
            }
          }
        }
      },
      "planBuildArea": {
        "type": "number",
        "description": "已规划面积"
      },
      "unPlanBuildArea": {
        "type": "number",
        "description": "未规划面积"
      }
    }
  },
  "排行榜数据结构": {
    "type": "object",
    "properties": {
      "columns": {
        "type": "array",
        "description": "列表数据格式",
        "items": {
          "properties": {
            "dataIndex": {
              "type": "string"
            },
            "title": {
              "type": "string"
            }
          }
        }
      },
      "dataSource": {
        "type": "array",
        "description": "数据源",
        "items": {
          "additionalProperties": {
            "type": "object"
          }
        }
      }
    }
  },
  "统一响应体OfRevolvingAreaUsedRspDto": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "list": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "rate": {
                  "type": "number"
                },
                "value": {
                  "type": "number"
                }
              }
            }
          },
          "listData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "number",
                  "format": "double"
                }
              }
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
  },
  "周转房-干部周转房概况": {
    "type": "object",
    "properties": {
      "capacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "套间总数量 86.2"
      },
      "capacityTotalCount": {
        "type": "integer",
        "format": "int32",
        "description": "员工周转房房源总量 86.2"
      },
      "emptySuiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "空置 套间数量 84.2"
      },
      "suiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "套间数量 78.2"
      },
      "unusedCapacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "未分配数量 88.2"
      },
      "usedCapacityCount": {
        "type": "integer",
        "format": "int32",
        "description": "已分配数量 87.2"
      },
      "usedPercent": {
        "type": "number",
        "description": "已分配 百分比  91"
      },
      "usedSuiteCount": {
        "type": "integer",
        "format": "int32",
        "description": "已分配 套间数量 85.2"
      }
    }
  },
  "NamedPercentDto": {
    "type": "object",
    "properties": {
      "data": {
        "properties": {
          "amount": {},
          "percent": {
            "type": "number"
          },
          "total": {}
        }
      },
      "name": {
        "type": "string"
      }
    }
  },
  "分页响应体Of周转房-周转房房产指标汇总表-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "city": {
              "type": "string",
              "description": "市"
            },
            "communityName": {
              "type": "string",
              "description": "小区名称"
            },
            "date": {
              "type": "string",
              "format": "date",
              "description": "日期"
            },
            "district": {
              "type": "string",
              "description": "区"
            },
            "province": {
              "type": "string",
              "description": "省"
            },
            "rest": {
              "type": "integer",
              "format": "int32",
              "description": "剩余数"
            },
            "revCapacity": {
              "type": "integer",
              "format": "int32",
              "description": "容量，可容纳"
            },
            "revCnt": {
              "type": "integer",
              "format": "int32",
              "description": "套间数"
            },
            "rev_build_area": {
              "type": "number",
              "description": "房产面积"
            },
            "suiteAlcStatus": {
              "type": "string",
              "description": "套间状态"
            },
            "suiteLayout": {
              "type": "string",
              "description": "套间布局"
            },
            "type": {
              "type": "string",
              "description": "周转房类型"
            },
            "urn": {
              "type": "integer",
              "format": "int32",
              "description": "已入住"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "统一响应体Of分页响应体Of周转房-小区月度入住退住明细表-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "communityName": {
                  "type": "string",
                  "description": "小区名称"
                },
                "num": {
                  "type": "integer",
                  "format": "int32",
                  "description": "数量"
                },
                "period": {
                  "type": "string",
                  "description": "月份"
                },
                "statusDesc": {
                  "type": "string",
                  "description": "入住状态"
                },
                "type": {
                  "type": "string",
                  "description": "周转房类型"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "统一响应体Of分页响应体OfAM空间分配明细-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "alcId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "分配历史表id"
                },
                "amUsedArea": {
                  "type": "number",
                  "format": "double",
                  "description": "使用面积"
                },
                "buildingId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产ID"
                },
                "buildingName": {
                  "type": "string",
                  "description": "房产名称"
                },
                "city": {
                  "type": "string",
                  "description": "市级行政区划"
                },
                "cityId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "市级行政区划id"
                },
                "country": {
                  "type": "string",
                  "description": "国家名"
                },
                "countryId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "国家id"
                },
                "date": {
                  "type": "string",
                  "format": "date",
                  "description": "统计日"
                },
                "departmentName": {
                  "type": "string",
                  "description": "分配部门名称"
                },
                "departmentPath": {
                  "type": "string",
                  "description": "分配部门各级组合全程"
                },
                "district": {
                  "type": "string",
                  "description": "区县级行政区划"
                },
                "districtId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "区县级行政区划id"
                },
                "districtLat": {
                  "type": "number",
                  "format": "double",
                  "description": "区县纬度"
                },
                "districtLng": {
                  "type": "number",
                  "format": "double",
                  "description": "区县经度"
                },
                "floorId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "楼层id"
                },
                "floorName": {
                  "type": "string",
                  "description": "楼层名称"
                },
                "gdLat": {
                  "type": "number",
                  "format": "double",
                  "description": "物业点纬度"
                },
                "gdLng": {
                  "type": "number",
                  "format": "double",
                  "description": "物业点经度"
                },
                "id": {
                  "type": "integer",
                  "format": "int64",
                  "description": "数据库主键id"
                },
                "orgDepartmentId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "分配部门id"
                },
                "orgId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "组织名称"
                },
                "orgName": {
                  "type": "string",
                  "description": "物业单元名称"
                },
                "ownership": {
                  "type": "string",
                  "description": "所有权性质"
                },
                "ppId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "ppName": {
                  "type": "string",
                  "description": "物业点名称"
                },
                "province": {
                  "type": "string",
                  "description": "省级行政区划"
                },
                "provinceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "省级行政区划id"
                },
                "refId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业单元id"
                },
                "refName": {
                  "type": "string",
                  "description": "组织id"
                },
                "region": {
                  "type": "string",
                  "description": "管理区域(分区)"
                },
                "regionId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "分区id"
                },
                "spaceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "空间id"
                },
                "spaceName": {
                  "type": "string",
                  "description": "空间名称"
                },
                "spaceType": {
                  "type": "integer",
                  "format": "int32",
                  "description": "物业单元类型"
                },
                "spaceTypeDesc": {
                  "type": "string",
                  "description": "物业单元类型描述"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "散列图数据": {
    "type": "object",
    "properties": {
      "categories": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "name": {
        "type": "string"
      },
      "series": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "type": "array",
              "items": {}
            },
            "name": {
              "type": "string"
            },
            "type": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "预算-预算执行期间项": {
    "type": "object",
    "properties": {
      "defaultValue": {
        "type": "string",
        "description": "默认值"
      },
      "periods": {
        "type": "array",
        "description": "预算期间",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "周转房-统计项": {
    "type": "object",
    "properties": {
      "period": {
        "type": "string",
        "description": "月度"
      },
      "personCount": {
        "type": "integer",
        "format": "int32",
        "description": "数量"
      },
      "statusDesc": {
        "type": "string",
        "description": "状态"
      }
    }
  },
  "房产统计-按房产统计的房产信息": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址"
      },
      "basements": {
        "type": "array",
        "description": "地下室楼层列表",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "amBuildArea": {
              "type": "number",
              "format": "double",
              "description": "建筑面积"
            },
            "amUnusedArea": {
              "type": "number",
              "format": "double",
              "description": "空置面积"
            },
            "amUsedArea": {
              "type": "number",
              "format": "double",
              "description": "使用面积"
            },
            "amUsedAreaPct": {
              "type": "number",
              "format": "double",
              "description": "空置率"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "files": {
              "type": "string",
              "description": "房产图片信息：JSON字符串"
            },
            "floorFiles": {
              "type": "string",
              "description": "楼层图片信息：JSON字符串"
            },
            "floorId": {
              "type": "integer",
              "format": "int64",
              "description": "楼层ID"
            },
            "floorName": {
              "type": "string",
              "description": "楼层名称"
            },
            "floorPositionText": {
              "type": "string",
              "description": "楼体名称"
            },
            "floorSort": {
              "type": "integer",
              "format": "int64",
              "description": "楼层排序"
            },
            "partitionName": {
              "type": "string",
              "description": "分区"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点"
            }
          }
        }
      },
      "buildingArea": {
        "type": "number",
        "description": "房产面积"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产ID"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "mains": {
        "type": "array",
        "description": "主楼楼层列表",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "amBuildArea": {
              "type": "number",
              "format": "double",
              "description": "建筑面积"
            },
            "amUnusedArea": {
              "type": "number",
              "format": "double",
              "description": "空置面积"
            },
            "amUsedArea": {
              "type": "number",
              "format": "double",
              "description": "使用面积"
            },
            "amUsedAreaPct": {
              "type": "number",
              "format": "double",
              "description": "空置率"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "files": {
              "type": "string",
              "description": "房产图片信息：JSON字符串"
            },
            "floorFiles": {
              "type": "string",
              "description": "楼层图片信息：JSON字符串"
            },
            "floorId": {
              "type": "integer",
              "format": "int64",
              "description": "楼层ID"
            },
            "floorName": {
              "type": "string",
              "description": "楼层名称"
            },
            "floorPositionText": {
              "type": "string",
              "description": "楼体名称"
            },
            "floorSort": {
              "type": "integer",
              "format": "int64",
              "description": "楼层排序"
            },
            "partitionName": {
              "type": "string",
              "description": "分区"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点"
            }
          }
        }
      },
      "partitionName": {
        "type": "string",
        "description": "分区"
      },
      "pics": {
        "type": "string",
        "description": "房产图片：JSON"
      },
      "propertyPointName": {
        "type": "string",
        "description": "物业点"
      },
      "skirts": {
        "type": "array",
        "description": "裙楼楼层列表",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "amBuildArea": {
              "type": "number",
              "format": "double",
              "description": "建筑面积"
            },
            "amUnusedArea": {
              "type": "number",
              "format": "double",
              "description": "空置面积"
            },
            "amUsedArea": {
              "type": "number",
              "format": "double",
              "description": "使用面积"
            },
            "amUsedAreaPct": {
              "type": "number",
              "format": "double",
              "description": "空置率"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "files": {
              "type": "string",
              "description": "房产图片信息：JSON字符串"
            },
            "floorFiles": {
              "type": "string",
              "description": "楼层图片信息：JSON字符串"
            },
            "floorId": {
              "type": "integer",
              "format": "int64",
              "description": "楼层ID"
            },
            "floorName": {
              "type": "string",
              "description": "楼层名称"
            },
            "floorPositionText": {
              "type": "string",
              "description": "楼体名称"
            },
            "floorSort": {
              "type": "integer",
              "format": "int64",
              "description": "楼层排序"
            },
            "partitionName": {
              "type": "string",
              "description": "分区"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点"
            }
          }
        }
      }
    }
  },
  "应用健康检查结果": {
    "type": "object",
    "properties": {
      "gitCommitId": {
        "type": "string"
      },
      "gitCommitTime": {
        "type": "string"
      },
      "ip": {
        "type": "string"
      },
      "port": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "周转房-小区月度入住退住明细表-响应": {
    "type": "object",
    "properties": {
      "communityName": {
        "type": "string",
        "description": "小区名称"
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量"
      },
      "period": {
        "type": "string",
        "description": "月份"
      },
      "statusDesc": {
        "type": "string",
        "description": "入住状态"
      },
      "type": {
        "type": "string",
        "description": "周转房类型"
      }
    }
  },
  "NamedTableDataDto": {
    "type": "object",
    "properties": {
      "data": {
        "properties": {
          "columns": {
            "type": "array",
            "description": "列表数据格式",
            "items": {
              "properties": {
                "dataIndex": {
                  "type": "string"
                },
                "title": {
                  "type": "string"
                }
              }
            }
          },
          "dataSource": {
            "type": "array",
            "description": "数据源",
            "items": {
              "additionalProperties": {
                "type": "object"
              }
            }
          }
        }
      },
      "name": {
        "type": "string"
      }
    }
  },
  "房产-分配面积-总数": {
    "type": "object",
    "properties": {
      "assign": {
        "type": "number",
        "description": "已分配面积"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "notAssign": {
        "type": "number",
        "description": "未分配面积"
      },
      "statDate": {
        "type": "string",
        "description": "统计时间,默认为当前时间的前一天"
      },
      "total": {
        "type": "number",
        "description": "总面积"
      }
    }
  },
  "房产-决策-办公物业分配率": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址"
      },
      "buildArea": {
        "type": "number",
        "description": "面积"
      }
    }
  },
  "RevolvingSummaryRspDto": {
    "type": "object",
    "properties": {
      "capacityCountTrend": {
        "type": "array",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "object"
            }
          }
        }
      },
      "capacityUnUsedCount": {
        "type": "integer",
        "format": "int32"
      },
      "capacityUnUsedData": {
        "properties": {
          "centerText": {},
          "listData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "seriesData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          }
        }
      },
      "capacityUsedCount": {
        "type": "integer",
        "format": "int32"
      },
      "capacityUsedData": {
        "properties": {
          "centerText": {},
          "listData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "seriesData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          }
        }
      },
      "leaderData": {
        "properties": {
          "centerText": {},
          "listData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "seriesData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          }
        }
      },
      "staffData": {
        "properties": {
          "centerText": {},
          "listData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "seriesData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          }
        }
      },
      "suiteCountTrend": {
        "type": "array",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "object"
            }
          }
        }
      },
      "talentsData": {
        "properties": {
          "centerText": {},
          "listData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "seriesData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          }
        }
      },
      "totalCapacityCount": {
        "type": "integer",
        "format": "int32"
      },
      "totalSuiteCount": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "统一响应体Of列表组合-数据结构": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "nameValues": {
            "type": "array",
            "description": "仪表盘列表",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "pieOthers": {
            "type": "array",
            "description": "拼图列表",
            "items": {
              "properties": {
                "name": {
                  "type": "string",
                  "description": "名称"
                },
                "pie": {
                  "properties": {
                    "centerText": {},
                    "listData": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "value": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "seriesData": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "value": {
                            "type": "object"
                          }
                        }
                      }
                    }
                  }
                }
              }
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
  },
  "分页响应体OfAM空间分配明细-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "alcId": {
              "type": "integer",
              "format": "int64",
              "description": "分配历史表id"
            },
            "amUsedArea": {
              "type": "number",
              "format": "double",
              "description": "使用面积"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "city": {
              "type": "string",
              "description": "市级行政区划"
            },
            "cityId": {
              "type": "integer",
              "format": "int64",
              "description": "市级行政区划id"
            },
            "country": {
              "type": "string",
              "description": "国家名"
            },
            "countryId": {
              "type": "integer",
              "format": "int64",
              "description": "国家id"
            },
            "date": {
              "type": "string",
              "format": "date",
              "description": "统计日"
            },
            "departmentName": {
              "type": "string",
              "description": "分配部门名称"
            },
            "departmentPath": {
              "type": "string",
              "description": "分配部门各级组合全程"
            },
            "district": {
              "type": "string",
              "description": "区县级行政区划"
            },
            "districtId": {
              "type": "integer",
              "format": "int64",
              "description": "区县级行政区划id"
            },
            "districtLat": {
              "type": "number",
              "format": "double",
              "description": "区县纬度"
            },
            "districtLng": {
              "type": "number",
              "format": "double",
              "description": "区县经度"
            },
            "floorId": {
              "type": "integer",
              "format": "int64",
              "description": "楼层id"
            },
            "floorName": {
              "type": "string",
              "description": "楼层名称"
            },
            "gdLat": {
              "type": "number",
              "format": "double",
              "description": "物业点纬度"
            },
            "gdLng": {
              "type": "number",
              "format": "double",
              "description": "物业点经度"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "数据库主键id"
            },
            "orgDepartmentId": {
              "type": "integer",
              "format": "int64",
              "description": "分配部门id"
            },
            "orgId": {
              "type": "integer",
              "format": "int64",
              "description": "组织名称"
            },
            "orgName": {
              "type": "string",
              "description": "物业单元名称"
            },
            "ownership": {
              "type": "string",
              "description": "所有权性质"
            },
            "ppId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "ppName": {
              "type": "string",
              "description": "物业点名称"
            },
            "province": {
              "type": "string",
              "description": "省级行政区划"
            },
            "provinceId": {
              "type": "integer",
              "format": "int64",
              "description": "省级行政区划id"
            },
            "refId": {
              "type": "integer",
              "format": "int64",
              "description": "物业单元id"
            },
            "refName": {
              "type": "string",
              "description": "组织id"
            },
            "region": {
              "type": "string",
              "description": "管理区域(分区)"
            },
            "regionId": {
              "type": "integer",
              "format": "int64",
              "description": "分区id"
            },
            "spaceId": {
              "type": "integer",
              "format": "int64",
              "description": "空间id"
            },
            "spaceName": {
              "type": "string",
              "description": "空间名称"
            },
            "spaceType": {
              "type": "integer",
              "format": "int32",
              "description": "物业单元类型"
            },
            "spaceTypeDesc": {
              "type": "string",
              "description": "物业单元类型描述"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "统一响应体Of柱状/折线_排行榜组合数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "chartList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "categories": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "series": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {}
                          },
                          "name": {
                            "type": "string"
                          },
                          "type": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "rankList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "columns": {
                      "type": "array",
                      "description": "列表数据格式",
                      "items": {
                        "properties": {
                          "dataIndex": {
                            "type": "string"
                          },
                          "title": {
                            "type": "string"
                          }
                        }
                      }
                    },
                    "dataSource": {
                      "type": "array",
                      "description": "数据源",
                      "items": {
                        "additionalProperties": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
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
  },
  "Number": {
    "type": "object"
  },
  "预算-决策-物业点（组）年度、月度执行率": {
    "type": "object",
    "properties": {
      "budgetAmount": {
        "type": "number",
        "description": "预算数"
      },
      "budgetMonth": {
        "type": "string",
        "description": "预算月度"
      },
      "budgetYear": {
        "type": "string",
        "description": "预算年度"
      },
      "execAmount": {
        "type": "number",
        "description": "执行数"
      }
    }
  },
  "单值数据": {
    "type": "object",
    "properties": {
      "value": {}
    }
  },
  "统一响应体Of柱状_雷达组合数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "chartList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "categories": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "series": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {}
                          },
                          "name": {
                            "type": "string"
                          },
                          "type": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "radarList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "categories": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "indicator": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "name": {
                            "type": "string"
                          }
                        }
                      }
                    },
                    "series": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "array",
                                  "items": {}
                                }
                              }
                            }
                          },
                          "name": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
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
  },
  "预算-决策-物业点（组）月度执行率": {
    "type": "object",
    "properties": {
      "execPercent": {
        "type": "number",
        "description": "执行率"
      },
      "period": {
        "type": "string",
        "description": "预算执行期间"
      },
      "propertyPointId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "propertyPointName": {
        "type": "string",
        "description": "物业点名称"
      }
    }
  },
  "分页响应体Of空间管理明细-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "amBuildArea": {
              "type": "number",
              "description": "建筑面积"
            },
            "amRegArea": {
              "type": "number",
              "description": "产权面积"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产id"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "city": {
              "type": "string",
              "description": "市级行政区划"
            },
            "cityId": {
              "type": "integer",
              "format": "int64",
              "description": "市级行政区划id"
            },
            "code": {
              "type": "string",
              "description": "各级物业单元编码"
            },
            "country": {
              "type": "string",
              "description": "国家名"
            },
            "countryId": {
              "type": "integer",
              "format": "int64",
              "description": "国家id"
            },
            "date": {
              "type": "string",
              "format": "date",
              "description": "统计日"
            },
            "district": {
              "type": "string",
              "description": "区县级行政区划"
            },
            "districtId": {
              "type": "integer",
              "format": "int64",
              "description": "区县级行政区划id"
            },
            "districtLat": {
              "type": "number",
              "description": "区县纬度"
            },
            "districtLng": {
              "type": "number",
              "description": "区县经度"
            },
            "files": {
              "type": "string",
              "description": "图片等附件链接"
            },
            "floorId": {
              "type": "integer",
              "format": "int64",
              "description": "楼层id"
            },
            "floorName": {
              "type": "string",
              "description": "楼层名称"
            },
            "floorPosition": {
              "type": "string",
              "description": "楼体类型"
            },
            "floorPositionText": {
              "type": "string",
              "description": "楼体类型描述"
            },
            "floorSort": {
              "type": "integer",
              "format": "int32",
              "description": "楼层排序序号"
            },
            "gdLat": {
              "type": "number",
              "description": "物业点纬度"
            },
            "gdLng": {
              "type": "number",
              "description": "物业点经度"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "数据库主键id"
            },
            "managementId": {
              "type": "integer",
              "format": "int64",
              "description": "登记历史记录id，临时用物业单元id写入"
            },
            "managementStatusDesc": {
              "type": "string",
              "description": "管理状态"
            },
            "orgId": {
              "type": "integer",
              "format": "int64",
              "description": "组织id"
            },
            "orgName": {
              "type": "string",
              "description": "组织名称"
            },
            "ownership": {
              "type": "string",
              "description": "所有权性质"
            },
            "ppId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "ppName": {
              "type": "string",
              "description": "物业点名称"
            },
            "province": {
              "type": "string",
              "description": "省级行政区划"
            },
            "provinceId": {
              "type": "integer",
              "format": "int64",
              "description": "省级行政区划id"
            },
            "purchasePrice": {
              "type": "number",
              "description": "房产购置价格"
            },
            "refId": {
              "type": "integer",
              "format": "int64",
              "description": "物业单元id"
            },
            "region": {
              "type": "string",
              "description": "管理区域(分区)"
            },
            "regionId": {
              "type": "integer",
              "format": "int64",
              "description": "分区id"
            },
            "spaceId": {
              "type": "integer",
              "format": "int64",
              "description": "空间id"
            },
            "spaceName": {
              "type": "string",
              "description": "空间名称"
            },
            "spaceType": {
              "type": "integer",
              "format": "int32",
              "description": "物业单元类型"
            },
            "spaceTypeDesc": {
              "type": "string",
              "description": "物业单元类型描述"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "名称值-dto": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "value": {
        "type": "object"
      }
    }
  },
  "统一响应体Of周转房-员工周转房概况": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "capacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "套间总数量 86.1"
          },
          "capacityTotalCount": {
            "type": "integer",
            "format": "int32",
            "description": "员工周转房房源总量 86.1"
          },
          "emptySuiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "空置 套间数量 84.1"
          },
          "suiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "套间数量 78.1"
          },
          "unusedCapacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "未分配数量 88.1"
          },
          "usedCapacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "已分配数量 87.1"
          },
          "usedPercent": {
            "type": "number",
            "description": "已分配 百分比  81"
          },
          "usedSuiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "已分配 套间数量 85.1"
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
  },
  "预算-决策-物业点累计预算执行分布  77": {
    "type": "object",
    "properties": {
      "budgetAmount": {
        "type": "number",
        "description": "预算数"
      },
      "execAmount": {
        "type": "number",
        "description": "执行数"
      },
      "period": {
        "type": "string",
        "description": "预算执行期间"
      },
      "propertyPointId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "propertyPointName": {
        "type": "string",
        "description": "物业点名称"
      }
    }
  },
  "统一响应体Of分页响应体Of-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "alcId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "分配入住记录id"
                },
                "alcPeriod": {
                  "type": "string",
                  "description": "操作生效期间"
                },
                "alcType": {
                  "type": "string",
                  "description": "周转类型"
                },
                "bedId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "床位id"
                },
                "bedName": {
                  "type": "string",
                  "description": "床位名称"
                },
                "beginDate": {
                  "type": "string",
                  "format": "date",
                  "description": "入住日期"
                },
                "buildingId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产id，关联维度的外键"
                },
                "buildingName": {
                  "type": "string",
                  "description": "房产名称"
                },
                "createTime": {
                  "type": "string",
                  "format": "date-time",
                  "description": "分配记录创建时间"
                },
                "date": {
                  "type": "string",
                  "format": "date",
                  "description": "自然日"
                },
                "employeeGender": {
                  "type": "string",
                  "description": "入住员工性别"
                },
                "employeeId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "入住员工id"
                },
                "employeeName": {
                  "type": "string",
                  "description": "入住员工姓名"
                },
                "endDate": {
                  "type": "string",
                  "format": "date",
                  "description": "预计搬出日期"
                },
                "etlTime": {
                  "type": "string",
                  "format": "date-time",
                  "description": "记录创建时间"
                },
                "floorId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "楼层id"
                },
                "floorName": {
                  "type": "string",
                  "description": "楼层名称"
                },
                "id": {
                  "type": "integer",
                  "format": "int64",
                  "description": "数据库主键id"
                },
                "modifyTime": {
                  "type": "string",
                  "format": "date-time",
                  "description": "分配记录更新时间"
                },
                "nature": {
                  "type": "string",
                  "description": "性质"
                },
                "orgDepartmentId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "入住员工部门id"
                },
                "orgDepartmentName": {
                  "type": "string",
                  "description": "入住员工部门名称"
                },
                "refCode": {
                  "type": "string",
                  "description": "周转房单元类型编码"
                },
                "refId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "周转房物业单元id"
                },
                "revBuildArea": {
                  "type": "number",
                  "description": "建筑面积"
                },
                "revCapacity": {
                  "type": "integer",
                  "format": "int32",
                  "description": "周转房容量"
                },
                "spaceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房间id"
                },
                "spaceName": {
                  "type": "string",
                  "description": "房间名称"
                },
                "spaceType": {
                  "type": "string",
                  "description": "周转房物业单元类型"
                },
                "spaceTypeDesc": {
                  "type": "string",
                  "description": "周转房物业单元类型描述"
                },
                "status": {
                  "type": "integer",
                  "format": "int32",
                  "description": "分配入住状态"
                },
                "statusDesc": {
                  "type": "string",
                  "description": "分配状态描述"
                },
                "suiteId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "套间id"
                },
                "suiteLayout": {
                  "type": "string",
                  "description": "套间户型"
                },
                "suiteName": {
                  "type": "string",
                  "description": "套间名称"
                },
                "type": {
                  "type": "string",
                  "description": "类型(员工周转房、干部、人才)"
                },
                "urn": {
                  "type": "integer",
                  "format": "int32",
                  "description": "已分配入住间夜数"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "房产-决策-规划空置情况": {
    "type": "object",
    "properties": {
      "ownPlanBuildArea": {
        "type": "number",
        "description": "自有建筑面积 9"
      },
      "ownUnusedArea": {
        "type": "number",
        "description": "自有办公空置面积 40"
      },
      "ownUnusedPercent": {
        "type": "number",
        "description": "自有空置率 50"
      },
      "planBuildArea": {
        "type": "number",
        "description": "规划建筑面积 7"
      },
      "rentPlanBuildArea": {
        "type": "number",
        "description": "租入建筑面积 10"
      },
      "rentUnusedArea": {
        "type": "number",
        "description": "租入办公空置面积 41"
      },
      "rentUnusedPercent": {
        "type": "number",
        "description": "租入空置率 51"
      },
      "unUsedArea": {
        "type": "number",
        "description": "空置面积 52"
      },
      "unusedPercent": {
        "type": "number",
        "description": "办公空置率,平均空置率 43"
      }
    }
  },
  "列表组合-数据结构": {
    "type": "object",
    "properties": {
      "nameValues": {
        "type": "array",
        "description": "仪表盘列表",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "object"
            }
          }
        }
      },
      "pieOthers": {
        "type": "array",
        "description": "拼图列表",
        "items": {
          "properties": {
            "name": {
              "type": "string",
              "description": "名称"
            },
            "pie": {
              "properties": {
                "centerText": {},
                "listData": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "object"
                      }
                    }
                  }
                },
                "seriesData": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "XAxis": {
    "type": "object",
    "properties": {
      "data": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "type": {
        "type": "string"
      }
    }
  },
  "统一响应体Of物业点表-用于图表中的实体": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "defaultPropertyPoint": {
            "properties": {
              "propertyPointId": {
                "type": "integer",
                "format": "int64",
                "description": "物业点ID"
              },
              "propertyPointName": {
                "type": "string",
                "description": "物业点名称"
              }
            }
          },
          "propertyPointList": {
            "type": "array",
            "description": "物业点列表",
            "items": {
              "properties": {
                "propertyPointId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "propertyPointName": {
                  "type": "string",
                  "description": "物业点名称"
                }
              }
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
  },
  "统一响应体Ofnull": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
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
  },
  "房产-楼层统计信息-摘要": {
    "type": "object",
    "properties": {
      "buildArea": {
        "type": "number",
        "description": "建筑面积"
      },
      "levelCount": {
        "type": "integer",
        "format": "int64",
        "description": "楼层数"
      },
      "propertyPersonCount": {
        "type": "integer",
        "format": "int64",
        "description": "物业口径人数"
      }
    }
  },
  "统一响应体Ofstring": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "type": "string",
        "description": "数据"
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
  },
  "MapOfstringAndobject": {
    "type": "object",
    "additionalProperties": {
      "type": "object"
    }
  },
  "预算-决策-概况": {
    "type": "object",
    "properties": {
      "exec": {
        "type": "number",
        "description": "预算执行（费用被选发生）总额（元）"
      },
      "execPercent": {
        "type": "number",
        "description": "预算执行率"
      },
      "total": {
        "type": "number",
        "description": "预算总额"
      }
    }
  },
  "周转房-房源、入住统计": {
    "type": "object",
    "properties": {
      "suitePersonRspDto": {
        "properties": {
          "emptySuite": {
            "type": "integer",
            "format": "int32",
            "description": "空置套间数量"
          },
          "fullSuite": {
            "type": "integer",
            "format": "int32",
            "description": "已住满数量 82"
          },
          "partialSuite": {
            "type": "integer",
            "format": "int32",
            "description": "未住满数量 83"
          }
        }
      },
      "suiteTypeRspDto": {
        "properties": {
          "leader": {
            "type": "integer",
            "format": "int32",
            "description": "干部周转房数量 78.2"
          },
          "staff": {
            "type": "integer",
            "format": "int32",
            "description": "员工周转房数量 78.1"
          },
          "talents": {
            "type": "integer",
            "format": "int32",
            "description": "人才周转房数量 78.3"
          }
        }
      }
    }
  },
  "统一响应体Of分页响应体Of周转房指标汇总表-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "buildingId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产id"
                },
                "buildingName": {
                  "type": "string",
                  "description": "房产名称"
                },
                "city": {
                  "type": "string",
                  "description": "城市"
                },
                "cityId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "城市ID"
                },
                "communityName": {
                  "type": "string",
                  "description": "周转房小区"
                },
                "country": {
                  "type": "string",
                  "description": "国家"
                },
                "countryId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "国家ID"
                },
                "date": {
                  "type": "string",
                  "format": "date",
                  "description": "日期"
                },
                "district": {
                  "type": "string",
                  "description": "区"
                },
                "districtId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "区ID"
                },
                "districtLat": {
                  "type": "number",
                  "description": "区县纬度"
                },
                "districtLng": {
                  "type": "number",
                  "description": "区县经度"
                },
                "floorId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "楼层id"
                },
                "floorName": {
                  "type": "string",
                  "description": "楼层名称"
                },
                "gdLat": {
                  "type": "number",
                  "description": "物业点纬度(高德)"
                },
                "gdLng": {
                  "type": "number",
                  "description": "物业点经度(高德)"
                },
                "id": {
                  "type": "integer",
                  "format": "int64",
                  "description": "id"
                },
                "nature": {
                  "type": "string",
                  "description": "性质"
                },
                "orgId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "组织ID"
                },
                "orgName": {
                  "type": "string",
                  "description": "组织名称"
                },
                "province": {
                  "type": "string",
                  "description": "省ID"
                },
                "provinceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "省"
                },
                "refId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "周转房单元id"
                },
                "region": {
                  "type": "string",
                  "description": "分区名"
                },
                "regionId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "分区id"
                },
                "revBuildArea": {
                  "type": "number",
                  "description": "建筑面积"
                },
                "revCapacity": {
                  "type": "integer",
                  "format": "int32",
                  "description": "周转房容量"
                },
                "revCnt": {
                  "type": "boolean",
                  "example": false,
                  "description": "套间数"
                },
                "spaceType": {
                  "type": "integer",
                  "format": "int32",
                  "description": "周转房单元类型代码"
                },
                "spaceTypeDesc": {
                  "type": "string",
                  "description": "周转房单元类型描述"
                },
                "suiteAlcStatus": {
                  "type": "string",
                  "description": "套间状态"
                },
                "suiteId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "套间id"
                },
                "suiteLayout": {
                  "type": "string",
                  "description": "套间户型"
                },
                "suiteName": {
                  "type": "string",
                  "description": "套间名称"
                },
                "type": {
                  "type": "string",
                  "description": "类型"
                },
                "urn": {
                  "type": "integer",
                  "format": "int32",
                  "description": "已分配入住间夜数"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "分页响应体Of-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "alcId": {
              "type": "integer",
              "format": "int64",
              "description": "分配入住记录id"
            },
            "alcPeriod": {
              "type": "string",
              "description": "操作生效期间"
            },
            "alcType": {
              "type": "string",
              "description": "周转类型"
            },
            "bedId": {
              "type": "integer",
              "format": "int64",
              "description": "床位id"
            },
            "bedName": {
              "type": "string",
              "description": "床位名称"
            },
            "beginDate": {
              "type": "string",
              "format": "date",
              "description": "入住日期"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产id，关联维度的外键"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "createTime": {
              "type": "string",
              "format": "date-time",
              "description": "分配记录创建时间"
            },
            "date": {
              "type": "string",
              "format": "date",
              "description": "自然日"
            },
            "employeeGender": {
              "type": "string",
              "description": "入住员工性别"
            },
            "employeeId": {
              "type": "integer",
              "format": "int64",
              "description": "入住员工id"
            },
            "employeeName": {
              "type": "string",
              "description": "入住员工姓名"
            },
            "endDate": {
              "type": "string",
              "format": "date",
              "description": "预计搬出日期"
            },
            "etlTime": {
              "type": "string",
              "format": "date-time",
              "description": "记录创建时间"
            },
            "floorId": {
              "type": "integer",
              "format": "int64",
              "description": "楼层id"
            },
            "floorName": {
              "type": "string",
              "description": "楼层名称"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "数据库主键id"
            },
            "modifyTime": {
              "type": "string",
              "format": "date-time",
              "description": "分配记录更新时间"
            },
            "nature": {
              "type": "string",
              "description": "性质"
            },
            "orgDepartmentId": {
              "type": "integer",
              "format": "int64",
              "description": "入住员工部门id"
            },
            "orgDepartmentName": {
              "type": "string",
              "description": "入住员工部门名称"
            },
            "refCode": {
              "type": "string",
              "description": "周转房单元类型编码"
            },
            "refId": {
              "type": "integer",
              "format": "int64",
              "description": "周转房物业单元id"
            },
            "revBuildArea": {
              "type": "number",
              "description": "建筑面积"
            },
            "revCapacity": {
              "type": "integer",
              "format": "int32",
              "description": "周转房容量"
            },
            "spaceId": {
              "type": "integer",
              "format": "int64",
              "description": "房间id"
            },
            "spaceName": {
              "type": "string",
              "description": "房间名称"
            },
            "spaceType": {
              "type": "string",
              "description": "周转房物业单元类型"
            },
            "spaceTypeDesc": {
              "type": "string",
              "description": "周转房物业单元类型描述"
            },
            "status": {
              "type": "integer",
              "format": "int32",
              "description": "分配入住状态"
            },
            "statusDesc": {
              "type": "string",
              "description": "分配状态描述"
            },
            "suiteId": {
              "type": "integer",
              "format": "int64",
              "description": "套间id"
            },
            "suiteLayout": {
              "type": "string",
              "description": "套间户型"
            },
            "suiteName": {
              "type": "string",
              "description": "套间名称"
            },
            "type": {
              "type": "string",
              "description": "类型(员工周转房、干部、人才)"
            },
            "urn": {
              "type": "integer",
              "format": "int32",
              "description": "已分配入住间夜数"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "周转房-房源情况": {
    "type": "object",
    "properties": {
      "leader": {
        "type": "integer",
        "format": "int32",
        "description": "干部周转房数量 78.2"
      },
      "staff": {
        "type": "integer",
        "format": "int32",
        "description": "员工周转房数量 78.1"
      },
      "talents": {
        "type": "integer",
        "format": "int32",
        "description": "人才周转房数量 78.3"
      }
    }
  },
  "柱状_雷达组合数据": {
    "type": "object",
    "properties": {
      "chartList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "categories": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "series": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "data": {
                        "type": "array",
                        "items": {}
                      },
                      "name": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "radarList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "categories": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "indicator": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      }
                    }
                  }
                },
                "series": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "data": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "value": {
                              "type": "array",
                              "items": {}
                            }
                          }
                        }
                      },
                      "name": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "统一响应体OfListOfGeoDataStatDto": {
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
          "properties": {
            "addName": {
              "type": "string"
            },
            "geoName": {
              "type": "string"
            },
            "lat": {
              "type": "number",
              "format": "double"
            },
            "lng": {
              "type": "number",
              "format": "double"
            },
            "number": {
              "type": "integer",
              "format": "int32"
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
  },
  "饼图数据结构": {
    "type": "object",
    "properties": {
      "centerText": {},
      "listData": {
        "type": "array",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "object"
            }
          }
        }
      },
      "seriesData": {
        "type": "array",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "object"
            }
          }
        }
      }
    }
  },
  "房产-决策-办公物业分布项-全部": {
    "type": "object",
    "properties": {
      "ownAreaItemRspDtoList": {
        "type": "array",
        "description": "自有面积",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "x轴坐标名称"
            },
            "propertyArea": {
              "type": "number",
              "description": "物业面积值"
            }
          }
        }
      },
      "ownCountItemRspDtoList": {
        "type": "array",
        "description": "自有数量",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "x轴坐标名称"
            },
            "propertyCount": {
              "type": "integer",
              "format": "int32",
              "description": "物业（房产）数量(处)"
            }
          }
        }
      },
      "rentAreaItemRspDtoList": {
        "type": "array",
        "description": "租入面积",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "x轴坐标名称"
            },
            "propertyArea": {
              "type": "number",
              "description": "物业面积值"
            }
          }
        }
      },
      "rentCountItemRspDtoList": {
        "type": "array",
        "description": "租入数量",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "x轴坐标名称"
            },
            "propertyCount": {
              "type": "integer",
              "format": "int32",
              "description": "物业（房产）数量(处)"
            }
          }
        }
      }
    }
  },
  "统一响应体Of房产-短视图统计数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "assignAreaTotalRspDto": {
            "properties": {
              "assign": {
                "type": "number",
                "description": "已分配面积"
              },
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "notAssign": {
                "type": "number",
                "description": "未分配面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              },
              "total": {
                "type": "number",
                "description": "总面积"
              }
            }
          },
          "buildAreaTotalRspDto": {
            "properties": {
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "own": {
                "type": "number",
                "description": "自有面积"
              },
              "rent": {
                "type": "number",
                "description": "租赁面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              }
            }
          },
          "planAreaTotalRspDto": {
            "properties": {
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "notPlan": {
                "type": "number",
                "description": "未规划面积"
              },
              "plan": {
                "type": "number",
                "description": "已规划面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              }
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
  },
  "周转房摘要信息全部": {
    "type": "object",
    "properties": {
      "capacity": {
        "type": "integer",
        "format": "int32",
        "description": "当前可入住人数"
      },
      "digestCapacityRspDto": {
        "properties": {
          "percent": {
            "type": "number",
            "description": "百分比 80"
          },
          "total": {
            "type": "integer",
            "format": "int32",
            "description": "周转房套间总容量 86"
          },
          "unused": {
            "type": "integer",
            "format": "int32",
            "description": "未分配套间容量 88"
          },
          "used": {
            "type": "integer",
            "format": "int32",
            "description": "已分配套间容量 87"
          }
        }
      },
      "digestTotalRspDto": {
        "properties": {
          "empty": {
            "type": "integer",
            "format": "int32",
            "description": "空置数量 84"
          },
          "percent": {
            "type": "number",
            "description": "百分比 79"
          },
          "total": {
            "type": "integer",
            "format": "int32",
            "description": "总数 78"
          },
          "used": {
            "type": "integer",
            "format": "int32",
            "description": "已分配数量 85"
          }
        }
      }
    }
  },
  "图表数据-series": {
    "type": "object",
    "properties": {
      "data": {
        "type": "array",
        "items": {}
      },
      "name": {
        "type": "string"
      },
      "type": {
        "type": "string"
      }
    }
  },
  "分页响应体Of业务计划明细-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "amPlanArea": {
              "type": "number",
              "description": "规划面积"
            },
            "amPlanBuildArea": {
              "type": "number",
              "description": "规划建筑面积"
            },
            "amRegArea": {
              "type": "number",
              "description": "产权面积"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "city": {
              "type": "string",
              "description": "市级行政区划"
            },
            "cityId": {
              "type": "integer",
              "format": "int64",
              "description": "市级行政区划ID"
            },
            "country": {
              "type": "string",
              "description": "国家名称"
            },
            "countryId": {
              "type": "integer",
              "format": "int64",
              "description": "国家id，用来定义地图的初始化级"
            },
            "date": {
              "type": "string",
              "format": "date",
              "description": "统计日"
            },
            "district": {
              "type": "string",
              "description": "区县级行政区划"
            },
            "districtId": {
              "type": "integer",
              "format": "int64",
              "description": "区县级行政区划ID"
            },
            "gdLat": {
              "type": "number",
              "description": "物业点纬度(高德)"
            },
            "gdLng": {
              "type": "number",
              "description": "物业点经度(高德)"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "数据库主键ID"
            },
            "latitude": {
              "type": "number",
              "description": "物业点维度(百度)"
            },
            "longitude": {
              "type": "number",
              "description": "物业点经度(百度)，用以在地图定位物业点"
            },
            "orgId": {
              "type": "integer",
              "format": "int64",
              "description": "组织id"
            },
            "orgName": {
              "type": "string",
              "description": "组织名称"
            },
            "ownership": {
              "type": "string",
              "description": "房产所有权性质"
            },
            "planningId": {
              "type": "integer",
              "format": "int64",
              "description": "房产规划ID"
            },
            "planningName": {
              "type": "string",
              "description": "规划类型"
            },
            "planningType": {
              "type": "string",
              "description": "规划用途"
            },
            "ppId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "ppName": {
              "type": "string",
              "description": "物业点名称"
            },
            "province": {
              "type": "string",
              "description": "省级行政区划"
            },
            "provinceId": {
              "type": "integer",
              "format": "int64",
              "description": "省级行政区划ID"
            },
            "region": {
              "type": "string",
              "description": "管理区域(分区)"
            },
            "regionId": {
              "type": "integer",
              "format": "int64",
              "description": "管理区域(分区)ID"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "AM-地图-分区物信息": {
    "type": "object",
    "properties": {
      "pointId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "pointName": {
        "type": "string",
        "description": "物业点名称"
      }
    }
  },
  "房产-决策-面积统计": {
    "type": "object",
    "properties": {
      "buildArea": {
        "type": "number",
        "description": "建筑面积"
      },
      "ownBuildArea": {
        "type": "number",
        "description": "自有面积"
      },
      "propertyEmployeeCount": {
        "type": "integer",
        "format": "int64",
        "description": "物业口径人数（人）"
      },
      "propertyPointCount": {
        "type": "integer",
        "format": "int64",
        "description": "物业点数量（个）"
      },
      "rentBuildArea": {
        "type": "number",
        "description": "租入面积"
      }
    }
  },
  "房产-地图+上方数据": {
    "type": "object",
    "properties": {
      "assignAreaTotalRspDto": {
        "properties": {
          "assign": {
            "type": "number",
            "description": "已分配面积"
          },
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "notAssign": {
            "type": "number",
            "description": "未分配面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          },
          "total": {
            "type": "number",
            "description": "总面积"
          }
        }
      },
      "buildAreaTotalRspDto": {
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "own": {
            "type": "number",
            "description": "自有面积"
          },
          "rent": {
            "type": "number",
            "description": "租赁面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          }
        }
      },
      "city": {
        "type": "string",
        "description": "市"
      },
      "country": {
        "type": "string",
        "description": "国家:固定值，中国"
      },
      "district": {
        "type": "string",
        "description": "区"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "mapCommunityData": {
        "type": "array",
        "description": "地图数据：区域下的地图小区信息",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址名称，此处为短名称，如：行政区划为：北京.北京市.朝阳区，值为：朝阳区"
            },
            "addressId": {
              "type": "integer",
              "format": "int64",
              "description": "id，为各级实体ID"
            },
            "buildArea": {
              "type": "number",
              "format": "float",
              "description": "管理面积"
            },
            "buildingCount": {
              "type": "integer",
              "format": "int32",
              "description": "房产数量"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "latitude": {
              "type": "string",
              "description": "物业点纬度（百度）"
            },
            "latitudeGd": {
              "type": "string",
              "description": "物业点纬度（高德）"
            },
            "longitude": {
              "type": "string",
              "description": "物业点经度(百度)"
            },
            "longitudeGd": {
              "type": "string",
              "description": "物业点经度（高德）"
            },
            "propertyCount": {
              "type": "integer",
              "format": "int32",
              "description": "物业点数：区域下 = 物业点 + 小区"
            }
          }
        }
      },
      "mapDataRspDtos": {
        "type": "array",
        "description": "地图数据，例如：是全国，则是<省，管理物业数，管理面积>",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址名称，此处为短名称，如：行政区划为：北京.北京市.朝阳区，值为：朝阳区"
            },
            "addressId": {
              "type": "integer",
              "format": "int64",
              "description": "id，为各级实体ID"
            },
            "buildArea": {
              "type": "number",
              "format": "float",
              "description": "管理面积"
            },
            "buildingCount": {
              "type": "integer",
              "format": "int32",
              "description": "房产数量"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "latitude": {
              "type": "string",
              "description": "物业点纬度（百度）"
            },
            "latitudeGd": {
              "type": "string",
              "description": "物业点纬度（高德）"
            },
            "longitude": {
              "type": "string",
              "description": "物业点经度(百度)"
            },
            "longitudeGd": {
              "type": "string",
              "description": "物业点经度（高德）"
            },
            "propertyCount": {
              "type": "integer",
              "format": "int32",
              "description": "物业点数：区域下 = 物业点 + 小区"
            }
          }
        }
      },
      "partitionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区ID"
      },
      "planAreaTotalRspDto": {
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "notPlan": {
            "type": "number",
            "description": "未规划面积"
          },
          "plan": {
            "type": "number",
            "description": "已规划面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          }
        }
      },
      "propertyPointId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "province": {
        "type": "string",
        "description": "省"
      },
      "statDate": {
        "type": "string",
        "description": "统计时间,默认为当前时间的前一天"
      },
      "totalBuildArea": {
        "type": "number",
        "description": "建筑面积总数"
      },
      "totalPersons": {
        "type": "integer",
        "format": "int64",
        "description": "管理办公人数(个）"
      },
      "totalProperty": {
        "type": "integer",
        "format": "int64",
        "description": "物业总数(个）"
      }
    }
  },
  "预算-决策-物业点（组）月度执行数": {
    "type": "object",
    "properties": {
      "money": {
        "type": "number",
        "description": "金额"
      },
      "moneyPercent": {
        "type": "number",
        "description": "比率"
      },
      "propertyPointId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "propertyPointName": {
        "type": "string",
        "description": "物业点名称"
      }
    }
  },
  "饼图_柱状/折线组合数据": {
    "type": "object",
    "properties": {
      "chartList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "categories": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "series": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "data": {
                        "type": "array",
                        "items": {}
                      },
                      "name": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "pieList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "categories": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "series": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "data": {
                        "type": "array",
                        "items": {}
                      },
                      "name": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "singleList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "统一响应体Of周转房-统计项-员工周转房房源状态-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "emptyData": {
            "properties": {
              "num": {
                "type": "integer",
                "format": "int32",
                "description": "周转房数量"
              },
              "rate": {
                "type": "number",
                "description": "百分比（num/总数量）"
              }
            }
          },
          "emptyRate": {
            "type": "number",
            "description": "平均空置率"
          },
          "fullData": {
            "properties": {
              "num": {
                "type": "integer",
                "format": "int32",
                "description": "周转房数量"
              },
              "rate": {
                "type": "number",
                "description": "百分比（num/总数量）"
              }
            }
          },
          "partialData": {
            "properties": {
              "num": {
                "type": "integer",
                "format": "int32",
                "description": "周转房数量"
              },
              "rate": {
                "type": "number",
                "description": "百分比（num/总数量）"
              }
            }
          },
          "total": {
            "type": "integer",
            "format": "int32",
            "description": "房产总数"
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
  },
  "AM空间分配明细-响应": {
    "type": "object",
    "properties": {
      "alcId": {
        "type": "integer",
        "format": "int64",
        "description": "分配历史表id"
      },
      "amUsedArea": {
        "type": "number",
        "format": "double",
        "description": "使用面积"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产ID"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "city": {
        "type": "string",
        "description": "市级行政区划"
      },
      "cityId": {
        "type": "integer",
        "format": "int64",
        "description": "市级行政区划id"
      },
      "country": {
        "type": "string",
        "description": "国家名"
      },
      "countryId": {
        "type": "integer",
        "format": "int64",
        "description": "国家id"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "统计日"
      },
      "departmentName": {
        "type": "string",
        "description": "分配部门名称"
      },
      "departmentPath": {
        "type": "string",
        "description": "分配部门各级组合全程"
      },
      "district": {
        "type": "string",
        "description": "区县级行政区划"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区县级行政区划id"
      },
      "districtLat": {
        "type": "number",
        "format": "double",
        "description": "区县纬度"
      },
      "districtLng": {
        "type": "number",
        "format": "double",
        "description": "区县经度"
      },
      "floorId": {
        "type": "integer",
        "format": "int64",
        "description": "楼层id"
      },
      "floorName": {
        "type": "string",
        "description": "楼层名称"
      },
      "gdLat": {
        "type": "number",
        "format": "double",
        "description": "物业点纬度"
      },
      "gdLng": {
        "type": "number",
        "format": "double",
        "description": "物业点经度"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "数据库主键id"
      },
      "orgDepartmentId": {
        "type": "integer",
        "format": "int64",
        "description": "分配部门id"
      },
      "orgId": {
        "type": "integer",
        "format": "int64",
        "description": "组织名称"
      },
      "orgName": {
        "type": "string",
        "description": "物业单元名称"
      },
      "ownership": {
        "type": "string",
        "description": "所有权性质"
      },
      "ppId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "ppName": {
        "type": "string",
        "description": "物业点名称"
      },
      "province": {
        "type": "string",
        "description": "省级行政区划"
      },
      "provinceId": {
        "type": "integer",
        "format": "int64",
        "description": "省级行政区划id"
      },
      "refId": {
        "type": "integer",
        "format": "int64",
        "description": "物业单元id"
      },
      "refName": {
        "type": "string",
        "description": "组织id"
      },
      "region": {
        "type": "string",
        "description": "管理区域(分区)"
      },
      "regionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区id"
      },
      "spaceId": {
        "type": "integer",
        "format": "int64",
        "description": "空间id"
      },
      "spaceName": {
        "type": "string",
        "description": "空间名称"
      },
      "spaceType": {
        "type": "integer",
        "format": "int32",
        "description": "物业单元类型"
      },
      "spaceTypeDesc": {
        "type": "string",
        "description": "物业单元类型描述"
      }
    }
  },
  "统一响应体Of物业点主数据表-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "address": {
            "type": "string",
            "description": "对象地址"
          },
          "city": {
            "type": "string",
            "description": "市级行政区划"
          },
          "cityId": {
            "type": "integer",
            "format": "int64",
            "description": "市级行政区划id"
          },
          "communityGdLat": {
            "type": "number",
            "description": "小区纬度"
          },
          "communityGdLng": {
            "type": "number",
            "description": "小区经度"
          },
          "communityName": {
            "type": "string",
            "description": "周转房小区，小区只是周转房房产的属性不是对象，所以没有id"
          },
          "country": {
            "type": "string",
            "description": "国家"
          },
          "countryId": {
            "type": "integer",
            "format": "int64",
            "description": "国家id"
          },
          "createTime": {
            "type": "string",
            "format": "date-time",
            "description": "记录创建时间"
          },
          "district": {
            "type": "string",
            "description": "区县级行政区划"
          },
          "districtId": {
            "type": "integer",
            "format": "int64",
            "description": "区县级行政区划id"
          },
          "districtLat": {
            "type": "number",
            "description": "区县维度"
          },
          "districtLng": {
            "type": "number",
            "description": "区县经度"
          },
          "gdLat": {
            "type": "number",
            "description": "对象纬度(高德)"
          },
          "gdLng": {
            "type": "number",
            "description": "对象经度(高德)"
          },
          "id": {
            "type": "integer",
            "format": "int64",
            "description": "数据库主键id"
          },
          "latitude": {
            "type": "number",
            "description": "对象维度"
          },
          "longitude": {
            "type": "number",
            "description": "对象经度"
          },
          "orgId": {
            "type": "integer",
            "format": "int64",
            "description": "组织id"
          },
          "orgName": {
            "type": "string",
            "description": "组织名称"
          },
          "ppId": {
            "type": "integer",
            "format": "int64",
            "description": "物业点id"
          },
          "ppName": {
            "type": "string",
            "description": "物业点名称"
          },
          "projectGroup": {
            "type": "string",
            "description": "项目组名称"
          },
          "projectGroupId": {
            "type": "integer",
            "format": "int64",
            "description": "项目组id"
          },
          "province": {
            "type": "string",
            "description": "省级行政区划"
          },
          "provinceId": {
            "type": "integer",
            "format": "int64",
            "description": "省级行政区划id"
          },
          "refCode": {
            "type": "string",
            "description": "对象编码"
          },
          "refId": {
            "type": "integer",
            "format": "int64",
            "description": "对象id"
          },
          "refName": {
            "type": "string",
            "description": "对象名称"
          },
          "refType": {
            "type": "string",
            "description": "对象类型(如房产管理是物业点，周转房是房产)"
          },
          "region": {
            "type": "string",
            "description": "分区名称"
          },
          "regionId": {
            "type": "integer",
            "format": "int64",
            "description": "分区id"
          },
          "sourceModule": {
            "type": "string",
            "description": "系统模块"
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
  },
  "物业点-列表项": {
    "type": "object",
    "properties": {
      "propertyPointId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "propertyPointName": {
        "type": "string",
        "description": "物业点名称"
      }
    }
  },
  "统一响应体OfListOfAM地图-房产明细": {
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
          "properties": {
            "addName": {
              "type": "string",
              "description": "房产名称"
            },
            "addressDesc": {
              "type": "string",
              "description": "房产所在具体位置"
            },
            "buildArea": {
              "type": "number",
              "format": "double",
              "description": "房产建筑面积"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "files": {
              "type": "string",
              "description": "房产图片信息"
            },
            "lat": {
              "type": "string",
              "description": "房产所在经度"
            },
            "lng": {
              "type": "string",
              "description": "房产所在纬度"
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
  },
  "房产-楼层-空置率": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址"
      },
      "amBuildArea": {
        "type": "number",
        "format": "double",
        "description": "建筑面积"
      },
      "amUnusedArea": {
        "type": "number",
        "format": "double",
        "description": "空置面积"
      },
      "amUsedArea": {
        "type": "number",
        "format": "double",
        "description": "使用面积"
      },
      "amUsedAreaPct": {
        "type": "number",
        "format": "double",
        "description": "空置率"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产ID"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "files": {
        "type": "string",
        "description": "房产图片信息：JSON字符串"
      },
      "floorFiles": {
        "type": "string",
        "description": "楼层图片信息：JSON字符串"
      },
      "floorId": {
        "type": "integer",
        "format": "int64",
        "description": "楼层ID"
      },
      "floorName": {
        "type": "string",
        "description": "楼层名称"
      },
      "floorPositionText": {
        "type": "string",
        "description": "楼体名称"
      },
      "floorSort": {
        "type": "integer",
        "format": "int64",
        "description": "楼层排序"
      },
      "partitionName": {
        "type": "string",
        "description": "分区"
      },
      "propertyPointName": {
        "type": "string",
        "description": "物业点"
      }
    }
  },
  "房产-决策-办公物业分布项-数量": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "x轴坐标名称"
      },
      "propertyCount": {
        "type": "integer",
        "format": "int32",
        "description": "物业（房产）数量(处)"
      }
    }
  },
  "统一响应体OfListOf其他饼图数据": {
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
          "properties": {
            "name": {
              "type": "string",
              "description": "名称"
            },
            "pie": {
              "properties": {
                "centerText": {},
                "listData": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "object"
                      }
                    }
                  }
                },
                "seriesData": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
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
  },
  "OperationFacilityStRspDto": {
    "type": "object",
    "properties": {
      "facilityAndCompRate": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "facilityIntactRate": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "importanceDistribution": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "projectInfo": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "statisticInfo": {
        "properties": {
          "data": {
            "properties": {
              "columns": {
                "type": "array",
                "description": "列表数据格式",
                "items": {
                  "properties": {
                    "dataIndex": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    }
                  }
                }
              },
              "dataSource": {
                "type": "array",
                "description": "数据源",
                "items": {
                  "additionalProperties": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      }
    }
  },
  "TableColumn": {
    "type": "object",
    "properties": {
      "dataIndex": {
        "type": "string"
      },
      "title": {
        "type": "string"
      }
    }
  },
  "图表数据": {
    "type": "object",
    "properties": {
      "categories": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "series": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "type": "array",
              "items": {}
            },
            "name": {
              "type": "string"
            },
            "type": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "统一响应体Of行政级别表-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "appId": {
            "type": "integer",
            "format": "int64",
            "description": "应用ID，做数据隔离用"
          },
          "bizId": {
            "type": "integer",
            "format": "int64",
            "description": "业务ID，做数据隔离用"
          },
          "createAccount": {
            "type": "integer",
            "format": "int64",
            "description": "创建者账户"
          },
          "createAccountName": {
            "type": "string",
            "description": "创建者用户名"
          },
          "createName": {
            "type": "string",
            "description": "创建者名字"
          },
          "createTime": {
            "type": "string",
            "format": "date-time",
            "description": "创建时间"
          },
          "dataScope": {
            "type": "integer",
            "format": "int32",
            "description": "数据作用域：1、私有 2、应用公用 3、租户公用"
          },
          "ext": {
            "type": "string",
            "description": "扩展属性"
          },
          "id": {
            "type": "integer",
            "format": "int64",
            "description": "由程序分配的唯一ID"
          },
          "isLeaf": {
            "type": "integer",
            "format": "int32",
            "description": "是否叶子，1：是，0：否"
          },
          "lat": {
            "type": "number",
            "format": "double",
            "description": "维度"
          },
          "level": {
            "type": "integer",
            "format": "int32",
            "description": "层级"
          },
          "lng": {
            "type": "number",
            "format": "double",
            "description": "经度"
          },
          "modifyAccount": {
            "type": "integer",
            "format": "int64",
            "description": "最后修改者账户"
          },
          "modifyAccountName": {
            "type": "string",
            "description": "最后修改者用户名"
          },
          "modifyName": {
            "type": "string",
            "description": "最后修改者姓名"
          },
          "modifyTime": {
            "type": "string",
            "format": "date-time",
            "description": "最后的修改时间"
          },
          "name": {
            "type": "string",
            "description": "显示名称"
          },
          "parentId": {
            "type": "integer",
            "format": "int64",
            "description": "上级"
          },
          "path": {
            "type": "string",
            "description": "多级路径"
          },
          "sort": {
            "type": "integer",
            "format": "int32",
            "description": "排序"
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
  },
  "物业点表-用于图表中的实体": {
    "type": "object",
    "properties": {
      "defaultPropertyPoint": {
        "properties": {
          "propertyPointId": {
            "type": "integer",
            "format": "int64",
            "description": "物业点ID"
          },
          "propertyPointName": {
            "type": "string",
            "description": "物业点名称"
          }
        }
      },
      "propertyPointList": {
        "type": "array",
        "description": "物业点列表",
        "items": {
          "properties": {
            "propertyPointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "propertyPointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      }
    }
  },
  "周转房-统计项-房产和类型": {
    "type": "object",
    "properties": {
      "buildingCount": {
        "type": "integer",
        "format": "int32",
        "description": "房源数量"
      },
      "buildingType": {
        "type": "string",
        "description": "类型"
      },
      "communityName": {
        "type": "string",
        "description": "小区名称"
      }
    }
  },
  "AM-地图-物业点信息": {
    "type": "object",
    "properties": {
      "partId": {
        "type": "integer",
        "format": "int64",
        "description": "分区ID"
      },
      "partName": {
        "type": "string",
        "description": "分区名称"
      },
      "pints": {
        "type": "array",
        "description": "业务员点列表",
        "items": {
          "properties": {
            "pointId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "pointName": {
              "type": "string",
              "description": "物业点名称"
            }
          }
        }
      }
    }
  },
  "Legend": {
    "type": "object",
    "properties": {
      "data": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "统一响应体Of饼图_柱状/折线组合数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "chartList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "categories": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "series": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {}
                          },
                          "name": {
                            "type": "string"
                          },
                          "type": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "pieList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "categories": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "series": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {}
                          },
                          "name": {
                            "type": "string"
                          },
                          "type": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "singleList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {}
                  }
                },
                "name": {
                  "type": "string"
                }
              }
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
  },
  "房产-物业口径人口信息-人员变化情况项目": {
    "type": "object",
    "properties": {
      "attendDate": {
        "type": "string",
        "description": "加入时间"
      },
      "groupType": {
        "type": "string",
        "description": "员工类型"
      },
      "personCount": {
        "type": "integer",
        "format": "int64",
        "description": "人员数量"
      }
    }
  },
  "统一响应体Of应用健康检查结果": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "gitCommitId": {
            "type": "string"
          },
          "gitCommitTime": {
            "type": "string"
          },
          "ip": {
            "type": "string"
          },
          "port": {
            "type": "integer",
            "format": "int32"
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
  },
  "分页请求参数": {
    "type": "object",
    "properties": {
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageSort": {
        "type": "array",
        "description": "排序",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "房产-短视图统计数据": {
    "type": "object",
    "properties": {
      "assignAreaTotalRspDto": {
        "properties": {
          "assign": {
            "type": "number",
            "description": "已分配面积"
          },
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "notAssign": {
            "type": "number",
            "description": "未分配面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          },
          "total": {
            "type": "number",
            "description": "总面积"
          }
        }
      },
      "buildAreaTotalRspDto": {
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "own": {
            "type": "number",
            "description": "自有面积"
          },
          "rent": {
            "type": "number",
            "description": "租赁面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          }
        }
      },
      "planAreaTotalRspDto": {
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "notPlan": {
            "type": "number",
            "description": "未规划面积"
          },
          "plan": {
            "type": "number",
            "description": "已规划面积"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          }
        }
      }
    }
  },
  "统一响应体Of房产-地图+上方数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "assignAreaTotalRspDto": {
            "properties": {
              "assign": {
                "type": "number",
                "description": "已分配面积"
              },
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "notAssign": {
                "type": "number",
                "description": "未分配面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              },
              "total": {
                "type": "number",
                "description": "总面积"
              }
            }
          },
          "buildAreaTotalRspDto": {
            "properties": {
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "own": {
                "type": "number",
                "description": "自有面积"
              },
              "rent": {
                "type": "number",
                "description": "租赁面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              }
            }
          },
          "city": {
            "type": "string",
            "description": "市"
          },
          "country": {
            "type": "string",
            "description": "国家:固定值，中国"
          },
          "district": {
            "type": "string",
            "description": "区"
          },
          "limit": {
            "type": "integer",
            "format": "int32"
          },
          "mapCommunityData": {
            "type": "array",
            "description": "地图数据：区域下的地图小区信息",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "地址名称，此处为短名称，如：行政区划为：北京.北京市.朝阳区，值为：朝阳区"
                },
                "addressId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "id，为各级实体ID"
                },
                "buildArea": {
                  "type": "number",
                  "format": "float",
                  "description": "管理面积"
                },
                "buildingCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "房产数量"
                },
                "buildingId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产ID"
                },
                "latitude": {
                  "type": "string",
                  "description": "物业点纬度（百度）"
                },
                "latitudeGd": {
                  "type": "string",
                  "description": "物业点纬度（高德）"
                },
                "longitude": {
                  "type": "string",
                  "description": "物业点经度(百度)"
                },
                "longitudeGd": {
                  "type": "string",
                  "description": "物业点经度（高德）"
                },
                "propertyCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "物业点数：区域下 = 物业点 + 小区"
                }
              }
            }
          },
          "mapDataRspDtos": {
            "type": "array",
            "description": "地图数据，例如：是全国，则是<省，管理物业数，管理面积>",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "地址名称，此处为短名称，如：行政区划为：北京.北京市.朝阳区，值为：朝阳区"
                },
                "addressId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "id，为各级实体ID"
                },
                "buildArea": {
                  "type": "number",
                  "format": "float",
                  "description": "管理面积"
                },
                "buildingCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "房产数量"
                },
                "buildingId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产ID"
                },
                "latitude": {
                  "type": "string",
                  "description": "物业点纬度（百度）"
                },
                "latitudeGd": {
                  "type": "string",
                  "description": "物业点纬度（高德）"
                },
                "longitude": {
                  "type": "string",
                  "description": "物业点经度(百度)"
                },
                "longitudeGd": {
                  "type": "string",
                  "description": "物业点经度（高德）"
                },
                "propertyCount": {
                  "type": "integer",
                  "format": "int32",
                  "description": "物业点数：区域下 = 物业点 + 小区"
                }
              }
            }
          },
          "partitionId": {
            "type": "integer",
            "format": "int64",
            "description": "分区ID"
          },
          "planAreaTotalRspDto": {
            "properties": {
              "limit": {
                "type": "integer",
                "format": "int32"
              },
              "notPlan": {
                "type": "number",
                "description": "未规划面积"
              },
              "plan": {
                "type": "number",
                "description": "已规划面积"
              },
              "statDate": {
                "type": "string",
                "description": "统计时间,默认为当前时间的前一天"
              }
            }
          },
          "propertyPointId": {
            "type": "integer",
            "format": "int64",
            "description": "物业点ID"
          },
          "province": {
            "type": "string",
            "description": "省"
          },
          "statDate": {
            "type": "string",
            "description": "统计时间,默认为当前时间的前一天"
          },
          "totalBuildArea": {
            "type": "number",
            "description": "建筑面积总数"
          },
          "totalPersons": {
            "type": "integer",
            "format": "int64",
            "description": "管理办公人数(个）"
          },
          "totalProperty": {
            "type": "integer",
            "format": "int64",
            "description": "物业总数(个）"
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
  },
  "其他饼图数据": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "名称"
      },
      "pie": {
        "properties": {
          "centerText": {},
          "listData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "seriesData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          }
        }
      }
    }
  },
  "分页响应体Of周转房指标汇总表-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产id"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "city": {
              "type": "string",
              "description": "城市"
            },
            "cityId": {
              "type": "integer",
              "format": "int64",
              "description": "城市ID"
            },
            "communityName": {
              "type": "string",
              "description": "周转房小区"
            },
            "country": {
              "type": "string",
              "description": "国家"
            },
            "countryId": {
              "type": "integer",
              "format": "int64",
              "description": "国家ID"
            },
            "date": {
              "type": "string",
              "format": "date",
              "description": "日期"
            },
            "district": {
              "type": "string",
              "description": "区"
            },
            "districtId": {
              "type": "integer",
              "format": "int64",
              "description": "区ID"
            },
            "districtLat": {
              "type": "number",
              "description": "区县纬度"
            },
            "districtLng": {
              "type": "number",
              "description": "区县经度"
            },
            "floorId": {
              "type": "integer",
              "format": "int64",
              "description": "楼层id"
            },
            "floorName": {
              "type": "string",
              "description": "楼层名称"
            },
            "gdLat": {
              "type": "number",
              "description": "物业点纬度(高德)"
            },
            "gdLng": {
              "type": "number",
              "description": "物业点经度(高德)"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "id"
            },
            "nature": {
              "type": "string",
              "description": "性质"
            },
            "orgId": {
              "type": "integer",
              "format": "int64",
              "description": "组织ID"
            },
            "orgName": {
              "type": "string",
              "description": "组织名称"
            },
            "province": {
              "type": "string",
              "description": "省ID"
            },
            "provinceId": {
              "type": "integer",
              "format": "int64",
              "description": "省"
            },
            "refId": {
              "type": "integer",
              "format": "int64",
              "description": "周转房单元id"
            },
            "region": {
              "type": "string",
              "description": "分区名"
            },
            "regionId": {
              "type": "integer",
              "format": "int64",
              "description": "分区id"
            },
            "revBuildArea": {
              "type": "number",
              "description": "建筑面积"
            },
            "revCapacity": {
              "type": "integer",
              "format": "int32",
              "description": "周转房容量"
            },
            "revCnt": {
              "type": "boolean",
              "example": false,
              "description": "套间数"
            },
            "spaceType": {
              "type": "integer",
              "format": "int32",
              "description": "周转房单元类型代码"
            },
            "spaceTypeDesc": {
              "type": "string",
              "description": "周转房单元类型描述"
            },
            "suiteAlcStatus": {
              "type": "string",
              "description": "套间状态"
            },
            "suiteId": {
              "type": "integer",
              "format": "int64",
              "description": "套间id"
            },
            "suiteLayout": {
              "type": "string",
              "description": "套间户型"
            },
            "suiteName": {
              "type": "string",
              "description": "套间名称"
            },
            "type": {
              "type": "string",
              "description": "类型"
            },
            "urn": {
              "type": "integer",
              "format": "int32",
              "description": "已分配入住间夜数"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "房产-决策-部门平均使用率": {
    "type": "object",
    "properties": {
      "departmentName": {
        "type": "string",
        "description": "部门名称"
      },
      "deptOrder": {
        "type": "integer",
        "format": "int32",
        "description": "部门序号(横坐标）"
      },
      "usedPercent": {
        "type": "number",
        "description": "使用率"
      }
    }
  },
  "房产-决策-办公物业分配情况": {
    "type": "object",
    "properties": {
      "inUsedAreaList": {
        "type": "array",
        "description": "分配面积列表",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "buildArea": {
              "type": "number",
              "description": "面积"
            }
          }
        }
      },
      "unUsedAreaList": {
        "type": "array",
        "description": "未分配面积列表",
        "items": {
          "properties": {
            "address": {
              "type": "string",
              "description": "地址"
            },
            "buildArea": {
              "type": "number",
              "description": "面积"
            }
          }
        }
      }
    }
  },
  "物业点主数据表-响应": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "对象地址"
      },
      "city": {
        "type": "string",
        "description": "市级行政区划"
      },
      "cityId": {
        "type": "integer",
        "format": "int64",
        "description": "市级行政区划id"
      },
      "communityGdLat": {
        "type": "number",
        "description": "小区纬度"
      },
      "communityGdLng": {
        "type": "number",
        "description": "小区经度"
      },
      "communityName": {
        "type": "string",
        "description": "周转房小区，小区只是周转房房产的属性不是对象，所以没有id"
      },
      "country": {
        "type": "string",
        "description": "国家"
      },
      "countryId": {
        "type": "integer",
        "format": "int64",
        "description": "国家id"
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "记录创建时间"
      },
      "district": {
        "type": "string",
        "description": "区县级行政区划"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区县级行政区划id"
      },
      "districtLat": {
        "type": "number",
        "description": "区县维度"
      },
      "districtLng": {
        "type": "number",
        "description": "区县经度"
      },
      "gdLat": {
        "type": "number",
        "description": "对象纬度(高德)"
      },
      "gdLng": {
        "type": "number",
        "description": "对象经度(高德)"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "数据库主键id"
      },
      "latitude": {
        "type": "number",
        "description": "对象维度"
      },
      "longitude": {
        "type": "number",
        "description": "对象经度"
      },
      "orgId": {
        "type": "integer",
        "format": "int64",
        "description": "组织id"
      },
      "orgName": {
        "type": "string",
        "description": "组织名称"
      },
      "ppId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点id"
      },
      "ppName": {
        "type": "string",
        "description": "物业点名称"
      },
      "projectGroup": {
        "type": "string",
        "description": "项目组名称"
      },
      "projectGroupId": {
        "type": "integer",
        "format": "int64",
        "description": "项目组id"
      },
      "province": {
        "type": "string",
        "description": "省级行政区划"
      },
      "provinceId": {
        "type": "integer",
        "format": "int64",
        "description": "省级行政区划id"
      },
      "refCode": {
        "type": "string",
        "description": "对象编码"
      },
      "refId": {
        "type": "integer",
        "format": "int64",
        "description": "对象id"
      },
      "refName": {
        "type": "string",
        "description": "对象名称"
      },
      "refType": {
        "type": "string",
        "description": "对象类型(如房产管理是物业点，周转房是房产)"
      },
      "region": {
        "type": "string",
        "description": "分区名称"
      },
      "regionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区id"
      },
      "sourceModule": {
        "type": "string",
        "description": "系统模块"
      }
    }
  },
  "统一响应体OfListOf分区表-响应": {
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
          "properties": {
            "code": {
              "type": "string",
              "description": "分区编码"
            },
            "createAccount": {
              "type": "integer",
              "format": "int64",
              "description": "创建者账户"
            },
            "createName": {
              "type": "string",
              "description": "创建者名字"
            },
            "createTime": {
              "type": "string",
              "format": "date-time",
              "description": "创建时间"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "分区ID"
            },
            "modifyAccount": {
              "type": "integer",
              "format": "int64",
              "description": "最后修改者账户"
            },
            "modifyName": {
              "type": "string",
              "description": "最后修改者姓名"
            },
            "modifyTime": {
              "type": "string",
              "format": "date-time",
              "description": "最后的修改时间"
            },
            "name": {
              "type": "string",
              "description": "名称"
            },
            "status": {
              "type": "integer",
              "format": "int32",
              "description": "状态 1-正常 2-隐藏"
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
  },
  "周转房-容量 摘要信息": {
    "type": "object",
    "properties": {
      "percent": {
        "type": "number",
        "description": "百分比 80"
      },
      "total": {
        "type": "integer",
        "format": "int32",
        "description": "周转房套间总容量 86"
      },
      "unused": {
        "type": "integer",
        "format": "int32",
        "description": "未分配套间容量 88"
      },
      "used": {
        "type": "integer",
        "format": "int32",
        "description": "已分配套间容量 87"
      }
    }
  },
  "统一响应体OfOperationWorkOrderStRspDto": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "acceptOnTimeRate": {
            "properties": {
              "data": {
                "properties": {
                  "amount": {},
                  "percent": {
                    "type": "number"
                  },
                  "total": {}
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "archiveAvg": {
            "properties": {
              "data": {
                "properties": {
                  "value": {}
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "assignOnTimeRate": {
            "properties": {
              "data": {
                "properties": {
                  "amount": {},
                  "percent": {
                    "type": "number"
                  },
                  "total": {}
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "compOnTimeRate": {
            "properties": {
              "name": {
                "type": "string"
              },
              "value": {
                "type": "object"
              }
            }
          },
          "projectInfo": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {}
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "respOnTimeRate": {
            "properties": {
              "name": {
                "type": "string"
              },
              "value": {
                "type": "object"
              }
            }
          },
          "statisticInfo": {
            "properties": {
              "data": {
                "properties": {
                  "columns": {
                    "type": "array",
                    "description": "列表数据格式",
                    "items": {
                      "properties": {
                        "dataIndex": {
                          "type": "string"
                        },
                        "title": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "dataSource": {
                    "type": "array",
                    "description": "数据源",
                    "items": {
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "validPassedAvg": {
            "properties": {
              "data": {
                "properties": {
                  "value": {}
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "workOrderAndCompRate": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
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
  },
  "AM空间规划明细-响应": {
    "type": "object",
    "properties": {
      "amPlanArea": {
        "type": "number",
        "description": "规划面积"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产ID"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "city": {
        "type": "string",
        "description": "市级行政区划"
      },
      "cityId": {
        "type": "integer",
        "format": "int64",
        "description": "市级行政区划id"
      },
      "country": {
        "type": "string",
        "description": "国家名"
      },
      "countryId": {
        "type": "integer",
        "format": "int64",
        "description": "国家id"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "统计日"
      },
      "district": {
        "type": "string",
        "description": "区县级行政区划"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区县级行政区划id"
      },
      "districtLat": {
        "type": "number",
        "description": "区县纬度"
      },
      "districtLng": {
        "type": "number",
        "description": "区县经度"
      },
      "floorId": {
        "type": "integer",
        "format": "int64",
        "description": "楼层id"
      },
      "floorName": {
        "type": "string",
        "description": "楼层名称"
      },
      "gdLat": {
        "type": "number",
        "description": "物业点纬度"
      },
      "gdLng": {
        "type": "number",
        "description": "物业点经度"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "数据库主键id"
      },
      "orgId": {
        "type": "integer",
        "format": "int64",
        "description": "组织名称"
      },
      "orgName": {
        "type": "string",
        "description": "物业单元名称"
      },
      "ownership": {
        "type": "string",
        "description": "所有权性质"
      },
      "planningId": {
        "type": "integer",
        "format": "int64",
        "description": "规划历史表id"
      },
      "planningName": {
        "type": "string",
        "description": "规划用途"
      },
      "planningType": {
        "type": "string",
        "description": "规划类型"
      },
      "ppId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "ppName": {
        "type": "string",
        "description": "物业点名称"
      },
      "province": {
        "type": "string",
        "description": "省级行政区划"
      },
      "provinceId": {
        "type": "integer",
        "format": "int64",
        "description": "省级行政区划id"
      },
      "refId": {
        "type": "integer",
        "format": "int64",
        "description": "物业单元id"
      },
      "refName": {
        "type": "string",
        "description": "组织id"
      },
      "region": {
        "type": "string",
        "description": "管理区域(分区)"
      },
      "regionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区id"
      },
      "spaceId": {
        "type": "integer",
        "format": "int64",
        "description": "空间id"
      },
      "spaceName": {
        "type": "string",
        "description": "空间名称"
      },
      "spaceType": {
        "type": "integer",
        "format": "int32",
        "description": "物业单元类型"
      },
      "spaceTypeDesc": {
        "type": "string",
        "description": "物业单元类型描述"
      }
    }
  },
  "统一响应体Of周转房-干部周转房概况": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "capacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "套间总数量 86.2"
          },
          "capacityTotalCount": {
            "type": "integer",
            "format": "int32",
            "description": "员工周转房房源总量 86.2"
          },
          "emptySuiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "空置 套间数量 84.2"
          },
          "suiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "套间数量 78.2"
          },
          "unusedCapacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "未分配数量 88.2"
          },
          "usedCapacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "已分配数量 87.2"
          },
          "usedPercent": {
            "type": "number",
            "description": "已分配 百分比  91"
          },
          "usedSuiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "已分配 套间数量 85.2"
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
  },
  "统一响应体Of分页响应体OfAM空间规划明细-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "amPlanArea": {
                  "type": "number",
                  "description": "规划面积"
                },
                "buildingId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产ID"
                },
                "buildingName": {
                  "type": "string",
                  "description": "房产名称"
                },
                "city": {
                  "type": "string",
                  "description": "市级行政区划"
                },
                "cityId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "市级行政区划id"
                },
                "country": {
                  "type": "string",
                  "description": "国家名"
                },
                "countryId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "国家id"
                },
                "date": {
                  "type": "string",
                  "format": "date",
                  "description": "统计日"
                },
                "district": {
                  "type": "string",
                  "description": "区县级行政区划"
                },
                "districtId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "区县级行政区划id"
                },
                "districtLat": {
                  "type": "number",
                  "description": "区县纬度"
                },
                "districtLng": {
                  "type": "number",
                  "description": "区县经度"
                },
                "floorId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "楼层id"
                },
                "floorName": {
                  "type": "string",
                  "description": "楼层名称"
                },
                "gdLat": {
                  "type": "number",
                  "description": "物业点纬度"
                },
                "gdLng": {
                  "type": "number",
                  "description": "物业点经度"
                },
                "id": {
                  "type": "integer",
                  "format": "int64",
                  "description": "数据库主键id"
                },
                "orgId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "组织名称"
                },
                "orgName": {
                  "type": "string",
                  "description": "物业单元名称"
                },
                "ownership": {
                  "type": "string",
                  "description": "所有权性质"
                },
                "planningId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "规划历史表id"
                },
                "planningName": {
                  "type": "string",
                  "description": "规划用途"
                },
                "planningType": {
                  "type": "string",
                  "description": "规划类型"
                },
                "ppId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "ppName": {
                  "type": "string",
                  "description": "物业点名称"
                },
                "province": {
                  "type": "string",
                  "description": "省级行政区划"
                },
                "provinceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "省级行政区划id"
                },
                "refId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业单元id"
                },
                "refName": {
                  "type": "string",
                  "description": "组织id"
                },
                "region": {
                  "type": "string",
                  "description": "管理区域(分区)"
                },
                "regionId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "分区id"
                },
                "spaceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "空间id"
                },
                "spaceName": {
                  "type": "string",
                  "description": "空间名称"
                },
                "spaceType": {
                  "type": "integer",
                  "format": "int32",
                  "description": "物业单元类型"
                },
                "spaceTypeDesc": {
                  "type": "string",
                  "description": "物业单元类型描述"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "周转房-摘要信息": {
    "type": "object",
    "properties": {
      "empty": {
        "type": "integer",
        "format": "int32",
        "description": "空置数量 84"
      },
      "percent": {
        "type": "number",
        "description": "百分比 79"
      },
      "total": {
        "type": "integer",
        "format": "int32",
        "description": "总数 78"
      },
      "used": {
        "type": "integer",
        "format": "int32",
        "description": "已分配数量 85"
      }
    }
  },
  "统一响应体OfListOf预算-决策-物业点（组）年度、月度执行率全部结果（两年的）": {
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
          "properties": {
            "items": {
              "type": "array",
              "description": "月度列表",
              "items": {
                "properties": {
                  "budgetAmount": {
                    "type": "number",
                    "description": "预算数"
                  },
                  "budgetMonth": {
                    "type": "string",
                    "description": "预算月度"
                  },
                  "budgetYear": {
                    "type": "string",
                    "description": "预算年度"
                  },
                  "execAmount": {
                    "type": "number",
                    "description": "执行数"
                  }
                }
              }
            },
            "year": {
              "type": "string",
              "description": "预算年度"
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
  },
  "统一响应体Of周转房摘要信息全部": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "capacity": {
            "type": "integer",
            "format": "int32",
            "description": "当前可入住人数"
          },
          "digestCapacityRspDto": {
            "properties": {
              "percent": {
                "type": "number",
                "description": "百分比 80"
              },
              "total": {
                "type": "integer",
                "format": "int32",
                "description": "周转房套间总容量 86"
              },
              "unused": {
                "type": "integer",
                "format": "int32",
                "description": "未分配套间容量 88"
              },
              "used": {
                "type": "integer",
                "format": "int32",
                "description": "已分配套间容量 87"
              }
            }
          },
          "digestTotalRspDto": {
            "properties": {
              "empty": {
                "type": "integer",
                "format": "int32",
                "description": "空置数量 84"
              },
              "percent": {
                "type": "number",
                "description": "百分比 79"
              },
              "total": {
                "type": "integer",
                "format": "int32",
                "description": "总数 78"
              },
              "used": {
                "type": "integer",
                "format": "int32",
                "description": "已分配数量 85"
              }
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
  },
  "统一响应体Of房产-楼层统计信息-全信息-最终结果": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "abstractInfoRspDto": {
            "properties": {
              "buildArea": {
                "type": "number",
                "description": "建筑面积"
              },
              "levelCount": {
                "type": "integer",
                "format": "int64",
                "description": "楼层数"
              },
              "propertyPersonCount": {
                "type": "integer",
                "format": "int64",
                "description": "物业口径人数"
              }
            }
          },
          "allocationPctRspDtoList": {
            "type": "array",
            "description": "房产分配率变化趋势",
            "items": {
              "properties": {
                "allocationPct": {
                  "type": "number",
                  "description": "分配率"
                },
                "hisDate": {
                  "type": "string",
                  "description": "时间"
                }
              }
            }
          },
          "emptyRspDto": {
            "properties": {
              "ownPlanBuildArea": {
                "type": "number",
                "description": "自有建筑面积 9"
              },
              "ownUnusedArea": {
                "type": "number",
                "description": "自有办公空置面积 40"
              },
              "ownUnusedPercent": {
                "type": "number",
                "description": "自有空置率 50"
              },
              "planBuildArea": {
                "type": "number",
                "description": "规划建筑面积 7"
              },
              "rentPlanBuildArea": {
                "type": "number",
                "description": "租入建筑面积 10"
              },
              "rentUnusedArea": {
                "type": "number",
                "description": "租入办公空置面积 41"
              },
              "rentUnusedPercent": {
                "type": "number",
                "description": "租入空置率 51"
              },
              "unUsedArea": {
                "type": "number",
                "description": "空置面积 52"
              },
              "unusedPercent": {
                "type": "number",
                "description": "办公空置率,平均空置率 43"
              }
            }
          },
          "personDstRspDto": {
            "properties": {
              "allList": {
                "type": "array",
                "description": "物业口径人数变化:全部",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "employeeList": {
                "type": "array",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "leaseList": {
                "type": "array",
                "description": "物业口径人数变化:租户",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "outsourceList": {
                "type": "array",
                "description": "物业口径人数变化:外包",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "personCountPctRspDto": {
                "properties": {
                  "employeeCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 员工"
                  },
                  "leaseCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 租户"
                  },
                  "outsourceCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 外包"
                  },
                  "propertyCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 物业"
                  },
                  "visitorCount": {
                    "type": "integer",
                    "format": "int64",
                    "description": "物业点办公人数： 访客"
                  }
                }
              },
              "propertyList": {
                "type": "array",
                "description": "物业口径人数变化:物业",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              },
              "visitorList": {
                "type": "array",
                "description": "物业口径人数变化:访客",
                "items": {
                  "properties": {
                    "attendDate": {
                      "type": "string",
                      "description": "加入时间"
                    },
                    "groupType": {
                      "type": "string",
                      "description": "员工类型"
                    },
                    "personCount": {
                      "type": "integer",
                      "format": "int64",
                      "description": "人员数量"
                    }
                  }
                }
              }
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
  },
  "房产-地图数据": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址名称，此处为短名称，如：行政区划为：北京.北京市.朝阳区，值为：朝阳区"
      },
      "addressId": {
        "type": "integer",
        "format": "int64",
        "description": "id，为各级实体ID"
      },
      "buildArea": {
        "type": "number",
        "format": "float",
        "description": "管理面积"
      },
      "buildingCount": {
        "type": "integer",
        "format": "int32",
        "description": "房产数量"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产ID"
      },
      "latitude": {
        "type": "string",
        "description": "物业点纬度（百度）"
      },
      "latitudeGd": {
        "type": "string",
        "description": "物业点纬度（高德）"
      },
      "longitude": {
        "type": "string",
        "description": "物业点经度(百度)"
      },
      "longitudeGd": {
        "type": "string",
        "description": "物业点经度（高德）"
      },
      "propertyCount": {
        "type": "integer",
        "format": "int32",
        "description": "物业点数：区域下 = 物业点 + 小区"
      }
    }
  },
  "房产-楼层统计信息-全信息": {
    "type": "object",
    "properties": {
      "employeeCount": {
        "type": "integer",
        "format": "int64",
        "description": "物业点办公人数： 员工"
      },
      "leaseCount": {
        "type": "integer",
        "format": "int64",
        "description": "物业点办公人数： 租户"
      },
      "outsourceCount": {
        "type": "integer",
        "format": "int64",
        "description": "物业点办公人数： 外包"
      },
      "propertyCount": {
        "type": "integer",
        "format": "int64",
        "description": "物业点办公人数： 物业"
      },
      "visitorCount": {
        "type": "integer",
        "format": "int64",
        "description": "物业点办公人数： 访客"
      }
    }
  },
  "OperationWorkOrderStRspDto": {
    "type": "object",
    "properties": {
      "acceptOnTimeRate": {
        "properties": {
          "data": {
            "properties": {
              "amount": {},
              "percent": {
                "type": "number"
              },
              "total": {}
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "archiveAvg": {
        "properties": {
          "data": {
            "properties": {
              "value": {}
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "assignOnTimeRate": {
        "properties": {
          "data": {
            "properties": {
              "amount": {},
              "percent": {
                "type": "number"
              },
              "total": {}
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "compOnTimeRate": {
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "object"
          }
        }
      },
      "projectInfo": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "respOnTimeRate": {
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "object"
          }
        }
      },
      "statisticInfo": {
        "properties": {
          "data": {
            "properties": {
              "columns": {
                "type": "array",
                "description": "列表数据格式",
                "items": {
                  "properties": {
                    "dataIndex": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    }
                  }
                }
              },
              "dataSource": {
                "type": "array",
                "description": "数据源",
                "items": {
                  "additionalProperties": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "validPassedAvg": {
        "properties": {
          "data": {
            "properties": {
              "value": {}
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "workOrderAndCompRate": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      }
    }
  },
  "统一响应体Of图表数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "categories": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "series": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "type": "array",
                  "items": {}
                },
                "name": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              }
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
  },
  "房产-分配率": {
    "type": "object",
    "properties": {
      "allocationPct": {
        "type": "number",
        "description": "分配率"
      },
      "hisDate": {
        "type": "string",
        "description": "时间"
      }
    }
  },
  "统一响应体OfOperationFacilityStRspDto": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "facilityAndCompRate": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "facilityIntactRate": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "importanceDistribution": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "projectInfo": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {}
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "statisticInfo": {
            "properties": {
              "data": {
                "properties": {
                  "columns": {
                    "type": "array",
                    "description": "列表数据格式",
                    "items": {
                      "properties": {
                        "dataIndex": {
                          "type": "string"
                        },
                        "title": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "dataSource": {
                    "type": "array",
                    "description": "数据源",
                    "items": {
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
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
  },
  "房产-管理面积-总数": {
    "type": "object",
    "properties": {
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "own": {
        "type": "number",
        "description": "自有面积"
      },
      "rent": {
        "type": "number",
        "description": "租赁面积"
      },
      "statDate": {
        "type": "string",
        "description": "统计时间,默认为当前时间的前一天"
      }
    }
  },
  "统一响应体OfRevolvingSummaryRspDto": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "capacityCountTrend": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "capacityUnUsedCount": {
            "type": "integer",
            "format": "int32"
          },
          "capacityUnUsedData": {
            "properties": {
              "centerText": {},
              "listData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              },
              "seriesData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "capacityUsedCount": {
            "type": "integer",
            "format": "int32"
          },
          "capacityUsedData": {
            "properties": {
              "centerText": {},
              "listData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              },
              "seriesData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "leaderData": {
            "properties": {
              "centerText": {},
              "listData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              },
              "seriesData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "staffData": {
            "properties": {
              "centerText": {},
              "listData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              },
              "seriesData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "suiteCountTrend": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "talentsData": {
            "properties": {
              "centerText": {},
              "listData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              },
              "seriesData": {
                "type": "array",
                "items": {
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "value": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "totalCapacityCount": {
            "type": "integer",
            "format": "int32"
          },
          "totalSuiteCount": {
            "type": "integer",
            "format": "int32"
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
  },
  "统一响应体Of柱状、现状图数据结构": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "legend": {
            "properties": {
              "data": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "series": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "type": "array",
                  "items": {}
                },
                "name": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                },
                "yAxisIndex": {
                  "type": "integer",
                  "format": "int32"
                }
              }
            }
          },
          "xAxis": {
            "properties": {
              "data": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "type": {
                "type": "string"
              }
            }
          },
          "yAxis": {
            "type": "array",
            "items": {
              "properties": {
                "axisLine": {
                  "properties": {
                    "show": {
                      "type": "boolean"
                    }
                  }
                },
                "axisTick": {
                  "properties": {
                    "show": {
                      "type": "boolean"
                    }
                  }
                },
                "name": {
                  "type": "string"
                },
                "position": {
                  "type": "string"
                },
                "splitLine": {
                  "properties": {
                    "show": {
                      "type": "boolean"
                    }
                  }
                },
                "type": {
                  "type": "string"
                }
              }
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
  },
  "统一响应体OfOperationMaintStRspDto": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "maintAndCompRate": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "maintEndTimeDistribution": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {}
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "projectInfo": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {}
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "statisticInfo": {
            "properties": {
              "data": {
                "properties": {
                  "columns": {
                    "type": "array",
                    "description": "列表数据格式",
                    "items": {
                      "properties": {
                        "dataIndex": {
                          "type": "string"
                        },
                        "title": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "dataSource": {
                    "type": "array",
                    "description": "数据源",
                    "items": {
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
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
  },
  "indicator": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      }
    }
  },
  "统一响应体Of周转房-人才周转房概况": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "capacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "套间总数量 86.3"
          },
          "capacityTotalCount": {
            "type": "integer",
            "format": "int32",
            "description": "员工周转房房源总量 86.3"
          },
          "emptySuiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "空置 套间数量 84.3"
          },
          "suiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "套间数量 78.3"
          },
          "unusedCapacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "未分配数量 88.3"
          },
          "usedCapacityCount": {
            "type": "integer",
            "format": "int32",
            "description": "已分配数量 87.3"
          },
          "usedPercent": {
            "type": "number",
            "description": "已分配 百分比  92"
          },
          "usedSuiteCount": {
            "type": "integer",
            "format": "int32",
            "description": "已分配 套间数量 85.3"
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
  },
  "OperationMaintStRspDto": {
    "type": "object",
    "properties": {
      "maintAndCompRate": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "maintEndTimeDistribution": {
        "properties": {
          "data": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {}
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "projectInfo": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "statisticInfo": {
        "properties": {
          "data": {
            "properties": {
              "columns": {
                "type": "array",
                "description": "列表数据格式",
                "items": {
                  "properties": {
                    "dataIndex": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    }
                  }
                }
              },
              "dataSource": {
                "type": "array",
                "description": "数据源",
                "items": {
                  "additionalProperties": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "name": {
            "type": "string"
          }
        }
      }
    }
  },
  "房产-性质-查询": {
    "type": "object",
    "properties": {
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产ID"
      },
      "city": {
        "type": "string",
        "description": "市"
      },
      "country": {
        "type": "string",
        "description": "国家:固定值，中国"
      },
      "district": {
        "type": "string",
        "description": "区"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区ID"
      },
      "isCommunity": {
        "type": "boolean",
        "example": false,
        "description": "是否小区"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "ownership": {
        "type": "string",
        "description": "房产性质（中文），自有、租入"
      },
      "partitionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区ID"
      },
      "planningType": {
        "type": "string",
        "description": "规划类型（中文）：自用、出租、公共、营业"
      },
      "propertyPointId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "province": {
        "type": "string",
        "description": "省"
      },
      "statDate": {
        "type": "string",
        "description": "统计时间,默认为当前时间的前一天"
      }
    },
    "description": "重要：传参数的时候，对于需要传全部路径"
  },
  "周转房-周转房房产指标汇总表-响应": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "city": {
        "type": "string",
        "description": "市"
      },
      "communityName": {
        "type": "string",
        "description": "小区名称"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "日期"
      },
      "district": {
        "type": "string",
        "description": "区"
      },
      "province": {
        "type": "string",
        "description": "省"
      },
      "rest": {
        "type": "integer",
        "format": "int32",
        "description": "剩余数"
      },
      "revCapacity": {
        "type": "integer",
        "format": "int32",
        "description": "容量，可容纳"
      },
      "revCnt": {
        "type": "integer",
        "format": "int32",
        "description": "套间数"
      },
      "rev_build_area": {
        "type": "number",
        "description": "房产面积"
      },
      "suiteAlcStatus": {
        "type": "string",
        "description": "套间状态"
      },
      "suiteLayout": {
        "type": "string",
        "description": "套间布局"
      },
      "type": {
        "type": "string",
        "description": "周转房类型"
      },
      "urn": {
        "type": "integer",
        "format": "int32",
        "description": "已入住"
      }
    }
  },
  "NamedChartDto": {
    "type": "object",
    "properties": {
      "data": {
        "properties": {
          "categories": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "series": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "type": "array",
                  "items": {}
                },
                "name": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "name": {
        "type": "string"
      }
    }
  },
  "饼图数据": {
    "type": "object",
    "properties": {
      "categories": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "series": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "type": "array",
              "items": {}
            },
            "name": {
              "type": "string"
            },
            "type": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "统一响应体OfListOf全部项目列表-数据": {
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
          "properties": {
            "area": {
              "type": "integer",
              "format": "int64",
              "description": "项目面积"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "项目ID"
            },
            "name": {
              "type": "string",
              "description": "项目名称"
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
  },
  "RevolvingNatureAreaRspDto": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "value": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "统一响应体OfListOfstring": {
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
          "type": "string"
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
  },
  "统一响应体Of单值列表数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "singleList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {}
                  }
                },
                "name": {
                  "type": "string"
                }
              }
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
  },
  "统一响应体Of分页响应体Of空间管理明细-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "地址"
                },
                "amBuildArea": {
                  "type": "number",
                  "description": "建筑面积"
                },
                "amRegArea": {
                  "type": "number",
                  "description": "产权面积"
                },
                "buildingId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产id"
                },
                "buildingName": {
                  "type": "string",
                  "description": "房产名称"
                },
                "city": {
                  "type": "string",
                  "description": "市级行政区划"
                },
                "cityId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "市级行政区划id"
                },
                "code": {
                  "type": "string",
                  "description": "各级物业单元编码"
                },
                "country": {
                  "type": "string",
                  "description": "国家名"
                },
                "countryId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "国家id"
                },
                "date": {
                  "type": "string",
                  "format": "date",
                  "description": "统计日"
                },
                "district": {
                  "type": "string",
                  "description": "区县级行政区划"
                },
                "districtId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "区县级行政区划id"
                },
                "districtLat": {
                  "type": "number",
                  "description": "区县纬度"
                },
                "districtLng": {
                  "type": "number",
                  "description": "区县经度"
                },
                "files": {
                  "type": "string",
                  "description": "图片等附件链接"
                },
                "floorId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "楼层id"
                },
                "floorName": {
                  "type": "string",
                  "description": "楼层名称"
                },
                "floorPosition": {
                  "type": "string",
                  "description": "楼体类型"
                },
                "floorPositionText": {
                  "type": "string",
                  "description": "楼体类型描述"
                },
                "floorSort": {
                  "type": "integer",
                  "format": "int32",
                  "description": "楼层排序序号"
                },
                "gdLat": {
                  "type": "number",
                  "description": "物业点纬度"
                },
                "gdLng": {
                  "type": "number",
                  "description": "物业点经度"
                },
                "id": {
                  "type": "integer",
                  "format": "int64",
                  "description": "数据库主键id"
                },
                "managementId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "登记历史记录id，临时用物业单元id写入"
                },
                "managementStatusDesc": {
                  "type": "string",
                  "description": "管理状态"
                },
                "orgId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "组织id"
                },
                "orgName": {
                  "type": "string",
                  "description": "组织名称"
                },
                "ownership": {
                  "type": "string",
                  "description": "所有权性质"
                },
                "ppId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "ppName": {
                  "type": "string",
                  "description": "物业点名称"
                },
                "province": {
                  "type": "string",
                  "description": "省级行政区划"
                },
                "provinceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "省级行政区划id"
                },
                "purchasePrice": {
                  "type": "number",
                  "description": "房产购置价格"
                },
                "refId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业单元id"
                },
                "region": {
                  "type": "string",
                  "description": "管理区域(分区)"
                },
                "regionId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "分区id"
                },
                "spaceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "空间id"
                },
                "spaceName": {
                  "type": "string",
                  "description": "空间名称"
                },
                "spaceType": {
                  "type": "integer",
                  "format": "int32",
                  "description": "物业单元类型"
                },
                "spaceTypeDesc": {
                  "type": "string",
                  "description": "物业单元类型描述"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "房产-决策-人均使用面积列表项": {
    "type": "object",
    "properties": {
      "deptCount": {
        "type": "array",
        "description": "人均使用面积分段内的部门数",
        "items": {
          "type": "integer",
          "format": "int32"
        }
      },
      "first": {
        "type": "array",
        "description": "步长第一",
        "items": {
          "type": "integer",
          "format": "int64"
        }
      },
      "second": {
        "type": "array",
        "description": "步长第二",
        "items": {
          "type": "integer",
          "format": "int64"
        }
      }
    }
  },
  "各小区房源情况": {
    "type": "object",
    "properties": {
      "communities": {
        "type": "array",
        "description": "小区名称",
        "items": {
          "type": "string"
        }
      },
      "leaderList": {
        "type": "array",
        "description": "干部周转房",
        "items": {
          "properties": {
            "buildingCount": {
              "type": "integer",
              "format": "int32",
              "description": "房源数量"
            },
            "buildingType": {
              "type": "string",
              "description": "类型"
            },
            "communityName": {
              "type": "string",
              "description": "小区名称"
            }
          }
        }
      },
      "staffList": {
        "type": "array",
        "description": "员工周转房",
        "items": {
          "properties": {
            "buildingCount": {
              "type": "integer",
              "format": "int32",
              "description": "房源数量"
            },
            "buildingType": {
              "type": "string",
              "description": "类型"
            },
            "communityName": {
              "type": "string",
              "description": "小区名称"
            }
          }
        }
      },
      "talentsList": {
        "type": "array",
        "description": "人才周转房",
        "items": {
          "properties": {
            "buildingCount": {
              "type": "integer",
              "format": "int32",
              "description": "房源数量"
            },
            "buildingType": {
              "type": "string",
              "description": "类型"
            },
            "communityName": {
              "type": "string",
              "description": "小区名称"
            }
          }
        }
      }
    }
  },
  "GeoDataStatDto": {
    "type": "object",
    "properties": {
      "addName": {
        "type": "string"
      },
      "geoName": {
        "type": "string"
      },
      "lat": {
        "type": "number",
        "format": "double"
      },
      "lng": {
        "type": "number",
        "format": "double"
      },
      "number": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "房产-决策-办公物业分布项-面积": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "x轴坐标名称"
      },
      "propertyArea": {
        "type": "number",
        "description": "物业面积值"
      }
    }
  },
  "统一响应体Of分页响应体Of预算汇总-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "address": {
                  "type": "string",
                  "description": "地址"
                },
                "budgetMonth": {
                  "type": "string",
                  "description": "月"
                },
                "budgetYear": {
                  "type": "string",
                  "description": "年"
                },
                "city": {
                  "type": "string",
                  "description": "市级行政区划"
                },
                "cityId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "城市id"
                },
                "country": {
                  "type": "string",
                  "description": "国家"
                },
                "countryId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "国家id"
                },
                "district": {
                  "type": "string",
                  "description": "区县级行政区划"
                },
                "districtId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "区县id"
                },
                "districtLat": {
                  "type": "number",
                  "description": "区县纬度"
                },
                "districtLng": {
                  "type": "number",
                  "description": "区县经度"
                },
                "finMExeAmt": {
                  "type": "number",
                  "description": "月度执行(发生)数"
                },
                "finYrBgtAmt": {
                  "type": "number",
                  "description": "年度预算数"
                },
                "finYtdExeAmt": {
                  "type": "number",
                  "description": "年累计预算执行数"
                },
                "finYtdExeAmtPct": {
                  "type": "number",
                  "description": "年累计预算执行率"
                },
                "gdLat": {
                  "type": "number",
                  "description": "物业点纬度"
                },
                "gdLng": {
                  "type": "number",
                  "description": "物业点经度"
                },
                "id": {
                  "type": "integer",
                  "format": "int64",
                  "description": "数据库主键"
                },
                "orgId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "组织id，1默认招行"
                },
                "orgName": {
                  "type": "string",
                  "description": "组织名，1写死招商银行"
                },
                "period": {
                  "type": "string",
                  "description": "年月期间"
                },
                "ppId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点id"
                },
                "ppName": {
                  "type": "string",
                  "description": "物业点名称"
                },
                "province": {
                  "type": "string",
                  "description": "省级行政区划"
                },
                "provinceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "省份id"
                },
                "region": {
                  "type": "string",
                  "description": "分区名称"
                },
                "regionId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "分区id"
                },
                "supplierId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业商id"
                },
                "supplierName": {
                  "type": "string"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "单值列表数据": {
    "type": "object",
    "properties": {
      "singleList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "value": {}
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "统一响应体Of分页响应体OfFM指标统计-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "area": {
                  "type": "integer",
                  "format": "int64",
                  "description": "面积"
                },
                "createTime": {
                  "type": "string",
                  "format": "date-time",
                  "description": "创建时间"
                },
                "date": {
                  "type": "string",
                  "format": "date",
                  "description": "当前数据日期"
                },
                "deAvgAttitudeScore": {
                  "type": "integer",
                  "format": "int32",
                  "description": "平均服务态度评分"
                },
                "deAvgQualityScore": {
                  "type": "integer",
                  "format": "int32",
                  "description": "平均服务质量评分"
                },
                "deAvgResTime": {
                  "type": "number",
                  "description": "平均响应时间（分钟）"
                },
                "deAvgSpeedScore": {
                  "type": "integer",
                  "format": "int32",
                  "description": "平均服务速度评分"
                },
                "deComRate": {
                  "type": "number",
                  "description": "完成率"
                },
                "deTotal": {
                  "type": "integer",
                  "format": "int32",
                  "description": "需求总量"
                },
                "employeeNum": {
                  "type": "integer",
                  "format": "int64",
                  "description": "人数"
                },
                "facImprotantRate": {
                  "type": "number",
                  "description": "重要设备完好率"
                },
                "facNormalRate": {
                  "type": "number",
                  "description": "一般设备完好率"
                },
                "facVeryImpRate": {
                  "type": "number",
                  "description": "非常重要设备完好率"
                },
                "id": {
                  "type": "integer",
                  "format": "int64",
                  "description": "标识"
                },
                "ipPiontComRate": {
                  "type": "number",
                  "description": "巡检点完成率"
                },
                "ipPiontExceptionRate": {
                  "type": "number",
                  "description": "巡检点异常率"
                },
                "ipPiontOntimeRate": {
                  "type": "number",
                  "description": "巡检点及时完成率"
                },
                "ipPiontReComRate": {
                  "type": "number",
                  "description": "巡检点位异常报修完成率"
                },
                "ipPiontRepairRate": {
                  "type": "number",
                  "description": "巡检点异常报修率"
                },
                "ipPiontTotal": {
                  "type": "integer",
                  "format": "int32",
                  "description": "巡检点总量"
                },
                "ipTaskComRate": {
                  "type": "number",
                  "description": "巡检任务完成率"
                },
                "ipTaskOntimeRate": {
                  "type": "number",
                  "description": "巡检任务及时完成率"
                },
                "ipTaskTotal": {
                  "type": "integer",
                  "format": "int32",
                  "description": "巡检任务总量"
                },
                "maintTaskComRate": {
                  "type": "number",
                  "description": "维护任务完成率"
                },
                "maintTaskOntimeRate": {
                  "type": "number",
                  "description": "维护任务及时完成率"
                },
                "miantTaskTotal": {
                  "type": "integer",
                  "format": "int32",
                  "description": "维护任务总量"
                },
                "refId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "关联ID"
                },
                "refName": {
                  "type": "string",
                  "description": "关联名称"
                },
                "refType": {
                  "type": "string",
                  "description": "1-项目，2-物业"
                },
                "timeIndex": {
                  "type": "string",
                  "description": "1-天，2-周，3-月，4-季度，5-年"
                },
                "woComOntimeRate": {
                  "type": "number",
                  "description": "及时完成率"
                },
                "woComRate": {
                  "type": "number",
                  "description": "派单完成率"
                },
                "woReRate": {
                  "type": "number",
                  "description": "接单响应及时率"
                },
                "woSeRate": {
                  "type": "number",
                  "description": "派单响应及时率"
                },
                "woTotal": {
                  "type": "integer",
                  "format": "int32",
                  "description": "工单总量"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "统一响应体Of单值-百分比-柱状/折线图列表数据": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "chartList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "categories": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "series": {
                      "type": "array",
                      "items": {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {
                              "type": "UNABLE_TO_PARSE",
                              "description": "Seems to be stack overflow. You need to checkout why?",
                              "definitionType": "Number"
                            }
                          },
                          "name": {
                            "type": "string"
                          },
                          "type": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "percentList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "amount": {
                      "type": "UNABLE_TO_PARSE",
                      "description": "Seems to be stack overflow. You need to checkout why?",
                      "definitionType": "Number"
                    },
                    "percent": {
                      "type": "number"
                    },
                    "total": {
                      "type": "UNABLE_TO_PARSE",
                      "description": "Seems to be stack overflow. You need to checkout why?",
                      "definitionType": "Number"
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "singleList": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {
                      "type": "UNABLE_TO_PARSE",
                      "description": "Seems to be stack overflow. You need to checkout why?",
                      "definitionType": "Number"
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
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
  },
  "周转房指标汇总表-响应": {
    "type": "object",
    "properties": {
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产id"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "city": {
        "type": "string",
        "description": "城市"
      },
      "cityId": {
        "type": "integer",
        "format": "int64",
        "description": "城市ID"
      },
      "communityName": {
        "type": "string",
        "description": "周转房小区"
      },
      "country": {
        "type": "string",
        "description": "国家"
      },
      "countryId": {
        "type": "integer",
        "format": "int64",
        "description": "国家ID"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "日期"
      },
      "district": {
        "type": "string",
        "description": "区"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区ID"
      },
      "districtLat": {
        "type": "number",
        "description": "区县纬度"
      },
      "districtLng": {
        "type": "number",
        "description": "区县经度"
      },
      "floorId": {
        "type": "integer",
        "format": "int64",
        "description": "楼层id"
      },
      "floorName": {
        "type": "string",
        "description": "楼层名称"
      },
      "gdLat": {
        "type": "number",
        "description": "物业点纬度(高德)"
      },
      "gdLng": {
        "type": "number",
        "description": "物业点经度(高德)"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "id"
      },
      "nature": {
        "type": "string",
        "description": "性质"
      },
      "orgId": {
        "type": "integer",
        "format": "int64",
        "description": "组织ID"
      },
      "orgName": {
        "type": "string",
        "description": "组织名称"
      },
      "province": {
        "type": "string",
        "description": "省ID"
      },
      "provinceId": {
        "type": "integer",
        "format": "int64",
        "description": "省"
      },
      "refId": {
        "type": "integer",
        "format": "int64",
        "description": "周转房单元id"
      },
      "region": {
        "type": "string",
        "description": "分区名"
      },
      "regionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区id"
      },
      "revBuildArea": {
        "type": "number",
        "description": "建筑面积"
      },
      "revCapacity": {
        "type": "integer",
        "format": "int32",
        "description": "周转房容量"
      },
      "revCnt": {
        "type": "boolean",
        "example": false,
        "description": "套间数"
      },
      "spaceType": {
        "type": "integer",
        "format": "int32",
        "description": "周转房单元类型代码"
      },
      "spaceTypeDesc": {
        "type": "string",
        "description": "周转房单元类型描述"
      },
      "suiteAlcStatus": {
        "type": "string",
        "description": "套间状态"
      },
      "suiteId": {
        "type": "integer",
        "format": "int64",
        "description": "套间id"
      },
      "suiteLayout": {
        "type": "string",
        "description": "套间户型"
      },
      "suiteName": {
        "type": "string",
        "description": "套间名称"
      },
      "type": {
        "type": "string",
        "description": "类型"
      },
      "urn": {
        "type": "integer",
        "format": "int32",
        "description": "已分配入住间夜数"
      }
    }
  },
  "行政级别表-响应": {
    "type": "object",
    "properties": {
      "appId": {
        "type": "integer",
        "format": "int64",
        "description": "应用ID，做数据隔离用"
      },
      "bizId": {
        "type": "integer",
        "format": "int64",
        "description": "业务ID，做数据隔离用"
      },
      "createAccount": {
        "type": "integer",
        "format": "int64",
        "description": "创建者账户"
      },
      "createAccountName": {
        "type": "string",
        "description": "创建者用户名"
      },
      "createName": {
        "type": "string",
        "description": "创建者名字"
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间"
      },
      "dataScope": {
        "type": "integer",
        "format": "int32",
        "description": "数据作用域：1、私有 2、应用公用 3、租户公用"
      },
      "ext": {
        "type": "string",
        "description": "扩展属性"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "由程序分配的唯一ID"
      },
      "isLeaf": {
        "type": "integer",
        "format": "int32",
        "description": "是否叶子，1：是，0：否"
      },
      "lat": {
        "type": "number",
        "format": "double",
        "description": "维度"
      },
      "level": {
        "type": "integer",
        "format": "int32",
        "description": "层级"
      },
      "lng": {
        "type": "number",
        "format": "double",
        "description": "经度"
      },
      "modifyAccount": {
        "type": "integer",
        "format": "int64",
        "description": "最后修改者账户"
      },
      "modifyAccountName": {
        "type": "string",
        "description": "最后修改者用户名"
      },
      "modifyName": {
        "type": "string",
        "description": "最后修改者姓名"
      },
      "modifyTime": {
        "type": "string",
        "format": "date-time",
        "description": "最后的修改时间"
      },
      "name": {
        "type": "string",
        "description": "显示名称"
      },
      "parentId": {
        "type": "integer",
        "format": "int64",
        "description": "上级"
      },
      "path": {
        "type": "string",
        "description": "多级路径"
      },
      "sort": {
        "type": "integer",
        "format": "int32",
        "description": "排序"
      }
    }
  },
  "NamedPieDto": {
    "type": "object",
    "properties": {
      "data": {
        "properties": {
          "categories": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "series": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "type": "array",
                  "items": {
                    "type": "UNABLE_TO_PARSE",
                    "description": "Seems to be stack overflow. You need to checkout why?",
                    "definitionType": "Number"
                  }
                },
                "name": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "name": {
        "type": "string"
      }
    }
  },
  "统一响应体OfOperationDemandStRspDto": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "avgRespInfo": {
            "properties": {
              "categories": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "name": {
                "type": "string"
              },
              "series": {
                "type": "array",
                "items": {
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "UNABLE_TO_PARSE",
                        "description": "Seems to be stack overflow. You need to checkout why?",
                        "definitionType": "Number"
                      }
                    },
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "demandAndCompRate": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "UNABLE_TO_PARSE",
                            "description": "Seems to be stack overflow. You need to checkout why?",
                            "definitionType": "Number"
                          }
                        },
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "evaluateInfo": {
            "properties": {
              "data": {
                "properties": {
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "indicator": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "name": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "value": {
                                "type": "array",
                                "items": {
                                  "type": "UNABLE_TO_PARSE",
                                  "description": "Seems to be stack overflow. You need to checkout why?",
                                  "definitionType": "Number"
                                }
                              }
                            }
                          }
                        },
                        "name": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
            }
          },
          "projectInfo": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "properties": {
                    "value": {
                      "type": "UNABLE_TO_PARSE",
                      "description": "Seems to be stack overflow. You need to checkout why?",
                      "definitionType": "Number"
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "statisticInfo": {
            "properties": {
              "data": {
                "properties": {
                  "columns": {
                    "type": "array",
                    "description": "列表数据格式",
                    "items": {
                      "properties": {
                        "dataIndex": {
                          "type": "string"
                        },
                        "title": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "dataSource": {
                    "type": "array",
                    "description": "数据源",
                    "items": {
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              },
              "name": {
                "type": "string"
              }
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
  },
  "空间管理明细-响应": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址"
      },
      "amBuildArea": {
        "type": "number",
        "description": "建筑面积"
      },
      "amRegArea": {
        "type": "number",
        "description": "产权面积"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产id"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "city": {
        "type": "string",
        "description": "市级行政区划"
      },
      "cityId": {
        "type": "integer",
        "format": "int64",
        "description": "市级行政区划id"
      },
      "code": {
        "type": "string",
        "description": "各级物业单元编码"
      },
      "country": {
        "type": "string",
        "description": "国家名"
      },
      "countryId": {
        "type": "integer",
        "format": "int64",
        "description": "国家id"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "统计日"
      },
      "district": {
        "type": "string",
        "description": "区县级行政区划"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区县级行政区划id"
      },
      "districtLat": {
        "type": "number",
        "description": "区县纬度"
      },
      "districtLng": {
        "type": "number",
        "description": "区县经度"
      },
      "files": {
        "type": "string",
        "description": "图片等附件链接"
      },
      "floorId": {
        "type": "integer",
        "format": "int64",
        "description": "楼层id"
      },
      "floorName": {
        "type": "string",
        "description": "楼层名称"
      },
      "floorPosition": {
        "type": "string",
        "description": "楼体类型"
      },
      "floorPositionText": {
        "type": "string",
        "description": "楼体类型描述"
      },
      "floorSort": {
        "type": "integer",
        "format": "int32",
        "description": "楼层排序序号"
      },
      "gdLat": {
        "type": "number",
        "description": "物业点纬度"
      },
      "gdLng": {
        "type": "number",
        "description": "物业点经度"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "数据库主键id"
      },
      "managementId": {
        "type": "integer",
        "format": "int64",
        "description": "登记历史记录id，临时用物业单元id写入"
      },
      "managementStatusDesc": {
        "type": "string",
        "description": "管理状态"
      },
      "orgId": {
        "type": "integer",
        "format": "int64",
        "description": "组织id"
      },
      "orgName": {
        "type": "string",
        "description": "组织名称"
      },
      "ownership": {
        "type": "string",
        "description": "所有权性质"
      },
      "ppId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "ppName": {
        "type": "string",
        "description": "物业点名称"
      },
      "province": {
        "type": "string",
        "description": "省级行政区划"
      },
      "provinceId": {
        "type": "integer",
        "format": "int64",
        "description": "省级行政区划id"
      },
      "purchasePrice": {
        "type": "number",
        "description": "房产购置价格"
      },
      "refId": {
        "type": "integer",
        "format": "int64",
        "description": "物业单元id"
      },
      "region": {
        "type": "string",
        "description": "管理区域(分区)"
      },
      "regionId": {
        "type": "integer",
        "format": "int64",
        "description": "分区id"
      },
      "spaceId": {
        "type": "integer",
        "format": "int64",
        "description": "空间id"
      },
      "spaceName": {
        "type": "string",
        "description": "空间名称"
      },
      "spaceType": {
        "type": "integer",
        "format": "int32",
        "description": "物业单元类型"
      },
      "spaceTypeDesc": {
        "type": "string",
        "description": "物业单元类型描述"
      }
    }
  },
  "统一响应体Of饼图数据结构": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "centerText": {
            "type": "UNABLE_TO_PARSE",
            "description": "Seems to be stack overflow. You need to checkout why?",
            "definitionType": "Number"
          },
          "listData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
            }
          },
          "seriesData": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "object"
                }
              }
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
  },
  "周转房-统计项-员工周转房房源状态-数据-响应": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "周转房数量"
      },
      "rate": {
        "type": "number",
        "description": "百分比（num/总数量）"
      }
    }
  },
  "RevolvingAreaUsedRspDto": {
    "type": "object",
    "properties": {
      "list": {
        "type": "array",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            },
            "rate": {
              "type": "number"
            },
            "value": {
              "type": "number"
            }
          }
        }
      },
      "listData": {
        "type": "array",
        "items": {
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "number",
              "format": "double"
            }
          }
        }
      }
    }
  },
  "RankColumn": {
    "type": "object",
    "properties": {
      "dataIndex": {
        "type": "string"
      },
      "title": {
        "type": "string"
      }
    }
  },
  "房产-统计项": {
    "type": "object",
    "properties": {
      "planningArea": {
        "type": "number",
        "description": "规划面积"
      },
      "planningTypeName": {
        "type": "string",
        "description": "规划类型名称"
      }
    }
  },
  "柱状/折线_排行榜组合数据": {
    "type": "object",
    "properties": {
      "chartList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "categories": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "series": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "data": {
                        "type": "array",
                        "items": {
                          "type": "UNABLE_TO_PARSE",
                          "description": "Seems to be stack overflow. You need to checkout why?",
                          "definitionType": "Number"
                        }
                      },
                      "name": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      },
      "rankList": {
        "type": "array",
        "items": {
          "properties": {
            "data": {
              "properties": {
                "columns": {
                  "type": "array",
                  "description": "列表数据格式",
                  "items": {
                    "properties": {
                      "dataIndex": {
                        "type": "string"
                      },
                      "title": {
                        "type": "string"
                      }
                    }
                  }
                },
                "dataSource": {
                  "type": "array",
                  "description": "数据源",
                  "items": {
                    "additionalProperties": {
                      "type": "object"
                    }
                  }
                }
              }
            },
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "分页响应体OfAM空间规划明细-响应": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "内容",
        "items": {
          "properties": {
            "amPlanArea": {
              "type": "number",
              "description": "规划面积"
            },
            "buildingId": {
              "type": "integer",
              "format": "int64",
              "description": "房产ID"
            },
            "buildingName": {
              "type": "string",
              "description": "房产名称"
            },
            "city": {
              "type": "string",
              "description": "市级行政区划"
            },
            "cityId": {
              "type": "integer",
              "format": "int64",
              "description": "市级行政区划id"
            },
            "country": {
              "type": "string",
              "description": "国家名"
            },
            "countryId": {
              "type": "integer",
              "format": "int64",
              "description": "国家id"
            },
            "date": {
              "type": "string",
              "format": "date",
              "description": "统计日"
            },
            "district": {
              "type": "string",
              "description": "区县级行政区划"
            },
            "districtId": {
              "type": "integer",
              "format": "int64",
              "description": "区县级行政区划id"
            },
            "districtLat": {
              "type": "number",
              "description": "区县纬度"
            },
            "districtLng": {
              "type": "number",
              "description": "区县经度"
            },
            "floorId": {
              "type": "integer",
              "format": "int64",
              "description": "楼层id"
            },
            "floorName": {
              "type": "string",
              "description": "楼层名称"
            },
            "gdLat": {
              "type": "number",
              "description": "物业点纬度"
            },
            "gdLng": {
              "type": "number",
              "description": "物业点经度"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "数据库主键id"
            },
            "orgId": {
              "type": "integer",
              "format": "int64",
              "description": "组织名称"
            },
            "orgName": {
              "type": "string",
              "description": "物业单元名称"
            },
            "ownership": {
              "type": "string",
              "description": "所有权性质"
            },
            "planningId": {
              "type": "integer",
              "format": "int64",
              "description": "规划历史表id"
            },
            "planningName": {
              "type": "string",
              "description": "规划用途"
            },
            "planningType": {
              "type": "string",
              "description": "规划类型"
            },
            "ppId": {
              "type": "integer",
              "format": "int64",
              "description": "物业点ID"
            },
            "ppName": {
              "type": "string",
              "description": "物业点名称"
            },
            "province": {
              "type": "string",
              "description": "省级行政区划"
            },
            "provinceId": {
              "type": "integer",
              "format": "int64",
              "description": "省级行政区划id"
            },
            "refId": {
              "type": "integer",
              "format": "int64",
              "description": "物业单元id"
            },
            "refName": {
              "type": "string",
              "description": "组织id"
            },
            "region": {
              "type": "string",
              "description": "管理区域(分区)"
            },
            "regionId": {
              "type": "integer",
              "format": "int64",
              "description": "分区id"
            },
            "spaceId": {
              "type": "integer",
              "format": "int64",
              "description": "空间id"
            },
            "spaceName": {
              "type": "string",
              "description": "空间名称"
            },
            "spaceType": {
              "type": "integer",
              "format": "int32",
              "description": "物业单元类型"
            },
            "spaceTypeDesc": {
              "type": "string",
              "description": "物业单元类型描述"
            }
          }
        }
      },
      "currentSize": {
        "type": "integer",
        "format": "int64",
        "description": "当前页条数"
      },
      "first": {
        "type": "boolean",
        "example": false,
        "description": "是否第一页"
      },
      "last": {
        "type": "boolean",
        "example": false,
        "description": "是否最后一页"
      },
      "pageNumber": {
        "type": "integer",
        "format": "int64",
        "description": "当前页"
      },
      "pageSize": {
        "type": "integer",
        "format": "int64",
        "description": "每页条数"
      },
      "pageable": {
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageSort": {
            "type": "array",
            "description": "排序",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "totalElements": {
        "type": "integer",
        "format": "int64",
        "description": "总条数"
      },
      "totalPages": {
        "type": "integer",
        "format": "int64",
        "description": "总页数"
      }
    }
  },
  "统一响应体OfListOf行政级别表-响应": {
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
          "properties": {
            "appId": {
              "type": "integer",
              "format": "int64",
              "description": "应用ID，做数据隔离用"
            },
            "bizId": {
              "type": "integer",
              "format": "int64",
              "description": "业务ID，做数据隔离用"
            },
            "createAccount": {
              "type": "integer",
              "format": "int64",
              "description": "创建者账户"
            },
            "createAccountName": {
              "type": "string",
              "description": "创建者用户名"
            },
            "createName": {
              "type": "string",
              "description": "创建者名字"
            },
            "createTime": {
              "type": "string",
              "format": "date-time",
              "description": "创建时间"
            },
            "dataScope": {
              "type": "integer",
              "format": "int32",
              "description": "数据作用域：1、私有 2、应用公用 3、租户公用"
            },
            "ext": {
              "type": "string",
              "description": "扩展属性"
            },
            "id": {
              "type": "integer",
              "format": "int64",
              "description": "由程序分配的唯一ID"
            },
            "isLeaf": {
              "type": "integer",
              "format": "int32",
              "description": "是否叶子，1：是，0：否"
            },
            "lat": {
              "type": "number",
              "format": "double",
              "description": "维度"
            },
            "level": {
              "type": "integer",
              "format": "int32",
              "description": "层级"
            },
            "lng": {
              "type": "number",
              "format": "double",
              "description": "经度"
            },
            "modifyAccount": {
              "type": "integer",
              "format": "int64",
              "description": "最后修改者账户"
            },
            "modifyAccountName": {
              "type": "string",
              "description": "最后修改者用户名"
            },
            "modifyName": {
              "type": "string",
              "description": "最后修改者姓名"
            },
            "modifyTime": {
              "type": "string",
              "format": "date-time",
              "description": "最后的修改时间"
            },
            "name": {
              "type": "string",
              "description": "显示名称"
            },
            "parentId": {
              "type": "integer",
              "format": "int64",
              "description": "上级"
            },
            "path": {
              "type": "string",
              "description": "多级路径"
            },
            "sort": {
              "type": "integer",
              "format": "int32",
              "description": "排序"
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
  },
  "业务计划明细-响应": {
    "type": "object",
    "properties": {
      "amPlanArea": {
        "type": "number",
        "description": "规划面积"
      },
      "amPlanBuildArea": {
        "type": "number",
        "description": "规划建筑面积"
      },
      "amRegArea": {
        "type": "number",
        "description": "产权面积"
      },
      "buildingId": {
        "type": "integer",
        "format": "int64",
        "description": "房产ID"
      },
      "buildingName": {
        "type": "string",
        "description": "房产名称"
      },
      "city": {
        "type": "string",
        "description": "市级行政区划"
      },
      "cityId": {
        "type": "integer",
        "format": "int64",
        "description": "市级行政区划ID"
      },
      "country": {
        "type": "string",
        "description": "国家名称"
      },
      "countryId": {
        "type": "integer",
        "format": "int64",
        "description": "国家id，用来定义地图的初始化级"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "统计日"
      },
      "district": {
        "type": "string",
        "description": "区县级行政区划"
      },
      "districtId": {
        "type": "integer",
        "format": "int64",
        "description": "区县级行政区划ID"
      },
      "gdLat": {
        "type": "number",
        "description": "物业点纬度(高德)"
      },
      "gdLng": {
        "type": "number",
        "description": "物业点经度(高德)"
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "数据库主键ID"
      },
      "latitude": {
        "type": "number",
        "description": "物业点维度(百度)"
      },
      "longitude": {
        "type": "number",
        "description": "物业点经度(百度)，用以在地图定位物业点"
      },
      "orgId": {
        "type": "integer",
        "format": "int64",
        "description": "组织id"
      },
      "orgName": {
        "type": "string",
        "description": "组织名称"
      },
      "ownership": {
        "type": "string",
        "description": "房产所有权性质"
      },
      "planningId": {
        "type": "integer",
        "format": "int64",
        "description": "房产规划ID"
      },
      "planningName": {
        "type": "string",
        "description": "规划类型"
      },
      "planningType": {
        "type": "string",
        "description": "规划用途"
      },
      "ppId": {
        "type": "integer",
        "format": "int64",
        "description": "物业点ID"
      },
      "ppName": {
        "type": "string",
        "description": "物业点名称"
      },
      "province": {
        "type": "string",
        "description": "省级行政区划"
      },
      "provinceId": {
        "type": "integer",
        "format": "int64",
        "description": "省级行政区划ID"
      },
      "region": {
        "type": "string",
        "description": "管理区域(分区)"
      },
      "regionId": {
        "type": "integer",
        "format": "int64",
        "description": "管理区域(分区)ID"
      }
    }
  },
  "房产-决策-办公房产面积占比，占比需要自己计算": {
    "type": "object",
    "properties": {
      "buildArea": {
        "type": "number",
        "description": "办公物业总面积"
      },
      "ownBuildArea": {
        "type": "number",
        "description": "自有办公物业面积"
      },
      "rentBuildArea": {
        "type": "number",
        "description": "租入办公物业面积"
      }
    }
  },
  "统一响应体Of预算-决策-概况": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "exec": {
            "type": "number",
            "description": "预算执行（费用被选发生）总额（元）"
          },
          "execPercent": {
            "type": "number",
            "description": "预算执行率"
          },
          "total": {
            "type": "number",
            "description": "预算总额"
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
  },
  "统一响应体OfListOfint": {
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
          "type": "integer",
          "format": "int32"
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
  },
  "NamedRadarDto": {
    "type": "object",
    "properties": {
      "data": {
        "properties": {
          "categories": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "indicator": {
            "type": "array",
            "items": {
              "properties": {
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "series": {
            "type": "array",
            "items": {
              "properties": {
                "data": {
                  "type": "array",
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "array",
                        "items": {
                          "type": "UNABLE_TO_PARSE",
                          "description": "Seems to be stack overflow. You need to checkout why?",
                          "definitionType": "Number"
                        }
                      }
                    }
                  }
                },
                "name": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "name": {
        "type": "string"
      }
    }
  },
  "Series": {
    "type": "object",
    "properties": {
      "data": {
        "type": "array",
        "items": {
          "type": "UNABLE_TO_PARSE",
          "description": "Seems to be stack overflow. You need to checkout why?",
          "definitionType": "Number"
        }
      },
      "name": {
        "type": "string"
      },
      "type": {
        "type": "string"
      },
      "yAxisIndex": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "周转房-入住统计": {
    "type": "object",
    "properties": {
      "emptySuite": {
        "type": "integer",
        "format": "int32",
        "description": "空置套间数量"
      },
      "fullSuite": {
        "type": "integer",
        "format": "int32",
        "description": "已住满数量 82"
      },
      "partialSuite": {
        "type": "integer",
        "format": "int32",
        "description": "未住满数量 83"
      }
    }
  },
  "统一响应体Of分页响应体Of业务计划明细-响应": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "example": 200,
        "description": "业务响应状态"
      },
      "data": {
        "properties": {
          "content": {
            "type": "array",
            "description": "内容",
            "items": {
              "properties": {
                "amPlanArea": {
                  "type": "number",
                  "description": "规划面积"
                },
                "amPlanBuildArea": {
                  "type": "number",
                  "description": "规划建筑面积"
                },
                "amRegArea": {
                  "type": "number",
                  "description": "产权面积"
                },
                "buildingId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产ID"
                },
                "buildingName": {
                  "type": "string",
                  "description": "房产名称"
                },
                "city": {
                  "type": "string",
                  "description": "市级行政区划"
                },
                "cityId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "市级行政区划ID"
                },
                "country": {
                  "type": "string",
                  "description": "国家名称"
                },
                "countryId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "国家id，用来定义地图的初始化级"
                },
                "date": {
                  "type": "string",
                  "format": "date",
                  "description": "统计日"
                },
                "district": {
                  "type": "string",
                  "description": "区县级行政区划"
                },
                "districtId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "区县级行政区划ID"
                },
                "gdLat": {
                  "type": "number",
                  "description": "物业点纬度(高德)"
                },
                "gdLng": {
                  "type": "number",
                  "description": "物业点经度(高德)"
                },
                "id": {
                  "type": "integer",
                  "format": "int64",
                  "description": "数据库主键ID"
                },
                "latitude": {
                  "type": "number",
                  "description": "物业点维度(百度)"
                },
                "longitude": {
                  "type": "number",
                  "description": "物业点经度(百度)，用以在地图定位物业点"
                },
                "orgId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "组织id"
                },
                "orgName": {
                  "type": "string",
                  "description": "组织名称"
                },
                "ownership": {
                  "type": "string",
                  "description": "房产所有权性质"
                },
                "planningId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "房产规划ID"
                },
                "planningName": {
                  "type": "string",
                  "description": "规划类型"
                },
                "planningType": {
                  "type": "string",
                  "description": "规划用途"
                },
                "ppId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "物业点ID"
                },
                "ppName": {
                  "type": "string",
                  "description": "物业点名称"
                },
                "province": {
                  "type": "string",
                  "description": "省级行政区划"
                },
                "provinceId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "省级行政区划ID"
                },
                "region": {
                  "type": "string",
                  "description": "管理区域(分区)"
                },
                "regionId": {
                  "type": "integer",
                  "format": "int64",
                  "description": "管理区域(分区)ID"
                }
              }
            }
          },
          "currentSize": {
            "type": "integer",
            "format": "int64",
            "description": "当前页条数"
          },
          "first": {
            "type": "boolean",
            "example": false,
            "description": "是否第一页"
          },
          "last": {
            "type": "boolean",
            "example": false,
            "description": "是否最后一页"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int64",
            "description": "当前页"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64",
            "description": "每页条数"
          },
          "pageable": {
            "properties": {
              "pageNumber": {
                "type": "integer",
                "format": "int64",
                "description": "当前页"
              },
              "pageSize": {
                "type": "integer",
                "format": "int64",
                "description": "每页条数"
              },
              "pageSort": {
                "type": "array",
                "description": "排序",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "totalElements": {
            "type": "integer",
            "format": "int64",
            "description": "总条数"
          },
          "totalPages": {
            "type": "integer",
            "format": "int64",
            "description": "总页数"
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
  },
  "Summary": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "rate": {
        "type": "number"
      },
      "value": {
        "type": "number"
      }
    }
  }
}