{
  "path": "/employee/self",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查询用户个人信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "findBySelfUsingGET",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of用户个人信息"
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
    "put": {
      "parameters": {
        "body": [
          {
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
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "emNo": {
              "type": "string",
              "description": "员工编号",
              "enum": []
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
            "idNumber": {
              "type": "string",
              "description": "身份证号",
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "姓名",
              "enum": []
            },
            "orgPositionId": {
              "type": "number",
              "description": "岗位",
              "required": false,
              "enum": []
            },
            "orgPostId": {
              "type": "number",
              "description": "职位ID",
              "required": false,
              "enum": []
            },
            "phone": {
              "type": "string",
              "description": "手机号",
              "enum": []
            },
            "tel": {
              "type": "string",
              "description": "电话号",
              "enum": []
            },
            "telephone": {
              "type": "string",
              "description": "分机号",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "修改用户个人信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateBySelfUsingPUT",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of用户个人信息"
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