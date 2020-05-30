{
  "path": "/facility/{id}",
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
      "summary": "设备台帐-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_13",
      "tags": [
        "facility"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "capitalCode": {
              "type": "string",
              "description": "资产编码",
              "enum": []
            },
            "components": {
              "type": "array",
              "valueType": {
                "type": "object",
                "componentBrand": {
                  "type": "string",
                  "description": "组件品牌",
                  "enum": []
                },
                "componentCode": {
                  "type": "string",
                  "description": "组件编码",
                  "enum": []
                },
                "componentLife": {
                  "type": "string",
                  "description": "质保周期",
                  "enum": []
                },
                "componentModel": {
                  "type": "string",
                  "description": "组件型号",
                  "enum": []
                },
                "componentName": {
                  "type": "string",
                  "description": "组件名称",
                  "enum": []
                },
                "componentUnit": {
                  "type": "string",
                  "description": "组件单位",
                  "enum": []
                },
                "enableTime": {
                  "type": "string",
                  "description": "安装时间",
                  "enum": []
                },
                "expireTime": {
                  "type": "string",
                  "description": "质保到期",
                  "enum": []
                },
                "facilityId": {
                  "type": "number",
                  "description": "设备id",
                  "required": false,
                  "enum": []
                },
                "typeComponentId": {
                  "type": "number",
                  "description": "设备分类组件id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "设备核心组件"
            },
            "enableDate": {
              "type": "string",
              "description": "启用日期",
              "enum": []
            },
            "exfactoryDate": {
              "type": "string",
              "description": "出厂日期",
              "enum": []
            },
            "extend": {
              "type": "string",
              "description": "扩展",
              "enum": []
            },
            "facilityBrand": {
              "type": "string",
              "description": "品牌dict_type=facility_tally_brand",
              "enum": []
            },
            "facilityCode": {
              "type": "string",
              "description": "设备编码",
              "enum": []
            },
            "facilityDesc": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "facilityImportance": {
              "type": "string",
              "description": "重要性dict_type=facility_tally_importance 1-一般 2-重要 3-非常重要 {一般=General-1, 重要=Important-2, 非常重要=VeryImportant-3}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "facilityLevel": {
              "type": "string",
              "description": "设备级别dict_type=facility_tally_level 0-一级设备 1-二级设备 2-三级设备 3-四级设备 4-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            },
            "facilityLife": {
              "type": "number",
              "description": "质保周期",
              "required": false,
              "enum": []
            },
            "facilityModel": {
              "type": "string",
              "description": "型号",
              "enum": []
            },
            "facilityName": {
              "type": "string",
              "description": "设备名称",
              "enum": []
            },
            "facilitySerial": {
              "type": "string",
              "description": "设备序列号",
              "enum": []
            },
            "facilityService": {
              "type": "array",
              "valueType": {
                "type": "object",
                "services": {
                  "type": "array",
                  "valueType": {
                    "type": "object",
                    "serviceArea": {
                      "type": "string",
                      "description": "服务区域",
                      "enum": []
                    },
                    "serviceObject": {
                      "type": "string",
                      "description": "服务对象",
                      "enum": []
                    }
                  },
                  "required": false,
                  "description": ""
                }
              },
              "required": false,
              "description": "服务区域和对象"
            },
            "facilityStatus": {
              "type": "string",
              "description": "设备状态dict_type=facility_tally_status 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
              ]
            },
            "facilityTypeId": {
              "type": "number",
              "description": "系统分类",
              "required": false,
              "enum": []
            },
            "facilityWeight": {
              "type": "string",
              "description": "重量",
              "enum": []
            },
            "files": {
              "fileTypes": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "contentType": {
                    "type": "string",
                    "description": "文件ContentType",
                    "enum": []
                  },
                  "fileId": {
                    "type": "number",
                    "description": "文件Id",
                    "required": false,
                    "enum": []
                  },
                  "fileName": {
                    "type": "string",
                    "description": "文件名称",
                    "enum": []
                  },
                  "fileSize": {
                    "type": "number",
                    "description": "文件大小",
                    "required": false,
                    "enum": []
                  },
                  "fileType": {
                    "type": "string",
                    "description": "文件类型 文件类型{图片=Image-1, 视频=Video-2, 音频=Voice-3, 附件=Attachment-4}",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  },
                  "ossUrl": {
                    "type": "string",
                    "description": "ossUrl文件下载地址",
                    "enum": []
                  },
                  "path": {
                    "type": "string",
                    "description": "公共上传服务返回id，用于下载",
                    "enum": []
                  },
                  "storeFileName": {
                    "type": "string",
                    "description": "存储文件名，用于返回ossUrl地址",
                    "enum": []
                  },
                  "url": {
                    "type": "string",
                    "description": "公共服务文件下载地址",
                    "enum": []
                  }
                },
                "required": false,
                "description": ""
              }
            },
            "fixedCode": {
              "type": "string",
              "description": "固定编码",
              "enum": []
            },
            "lifeUnit": {
              "type": "string",
              "description": "质保周期单位 {年=Year-1, 月=Month-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "mountDate": {
              "type": "string",
              "description": "安装日期",
              "enum": []
            },
            "mountSpace": {
              "type": "string",
              "description": "安装位置",
              "enum": []
            },
            "params": {
              "type": "array",
              "valueType": {
                "type": "object",
                "extend": {
                  "type": "string",
                  "description": "扩展",
                  "enum": []
                },
                "facilityId": {
                  "type": "number",
                  "description": "设备id",
                  "required": false,
                  "enum": []
                },
                "paramDesc": {
                  "type": "string",
                  "description": "描述",
                  "enum": []
                },
                "paramName": {
                  "type": "string",
                  "description": "参数名称",
                  "enum": []
                },
                "paramType": {
                  "type": "string",
                  "description": "参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}",
                  "enum": [
                    "1",
                    "2",
                    "3",
                    "4"
                  ]
                },
                "paramUnit": {
                  "type": "string",
                  "description": "单位",
                  "enum": []
                },
                "paramValue": {
                  "type": "string",
                  "description": "参数值",
                  "enum": []
                },
                "remark": {
                  "type": "string",
                  "description": "备注",
                  "enum": []
                },
                "typeParamId": {
                  "type": "number",
                  "description": "设备分类参数id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "设备参数"
            },
            "parents": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "上级设备"
            },
            "qrCode": {
              "fileTypes": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "contentType": {
                    "type": "string",
                    "description": "文件ContentType",
                    "enum": []
                  },
                  "fileId": {
                    "type": "number",
                    "description": "文件Id",
                    "required": false,
                    "enum": []
                  },
                  "fileName": {
                    "type": "string",
                    "description": "文件名称",
                    "enum": []
                  },
                  "fileSize": {
                    "type": "number",
                    "description": "文件大小",
                    "required": false,
                    "enum": []
                  },
                  "fileType": {
                    "type": "string",
                    "description": "文件类型 文件类型{图片=Image-1, 视频=Video-2, 音频=Voice-3, 附件=Attachment-4}",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  },
                  "ossUrl": {
                    "type": "string",
                    "description": "ossUrl文件下载地址",
                    "enum": []
                  },
                  "path": {
                    "type": "string",
                    "description": "公共上传服务返回id，用于下载",
                    "enum": []
                  },
                  "storeFileName": {
                    "type": "string",
                    "description": "存储文件名，用于返回ossUrl地址",
                    "enum": []
                  },
                  "url": {
                    "type": "string",
                    "description": "公共服务文件下载地址",
                    "enum": []
                  }
                },
                "required": false,
                "description": ""
              }
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "serviceAreaObject": {
              "services": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "serviceArea": {
                    "type": "string",
                    "description": "服务区域",
                    "enum": []
                  },
                  "serviceObject": {
                    "type": "string",
                    "description": "服务对象",
                    "enum": []
                  }
                },
                "required": false,
                "description": ""
              }
            },
            "spBuildingId": {
              "type": "number",
              "description": "大厦",
              "required": false,
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层",
              "required": false,
              "enum": []
            },
            "spSpaceId": {
              "type": "number",
              "description": "房间",
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
      "summary": "修改设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_17",
      "tags": [
        "facility"
      ]
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
      "summary": "删除设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_15",
      "tags": [
        "facility"
      ]
    }
  }
}