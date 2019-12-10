const data = {
  fileTypesItem: {
    name: 'fileTypesItem',
    result: {
      contentType: {
        paramName: 'contentType',
        type: 'string',
        description: '文件ContentType'
      },
      fileId: {
        paramName: 'fileId',
        type: 'number',
        description: '文件Id'
      },
      fileName: {
        paramName: 'fileName',
        type: 'string',
        description: '文件名称'
      },
      fileSize: {
        paramName: 'fileSize',
        type: 'number',
        description: '文件大小'
      },
      fileType: {
        paramName: 'fileType',
        type: 'string',
        description:
          '文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}'
      },
      ossUrl: {
        paramName: 'ossUrl',
        type: 'string',
        description: 'ossUrl文件下载地址'
      },
      path: {
        paramName: 'path',
        type: 'string',
        description: '公共上传服务返回id，用于下载'
      },
      storeFileName: {
        paramName: 'storeFileName',
        type: 'string',
        description: '存储文件名，用于返回ossUrl地址'
      },
      url: {
        paramName: 'url',
        type: 'string',
        description: '公共服务文件下载地址'
      }
    }
  },
  processFiles: {
    name: 'processFiles',
    result: {
      fileTypes: {
        paramName: 'fileTypes',
        type: 'array',
        itemType: 'fileTypesItem'
      }
    }
  },
  siteFiles: {
    name: 'siteFiles',
    result: {
      fileTypes: {
        paramName: 'fileTypes',
        type: 'array',
        itemType: 'fileTypesItem'
      }
    }
  },
  facilityDtosItem: {
    name: 'facilityDtosItem',
    result: {
      createTime: {
        paramName: 'createTime',
        type: 'string',
        description: '创建时间'
      },
      facFacilityId: {
        paramName: 'facFacilityId',
        type: 'number',
        description: '设备id'
      },
      facilityCode: {
        paramName: 'facilityCode',
        type: 'string',
        description: '设备编码'
      },
      facilityName: {
        paramName: 'facilityName',
        type: 'string',
        description: '设备名称'
      },
      facilityType: {
        paramName: 'facilityType',
        type: 'string',
        description: '系统分类'
      },
      id: {
        paramName: 'id',
        type: 'number',
        description: '由程序分配的唯一ID'
      },
      modifyTime: {
        paramName: 'modifyTime',
        type: 'string',
        description: '最后的修改时间'
      },
      mountSpace: {
        paramName: 'mountSpace',
        type: 'string',
        description: '位置'
      },
      processDesc: {
        paramName: 'processDesc',
        type: 'string',
        description: '处理方式'
      },
      processFiles: {
        fileTypes: {
          paramName: 'fileTypes',
          type: 'array',
          itemType: 'fileTypesItem'
        }
      },
      projectId: {
        paramName: 'projectId',
        type: 'number',
        description: '项目ID'
      },
      siteDesc: {
        paramName: 'siteDesc',
        type: 'string',
        description: '现场描述'
      },
      siteFiles: {
        fileTypes: {
          paramName: 'fileTypes',
          type: 'array',
          itemType: 'fileTypesItem'
        }
      },
      woWorkorderId: {
        paramName: 'woWorkorderId',
        type: 'number',
        description: '工单id'
      }
    }
  },
  files: {
    name: 'files',
    result: {
      fileTypes: {
        paramName: 'fileTypes',
        type: 'array',
        itemType: 'fileTypesItem'
      }
    }
  },
  spaceDtosItem: {
    name: 'spaceDtosItem',
    result: {
      createTime: {
        paramName: 'createTime',
        type: 'string',
        description: '创建时间'
      },
      description: {
        paramName: 'description',
        type: 'string',
        description: '描述'
      },
      id: {
        paramName: 'id',
        type: 'number',
        description: '由程序分配的唯一ID'
      },
      modifyTime: {
        paramName: 'modifyTime',
        type: 'string',
        description: '最后的修改时间'
      },
      projectId: {
        paramName: 'projectId',
        type: 'number',
        description: '项目ID'
      },
      spBuildingId: {
        paramName: 'spBuildingId',
        type: 'number',
        description: '大楼id'
      },
      spBuildingName: {
        paramName: 'spBuildingName',
        type: 'string',
        description: '楼宇名称'
      },
      spFloorId: {
        paramName: 'spFloorId',
        type: 'number',
        description: '楼层id'
      },
      spFloorName: {
        paramName: 'spFloorName',
        type: 'string',
        description: '楼层名称'
      },
      spSpaceId: {
        paramName: 'spSpaceId',
        type: 'number',
        description: '房间id'
      },
      spSpaceName: {
        paramName: 'spSpaceName',
        type: 'string',
        description: '房间名称'
      },
      woWorkorderId: {
        paramName: 'woWorkorderId',
        type: 'number',
        description: '工单id'
      }
    }
  },
  workordersItem: {
    name: 'workordersItem',
    result: {
      appointmentEndTime: {
        paramName: 'appointmentEndTime',
        type: 'string',
        description: '预约结束时间，从服务台同步过来'
      },
      appointmentStartTime: {
        paramName: 'appointmentStartTime',
        type: 'string',
        description: '预约开始时间，从服务台同步过来'
      },
      description: {
        paramName: 'description',
        type: 'string',
        description: '问题描述'
      },
      facilityDtos: {
        paramName: 'facilityDtos',
        type: 'array',
        itemType: 'facilityDtosItem'
      },
      files: {
        fileTypes: {
          paramName: 'fileTypes',
          type: 'array',
          itemType: 'fileTypesItem'
        }
      },
      isRefFacility: {
        paramName: 'isRefFacility',
        type: 'string',
        description: '是否关联设备 0-不关联 1-关联 是否枚举{否=No, 是=Yes}'
      },
      orgDepartmentId: {
        paramName: 'orgDepartmentId',
        type: 'number',
        description: '部门id'
      },
      phone: {
        paramName: 'phone',
        type: 'string',
        description: '联系电话'
      },
      spaceDtos: {
        paramName: 'spaceDtos',
        type: 'array',
        itemType: 'spaceDtosItem'
      },
      userId: {
        paramName: 'userId',
        type: 'number',
        description: '用户/客户ID'
      },
      userType: {
        paramName: 'userType',
        type: 'string',
        description:
          '用户类型 1-用户 2-客户 9-填写 {员工=User, 客户=Clientele, 其他=Other}'
      },
      username: {
        paramName: 'username',
        type: 'string',
        description: '报障人名称'
      },
      woPriorityId: {
        paramName: 'woPriorityId',
        type: 'number',
        description: '优先级id'
      },
      woServiceTypeId: {
        paramName: 'woServiceTypeId',
        type: 'number',
        description: '服务类型id'
      },
      woServiceTypeRefId: {
        paramName: 'woServiceTypeRefId',
        type: 'number',
        description: '服务类型关联id, 集团版必传'
      },
      woSlaId: {
        paramName: 'woSlaId',
        type: 'number',
        description: 'slaId'
      },
      woType: {
        paramName: 'woType',
        type: 'string',
        description:
          '工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}'
      }
    }
  }
};

module.exports = {
  data
};
