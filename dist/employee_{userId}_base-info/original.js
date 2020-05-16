{
  "path": "/employee/{userId}/base-info",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "accountActivationStatus": {
              "type": "string",
              "description": "账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "avatarUrl": {
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
            "bindAccount": {
              "type": "string",
              "description": "绑定的账号",
              "enum": []
            },
            "bindRoleIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "绑定的角色id"
            },
            "demandScope": {
              "type": "string",
              "description": "需求权限：0、所有需求可见 1、相关需求可见 {所有需求可见=All-0, 相关需求可见=Related-1}",
              "enum": [
                "0",
                "1"
              ]
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
              "description": "用户状态：0、离职 1、在职 {员工=EmStatusEnum-1, 在职=EmStatusEnum-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "emType": {
              "type": "string",
              "description": "用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}",
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
              "description": "性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}",
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
              "required": false,
              "description": "授权项目ID"
            },
            "inspectionScope": {
              "type": "string",
              "description": "巡检权限：0、所有巡检可见 1、相关巡检可见 {所有巡检可见=All-0, 相关巡检可见=Related-1}",
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
            "orgPostId": {
              "type": "number",
              "description": "职位ID",
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
              "description": "工单权限：0、所有工单可见 1、相关工单可见 {所有工单可见=All-0, 相关工单可见=Related-1}",
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
              "required": false,
              "description": "工作组ID"
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "userId",
            "description": "userId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改用户基本信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateBaseInfoUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}