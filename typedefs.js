{
  "facilitiesItem": {
    "name": "facilitiesItem",
    "result": {}
  },
  "fileTypesItem": {
    "name": "fileTypesItem",
    "result": {
      "contentType": {
        "paramName": "contentType",
        "type": "string",
        "description": "文件ContentType"
      },
      "fileId": {
        "paramName": "fileId",
        "type": "number",
        "description": "文件Id"
      },
      "fileName": {
        "paramName": "fileName",
        "type": "string",
        "description": "文件名称"
      },
      "fileSize": {
        "paramName": "fileSize",
        "type": "number",
        "description": "文件大小"
      },
      "fileType": {
        "paramName": "fileType",
        "type": "string",
        "description": "文件类型 文件类型{图片=Image-1, 视频=Video-2, 音频=Voice-3, 附件=Attachment-4}"
      },
      "ossUrl": {
        "paramName": "ossUrl",
        "type": "string",
        "description": "ossUrl文件下载地址"
      },
      "path": {
        "paramName": "path",
        "type": "string",
        "description": "公共上传服务返回id，用于下载"
      },
      "storeFileName": {
        "paramName": "storeFileName",
        "type": "string",
        "description": "存储文件名，用于返回ossUrl地址"
      },
      "url": {
        "paramName": "url",
        "type": "string",
        "description": "公共服务文件下载地址"
      }
    }
  },
  "files": {
    "name": "files",
    "result": {
      "fileTypes": {
        "paramName": "fileTypes",
        "type": "array",
        "itemType": "fileTypesItem",
        "description": ""
      }
    }
  },
  "spaceDtosItem": {
    "name": "spaceDtosItem",
    "result": {
      "description": {
        "paramName": "description",
        "type": "string",
        "description": "处理方式"
      },
      "spBuildingId": {
        "paramName": "spBuildingId",
        "type": "number",
        "description": "大楼id"
      },
      "spFloorId": {
        "paramName": "spFloorId",
        "type": "number",
        "description": "楼层id"
      },
      "spSpaceId": {
        "paramName": "spSpaceId",
        "type": "number",
        "description": "房间id"
      }
    }
  }
}