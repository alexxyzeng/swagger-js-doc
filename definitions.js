var result = {
  AdvertisementAddOrUpdateReqVO: {
    type: 'object',
    properties: {
      content: { type: 'string' },
      enName: { type: 'string' },
      files: { type: 'array', items: { type: 'string' } },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'AdvertisementAddOrUpdateReqVO'
  },
  AlarmAddOrUpdReqVO: {
    type: 'object',
    properties: {
      alarmText: { type: 'string' },
      alarmTime: { type: 'integer', format: 'int64' },
      deviceId: { type: 'integer', format: 'int64' }
    },
    title: 'AlarmAddOrUpdReqVO'
  },
  AlarmBatchSaleReqVO: {
    type: 'object',
    properties: {
      alarmIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      alarmTime: { type: 'integer', format: 'int64' }
    },
    title: 'AlarmBatchSaleReqVO'
  },
  AppointmentReqVO: {
    type: 'object',
    properties: {
      allowConflict: { type: 'boolean' },
      booking: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          optional: { type: 'boolean' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      content: { type: 'string' },
      departmentIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      ends: { type: 'integer', format: 'int64' },
      fileHashs: { type: 'array', items: { type: 'string' } },
      frontSource: { type: 'integer', format: 'int32' },
      inviteeAdmins: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            optional: { type: 'boolean' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      invitees: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            optional: { type: 'boolean' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      isAllDay: { type: 'boolean' },
      isApptNotRelease: { type: 'boolean' },
      isHiddenBooker: { type: 'boolean' },
      isHiddenContent: { type: 'boolean' },
      isHiddenInviter: { type: 'boolean' },
      isHiddenOrganizer: { type: 'boolean' },
      isHiddenTitle: { type: 'boolean' },
      isSecurity: { type: 'boolean' },
      loopRule: {
        properties: {
          dayOfTheMonth: { type: 'integer', format: 'int32' },
          dayOfTheWeek: {
            type: 'array',
            items: { type: 'integer', format: 'int32' }
          },
          endDate: { type: 'integer', format: 'int64' },
          frequency: { type: 'integer', format: 'int32' },
          interval: { type: 'integer', format: 'int32' },
          loopEndType: { type: 'integer', format: 'int32' },
          loopLabel: { type: 'integer', format: 'int32' },
          loopMode: { type: 'integer', format: 'int32' },
          loopType: { type: 'integer', format: 'int32' },
          month: { type: 'integer', format: 'int32' },
          startDate: { type: 'integer', format: 'int64' },
          weekOfTheMonthIndex: { type: 'integer', format: 'int32' }
        }
      },
      organizer: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          optional: { type: 'boolean' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      platform: { type: 'integer', format: 'int32' },
      spaceIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      starts: { type: 'integer', format: 'int64' },
      timeZone: { type: 'string' },
      title: { type: 'string' }
    },
    title: 'AppointmentReqVO'
  },
  ApptCardResVO: {
    type: 'object',
    properties: {
      actualEndTime: { type: 'integer', format: 'int64' },
      actualStartTime: { type: 'integer', format: 'int64' },
      apptId: { type: 'integer', format: 'int64' },
      apptStatus: { type: 'integer', format: 'int32' },
      apptType: { type: 'integer', format: 'int32' },
      booking: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          participantType: { type: 'integer', format: 'int32' },
          phoneNumber: { type: 'string' },
          responseCode: { type: 'integer', format: 'int32' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      endTime: { type: 'integer', format: 'int64' },
      inviteeAdminList: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            participantType: { type: 'integer', format: 'int32' },
            phoneNumber: { type: 'string' },
            responseCode: { type: 'integer', format: 'int32' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      inviteeList: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            participantType: { type: 'integer', format: 'int32' },
            phoneNumber: { type: 'string' },
            responseCode: { type: 'integer', format: 'int32' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      isApptNotRelease: { type: 'boolean' },
      isConflict: { type: 'boolean' },
      isFromApptSync: { type: 'boolean' },
      loopRule: { type: 'string' },
      masterId: { type: 'integer', format: 'int64' },
      myLoopResponseCode: { type: 'integer', format: 'int32' },
      myResponseCode: { type: 'integer', format: 'int32' },
      organizer: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          participantType: { type: 'integer', format: 'int32' },
          phoneNumber: { type: 'string' },
          responseCode: { type: 'integer', format: 'int32' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      spaceList: {
        type: 'array',
        items: {
          properties: {
            actualEndTime: { type: 'integer', format: 'int64' },
            actualStartTime: { type: 'integer', format: 'int64' },
            apptStatus: { type: 'integer', format: 'int32' },
            endTime: { type: 'integer', format: 'int64' },
            isProxySpace: { type: 'boolean' },
            spaceEnName: { type: 'string' },
            spaceId: { type: 'integer', format: 'int64' },
            spaceName: { type: 'string' },
            spaceZhName: { type: 'string' },
            startTime: { type: 'integer', format: 'int64' }
          }
        }
      },
      startTime: { type: 'integer', format: 'int64' },
      title: { type: 'string' }
    },
    title: 'ApptCardResVO'
  },
  ApptDetailsResVO: {
    type: 'object',
    properties: {
      actualEndTime: { type: 'integer', format: 'int64' },
      actualStartTime: { type: 'integer', format: 'int64' },
      apptId: { type: 'integer', format: 'int64' },
      apptSecurity: {
        properties: {
          currentUser: { type: 'string' },
          isHiddenBooker: { type: 'boolean' },
          isHiddenContent: { type: 'boolean' },
          isHiddenInviter: { type: 'boolean' },
          isHiddenOrganizer: { type: 'boolean' },
          isHiddenTitle: { type: 'boolean' },
          isSecurity: { type: 'boolean' },
          security: { type: 'boolean' }
        }
      },
      apptStatus: { type: 'integer', format: 'int32' },
      apptType: { type: 'integer', format: 'int32' },
      booking: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          participantType: { type: 'integer', format: 'int32' },
          phoneNumber: { type: 'string' },
          responseCode: { type: 'integer', format: 'int32' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      content: { type: 'string' },
      endTime: { type: 'integer', format: 'int64' },
      fileList: {
        type: 'array',
        items: {
          properties: {
            fileName: { type: 'string' },
            filePath: { type: 'string' },
            fileSize: { type: 'integer', format: 'int64' },
            hash: { type: 'string' }
          }
        }
      },
      holdEndTime: { type: 'integer', format: 'int64' },
      inviteeAdminList: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            participantType: { type: 'integer', format: 'int32' },
            phoneNumber: { type: 'string' },
            responseCode: { type: 'integer', format: 'int32' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      inviteeList: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            participantType: { type: 'integer', format: 'int32' },
            phoneNumber: { type: 'string' },
            responseCode: { type: 'integer', format: 'int32' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      isApptNotRelease: { type: 'boolean' },
      isConflict: { type: 'boolean' },
      isFromApptSync: { type: 'boolean' },
      loopRule: { type: 'string' },
      masterId: { type: 'integer', format: 'int64' },
      myLoopResponseCode: { type: 'integer', format: 'int32' },
      myResponseCode: { type: 'integer', format: 'int32' },
      organizer: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          participantType: { type: 'integer', format: 'int32' },
          phoneNumber: { type: 'string' },
          responseCode: { type: 'integer', format: 'int32' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      spaceList: {
        type: 'array',
        items: {
          properties: {
            actualEndTime: { type: 'integer', format: 'int64' },
            actualStartTime: { type: 'integer', format: 'int64' },
            apptStatus: { type: 'integer', format: 'int32' },
            endTime: { type: 'integer', format: 'int64' },
            isProxySpace: { type: 'boolean' },
            spaceEnName: { type: 'string' },
            spaceId: { type: 'integer', format: 'int64' },
            spaceName: { type: 'string' },
            spaceZhName: { type: 'string' },
            startTime: { type: 'integer', format: 'int64' }
          }
        }
      },
      startTime: { type: 'integer', format: 'int64' },
      title: { type: 'string' }
    },
    title: 'ApptDetailsResVO'
  },
  ApptFileDTO: {
    type: 'object',
    properties: {
      fileName: { type: 'string' },
      filePath: { type: 'string' },
      fileSize: { type: 'integer', format: 'int64' },
      hash: { type: 'string' }
    },
    title: 'ApptFileDTO'
  },
  ApptHoldReqVO: {
    type: 'object',
    properties: {
      holdTime: { type: 'integer', format: 'int32' },
      isSendEmail: { type: 'boolean' }
    },
    title: 'ApptHoldReqVO'
  },
  ApptMailReqVO: {
    type: 'object',
    properties: {
      acceptTypes: {
        type: 'array',
        items: { type: 'integer', format: 'int32' }
      },
      isNotifyBeforeStart: { type: 'boolean' },
      remind: { type: 'integer', format: 'int32' }
    },
    title: 'ApptMailReqVO'
  },
  ApptNotReleaseVo: {
    type: 'object',
    properties: {
      periods: {
        type: 'array',
        items: {
          properties: {
            endTime: { type: 'string' },
            startTime: { type: 'string' }
          }
        }
      }
    },
    title: 'ApptNotReleaseVo'
  },
  ApptReqVO: {
    type: 'object',
    properties: {
      duration: { type: 'integer', format: 'int32' },
      endTime: { type: 'integer', format: 'int64' },
      organizer: { type: 'string' },
      startTime: { type: 'integer', format: 'int64' },
      title: { type: 'string' }
    },
    title: 'ApptReqVO'
  },
  ApptSecurityDTO: {
    type: 'object',
    properties: {
      currentUser: { type: 'string' },
      isHiddenBooker: { type: 'boolean' },
      isHiddenContent: { type: 'boolean' },
      isHiddenInviter: { type: 'boolean' },
      isHiddenOrganizer: { type: 'boolean' },
      isHiddenTitle: { type: 'boolean' },
      isSecurity: { type: 'boolean' },
      security: { type: 'boolean' }
    },
    title: 'ApptSecurityDTO'
  },
  ApptSpaceDateViewResVO: {
    type: 'object',
    properties: {
      apptList: {
        type: 'array',
        items: {
          properties: {
            apptId: { type: 'integer', format: 'int64' },
            apptStatus: { type: 'integer', format: 'int32' },
            apptType: { type: 'integer', format: 'int32' },
            endTime: { type: 'integer', format: 'int64' },
            isConflict: { type: 'boolean' },
            isProxySpace: { type: 'boolean' },
            myResponseCode: { type: 'integer', format: 'int32' },
            participantType: { type: 'integer', format: 'int32' },
            platform: { type: 'integer', format: 'int32' },
            startTime: { type: 'integer', format: 'int64' },
            title: { type: 'string' }
          }
        }
      },
      date: { type: 'string' },
      totalCount: { type: 'integer', format: 'int32' }
    },
    title: 'ApptSpaceDateViewResVO'
  },
  ApptSpaceInfoDTO: {
    type: 'object',
    properties: {
      actualEndTime: { type: 'integer', format: 'int64' },
      actualStartTime: { type: 'integer', format: 'int64' },
      apptStatus: { type: 'integer', format: 'int32' },
      endTime: { type: 'integer', format: 'int64' },
      isProxySpace: { type: 'boolean' },
      spaceEnName: { type: 'string' },
      spaceId: { type: 'integer', format: 'int64' },
      spaceName: { type: 'string' },
      spaceZhName: { type: 'string' },
      startTime: { type: 'integer', format: 'int64' }
    },
    title: 'ApptSpaceInfoDTO'
  },
  ApptSpaceTimelineDTO: {
    type: 'object',
    properties: {
      apptStatus: { type: 'integer', format: 'int32' },
      endTime: { type: 'integer', format: 'int64' },
      startTime: { type: 'integer', format: 'int64' }
    },
    title: 'ApptSpaceTimelineDTO'
  },
  ApptUpdateReqVO: {
    type: 'object',
    properties: {
      endTime: { type: 'integer', format: 'int64' },
      opType: { type: 'string' }
    },
    title: 'ApptUpdateReqVO'
  },
  BookingConfigReqVO: {
    type: 'object',
    properties: {
      bookingAfterDays: { type: 'integer', format: 'int32' },
      bookingDurationMax: { type: 'integer', format: 'int32' },
      bookingDurationMin: { type: 'integer', format: 'int32' },
      bookingRuleContent: { type: 'string' },
      durationType: { type: 'string' },
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      isEnableBookingRule: { type: 'boolean' },
      isNotifyApptBooker: { type: 'boolean' },
      isSendSuccessEmail: { type: 'boolean' },
      isSendSuccessSystemInfo: { type: 'boolean' },
      name: { type: 'string' },
      userId: { type: 'integer', format: 'int64' },
      zhName: { type: 'string' }
    },
    title: 'BookingConfigReqVO'
  },
  BookingConfigResVO: {
    type: 'object',
    properties: {
      bookingAfterDays: { type: 'integer', format: 'int32' },
      bookingDurationMax: { type: 'integer', format: 'int32' },
      bookingDurationMin: { type: 'integer', format: 'int32' },
      bookingRuleContent: { type: 'string' },
      createTime: { type: 'integer', format: 'int64' },
      durationType: {
        type: 'string',
        enum: { '0': 'UNLIMITED', '1': 'CUSTOMIZE' }
      },
      enName: { type: 'string' },
      hasPerm: { type: 'boolean' },
      id: { type: 'integer', format: 'int64' },
      isDefault: { type: 'boolean' },
      isEnableBookingRule: { type: 'boolean' },
      isOwner: { type: 'boolean' },
      isSendSuccessEmail: { type: 'boolean' },
      isSendSuccessSystemInfo: { type: 'boolean' },
      name: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'BookingConfigResVO'
  },
  BookingRoleDetailResVO: {
    type: 'object',
    properties: {
      creator: {
        properties: {
          depts: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                name: { type: 'string' },
                zhName: { type: 'string' }
              }
            }
          },
          email: { type: 'string' },
          enName: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          name: { type: 'string' },
          type: { type: 'integer', format: 'int32' },
          zhName: { type: 'string' }
        }
      },
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      isAdmin: { type: 'integer', format: 'int32' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      isSpacePublicCanSelect: { type: 'integer', format: 'int32' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      parentRoleMenu: {
        properties: {
          bookingPerm: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          spaceAutoRelease: { type: 'integer', format: 'int32' }
        }
      },
      remark: { type: 'string' },
      roleMenu: {
        properties: {
          bookingPerm: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          spaceAutoRelease: { type: 'integer', format: 'int32' }
        }
      },
      rolePerms: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      roleUsers: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      spaceBlackList: {
        type: 'array',
        items: {
          properties: {
            id: { type: 'integer', format: 'int64' },
            type: { type: 'integer', format: 'int32' }
          }
        }
      },
      userBlackList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      zhName: { type: 'string' }
    },
    title: 'BookingRoleDetailResVO'
  },
  BookingRoleInfoResVO: {
    type: 'object',
    properties: {
      bookingPerm: { type: 'integer', format: 'int32' },
      enName: { type: 'string' },
      isDefault: { type: 'integer', format: 'int32' },
      isModifiable: { type: 'integer', format: 'int32' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      remark: { type: 'string' },
      roleId: { type: 'integer', format: 'int64' },
      spaceAutoRelease: { type: 'integer', format: 'int32' },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'BookingRoleInfoResVO'
  },
  BookingRoleMenuModel: {
    type: 'object',
    properties: {
      bookingPerm: { type: 'integer', format: 'int32' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      spaceAutoRelease: { type: 'integer', format: 'int32' }
    },
    title: 'BookingRoleMenuModel'
  },
  BookingRoleReqVO: {
    type: 'object',
    properties: {
      bookingPerm: { type: 'integer', format: 'int32' },
      enName: { type: 'string' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      perms: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      remark: { type: 'string' },
      spaceAutoRelease: { type: 'integer', format: 'int32' },
      spaceBlackList: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      userBlackList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      users: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      zhName: { type: 'string' }
    },
    title: 'BookingRoleReqVO'
  },
  BuildingAddReqVO: {
    type: 'object',
    properties: {
      buildingEnName: { type: 'string' },
      buildingName: { type: 'string' },
      buildingZhName: { type: 'string' },
      enNameLevel1: { type: 'string' },
      enNameLevel2: { type: 'string' },
      enNameLevel3: { type: 'string' },
      enNameLevel4: { type: 'string' },
      enNameLevel5: { type: 'string' },
      enNameLevel6: { type: 'string' },
      floorList: {
        type: 'array',
        items: {
          properties: {
            floorId: { type: 'integer', format: 'int64' },
            floorName: { type: 'string' },
            floorNum: { type: 'integer', format: 'int32' },
            interlayer: { type: 'boolean' }
          }
        }
      },
      floorPrefix: { type: 'string' },
      level1: { type: 'string' },
      level2: { type: 'string' },
      level3: { type: 'string' },
      level4: { type: 'string' },
      level5: { type: 'string' },
      level6: { type: 'string' },
      timeZoneId: { type: 'integer', format: 'int64' },
      timeZoneOffset: { type: 'string' },
      zhNameLevel1: { type: 'string' },
      zhNameLevel2: { type: 'string' },
      zhNameLevel3: { type: 'string' },
      zhNameLevel4: { type: 'string' },
      zhNameLevel5: { type: 'string' },
      zhNameLevel6: { type: 'string' }
    },
    title: 'BuildingAddReqVO'
  },
  BuildingUpdReqVO: {
    type: 'object',
    properties: {
      buildingEnName: { type: 'string' },
      buildingName: { type: 'string' },
      buildingZhName: { type: 'string' },
      delFloorList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      enNameLevel1: { type: 'string' },
      enNameLevel2: { type: 'string' },
      enNameLevel3: { type: 'string' },
      enNameLevel4: { type: 'string' },
      enNameLevel5: { type: 'string' },
      enNameLevel6: { type: 'string' },
      floorList: {
        type: 'array',
        items: {
          properties: {
            floorId: { type: 'integer', format: 'int64' },
            floorName: { type: 'string' },
            floorNum: { type: 'integer', format: 'int32' },
            interlayer: { type: 'boolean' }
          }
        }
      },
      floorPrefix: { type: 'string' },
      level1: { type: 'string' },
      level2: { type: 'string' },
      level3: { type: 'string' },
      level4: { type: 'string' },
      level5: { type: 'string' },
      level6: { type: 'string' },
      newFloorList: {
        type: 'array',
        items: {
          properties: {
            floorId: { type: 'integer', format: 'int64' },
            floorName: { type: 'string' },
            floorNum: { type: 'integer', format: 'int32' },
            interlayer: { type: 'boolean' }
          }
        }
      },
      timeZoneId: { type: 'integer', format: 'int64' },
      timeZoneOffset: { type: 'string' },
      zhNameLevel1: { type: 'string' },
      zhNameLevel2: { type: 'string' },
      zhNameLevel3: { type: 'string' },
      zhNameLevel4: { type: 'string' },
      zhNameLevel5: { type: 'string' },
      zhNameLevel6: { type: 'string' }
    },
    title: 'BuildingUpdReqVO'
  },
  BuildingWithFLoorDTO: {
    type: 'object',
    properties: {
      buildingId: { type: 'integer', format: 'int64' },
      floorList: {
        type: 'array',
        items: {
          properties: {
            floorId: { type: 'integer', format: 'int64' },
            floorName: { type: 'string' }
          }
        }
      },
      locationEnName: { type: 'string' },
      locationZhName: { type: 'string' },
      spaceNum: { type: 'integer', format: 'int32' }
    },
    title: 'BuildingWithFLoorDTO'
  },
  CalendarApptBriefResVO: {
    type: 'object',
    properties: {
      apptId: { type: 'integer', format: 'int64' },
      apptStatus: { type: 'integer', format: 'int32' },
      apptType: { type: 'integer', format: 'int32' },
      endTime: { type: 'integer', format: 'int64' },
      isConflict: { type: 'boolean' },
      isProxySpace: { type: 'boolean' },
      myResponseCode: { type: 'integer', format: 'int32' },
      participantType: { type: 'integer', format: 'int32' },
      platform: { type: 'integer', format: 'int32' },
      startTime: { type: 'integer', format: 'int64' },
      title: { type: 'string' }
    },
    title: 'CalendarApptBriefResVO'
  },
  ChangeApptTimeResVO: {
    type: 'object',
    properties: {
      apptId: { type: 'integer', format: 'int64' },
      endTime: { type: 'integer', format: 'int64' },
      isSendEmail: { type: 'boolean' },
      spaceId: { type: 'integer', format: 'int64' },
      startTime: { type: 'integer', format: 'int64' }
    },
    title: 'ChangeApptTimeResVO'
  },
  ChangePasswordReqVO: {
    type: 'object',
    properties: {
      confirmPassword: { type: 'string' },
      email: { type: 'string' },
      oldPassword: { type: 'string' },
      password: { type: 'string' }
    },
    title: 'ChangePasswordReqVO'
  },
  DepartmentAddReqVO: {
    type: 'object',
    properties: {
      deptParentCode: { type: 'string' },
      displayEnName: { type: 'string' },
      displayName: { type: 'string' },
      displayZhName: { type: 'string' }
    },
    title: 'DepartmentAddReqVO'
  },
  DepartmentNameUpdReqVO: {
    type: 'object',
    properties: {
      displayEnName: { type: 'string' },
      displayName: { type: 'string' },
      displayZhName: { type: 'string' },
      id: { type: 'integer', format: 'int64' }
    },
    title: 'DepartmentNameUpdReqVO'
  },
  DepartmentRoleAddReqVO: {
    type: 'object',
    properties: {
      roleIdList: { type: 'array', items: { type: 'integer', format: 'int64' } }
    },
    title: 'DepartmentRoleAddReqVO'
  },
  DepartmentUserAddReqVO: {
    type: 'object',
    properties: {
      userIdList: { type: 'array', items: { type: 'integer', format: 'int64' } }
    },
    title: 'DepartmentUserAddReqVO'
  },
  DeptInfo: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      name: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'DeptInfo'
  },
  DeptUserDelReqVO: {
    type: 'object',
    properties: {
      deptId: { type: 'integer', format: 'int64' },
      idList: { type: 'array', items: { type: 'integer', format: 'int64' } }
    },
    title: 'DeptUserDelReqVO'
  },
  DeviceAddOrUpdReqVO: {
    type: 'object',
    properties: {
      categoryId: { type: 'integer', format: 'int64' },
      groupAddress: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      position: { type: 'string' },
      sn: { type: 'string' },
      type: { type: 'integer', format: 'int32' }
    },
    title: 'DeviceAddOrUpdReqVO'
  },
  DeviceInfoResVO: {
    type: 'object',
    properties: {
      categoryId: { type: 'integer', format: 'int64' },
      deviceId: { type: 'integer', format: 'int64' },
      floorName: { type: 'string' },
      groupAddress: { type: 'string' },
      isOnline: { type: 'integer', format: 'int32' },
      locationEnName: { type: 'string' },
      locationZhName: { type: 'string' },
      productName: { type: 'string' },
      sn: { type: 'string' },
      spaceEnName: { type: 'string' },
      spaceName: { type: 'string' },
      spaceZhName: { type: 'string' },
      status: { type: 'integer', format: 'int32' },
      type: { type: 'integer', format: 'int32' }
    },
    title: 'DeviceInfoResVO'
  },
  DisplayBindOrUpdReqVO: {
    type: 'object',
    properties: {
      buildingId: { type: 'integer', format: 'int64' },
      categoryId: { type: 'integer', format: 'int64' },
      floorId: { type: 'integer', format: 'int64' },
      position: { type: 'string' },
      sn: { type: 'string' },
      spaceId: { type: 'integer', format: 'int64' }
    },
    title: 'DisplayBindOrUpdReqVO'
  },
  DisplayCheckVO: {
    type: 'object',
    properties: {
      deviceId: { type: 'integer', format: 'int64' },
      themeId: { type: 'string' },
      versionCode: { type: 'integer', format: 'int64' }
    },
    title: 'DisplayCheckVO'
  },
  DisplayConfigAddOrUpdateReqVo: {
    type: 'object',
    properties: {
      adInfoId: { type: 'integer', format: 'int64' },
      adShowTime: { type: 'integer', format: 'int32' },
      enableFace: { type: 'boolean' },
      isBeginEvent: { type: 'boolean' },
      isEndEvent: { type: 'boolean' },
      isExtendEvent: { type: 'boolean' },
      isHideOrganizer: { type: 'boolean' },
      isHideRepair: { type: 'boolean' },
      isHideTitle: { type: 'boolean' },
      isOpenAd: { type: 'boolean' },
      isQuckliyBook: { type: 'boolean' },
      isShowQrcode: { type: 'boolean' }
    },
    title: 'DisplayConfigAddOrUpdateReqVo'
  },
  DisplayConfigBatchReqVO: {
    type: 'object',
    properties: {
      adInfoId: { type: 'integer', format: 'int64' },
      adShowTime: { type: 'integer', format: 'int32' },
      displayIds: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      enableFace: { type: 'boolean' },
      isBeginEvent: { type: 'boolean' },
      isDefaultSwitch: { type: 'boolean' },
      isDefaultThemeSetting: { type: 'boolean' },
      isEndEvent: { type: 'boolean' },
      isExtendEvent: { type: 'boolean' },
      isHideOrganizer: { type: 'boolean' },
      isHideRepair: { type: 'boolean' },
      isHideTitle: { type: 'boolean' },
      isOpenAd: { type: 'boolean' },
      isQuckliyBook: { type: 'boolean' },
      isShowQrcode: { type: 'boolean' },
      themeId: { type: 'integer', format: 'int64' }
    },
    title: 'DisplayConfigBatchReqVO'
  },
  DisposeAddBatchReqVO: {
    type: 'object',
    properties: {
      alarmIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      alarmReason: { type: 'string' },
      content: { type: 'string' },
      disposeTime: { type: 'integer', format: 'int64' }
    },
    title: 'DisposeAddBatchReqVO'
  },
  DisposeAddReqVO: {
    type: 'object',
    properties: {
      alarmId: { type: 'integer', format: 'int64' },
      alarmReason: { type: 'string' },
      content: { type: 'string' },
      disposeTime: { type: 'integer', format: 'int64' }
    },
    title: 'DisposeAddReqVO'
  },
  Equipment: {
    type: 'object',
    properties: {
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' }
    },
    title: 'Equipment'
  },
  EquipmentAddOrUpdateReqVO: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      name: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'EquipmentAddOrUpdateReqVO'
  },
  ExcelLogReqVO: {
    type: 'object',
    properties: {
      account: { type: 'string' },
      logId: { type: 'integer', format: 'int64' },
      moduleName: { type: 'string' },
      opContent: { type: 'string' },
      opTime: { type: 'string' }
    },
    title: 'ExcelLogReqVO'
  },
  FloorAddOrUpdReqVO: {
    type: 'object',
    properties: {
      floorId: { type: 'integer', format: 'int64' },
      floorName: { type: 'string' },
      floorNum: { type: 'integer', format: 'int32' },
      interlayer: { type: 'boolean' }
    },
    title: 'FloorAddOrUpdReqVO'
  },
  FloorAddReqVO: {
    type: 'object',
    properties: {
      buildingId: { type: 'integer', format: 'int64' },
      delFloorList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      floorList: {
        type: 'array',
        items: {
          properties: {
            floorId: { type: 'integer', format: 'int64' },
            floorName: { type: 'string' },
            floorNum: { type: 'integer', format: 'int32' },
            interlayer: { type: 'boolean' }
          }
        }
      },
      floorPrefix: { type: 'string' },
      newFloorList: {
        type: 'array',
        items: {
          properties: {
            floorId: { type: 'integer', format: 'int64' },
            floorName: { type: 'string' },
            floorNum: { type: 'integer', format: 'int32' },
            interlayer: { type: 'boolean' }
          }
        }
      }
    },
    title: 'FloorAddReqVO'
  },
  FloorNameDTO: {
    type: 'object',
    properties: {
      floorId: { type: 'integer', format: 'int64' },
      floorName: { type: 'string' }
    },
    title: 'FloorNameDTO'
  },
  FrontExceptionReqVO: {
    type: 'object',
    properties: {
      errorMessage: { type: 'string' },
      errorName: { type: 'string' },
      errorStack: { type: 'string' },
      errorUrl: { type: 'string' }
    },
    title: 'FrontExceptionReqVO'
  },
  GatewayBindOrUpdReqVO: {
    type: 'object',
    properties: {
      buildingId: { type: 'integer', format: 'int64' },
      categoryId: { type: 'integer', format: 'int64' },
      floorId: { type: 'integer', format: 'int64' },
      ip: { type: 'string' },
      position: { type: 'string' },
      sn: { type: 'string' }
    },
    title: 'GatewayBindOrUpdReqVO'
  },
  IdName: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'IdName'
  },
  IdNameTuple: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'IdNameTuple'
  },
  InviteeBasicInfoDTO: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      enName: { type: 'string' },
      participantType: { type: 'integer', format: 'int32' },
      phoneNumber: { type: 'string' },
      responseCode: { type: 'integer', format: 'int32' },
      userId: { type: 'integer', format: 'int64' },
      zhName: { type: 'string' }
    },
    title: 'InviteeBasicInfoDTO'
  },
  InviteeReqVO: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      enName: { type: 'string' },
      optional: { type: 'boolean' },
      userId: { type: 'integer', format: 'int64' },
      zhName: { type: 'string' }
    },
    title: 'InviteeReqVO'
  },
  LdapField: {
    type: 'object',
    properties: {
      ldapServer: {
        properties: {
          baseDN: { type: 'string' },
          directoryType: { type: 'string' },
          name: { type: 'string' },
          password: { type: 'string' },
          port: { type: 'integer', format: 'int32' },
          url: { type: 'string' },
          userName: { type: 'string' }
        }
      },
      ldapUser: {
        properties: {
          account: { type: 'string' },
          email: { type: 'string' },
          objectClass: { type: 'string' }
        }
      }
    },
    title: 'LdapField'
  },
  LdapServer: {
    type: 'object',
    properties: {
      baseDN: { type: 'string' },
      directoryType: { type: 'string' },
      name: { type: 'string' },
      password: { type: 'string' },
      port: { type: 'integer', format: 'int32' },
      url: { type: 'string' },
      userName: { type: 'string' }
    },
    title: 'LdapServer'
  },
  LdapUser: {
    type: 'object',
    properties: {
      account: { type: 'string' },
      email: { type: 'string' },
      objectClass: { type: 'string' }
    },
    title: 'LdapUser'
  },
  LedColorDTO: {
    type: 'object',
    properties: {
      color: { type: 'integer', format: 'int32' },
      spaceStatus: { type: 'integer', format: 'int32' }
    },
    title: 'LedColorDTO'
  },
  LedColorReqVO: {
    type: 'object',
    properties: {
      color: { type: 'integer', format: 'int32' },
      spaceStatus: { type: 'integer', format: 'int32' }
    },
    title: 'LedColorReqVO'
  },
  LoginEmailReqVO: {
    type: 'object',
    properties: { email: { type: 'string' } },
    title: 'LoginEmailReqVO'
  },
  LoginReqVO: {
    type: 'object',
    properties: {
      account: { type: 'string' },
      authType: { type: 'integer', format: 'int32' },
      code: { type: 'string' },
      deviceType: { type: 'integer', format: 'int32' },
      password: { type: 'string' },
      tenantId: { type: 'integer', format: 'int64' }
    },
    title: 'LoginReqVO'
  },
  LoopRuleReqVO: {
    type: 'object',
    properties: {
      dayOfTheMonth: { type: 'integer', format: 'int32' },
      dayOfTheWeek: {
        type: 'array',
        items: { type: 'integer', format: 'int32' }
      },
      endDate: { type: 'integer', format: 'int64' },
      frequency: { type: 'integer', format: 'int32' },
      interval: { type: 'integer', format: 'int32' },
      loopEndType: { type: 'integer', format: 'int32' },
      loopLabel: { type: 'integer', format: 'int32' },
      loopMode: { type: 'integer', format: 'int32' },
      loopType: { type: 'integer', format: 'int32' },
      month: { type: 'integer', format: 'int32' },
      startDate: { type: 'integer', format: 'int64' },
      weekOfTheMonthIndex: { type: 'integer', format: 'int32' }
    },
    title: 'LoopRuleReqVO'
  },
  MailConfigAddOrUpdateReqVo: {
    type: 'object',
    properties: {
      createBy: { type: 'string' },
      host: { type: 'string' },
      isCoverPort: { type: 'boolean' },
      isSsl: { type: 'boolean' },
      isStarttls: { type: 'boolean' },
      password: { type: 'string' },
      port: { type: 'integer', format: 'int32' },
      tenantId: { type: 'integer', format: 'int64' },
      username: { type: 'string' }
    },
    title: 'MailConfigAddOrUpdateReqVo'
  },
  ManageRoleDetailResVO: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      enNameParentRole: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      isAdmin: { type: 'integer', format: 'int32' },
      isRolePermCanCancel: { type: 'integer', format: 'int32' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      isSpacePublicCanSelect: { type: 'integer', format: 'int32' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      nameParentRole: { type: 'string' },
      parentRoleInfo: {
        properties: {
          enName: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          isUserPublic: { type: 'integer', format: 'int32' },
          name: { type: 'string' },
          roleUsers: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          zhName: { type: 'string' }
        }
      },
      parentRoleMenu: {
        properties: {
          appPerm: { type: 'integer', format: 'int32' },
          buildingPerm: { type: 'integer', format: 'int32' },
          deviceHealthPerm: { type: 'integer', format: 'int32' },
          devicePerm: { type: 'integer', format: 'int32' },
          emailPerm: { type: 'integer', format: 'int32' },
          enterprisePerm: { type: 'integer', format: 'int32' },
          facilitiesPerm: { type: 'integer', format: 'int32' },
          integrationPerm: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          operationLogPerm: { type: 'integer', format: 'int32' },
          rolePerm: { type: 'integer', format: 'int32' },
          rulePerm: { type: 'integer', format: 'int32' },
          spacePerm: { type: 'integer', format: 'int32' },
          spaceRepairPerm: { type: 'integer', format: 'int32' },
          summaryPerm: { type: 'integer', format: 'int32' },
          userPerm: { type: 'integer', format: 'int32' }
        }
      },
      remark: { type: 'string' },
      roleMenu: {
        properties: {
          appPerm: { type: 'integer', format: 'int32' },
          buildingPerm: { type: 'integer', format: 'int32' },
          deviceHealthPerm: { type: 'integer', format: 'int32' },
          devicePerm: { type: 'integer', format: 'int32' },
          emailPerm: { type: 'integer', format: 'int32' },
          enterprisePerm: { type: 'integer', format: 'int32' },
          facilitiesPerm: { type: 'integer', format: 'int32' },
          integrationPerm: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          operationLogPerm: { type: 'integer', format: 'int32' },
          rolePerm: { type: 'integer', format: 'int32' },
          rulePerm: { type: 'integer', format: 'int32' },
          spacePerm: { type: 'integer', format: 'int32' },
          spaceRepairPerm: { type: 'integer', format: 'int32' },
          summaryPerm: { type: 'integer', format: 'int32' },
          userPerm: { type: 'integer', format: 'int32' }
        }
      },
      rolePerms: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      roleUsers: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      spaceBlackList: {
        type: 'array',
        items: {
          properties: {
            id: { type: 'integer', format: 'int64' },
            type: { type: 'integer', format: 'int32' }
          }
        }
      },
      userBlackList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      zhName: { type: 'string' },
      zhNameParentRole: { type: 'string' }
    },
    title: 'ManageRoleDetailResVO'
  },
  ManageRoleInfosResVo: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      isSpacePublicCanSelect: { type: 'integer', format: 'int32' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      roleMenu: {
        properties: {
          appPerm: { type: 'integer', format: 'int32' },
          buildingPerm: { type: 'integer', format: 'int32' },
          deviceHealthPerm: { type: 'integer', format: 'int32' },
          devicePerm: { type: 'integer', format: 'int32' },
          emailPerm: { type: 'integer', format: 'int32' },
          enterprisePerm: { type: 'integer', format: 'int32' },
          facilitiesPerm: { type: 'integer', format: 'int32' },
          integrationPerm: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          operationLogPerm: { type: 'integer', format: 'int32' },
          rolePerm: { type: 'integer', format: 'int32' },
          rulePerm: { type: 'integer', format: 'int32' },
          spacePerm: { type: 'integer', format: 'int32' },
          spaceRepairPerm: { type: 'integer', format: 'int32' },
          summaryPerm: { type: 'integer', format: 'int32' },
          userPerm: { type: 'integer', format: 'int32' }
        }
      },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'ManageRoleInfosResVo'
  },
  ManageRoleMenuModel: {
    type: 'object',
    properties: {
      appPerm: { type: 'integer', format: 'int32' },
      buildingPerm: { type: 'integer', format: 'int32' },
      deviceHealthPerm: { type: 'integer', format: 'int32' },
      devicePerm: { type: 'integer', format: 'int32' },
      emailPerm: { type: 'integer', format: 'int32' },
      enterprisePerm: { type: 'integer', format: 'int32' },
      facilitiesPerm: { type: 'integer', format: 'int32' },
      integrationPerm: { type: 'integer', format: 'int32' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      operationLogPerm: { type: 'integer', format: 'int32' },
      rolePerm: { type: 'integer', format: 'int32' },
      rulePerm: { type: 'integer', format: 'int32' },
      spacePerm: { type: 'integer', format: 'int32' },
      spaceRepairPerm: { type: 'integer', format: 'int32' },
      summaryPerm: { type: 'integer', format: 'int32' },
      userPerm: { type: 'integer', format: 'int32' }
    },
    title: 'ManageRoleMenuModel'
  },
  ManageRoleReqVO: {
    type: 'object',
    properties: {
      appPerm: { type: 'integer', format: 'int32' },
      buildingPerm: { type: 'integer', format: 'int32' },
      deviceHealthPerm: { type: 'integer', format: 'int32' },
      devicePerm: { type: 'integer', format: 'int32' },
      emailPerm: { type: 'integer', format: 'int32' },
      enName: { type: 'string' },
      enterprisePerm: { type: 'integer', format: 'int32' },
      facilitiesPerm: { type: 'integer', format: 'int32' },
      integrationPerm: { type: 'integer', format: 'int32' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      operationLogPerm: { type: 'integer', format: 'int32' },
      parentRoleId: { type: 'integer', format: 'int64' },
      perms: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      remark: { type: 'string' },
      rolePerm: { type: 'integer', format: 'int32' },
      rulePerm: { type: 'integer', format: 'int32' },
      spaceBlackList: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      spacePerm: { type: 'integer', format: 'int32' },
      spaceRepairPerm: { type: 'integer', format: 'int32' },
      summaryPerm: { type: 'integer', format: 'int32' },
      userBlackList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      userPerm: { type: 'integer', format: 'int32' },
      users: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      zhName: { type: 'string' }
    },
    title: 'ManageRoleReqVO'
  },
  MyScheduleResVO: {
    type: 'object',
    properties: {
      apptId: { type: 'integer', format: 'int64' },
      apptStatus: { type: 'integer', format: 'int32' },
      bookingEmail: { type: 'string' },
      bookingEnName: { type: 'string' },
      bookingZhName: { type: 'string' },
      endTime: { type: 'integer', format: 'int64' },
      floorId: { type: 'integer', format: 'int64' },
      floorName: { type: 'string' },
      responseCode: { type: 'integer', format: 'int32' },
      spaceId: { type: 'integer', format: 'int64' },
      spaceName: { type: 'string' },
      spaceNum: { type: 'integer', format: 'int32' },
      startTime: { type: 'integer', format: 'int64' },
      title: { type: 'string' }
    },
    title: 'MyScheduleResVO'
  },
  O365Entity: {
    type: 'object',
    properties: {
      clientId: { type: 'string' },
      clientSecret: { type: 'string' },
      isAllowLogin: { type: 'boolean' },
      redirectUri: { type: 'string' },
      tenant: { type: 'string' },
      version: { type: 'integer', format: 'int32' }
    },
    title: 'O365Entity'
  },
  OperationLogVO: {
    type: 'object',
    properties: {
      account: { type: 'string' },
      createBy: { type: 'string' },
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      moduleCode: { type: 'integer', format: 'int32' },
      opContent: { type: 'string' },
      opIp: { type: 'string' },
      opTime: { type: 'integer', format: 'int64' },
      opType: { type: 'integer', format: 'int32' },
      tenantId: { type: 'integer', format: 'int64' },
      userId: { type: 'integer', format: 'int64' },
      zhName: { type: 'string' }
    },
    title: 'OperationLogVO'
  },
  'PageResModel«BookingRoleInfoResVO»': {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          properties: {
            bookingPerm: { type: 'integer', format: 'int32' },
            enName: { type: 'string' },
            isDefault: { type: 'integer', format: 'int32' },
            isModifiable: { type: 'integer', format: 'int32' },
            isSpacePublic: { type: 'integer', format: 'int32' },
            isUserPublic: { type: 'integer', format: 'int32' },
            name: { type: 'string' },
            remark: { type: 'string' },
            roleId: { type: 'integer', format: 'int64' },
            spaceAutoRelease: { type: 'integer', format: 'int32' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      pageNum: { type: 'integer', format: 'int64' },
      pageSize: { type: 'integer', format: 'int64' },
      total: { type: 'integer', format: 'int64' },
      totalPage: { type: 'integer', format: 'int64' }
    },
    title: 'PageResModel«BookingRoleInfoResVO»'
  },
  'PageResModel«OperationLogVO»': {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          properties: {
            account: { type: 'string' },
            createBy: { type: 'string' },
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            moduleCode: { type: 'integer', format: 'int32' },
            opContent: { type: 'string' },
            opIp: { type: 'string' },
            opTime: { type: 'integer', format: 'int64' },
            opType: { type: 'integer', format: 'int32' },
            tenantId: { type: 'integer', format: 'int64' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      pageNum: { type: 'integer', format: 'int64' },
      pageSize: { type: 'integer', format: 'int64' },
      total: { type: 'integer', format: 'int64' },
      totalPage: { type: 'integer', format: 'int64' }
    },
    title: 'PageResModel«OperationLogVO»'
  },
  'PageResModel«SyncLogVO»': {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          properties: {
            content: { type: 'string' },
            createBy: { type: 'string' },
            createTime: { type: 'integer', format: 'int64' },
            id: { type: 'integer', format: 'int64' },
            isDeleted: { type: 'boolean' },
            isRetry: { type: 'boolean' },
            opType: { type: 'integer', format: 'int32' },
            paramJson: { type: 'string' },
            status: { type: 'integer', format: 'int32' },
            tenantId: { type: 'integer', format: 'int64' },
            type: { type: 'integer', format: 'int32' },
            updateBy: { type: 'string' },
            updateTime: { type: 'integer', format: 'int64' }
          }
        }
      },
      pageNum: { type: 'integer', format: 'int64' },
      pageSize: { type: 'integer', format: 'int64' },
      total: { type: 'integer', format: 'int64' },
      totalPage: { type: 'integer', format: 'int64' }
    },
    title: 'PageResModel«SyncLogVO»'
  },
  'PageResModel«UserInfoResVO»': {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          properties: {
            deptEnName: { type: 'string' },
            deptZhName: { type: 'string' },
            email: { type: 'string' },
            enName: { type: 'string' },
            enPosition: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            locationEnName: { type: 'string' },
            locationZhName: { type: 'string' },
            name: { type: 'string' },
            position: { type: 'string' },
            remark: { type: 'string' },
            roleEnName: { type: 'string' },
            roleZhName: { type: 'string' },
            status: { type: 'integer', format: 'int32' },
            stuffType: { type: 'integer', format: 'int32' },
            userSource: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' },
            zhPosition: { type: 'string' }
          }
        }
      },
      pageNum: { type: 'integer', format: 'int64' },
      pageSize: { type: 'integer', format: 'int64' },
      total: { type: 'integer', format: 'int64' },
      totalPage: { type: 'integer', format: 'int64' }
    },
    title: 'PageResModel«UserInfoResVO»'
  },
  ParentRoleInfo: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      roleUsers: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      zhName: { type: 'string' }
    },
    title: 'ParentRoleInfo'
  },
  Period: {
    type: 'object',
    properties: { endTime: { type: 'string' }, startTime: { type: 'string' } },
    title: 'Period'
  },
  PermBlackModel: {
    type: 'object',
    properties: {
      id: { type: 'integer', format: 'int64' },
      type: { type: 'integer', format: 'int32' }
    },
    title: 'PermBlackModel'
  },
  PwdUpdByEmailCodeReqVO: {
    type: 'object',
    properties: {
      code: { type: 'string' },
      confirmPassword: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' }
    },
    title: 'PwdUpdByEmailCodeReqVO'
  },
  ReleaseConfigReqVO: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      isEnableReleaseRule: { type: 'boolean' },
      isNotifyAfterRelease: { type: 'boolean' },
      isNotifyApptBooker: { type: 'boolean' },
      isNotifyBeforeRelease: { type: 'boolean' },
      isReleaseBeforeEnd: { type: 'boolean' },
      name: { type: 'string' },
      releaseRuleContent: { type: 'string' },
      releaseTimeAfterStart: { type: 'integer', format: 'int32' },
      releaseTimeBeforeEnd: { type: 'integer', format: 'int32' },
      remindTimeBeforeRelease: { type: 'integer', format: 'int32' },
      userId: { type: 'integer', format: 'int64' },
      zhName: { type: 'string' }
    },
    title: 'ReleaseConfigReqVO'
  },
  ReleaseConfigResVO: {
    type: 'object',
    properties: {
      createTime: { type: 'integer', format: 'int64' },
      enName: { type: 'string' },
      hasPerm: { type: 'boolean' },
      id: { type: 'integer', format: 'int64' },
      isDefault: { type: 'boolean' },
      isEnableReleaseRule: { type: 'boolean' },
      isNotifyAfterRelease: { type: 'boolean' },
      isNotifyBeforeRelease: { type: 'boolean' },
      isOwner: { type: 'boolean' },
      isReleaseBeforeEnd: { type: 'boolean' },
      name: { type: 'string' },
      releaseRuleContent: { type: 'string' },
      releaseTimeAfterStart: { type: 'integer', format: 'int32' },
      releaseTimeBeforeEnd: { type: 'integer', format: 'int32' },
      remindTimeBeforeRelease: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'ReleaseConfigResVO'
  },
  RepairReqVO: {
    type: 'object',
    properties: {
      content: { type: 'string' },
      email: { type: 'string' },
      enName: { type: 'string' },
      equipments: {
        type: 'array',
        items: {
          properties: {
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' }
          }
        }
      },
      zhName: { type: 'string' }
    },
    title: 'RepairReqVO'
  },
  RepairStatusUpdReqVO: {
    type: 'object',
    properties: {
      repaireIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      repairedTime: { type: 'integer', format: 'int64' }
    },
    title: 'RepairStatusUpdReqVO'
  },
  'Request«AdvertisementAddOrUpdateReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          content: { type: 'string' },
          enName: { type: 'string' },
          files: { type: 'array', items: { type: 'string' } },
          id: { type: 'integer', format: 'int64' },
          name: { type: 'string' },
          type: { type: 'integer', format: 'int32' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«AdvertisementAddOrUpdateReqVO»'
  },
  'Request«AlarmAddOrUpdReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          alarmText: { type: 'string' },
          alarmTime: { type: 'integer', format: 'int64' },
          deviceId: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«AlarmAddOrUpdReqVO»'
  },
  'Request«AlarmBatchSaleReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          alarmIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          alarmTime: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«AlarmBatchSaleReqVO»'
  },
  'Request«AppointmentReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          allowConflict: { type: 'boolean' },
          booking: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              optional: { type: 'boolean' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          content: { type: 'string' },
          departmentIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          ends: { type: 'integer', format: 'int64' },
          fileHashs: { type: 'array', items: { type: 'string' } },
          frontSource: { type: 'integer', format: 'int32' },
          inviteeAdmins: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                optional: { type: 'boolean' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          invitees: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                optional: { type: 'boolean' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          isAllDay: { type: 'boolean' },
          isApptNotRelease: { type: 'boolean' },
          isHiddenBooker: { type: 'boolean' },
          isHiddenContent: { type: 'boolean' },
          isHiddenInviter: { type: 'boolean' },
          isHiddenOrganizer: { type: 'boolean' },
          isHiddenTitle: { type: 'boolean' },
          isSecurity: { type: 'boolean' },
          loopRule: {
            properties: {
              dayOfTheMonth: { type: 'integer', format: 'int32' },
              dayOfTheWeek: {
                type: 'array',
                items: { type: 'integer', format: 'int32' }
              },
              endDate: { type: 'integer', format: 'int64' },
              frequency: { type: 'integer', format: 'int32' },
              interval: { type: 'integer', format: 'int32' },
              loopEndType: { type: 'integer', format: 'int32' },
              loopLabel: { type: 'integer', format: 'int32' },
              loopMode: { type: 'integer', format: 'int32' },
              loopType: { type: 'integer', format: 'int32' },
              month: { type: 'integer', format: 'int32' },
              startDate: { type: 'integer', format: 'int64' },
              weekOfTheMonthIndex: { type: 'integer', format: 'int32' }
            }
          },
          organizer: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              optional: { type: 'boolean' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          platform: { type: 'integer', format: 'int32' },
          spaceIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          starts: { type: 'integer', format: 'int64' },
          timeZone: { type: 'string' },
          title: { type: 'string' }
        }
      }
    },
    title: 'Request«AppointmentReqVO»'
  },
  'Request«ApptHoldReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          holdTime: { type: 'integer', format: 'int32' },
          isSendEmail: { type: 'boolean' }
        }
      }
    },
    title: 'Request«ApptHoldReqVO»'
  },
  'Request«ApptMailReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          acceptTypes: {
            type: 'array',
            items: { type: 'integer', format: 'int32' }
          },
          isNotifyBeforeStart: { type: 'boolean' },
          remind: { type: 'integer', format: 'int32' }
        }
      }
    },
    title: 'Request«ApptMailReqVO»'
  },
  'Request«ApptNotReleaseVo»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          periods: {
            type: 'array',
            items: {
              properties: {
                endTime: { type: 'string' },
                startTime: { type: 'string' }
              }
            }
          }
        }
      }
    },
    title: 'Request«ApptNotReleaseVo»'
  },
  'Request«ApptReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          duration: { type: 'integer', format: 'int32' },
          endTime: { type: 'integer', format: 'int64' },
          organizer: { type: 'string' },
          startTime: { type: 'integer', format: 'int64' },
          title: { type: 'string' }
        }
      }
    },
    title: 'Request«ApptReqVO»'
  },
  'Request«ApptUpdateReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          endTime: { type: 'integer', format: 'int64' },
          opType: { type: 'string' }
        }
      }
    },
    title: 'Request«ApptUpdateReqVO»'
  },
  'Request«BookingConfigReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          bookingAfterDays: { type: 'integer', format: 'int32' },
          bookingDurationMax: { type: 'integer', format: 'int32' },
          bookingDurationMin: { type: 'integer', format: 'int32' },
          bookingRuleContent: { type: 'string' },
          durationType: { type: 'string' },
          enName: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          isEnableBookingRule: { type: 'boolean' },
          isNotifyApptBooker: { type: 'boolean' },
          isSendSuccessEmail: { type: 'boolean' },
          isSendSuccessSystemInfo: { type: 'boolean' },
          name: { type: 'string' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«BookingConfigReqVO»'
  },
  'Request«BookingRoleReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          bookingPerm: { type: 'integer', format: 'int32' },
          enName: { type: 'string' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          isUserPublic: { type: 'integer', format: 'int32' },
          name: { type: 'string' },
          perms: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          remark: { type: 'string' },
          spaceAutoRelease: { type: 'integer', format: 'int32' },
          spaceBlackList: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          userBlackList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          users: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«BookingRoleReqVO»'
  },
  'Request«BuildingAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          buildingEnName: { type: 'string' },
          buildingName: { type: 'string' },
          buildingZhName: { type: 'string' },
          enNameLevel1: { type: 'string' },
          enNameLevel2: { type: 'string' },
          enNameLevel3: { type: 'string' },
          enNameLevel4: { type: 'string' },
          enNameLevel5: { type: 'string' },
          enNameLevel6: { type: 'string' },
          floorList: {
            type: 'array',
            items: {
              properties: {
                floorId: { type: 'integer', format: 'int64' },
                floorName: { type: 'string' },
                floorNum: { type: 'integer', format: 'int32' },
                interlayer: { type: 'boolean' }
              }
            }
          },
          floorPrefix: { type: 'string' },
          level1: { type: 'string' },
          level2: { type: 'string' },
          level3: { type: 'string' },
          level4: { type: 'string' },
          level5: { type: 'string' },
          level6: { type: 'string' },
          timeZoneId: { type: 'integer', format: 'int64' },
          timeZoneOffset: { type: 'string' },
          zhNameLevel1: { type: 'string' },
          zhNameLevel2: { type: 'string' },
          zhNameLevel3: { type: 'string' },
          zhNameLevel4: { type: 'string' },
          zhNameLevel5: { type: 'string' },
          zhNameLevel6: { type: 'string' }
        }
      }
    },
    title: 'Request«BuildingAddReqVO»'
  },
  'Request«BuildingUpdReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          buildingEnName: { type: 'string' },
          buildingName: { type: 'string' },
          buildingZhName: { type: 'string' },
          delFloorList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          enNameLevel1: { type: 'string' },
          enNameLevel2: { type: 'string' },
          enNameLevel3: { type: 'string' },
          enNameLevel4: { type: 'string' },
          enNameLevel5: { type: 'string' },
          enNameLevel6: { type: 'string' },
          floorList: {
            type: 'array',
            items: {
              properties: {
                floorId: { type: 'integer', format: 'int64' },
                floorName: { type: 'string' },
                floorNum: { type: 'integer', format: 'int32' },
                interlayer: { type: 'boolean' }
              }
            }
          },
          floorPrefix: { type: 'string' },
          level1: { type: 'string' },
          level2: { type: 'string' },
          level3: { type: 'string' },
          level4: { type: 'string' },
          level5: { type: 'string' },
          level6: { type: 'string' },
          newFloorList: {
            type: 'array',
            items: {
              properties: {
                floorId: { type: 'integer', format: 'int64' },
                floorName: { type: 'string' },
                floorNum: { type: 'integer', format: 'int32' },
                interlayer: { type: 'boolean' }
              }
            }
          },
          timeZoneId: { type: 'integer', format: 'int64' },
          timeZoneOffset: { type: 'string' },
          zhNameLevel1: { type: 'string' },
          zhNameLevel2: { type: 'string' },
          zhNameLevel3: { type: 'string' },
          zhNameLevel4: { type: 'string' },
          zhNameLevel5: { type: 'string' },
          zhNameLevel6: { type: 'string' }
        }
      }
    },
    title: 'Request«BuildingUpdReqVO»'
  },
  'Request«ChangeApptTimeResVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          apptId: { type: 'integer', format: 'int64' },
          endTime: { type: 'integer', format: 'int64' },
          isSendEmail: { type: 'boolean' },
          spaceId: { type: 'integer', format: 'int64' },
          startTime: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«ChangeApptTimeResVO»'
  },
  'Request«ChangePasswordReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          confirmPassword: { type: 'string' },
          email: { type: 'string' },
          oldPassword: { type: 'string' },
          password: { type: 'string' }
        }
      }
    },
    title: 'Request«ChangePasswordReqVO»'
  },
  'Request«DepartmentAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          deptParentCode: { type: 'string' },
          displayEnName: { type: 'string' },
          displayName: { type: 'string' },
          displayZhName: { type: 'string' }
        }
      }
    },
    title: 'Request«DepartmentAddReqVO»'
  },
  'Request«DepartmentNameUpdReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          displayEnName: { type: 'string' },
          displayName: { type: 'string' },
          displayZhName: { type: 'string' },
          id: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«DepartmentNameUpdReqVO»'
  },
  'Request«DepartmentRoleAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          roleIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          }
        }
      }
    },
    title: 'Request«DepartmentRoleAddReqVO»'
  },
  'Request«DepartmentUserAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          userIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          }
        }
      }
    },
    title: 'Request«DepartmentUserAddReqVO»'
  },
  'Request«DeptUserDelReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          deptId: { type: 'integer', format: 'int64' },
          idList: { type: 'array', items: { type: 'integer', format: 'int64' } }
        }
      }
    },
    title: 'Request«DeptUserDelReqVO»'
  },
  'Request«DisplayBindOrUpdReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          buildingId: { type: 'integer', format: 'int64' },
          categoryId: { type: 'integer', format: 'int64' },
          floorId: { type: 'integer', format: 'int64' },
          position: { type: 'string' },
          sn: { type: 'string' },
          spaceId: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«DisplayBindOrUpdReqVO»'
  },
  'Request«DisplayCheckVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          deviceId: { type: 'integer', format: 'int64' },
          themeId: { type: 'string' },
          versionCode: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«DisplayCheckVO»'
  },
  'Request«DisplayConfigAddOrUpdateReqVo»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          adInfoId: { type: 'integer', format: 'int64' },
          adShowTime: { type: 'integer', format: 'int32' },
          enableFace: { type: 'boolean' },
          isBeginEvent: { type: 'boolean' },
          isEndEvent: { type: 'boolean' },
          isExtendEvent: { type: 'boolean' },
          isHideOrganizer: { type: 'boolean' },
          isHideRepair: { type: 'boolean' },
          isHideTitle: { type: 'boolean' },
          isOpenAd: { type: 'boolean' },
          isQuckliyBook: { type: 'boolean' },
          isShowQrcode: { type: 'boolean' }
        }
      }
    },
    title: 'Request«DisplayConfigAddOrUpdateReqVo»'
  },
  'Request«DisplayConfigBatchReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          adInfoId: { type: 'integer', format: 'int64' },
          adShowTime: { type: 'integer', format: 'int32' },
          displayIds: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          enableFace: { type: 'boolean' },
          isBeginEvent: { type: 'boolean' },
          isDefaultSwitch: { type: 'boolean' },
          isDefaultThemeSetting: { type: 'boolean' },
          isEndEvent: { type: 'boolean' },
          isExtendEvent: { type: 'boolean' },
          isHideOrganizer: { type: 'boolean' },
          isHideRepair: { type: 'boolean' },
          isHideTitle: { type: 'boolean' },
          isOpenAd: { type: 'boolean' },
          isQuckliyBook: { type: 'boolean' },
          isShowQrcode: { type: 'boolean' },
          themeId: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«DisplayConfigBatchReqVO»'
  },
  'Request«DisposeAddBatchReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          alarmIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          alarmReason: { type: 'string' },
          content: { type: 'string' },
          disposeTime: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«DisposeAddBatchReqVO»'
  },
  'Request«DisposeAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          alarmId: { type: 'integer', format: 'int64' },
          alarmReason: { type: 'string' },
          content: { type: 'string' },
          disposeTime: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«DisposeAddReqVO»'
  },
  'Request«EquipmentAddOrUpdateReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          enName: { type: 'string' },
          name: { type: 'string' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«EquipmentAddOrUpdateReqVO»'
  },
  'Request«FloorAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          buildingId: { type: 'integer', format: 'int64' },
          delFloorList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          floorList: {
            type: 'array',
            items: {
              properties: {
                floorId: { type: 'integer', format: 'int64' },
                floorName: { type: 'string' },
                floorNum: { type: 'integer', format: 'int32' },
                interlayer: { type: 'boolean' }
              }
            }
          },
          floorPrefix: { type: 'string' },
          newFloorList: {
            type: 'array',
            items: {
              properties: {
                floorId: { type: 'integer', format: 'int64' },
                floorName: { type: 'string' },
                floorNum: { type: 'integer', format: 'int32' },
                interlayer: { type: 'boolean' }
              }
            }
          }
        }
      }
    },
    title: 'Request«FloorAddReqVO»'
  },
  'Request«FrontExceptionReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          errorMessage: { type: 'string' },
          errorName: { type: 'string' },
          errorStack: { type: 'string' },
          errorUrl: { type: 'string' }
        }
      }
    },
    title: 'Request«FrontExceptionReqVO»'
  },
  'Request«GatewayBindOrUpdReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          buildingId: { type: 'integer', format: 'int64' },
          categoryId: { type: 'integer', format: 'int64' },
          floorId: { type: 'integer', format: 'int64' },
          ip: { type: 'string' },
          position: { type: 'string' },
          sn: { type: 'string' }
        }
      }
    },
    title: 'Request«GatewayBindOrUpdReqVO»'
  },
  'Request«LdapField»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          ldapServer: {
            properties: {
              baseDN: { type: 'string' },
              directoryType: { type: 'string' },
              name: { type: 'string' },
              password: { type: 'string' },
              port: { type: 'integer', format: 'int32' },
              url: { type: 'string' },
              userName: { type: 'string' }
            }
          },
          ldapUser: {
            properties: {
              account: { type: 'string' },
              email: { type: 'string' },
              objectClass: { type: 'string' }
            }
          }
        }
      }
    },
    title: 'Request«LdapField»'
  },
  'Request«List«ExcelLogReqVO»»': {
    type: 'object',
    properties: {
      model: {
        type: 'array',
        items: {
          properties: {
            account: { type: 'string' },
            logId: { type: 'integer', format: 'int64' },
            moduleName: { type: 'string' },
            opContent: { type: 'string' },
            opTime: { type: 'string' }
          }
        }
      }
    },
    title: 'Request«List«ExcelLogReqVO»»'
  },
  'Request«List«LedColorReqVO»»': {
    type: 'object',
    properties: {
      model: {
        type: 'array',
        items: {
          properties: {
            color: { type: 'integer', format: 'int32' },
            spaceStatus: { type: 'integer', format: 'int32' }
          }
        }
      }
    },
    title: 'Request«List«LedColorReqVO»»'
  },
  'Request«List«long»»': {
    type: 'object',
    properties: {
      model: { type: 'array', items: { type: 'integer', format: 'int64' } }
    },
    title: 'Request«List«long»»'
  },
  'Request«List«string»»': {
    type: 'object',
    properties: { model: { type: 'array', items: { type: 'string' } } },
    title: 'Request«List«string»»'
  },
  'Request«LoginEmailReqVO»': {
    type: 'object',
    properties: { model: { properties: { email: { type: 'string' } } } },
    title: 'Request«LoginEmailReqVO»'
  },
  'Request«LoginReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          account: { type: 'string' },
          authType: { type: 'integer', format: 'int32' },
          code: { type: 'string' },
          deviceType: { type: 'integer', format: 'int32' },
          password: { type: 'string' },
          tenantId: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«LoginReqVO»'
  },
  'Request«MailConfigAddOrUpdateReqVo»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          createBy: { type: 'string' },
          host: { type: 'string' },
          isCoverPort: { type: 'boolean' },
          isSsl: { type: 'boolean' },
          isStarttls: { type: 'boolean' },
          password: { type: 'string' },
          port: { type: 'integer', format: 'int32' },
          tenantId: { type: 'integer', format: 'int64' },
          username: { type: 'string' }
        }
      }
    },
    title: 'Request«MailConfigAddOrUpdateReqVo»'
  },
  'Request«ManageRoleReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          appPerm: { type: 'integer', format: 'int32' },
          buildingPerm: { type: 'integer', format: 'int32' },
          deviceHealthPerm: { type: 'integer', format: 'int32' },
          devicePerm: { type: 'integer', format: 'int32' },
          emailPerm: { type: 'integer', format: 'int32' },
          enName: { type: 'string' },
          enterprisePerm: { type: 'integer', format: 'int32' },
          facilitiesPerm: { type: 'integer', format: 'int32' },
          integrationPerm: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          isUserPublic: { type: 'integer', format: 'int32' },
          name: { type: 'string' },
          operationLogPerm: { type: 'integer', format: 'int32' },
          parentRoleId: { type: 'integer', format: 'int64' },
          perms: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          remark: { type: 'string' },
          rolePerm: { type: 'integer', format: 'int32' },
          rulePerm: { type: 'integer', format: 'int32' },
          spaceBlackList: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          spacePerm: { type: 'integer', format: 'int32' },
          spaceRepairPerm: { type: 'integer', format: 'int32' },
          summaryPerm: { type: 'integer', format: 'int32' },
          userBlackList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          userPerm: { type: 'integer', format: 'int32' },
          users: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«ManageRoleReqVO»'
  },
  'Request«O365Entity»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          clientId: { type: 'string' },
          clientSecret: { type: 'string' },
          isAllowLogin: { type: 'boolean' },
          redirectUri: { type: 'string' },
          tenant: { type: 'string' },
          version: { type: 'integer', format: 'int32' }
        }
      }
    },
    title: 'Request«O365Entity»'
  },
  'Request«PwdUpdByEmailCodeReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          code: { type: 'string' },
          confirmPassword: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' }
        }
      }
    },
    title: 'Request«PwdUpdByEmailCodeReqVO»'
  },
  'Request«ReleaseConfigReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          enName: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          isEnableReleaseRule: { type: 'boolean' },
          isNotifyAfterRelease: { type: 'boolean' },
          isNotifyApptBooker: { type: 'boolean' },
          isNotifyBeforeRelease: { type: 'boolean' },
          isReleaseBeforeEnd: { type: 'boolean' },
          name: { type: 'string' },
          releaseRuleContent: { type: 'string' },
          releaseTimeAfterStart: { type: 'integer', format: 'int32' },
          releaseTimeBeforeEnd: { type: 'integer', format: 'int32' },
          remindTimeBeforeRelease: { type: 'integer', format: 'int32' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«ReleaseConfigReqVO»'
  },
  'Request«RepairReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          content: { type: 'string' },
          email: { type: 'string' },
          enName: { type: 'string' },
          equipments: {
            type: 'array',
            items: {
              properties: {
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' }
              }
            }
          },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«RepairReqVO»'
  },
  'Request«RepairStatusUpdReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          repaireIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          repairedTime: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«RepairStatusUpdReqVO»'
  },
  'Request«ResetPwdReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          isSendEmail: { type: 'boolean' },
          password: { type: 'string' }
        }
      }
    },
    title: 'Request«ResetPwdReqVO»'
  },
  'Request«RolePermReqVo»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          appPerm: { type: 'integer', format: 'int32' },
          buildingPerm: { type: 'integer', format: 'int32' },
          deletedPerms: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          deletedSpaceBlackList: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          deletedUserBlacList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          deletedUsers: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          deviceHealthPerm: { type: 'integer', format: 'int32' },
          devicePerm: { type: 'integer', format: 'int32' },
          emailPerm: { type: 'integer', format: 'int32' },
          enName: { type: 'string' },
          enterprisePerm: { type: 'integer', format: 'int32' },
          facilitiesPerm: { type: 'integer', format: 'int32' },
          integrationPerm: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          isUserPublic: { type: 'integer', format: 'int32' },
          name: { type: 'string' },
          newPerms: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          newSpaceBlackList: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          newUserBlacList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          newUsers: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          operationLogPerm: { type: 'integer', format: 'int32' },
          remark: { type: 'string' },
          rolePerm: { type: 'integer', format: 'int32' },
          rulePerm: { type: 'integer', format: 'int32' },
          spacePerm: { type: 'integer', format: 'int32' },
          spaceRepairPerm: { type: 'integer', format: 'int32' },
          summaryPerm: { type: 'integer', format: 'int32' },
          userPerm: { type: 'integer', format: 'int32' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«RolePermReqVo»'
  },
  'Request«RoleSpaceReqVo»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          bookingPerm: { type: 'integer', format: 'int32' },
          deletedPerms: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          deletedSpaceBlackList: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          deletedUserBlacList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          deletedUsers: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          enName: { type: 'string' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          isUserPublic: { type: 'integer', format: 'int32' },
          name: { type: 'string' },
          newPerms: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          newSpaceBlackList: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          newUserBlacList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          newUsers: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          remark: { type: 'string' },
          spaceAutoRelease: { type: 'integer', format: 'int32' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«RoleSpaceReqVo»'
  },
  'Request«SaveTabletAndBindReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          categoryId: { type: 'integer', format: 'int64' },
          sn: { type: 'string' },
          spaceId: { type: 'integer', format: 'int64' },
          tenantId: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«SaveTabletAndBindReqVO»'
  },
  'Request«ScreenTurnOffVo»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          isTurnOff: { type: 'boolean' },
          periods: {
            type: 'array',
            items: {
              properties: {
                endTime: { type: 'string' },
                startTime: { type: 'string' }
              }
            }
          }
        }
      }
    },
    title: 'Request«ScreenTurnOffVo»'
  },
  'Request«SensorBindReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          buildingId: { type: 'integer', format: 'int64' },
          categoryId: { type: 'integer', format: 'int64' },
          floorId: { type: 'integer', format: 'int64' },
          groupAddress: { type: 'string' },
          position: { type: 'string' },
          sn: { type: 'string' },
          spaceId: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«SensorBindReqVO»'
  },
  'Request«SpaceAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          area: { type: 'number' },
          bookableRoleIds: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          bookingPolicyId: { type: 'integer', format: 'int64' },
          buildingId: { type: 'integer', format: 'int64' },
          buildingName: { type: 'string' },
          capacity: { type: 'integer', format: 'int64' },
          deleteFutureAppt: { type: 'boolean' },
          devices: {
            type: 'array',
            items: {
              properties: {
                categoryId: { type: 'integer', format: 'int64' },
                groupAddress: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                position: { type: 'string' },
                sn: { type: 'string' },
                type: { type: 'integer', format: 'int32' }
              }
            }
          },
          enName: { type: 'string' },
          enableBooking: { type: 'boolean' },
          enableRelease: { type: 'boolean' },
          equipmentIds: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          floorId: { type: 'integer', format: 'int64' },
          floorName: { type: 'string' },
          images: { type: 'array', items: { type: 'string' } },
          name: { type: 'string' },
          releasePolicyId: { type: 'integer', format: 'int64' },
          syncAccount: { type: 'string' },
          syncEnabled: { type: 'boolean' },
          syncName: { type: 'string' },
          timezone: { type: 'string' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«SpaceAddReqVO»'
  },
  'Request«SysConfigFaReq»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          accessToken: { type: 'string' },
          authType: { type: 'integer', format: 'int32' },
          enable: { type: 'integer', format: 'int32' },
          passwd: { type: 'string' },
          refreshToken: { type: 'string' },
          syncName: { type: 'string' },
          syncType: {
            type: 'string',
            enum: { '0': 'COMPLETE', '1': 'INCOMPLETE' }
          },
          tenantId: { type: 'string' },
          url: { type: 'string' },
          userName: { type: 'string' },
          version: { type: 'string' }
        }
      }
    },
    title: 'Request«SysConfigFaReq»'
  },
  'Request«TabletConfigReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          adInfoId: { type: 'integer', format: 'int64' },
          adShowTime: { type: 'integer', format: 'int32' },
          enableFace: { type: 'boolean' },
          isBeginEvent: { type: 'boolean' },
          isEndEvent: { type: 'boolean' },
          isExtendEvent: { type: 'boolean' },
          isHideOrganizer: { type: 'boolean' },
          isHideRepair: { type: 'boolean' },
          isHideTitle: { type: 'boolean' },
          isOpenAd: { type: 'boolean' },
          isQuckliyBook: { type: 'boolean' },
          isShowQrcode: { type: 'boolean' },
          themeId: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«TabletConfigReqVO»'
  },
  'Request«TenantAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          address: { type: 'string' },
          buildingList: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enNameLevel1: { type: 'string' },
                enNameLevel2: { type: 'string' },
                enNameLevel3: { type: 'string' },
                enNameLevel4: { type: 'string' },
                enNameLevel5: { type: 'string' },
                enNameLevel6: { type: 'string' },
                floorList: {
                  type: 'array',
                  items: {
                    properties: {
                      floorId: { type: 'integer', format: 'int64' },
                      floorName: { type: 'string' },
                      floorNum: { type: 'integer', format: 'int32' },
                      interlayer: { type: 'boolean' }
                    }
                  }
                },
                floorPrefix: { type: 'string' },
                level1: { type: 'string' },
                level2: { type: 'string' },
                level3: { type: 'string' },
                level4: { type: 'string' },
                level5: { type: 'string' },
                level6: { type: 'string' },
                timeZoneId: { type: 'integer', format: 'int64' },
                timeZoneOffset: { type: 'string' },
                zhNameLevel1: { type: 'string' },
                zhNameLevel2: { type: 'string' },
                zhNameLevel3: { type: 'string' },
                zhNameLevel4: { type: 'string' },
                zhNameLevel5: { type: 'string' },
                zhNameLevel6: { type: 'string' }
              }
            }
          },
          email: { type: 'string' },
          enAddress: { type: 'string' },
          enName: { type: 'string' },
          logoHash: { type: 'string' },
          name: { type: 'string' },
          phoneNumber: { type: 'string' },
          postalCode: { type: 'string' },
          remark: { type: 'string' },
          zhAddress: { type: 'string' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«TenantAddReqVO»'
  },
  'Request«TenantUpdateReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          address: { type: 'string' },
          email: { type: 'string' },
          enAddress: { type: 'string' },
          enName: { type: 'string' },
          logoHash: { type: 'string' },
          name: { type: 'string' },
          phoneNumber: { type: 'string' },
          postalCode: { type: 'string' },
          remark: { type: 'string' },
          zhAddress: { type: 'string' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«TenantUpdateReqVO»'
  },
  'Request«ThemeAddOrUpdateReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          backgroundHash: { type: 'string' },
          enName: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          isDefault: { type: 'boolean' },
          isShowRemark: { type: 'boolean' },
          logoHash: { type: 'string' },
          name: { type: 'string' },
          parentId: { type: 'integer', format: 'int64' },
          remark: { type: 'string' },
          styleHash: { type: 'string' },
          type: { type: 'integer', format: 'int32' },
          zhName: { type: 'string' }
        }
      }
    },
    title: 'Request«ThemeAddOrUpdateReqVO»'
  },
  'Request«UpdateLoopAppointmentVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          allowConflict: { type: 'boolean' },
          booking: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              optional: { type: 'boolean' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          content: { type: 'string' },
          departmentIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          ends: { type: 'integer', format: 'int64' },
          fileHashs: { type: 'array', items: { type: 'string' } },
          frontSource: { type: 'integer', format: 'int32' },
          inviteeAdmins: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                optional: { type: 'boolean' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          invitees: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                optional: { type: 'boolean' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          isAllDay: { type: 'boolean' },
          isApptNotRelease: { type: 'boolean' },
          isChangeFile: { type: 'boolean' },
          isChangeInvitee: { type: 'boolean' },
          isChangePartialSpace: { type: 'boolean' },
          isChangeSpace: { type: 'boolean' },
          isHiddenBooker: { type: 'boolean' },
          isHiddenContent: { type: 'boolean' },
          isHiddenInviter: { type: 'boolean' },
          isHiddenOrganizer: { type: 'boolean' },
          isHiddenTitle: { type: 'boolean' },
          isSecurity: { type: 'boolean' },
          isSendEmail: { type: 'boolean' },
          isSingleToLoop: { type: 'boolean' },
          loopRule: {
            properties: {
              dayOfTheMonth: { type: 'integer', format: 'int32' },
              dayOfTheWeek: {
                type: 'array',
                items: { type: 'integer', format: 'int32' }
              },
              endDate: { type: 'integer', format: 'int64' },
              frequency: { type: 'integer', format: 'int32' },
              interval: { type: 'integer', format: 'int32' },
              loopEndType: { type: 'integer', format: 'int32' },
              loopLabel: { type: 'integer', format: 'int32' },
              loopMode: { type: 'integer', format: 'int32' },
              loopType: { type: 'integer', format: 'int32' },
              month: { type: 'integer', format: 'int32' },
              startDate: { type: 'integer', format: 'int64' },
              weekOfTheMonthIndex: { type: 'integer', format: 'int32' }
            }
          },
          organizer: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              optional: { type: 'boolean' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          platform: { type: 'integer', format: 'int32' },
          selectSpaceIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          spaceIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          starts: { type: 'integer', format: 'int64' },
          timeZone: { type: 'string' },
          title: { type: 'string' }
        }
      }
    },
    title: 'Request«UpdateLoopAppointmentVO»'
  },
  'Request«UpdateMessageDTO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          messageUserIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          }
        }
      }
    },
    title: 'Request«UpdateMessageDTO»'
  },
  'Request«UpdateNoStarteApptReqVo»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          allowConflict: { type: 'boolean' },
          booking: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              optional: { type: 'boolean' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          content: { type: 'string' },
          departmentIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          ends: { type: 'integer', format: 'int64' },
          fileHashs: { type: 'array', items: { type: 'string' } },
          frontSource: { type: 'integer', format: 'int32' },
          inviteeAdmins: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                optional: { type: 'boolean' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          invitees: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                optional: { type: 'boolean' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          isAllDay: { type: 'boolean' },
          isApptNotRelease: { type: 'boolean' },
          isChangeFile: { type: 'boolean' },
          isChangeInvitee: { type: 'boolean' },
          isChangePartialSpace: { type: 'boolean' },
          isChangeSpace: { type: 'boolean' },
          isHiddenBooker: { type: 'boolean' },
          isHiddenContent: { type: 'boolean' },
          isHiddenInviter: { type: 'boolean' },
          isHiddenOrganizer: { type: 'boolean' },
          isHiddenTitle: { type: 'boolean' },
          isLoopToSingle: { type: 'boolean' },
          isSecurity: { type: 'boolean' },
          isSendEmail: { type: 'boolean' },
          loopRule: {
            properties: {
              dayOfTheMonth: { type: 'integer', format: 'int32' },
              dayOfTheWeek: {
                type: 'array',
                items: { type: 'integer', format: 'int32' }
              },
              endDate: { type: 'integer', format: 'int64' },
              frequency: { type: 'integer', format: 'int32' },
              interval: { type: 'integer', format: 'int32' },
              loopEndType: { type: 'integer', format: 'int32' },
              loopLabel: { type: 'integer', format: 'int32' },
              loopMode: { type: 'integer', format: 'int32' },
              loopType: { type: 'integer', format: 'int32' },
              month: { type: 'integer', format: 'int32' },
              startDate: { type: 'integer', format: 'int64' },
              weekOfTheMonthIndex: { type: 'integer', format: 'int32' }
            }
          },
          organizer: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              optional: { type: 'boolean' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          platform: { type: 'integer', format: 'int32' },
          selectSpaceIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          spaceIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          starts: { type: 'integer', format: 'int64' },
          timeZone: { type: 'string' },
          title: { type: 'string' }
        }
      }
    },
    title: 'Request«UpdateNoStarteApptReqVo»'
  },
  'Request«UpdateStartedApptReqVo»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          content: { type: 'string' },
          departmentIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          ends: { type: 'integer', format: 'int64' },
          fileHashs: { type: 'array', items: { type: 'string' } },
          inviteeAdmins: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                optional: { type: 'boolean' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          invitees: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                optional: { type: 'boolean' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          isAllDay: { type: 'boolean' },
          isApptNotRelease: { type: 'boolean' },
          isChangeFile: { type: 'boolean' },
          isChangePartialSpace: { type: 'boolean' },
          isChangeSecurity: { type: 'boolean' },
          isChangeSpace: { type: 'boolean' },
          isHiddenBooker: { type: 'boolean' },
          isHiddenContent: { type: 'boolean' },
          isHiddenInviter: { type: 'boolean' },
          isHiddenOrganizer: { type: 'boolean' },
          isHiddenTitle: { type: 'boolean' },
          isSecurity: { type: 'boolean' },
          isSendEmail: { type: 'boolean' },
          selectSpaceIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          spaceIdList: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          starts: { type: 'integer', format: 'int64' }
        }
      }
    },
    title: 'Request«UpdateStartedApptReqVo»'
  },
  'Request«UserAddReqVO»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          buildingId: { type: 'integer', format: 'int64' },
          deptIds: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          email: { type: 'string' },
          enName: { type: 'string' },
          enPosition: { type: 'string' },
          name: { type: 'string' },
          phoneNumber: { type: 'string' },
          position: { type: 'string' },
          remark: { type: 'string' },
          roleIds: {
            type: 'array',
            items: { type: 'integer', format: 'int64' }
          },
          stuffType: { type: 'integer', format: 'int32' },
          zhName: { type: 'string' },
          zhPosition: { type: 'string' }
        }
      }
    },
    title: 'Request«UserAddReqVO»'
  },
  'Request«Version»': {
    type: 'object',
    properties: {
      model: {
        properties: {
          id: { type: 'integer', format: 'int64' },
          versionCode: { type: 'integer', format: 'int32' },
          versionName: { type: 'string' }
        }
      }
    },
    title: 'Request«Version»'
  },
  'Request«int»': {
    type: 'object',
    properties: { model: { type: 'integer', format: 'int32' } },
    title: 'Request«int»'
  },
  'Request«string»': {
    type: 'object',
    properties: { model: { type: 'string' } },
    title: 'Request«string»'
  },
  ResetPwdReqVO: {
    type: 'object',
    properties: {
      isSendEmail: { type: 'boolean' },
      password: { type: 'string' }
    },
    title: 'ResetPwdReqVO'
  },
  Response: {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: { type: 'object' },
      msg: { type: 'string' }
    },
    title: 'Response'
  },
  'Response«ApptCardResVO»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          actualEndTime: { type: 'integer', format: 'int64' },
          actualStartTime: { type: 'integer', format: 'int64' },
          apptId: { type: 'integer', format: 'int64' },
          apptStatus: { type: 'integer', format: 'int32' },
          apptType: { type: 'integer', format: 'int32' },
          booking: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              participantType: { type: 'integer', format: 'int32' },
              phoneNumber: { type: 'string' },
              responseCode: { type: 'integer', format: 'int32' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          endTime: { type: 'integer', format: 'int64' },
          inviteeAdminList: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                participantType: { type: 'integer', format: 'int32' },
                phoneNumber: { type: 'string' },
                responseCode: { type: 'integer', format: 'int32' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          inviteeList: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                participantType: { type: 'integer', format: 'int32' },
                phoneNumber: { type: 'string' },
                responseCode: { type: 'integer', format: 'int32' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          isApptNotRelease: { type: 'boolean' },
          isConflict: { type: 'boolean' },
          isFromApptSync: { type: 'boolean' },
          loopRule: { type: 'string' },
          masterId: { type: 'integer', format: 'int64' },
          myLoopResponseCode: { type: 'integer', format: 'int32' },
          myResponseCode: { type: 'integer', format: 'int32' },
          organizer: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              participantType: { type: 'integer', format: 'int32' },
              phoneNumber: { type: 'string' },
              responseCode: { type: 'integer', format: 'int32' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          spaceList: {
            type: 'array',
            items: {
              properties: {
                actualEndTime: { type: 'integer', format: 'int64' },
                actualStartTime: { type: 'integer', format: 'int64' },
                apptStatus: { type: 'integer', format: 'int32' },
                endTime: { type: 'integer', format: 'int64' },
                isProxySpace: { type: 'boolean' },
                spaceEnName: { type: 'string' },
                spaceId: { type: 'integer', format: 'int64' },
                spaceName: { type: 'string' },
                spaceZhName: { type: 'string' },
                startTime: { type: 'integer', format: 'int64' }
              }
            }
          },
          startTime: { type: 'integer', format: 'int64' },
          title: { type: 'string' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«ApptCardResVO»'
  },
  'Response«ApptDetailsResVO»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          actualEndTime: { type: 'integer', format: 'int64' },
          actualStartTime: { type: 'integer', format: 'int64' },
          apptId: { type: 'integer', format: 'int64' },
          apptSecurity: {
            properties: {
              currentUser: { type: 'string' },
              isHiddenBooker: { type: 'boolean' },
              isHiddenContent: { type: 'boolean' },
              isHiddenInviter: { type: 'boolean' },
              isHiddenOrganizer: { type: 'boolean' },
              isHiddenTitle: { type: 'boolean' },
              isSecurity: { type: 'boolean' },
              security: { type: 'boolean' }
            }
          },
          apptStatus: { type: 'integer', format: 'int32' },
          apptType: { type: 'integer', format: 'int32' },
          booking: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              participantType: { type: 'integer', format: 'int32' },
              phoneNumber: { type: 'string' },
              responseCode: { type: 'integer', format: 'int32' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          content: { type: 'string' },
          endTime: { type: 'integer', format: 'int64' },
          fileList: {
            type: 'array',
            items: {
              properties: {
                fileName: { type: 'string' },
                filePath: { type: 'string' },
                fileSize: { type: 'integer', format: 'int64' },
                hash: { type: 'string' }
              }
            }
          },
          holdEndTime: { type: 'integer', format: 'int64' },
          inviteeAdminList: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                participantType: { type: 'integer', format: 'int32' },
                phoneNumber: { type: 'string' },
                responseCode: { type: 'integer', format: 'int32' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          inviteeList: {
            type: 'array',
            items: {
              properties: {
                email: { type: 'string' },
                enName: { type: 'string' },
                participantType: { type: 'integer', format: 'int32' },
                phoneNumber: { type: 'string' },
                responseCode: { type: 'integer', format: 'int32' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          isApptNotRelease: { type: 'boolean' },
          isConflict: { type: 'boolean' },
          isFromApptSync: { type: 'boolean' },
          loopRule: { type: 'string' },
          masterId: { type: 'integer', format: 'int64' },
          myLoopResponseCode: { type: 'integer', format: 'int32' },
          myResponseCode: { type: 'integer', format: 'int32' },
          organizer: {
            properties: {
              email: { type: 'string' },
              enName: { type: 'string' },
              participantType: { type: 'integer', format: 'int32' },
              phoneNumber: { type: 'string' },
              responseCode: { type: 'integer', format: 'int32' },
              userId: { type: 'integer', format: 'int64' },
              zhName: { type: 'string' }
            }
          },
          spaceList: {
            type: 'array',
            items: {
              properties: {
                actualEndTime: { type: 'integer', format: 'int64' },
                actualStartTime: { type: 'integer', format: 'int64' },
                apptStatus: { type: 'integer', format: 'int32' },
                endTime: { type: 'integer', format: 'int64' },
                isProxySpace: { type: 'boolean' },
                spaceEnName: { type: 'string' },
                spaceId: { type: 'integer', format: 'int64' },
                spaceName: { type: 'string' },
                spaceZhName: { type: 'string' },
                startTime: { type: 'integer', format: 'int64' }
              }
            }
          },
          startTime: { type: 'integer', format: 'int64' },
          title: { type: 'string' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«ApptDetailsResVO»'
  },
  'Response«BookingRoleDetailResVO»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          creator: {
            properties: {
              depts: {
                type: 'array',
                items: {
                  properties: {
                    enName: { type: 'string' },
                    name: { type: 'string' },
                    zhName: { type: 'string' }
                  }
                }
              },
              email: { type: 'string' },
              enName: { type: 'string' },
              id: { type: 'integer', format: 'int64' },
              name: { type: 'string' },
              type: { type: 'integer', format: 'int32' },
              zhName: { type: 'string' }
            }
          },
          enName: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          isAdmin: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          isSpacePublicCanSelect: { type: 'integer', format: 'int32' },
          isUserPublic: { type: 'integer', format: 'int32' },
          name: { type: 'string' },
          parentRoleMenu: {
            properties: {
              bookingPerm: { type: 'integer', format: 'int32' },
              isSpacePublic: { type: 'integer', format: 'int32' },
              spaceAutoRelease: { type: 'integer', format: 'int32' }
            }
          },
          remark: { type: 'string' },
          roleMenu: {
            properties: {
              bookingPerm: { type: 'integer', format: 'int32' },
              isSpacePublic: { type: 'integer', format: 'int32' },
              spaceAutoRelease: { type: 'integer', format: 'int32' }
            }
          },
          rolePerms: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          roleUsers: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          spaceBlackList: {
            type: 'array',
            items: {
              properties: {
                id: { type: 'integer', format: 'int64' },
                type: { type: 'integer', format: 'int32' }
              }
            }
          },
          userBlackList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          zhName: { type: 'string' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«BookingRoleDetailResVO»'
  },
  'Response«List«BookingRoleInfoResVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            bookingPerm: { type: 'integer', format: 'int32' },
            enName: { type: 'string' },
            isDefault: { type: 'integer', format: 'int32' },
            isModifiable: { type: 'integer', format: 'int32' },
            isSpacePublic: { type: 'integer', format: 'int32' },
            isUserPublic: { type: 'integer', format: 'int32' },
            name: { type: 'string' },
            remark: { type: 'string' },
            roleId: { type: 'integer', format: 'int64' },
            spaceAutoRelease: { type: 'integer', format: 'int32' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«BookingRoleInfoResVO»»'
  },
  'Response«List«IdNameTuple»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            zhName: { type: 'string' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«IdNameTuple»»'
  },
  'Response«List«ManageRoleInfosResVo»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            isSpacePublic: { type: 'integer', format: 'int32' },
            isSpacePublicCanSelect: { type: 'integer', format: 'int32' },
            isUserPublic: { type: 'integer', format: 'int32' },
            name: { type: 'string' },
            roleMenu: {
              properties: {
                appPerm: { type: 'integer', format: 'int32' },
                buildingPerm: { type: 'integer', format: 'int32' },
                deviceHealthPerm: { type: 'integer', format: 'int32' },
                devicePerm: { type: 'integer', format: 'int32' },
                emailPerm: { type: 'integer', format: 'int32' },
                enterprisePerm: { type: 'integer', format: 'int32' },
                facilitiesPerm: { type: 'integer', format: 'int32' },
                integrationPerm: { type: 'integer', format: 'int32' },
                isSpacePublic: { type: 'integer', format: 'int32' },
                operationLogPerm: { type: 'integer', format: 'int32' },
                rolePerm: { type: 'integer', format: 'int32' },
                rulePerm: { type: 'integer', format: 'int32' },
                spacePerm: { type: 'integer', format: 'int32' },
                spaceRepairPerm: { type: 'integer', format: 'int32' },
                summaryPerm: { type: 'integer', format: 'int32' },
                userPerm: { type: 'integer', format: 'int32' }
              }
            },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«ManageRoleInfosResVo»»'
  },
  'Response«List«MyScheduleResVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            apptId: { type: 'integer', format: 'int64' },
            apptStatus: { type: 'integer', format: 'int32' },
            bookingEmail: { type: 'string' },
            bookingEnName: { type: 'string' },
            bookingZhName: { type: 'string' },
            endTime: { type: 'integer', format: 'int64' },
            floorId: { type: 'integer', format: 'int64' },
            floorName: { type: 'string' },
            responseCode: { type: 'integer', format: 'int32' },
            spaceId: { type: 'integer', format: 'int64' },
            spaceName: { type: 'string' },
            spaceNum: { type: 'integer', format: 'int32' },
            startTime: { type: 'integer', format: 'int64' },
            title: { type: 'string' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«MyScheduleResVO»»'
  },
  'Response«List«RoleNameVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«RoleNameVO»»'
  },
  'Response«List«RoleSpaceResVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            checked: { type: 'integer', format: 'int32' },
            enName: { type: 'string' },
            enNameFull: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            status: { type: 'integer', format: 'int32' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' },
            zhNameFull: { type: 'string' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«RoleSpaceResVO»»'
  },
  'Response«List«SearchDepartmentVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            deptId: { type: 'integer', format: 'int64' },
            displayEnName: { type: 'string' },
            displayName: { type: 'string' },
            displayZhName: { type: 'string' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«SearchDepartmentVO»»'
  },
  'Response«List«SearchUserTipsVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            pathName: { type: 'string' },
            type: { type: 'string' },
            zhName: { type: 'string' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«SearchUserTipsVO»»'
  },
  'Response«List«SpaceApptDetailsResVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            hasBookingRole: { type: 'boolean' },
            nextApptStartTime: { type: 'integer', format: 'int64' },
            notBookingTimePart: {
              type: 'array',
              items: {
                properties: {
                  ends: { type: 'integer', format: 'int64' },
                  starts: { type: 'integer', format: 'int64' }
                }
              }
            },
            spaceInfo: {
              properties: {
                area: { type: 'number' },
                bookingConfig: {
                  properties: {
                    bookingAfterDays: { type: 'integer', format: 'int32' },
                    bookingDurationMax: { type: 'integer', format: 'int32' },
                    bookingDurationMin: { type: 'integer', format: 'int32' },
                    bookingRuleContent: { type: 'string' },
                    createTime: { type: 'integer', format: 'int64' },
                    durationType: {
                      type: 'string',
                      enum: { '0': 'UNLIMITED', '1': 'CUSTOMIZE' }
                    },
                    enName: { type: 'string' },
                    hasPerm: { type: 'boolean' },
                    id: { type: 'integer', format: 'int64' },
                    isDefault: { type: 'boolean' },
                    isEnableBookingRule: { type: 'boolean' },
                    isOwner: { type: 'boolean' },
                    isSendSuccessEmail: { type: 'boolean' },
                    isSendSuccessSystemInfo: { type: 'boolean' },
                    name: { type: 'string' },
                    zhName: { type: 'string' }
                  }
                },
                buildingEnName: { type: 'string' },
                buildingId: { type: 'integer', format: 'int64' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                capacity: { type: 'integer', format: 'int64' },
                deviceBindList: {
                  type: 'array',
                  items: {
                    properties: {
                      categoryId: { type: 'integer', format: 'int64' },
                      deviceId: { type: 'integer', format: 'int64' },
                      floorName: { type: 'string' },
                      groupAddress: { type: 'string' },
                      isOnline: { type: 'integer', format: 'int32' },
                      locationEnName: { type: 'string' },
                      locationZhName: { type: 'string' },
                      productName: { type: 'string' },
                      sn: { type: 'string' },
                      spaceEnName: { type: 'string' },
                      spaceName: { type: 'string' },
                      spaceZhName: { type: 'string' },
                      status: { type: 'integer', format: 'int32' },
                      type: { type: 'integer', format: 'int32' }
                    }
                  }
                },
                enName: { type: 'string' },
                equipments: {
                  type: 'array',
                  items: {
                    properties: {
                      enName: { type: 'string' },
                      id: { type: 'integer', format: 'int64' },
                      name: { type: 'string' },
                      spaceId: { type: 'integer', format: 'int64' },
                      zhName: { type: 'string' }
                    }
                  }
                },
                floorId: { type: 'integer', format: 'int64' },
                floorName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                images: {
                  type: 'array',
                  items: {
                    properties: {
                      fileName: { type: 'string' },
                      filePath: { type: 'string' },
                      fileSize: { type: 'integer', format: 'int64' },
                      hash: { type: 'string' }
                    }
                  }
                },
                name: { type: 'string' },
                permSelectModels: {
                  type: 'array',
                  items: {
                    properties: {
                      buildingEnName: { type: 'string' },
                      buildingName: { type: 'string' },
                      buildingZhName: { type: 'string' },
                      enName: { type: 'string' },
                      floorEnName: { type: 'string' },
                      floorName: { type: 'string' },
                      hasPerm: { type: 'integer', format: 'int32' },
                      id: { type: 'integer', format: 'int64' },
                      name: { type: 'string' },
                      type: { type: 'integer', format: 'int32' },
                      zhName: { type: 'string' }
                    }
                  }
                },
                releaseConfig: {
                  properties: {
                    createTime: { type: 'integer', format: 'int64' },
                    enName: { type: 'string' },
                    hasPerm: { type: 'boolean' },
                    id: { type: 'integer', format: 'int64' },
                    isDefault: { type: 'boolean' },
                    isEnableReleaseRule: { type: 'boolean' },
                    isNotifyAfterRelease: { type: 'boolean' },
                    isNotifyBeforeRelease: { type: 'boolean' },
                    isOwner: { type: 'boolean' },
                    isReleaseBeforeEnd: { type: 'boolean' },
                    name: { type: 'string' },
                    releaseRuleContent: { type: 'string' },
                    releaseTimeAfterStart: { type: 'integer', format: 'int32' },
                    releaseTimeBeforeEnd: { type: 'integer', format: 'int32' },
                    remindTimeBeforeRelease: {
                      type: 'integer',
                      format: 'int32'
                    },
                    zhName: { type: 'string' }
                  }
                },
                status: { type: 'integer', format: 'int32' },
                syncAccount: { type: 'string' },
                syncEnabled: { type: 'boolean' },
                syncName: { type: 'string' },
                zhName: { type: 'string' }
              }
            },
            spaceTimeline: {
              type: 'array',
              items: {
                properties: {
                  apptStatus: { type: 'integer', format: 'int32' },
                  endTime: { type: 'integer', format: 'int64' },
                  startTime: { type: 'integer', format: 'int64' }
                }
              }
            }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«SpaceApptDetailsResVO»»'
  },
  'Response«List«SpaceCalendarResVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            capacity: { type: 'integer', format: 'int64' },
            dateViewList: {
              type: 'array',
              items: {
                properties: {
                  apptList: {
                    type: 'array',
                    items: {
                      properties: {
                        apptId: { type: 'integer', format: 'int64' },
                        apptStatus: { type: 'integer', format: 'int32' },
                        apptType: { type: 'integer', format: 'int32' },
                        endTime: { type: 'integer', format: 'int64' },
                        isConflict: { type: 'boolean' },
                        isProxySpace: { type: 'boolean' },
                        myResponseCode: { type: 'integer', format: 'int32' },
                        participantType: { type: 'integer', format: 'int32' },
                        platform: { type: 'integer', format: 'int32' },
                        startTime: { type: 'integer', format: 'int64' },
                        title: { type: 'string' }
                      }
                    }
                  },
                  date: { type: 'string' },
                  totalCount: { type: 'integer', format: 'int32' }
                }
              }
            },
            floorName: { type: 'string' },
            hasBookingRole: { type: 'boolean' },
            isBookable: { type: 'boolean' },
            isDisable: { type: 'boolean' },
            notBookingTimePart: {
              type: 'array',
              items: {
                properties: {
                  ends: { type: 'integer', format: 'int64' },
                  starts: { type: 'integer', format: 'int64' }
                }
              }
            },
            spaceEnName: { type: 'string' },
            spaceId: { type: 'integer', format: 'int64' },
            spaceName: { type: 'string' },
            spaceZhName: { type: 'string' },
            status: { type: 'integer', format: 'int32' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«SpaceCalendarResVO»»'
  },
  'Response«List«SpaceInfo»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            lastSyncTime: { type: 'integer', format: 'int64' },
            spaceId: { type: 'integer', format: 'int64' },
            syncAccount: { type: 'string' },
            syncEnabled: { type: 'boolean' },
            syncName: { type: 'string' },
            syncState: { type: 'string' },
            tenantId: { type: 'integer', format: 'int64' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«SpaceInfo»»'
  },
  'Response«List«TypeNameTuple»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        type: 'array',
        items: {
          properties: {
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«List«TypeNameTuple»»'
  },
  'Response«ManageRoleDetailResVO»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          enName: { type: 'string' },
          enNameParentRole: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          isAdmin: { type: 'integer', format: 'int32' },
          isRolePermCanCancel: { type: 'integer', format: 'int32' },
          isSpacePublic: { type: 'integer', format: 'int32' },
          isSpacePublicCanSelect: { type: 'integer', format: 'int32' },
          isUserPublic: { type: 'integer', format: 'int32' },
          name: { type: 'string' },
          nameParentRole: { type: 'string' },
          parentRoleInfo: {
            properties: {
              enName: { type: 'string' },
              id: { type: 'integer', format: 'int64' },
              isUserPublic: { type: 'integer', format: 'int32' },
              name: { type: 'string' },
              roleUsers: {
                type: 'array',
                items: {
                  properties: {
                    enName: { type: 'string' },
                    id: { type: 'integer', format: 'int64' },
                    name: { type: 'string' },
                    type: { type: 'integer', format: 'int32' },
                    zhName: { type: 'string' }
                  }
                }
              },
              zhName: { type: 'string' }
            }
          },
          parentRoleMenu: {
            properties: {
              appPerm: { type: 'integer', format: 'int32' },
              buildingPerm: { type: 'integer', format: 'int32' },
              deviceHealthPerm: { type: 'integer', format: 'int32' },
              devicePerm: { type: 'integer', format: 'int32' },
              emailPerm: { type: 'integer', format: 'int32' },
              enterprisePerm: { type: 'integer', format: 'int32' },
              facilitiesPerm: { type: 'integer', format: 'int32' },
              integrationPerm: { type: 'integer', format: 'int32' },
              isSpacePublic: { type: 'integer', format: 'int32' },
              operationLogPerm: { type: 'integer', format: 'int32' },
              rolePerm: { type: 'integer', format: 'int32' },
              rulePerm: { type: 'integer', format: 'int32' },
              spacePerm: { type: 'integer', format: 'int32' },
              spaceRepairPerm: { type: 'integer', format: 'int32' },
              summaryPerm: { type: 'integer', format: 'int32' },
              userPerm: { type: 'integer', format: 'int32' }
            }
          },
          remark: { type: 'string' },
          roleMenu: {
            properties: {
              appPerm: { type: 'integer', format: 'int32' },
              buildingPerm: { type: 'integer', format: 'int32' },
              deviceHealthPerm: { type: 'integer', format: 'int32' },
              devicePerm: { type: 'integer', format: 'int32' },
              emailPerm: { type: 'integer', format: 'int32' },
              enterprisePerm: { type: 'integer', format: 'int32' },
              facilitiesPerm: { type: 'integer', format: 'int32' },
              integrationPerm: { type: 'integer', format: 'int32' },
              isSpacePublic: { type: 'integer', format: 'int32' },
              operationLogPerm: { type: 'integer', format: 'int32' },
              rolePerm: { type: 'integer', format: 'int32' },
              rulePerm: { type: 'integer', format: 'int32' },
              spacePerm: { type: 'integer', format: 'int32' },
              spaceRepairPerm: { type: 'integer', format: 'int32' },
              summaryPerm: { type: 'integer', format: 'int32' },
              userPerm: { type: 'integer', format: 'int32' }
            }
          },
          rolePerms: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          roleUsers: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          spaceBlackList: {
            type: 'array',
            items: {
              properties: {
                id: { type: 'integer', format: 'int64' },
                type: { type: 'integer', format: 'int32' }
              }
            }
          },
          userBlackList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          zhName: { type: 'string' },
          zhNameParentRole: { type: 'string' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«ManageRoleDetailResVO»'
  },
  'Response«PageResModel«BookingRoleInfoResVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          data: {
            type: 'array',
            items: {
              properties: {
                bookingPerm: { type: 'integer', format: 'int32' },
                enName: { type: 'string' },
                isDefault: { type: 'integer', format: 'int32' },
                isModifiable: { type: 'integer', format: 'int32' },
                isSpacePublic: { type: 'integer', format: 'int32' },
                isUserPublic: { type: 'integer', format: 'int32' },
                name: { type: 'string' },
                remark: { type: 'string' },
                roleId: { type: 'integer', format: 'int64' },
                spaceAutoRelease: { type: 'integer', format: 'int32' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          pageNum: { type: 'integer', format: 'int64' },
          pageSize: { type: 'integer', format: 'int64' },
          total: { type: 'integer', format: 'int64' },
          totalPage: { type: 'integer', format: 'int64' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«PageResModel«BookingRoleInfoResVO»»'
  },
  'Response«PageResModel«OperationLogVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          data: {
            type: 'array',
            items: {
              properties: {
                account: { type: 'string' },
                createBy: { type: 'string' },
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                moduleCode: { type: 'integer', format: 'int32' },
                opContent: { type: 'string' },
                opIp: { type: 'string' },
                opTime: { type: 'integer', format: 'int64' },
                opType: { type: 'integer', format: 'int32' },
                tenantId: { type: 'integer', format: 'int64' },
                userId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          pageNum: { type: 'integer', format: 'int64' },
          pageSize: { type: 'integer', format: 'int64' },
          total: { type: 'integer', format: 'int64' },
          totalPage: { type: 'integer', format: 'int64' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«PageResModel«OperationLogVO»»'
  },
  'Response«PageResModel«SyncLogVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          data: {
            type: 'array',
            items: {
              properties: {
                content: { type: 'string' },
                createBy: { type: 'string' },
                createTime: { type: 'integer', format: 'int64' },
                id: { type: 'integer', format: 'int64' },
                isDeleted: { type: 'boolean' },
                isRetry: { type: 'boolean' },
                opType: { type: 'integer', format: 'int32' },
                paramJson: { type: 'string' },
                status: { type: 'integer', format: 'int32' },
                tenantId: { type: 'integer', format: 'int64' },
                type: { type: 'integer', format: 'int32' },
                updateBy: { type: 'string' },
                updateTime: { type: 'integer', format: 'int64' }
              }
            }
          },
          pageNum: { type: 'integer', format: 'int64' },
          pageSize: { type: 'integer', format: 'int64' },
          total: { type: 'integer', format: 'int64' },
          totalPage: { type: 'integer', format: 'int64' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«PageResModel«SyncLogVO»»'
  },
  'Response«PageResModel«UserInfoResVO»»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          data: {
            type: 'array',
            items: {
              properties: {
                deptEnName: { type: 'string' },
                deptZhName: { type: 'string' },
                email: { type: 'string' },
                enName: { type: 'string' },
                enPosition: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                locationEnName: { type: 'string' },
                locationZhName: { type: 'string' },
                name: { type: 'string' },
                position: { type: 'string' },
                remark: { type: 'string' },
                roleEnName: { type: 'string' },
                roleZhName: { type: 'string' },
                status: { type: 'integer', format: 'int32' },
                stuffType: { type: 'integer', format: 'int32' },
                userSource: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' },
                zhPosition: { type: 'string' }
              }
            }
          },
          pageNum: { type: 'integer', format: 'int64' },
          pageSize: { type: 'integer', format: 'int64' },
          total: { type: 'integer', format: 'int64' },
          totalPage: { type: 'integer', format: 'int64' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«PageResModel«UserInfoResVO»»'
  },
  'Response«SpaceLastResVO»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          buildingId: { type: 'integer', format: 'int64' },
          buildingInfo: {
            properties: {
              buildingId: { type: 'integer', format: 'int64' },
              floorList: {
                type: 'array',
                items: {
                  properties: {
                    floorId: { type: 'integer', format: 'int64' },
                    floorName: { type: 'string' }
                  }
                }
              },
              locationEnName: { type: 'string' },
              locationZhName: { type: 'string' },
              spaceNum: { type: 'integer', format: 'int32' }
            }
          },
          equipmentList: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                zhName: { type: 'string' }
              }
            }
          },
          floorId: { type: 'integer', format: 'int64' },
          frontSource: { type: 'integer', format: 'int32' },
          ledColorList: {
            type: 'array',
            items: {
              properties: {
                color: { type: 'integer', format: 'int32' },
                spaceStatus: { type: 'integer', format: 'int32' }
              }
            }
          }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«SpaceLastResVO»'
  },
  'Response«UserDetailResVO»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: {
        properties: {
          building: {
            properties: {
              enName: { type: 'string' },
              id: { type: 'integer', format: 'int64' },
              name: { type: 'string' },
              zhName: { type: 'string' }
            }
          },
          departments: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                zhName: { type: 'string' }
              }
            }
          },
          email: { type: 'string' },
          enName: { type: 'string' },
          enPosition: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          name: { type: 'string' },
          phoneNumber: { type: 'string' },
          position: { type: 'string' },
          remark: { type: 'string' },
          roles: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          stuffType: { type: 'integer', format: 'int32' },
          userSource: { type: 'integer', format: 'int32' },
          zhName: { type: 'string' },
          zhPosition: { type: 'string' }
        }
      },
      msg: { type: 'string' }
    },
    title: 'Response«UserDetailResVO»'
  },
  'Response«int»': {
    type: 'object',
    properties: {
      code: { type: 'integer', format: 'int32' },
      model: { type: 'integer', format: 'int32' },
      msg: { type: 'string' }
    },
    title: 'Response«int»'
  },
  RoleNameVO: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      hasPerm: { type: 'integer', format: 'int32' },
      id: { type: 'integer', format: 'int64' },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'RoleNameVO'
  },
  RolePermReqVo: {
    type: 'object',
    properties: {
      appPerm: { type: 'integer', format: 'int32' },
      buildingPerm: { type: 'integer', format: 'int32' },
      deletedPerms: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      deletedSpaceBlackList: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      deletedUserBlacList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      deletedUsers: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      deviceHealthPerm: { type: 'integer', format: 'int32' },
      devicePerm: { type: 'integer', format: 'int32' },
      emailPerm: { type: 'integer', format: 'int32' },
      enName: { type: 'string' },
      enterprisePerm: { type: 'integer', format: 'int32' },
      facilitiesPerm: { type: 'integer', format: 'int32' },
      integrationPerm: { type: 'integer', format: 'int32' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      newPerms: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      newSpaceBlackList: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      newUserBlacList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      newUsers: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      operationLogPerm: { type: 'integer', format: 'int32' },
      remark: { type: 'string' },
      rolePerm: { type: 'integer', format: 'int32' },
      rulePerm: { type: 'integer', format: 'int32' },
      spacePerm: { type: 'integer', format: 'int32' },
      spaceRepairPerm: { type: 'integer', format: 'int32' },
      summaryPerm: { type: 'integer', format: 'int32' },
      userPerm: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'RolePermReqVo'
  },
  RolePermSelectModel: {
    type: 'object',
    properties: {
      buildingEnName: { type: 'string' },
      buildingName: { type: 'string' },
      buildingZhName: { type: 'string' },
      enName: { type: 'string' },
      floorEnName: { type: 'string' },
      floorName: { type: 'string' },
      hasPerm: { type: 'integer', format: 'int32' },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'RolePermSelectModel'
  },
  RoleSpaceReqVo: {
    type: 'object',
    properties: {
      bookingPerm: { type: 'integer', format: 'int32' },
      deletedPerms: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      deletedSpaceBlackList: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      deletedUserBlacList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      deletedUsers: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      enName: { type: 'string' },
      isSpacePublic: { type: 'integer', format: 'int32' },
      isUserPublic: { type: 'integer', format: 'int32' },
      name: { type: 'string' },
      newPerms: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      newSpaceBlackList: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      newUserBlacList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      newUsers: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      remark: { type: 'string' },
      spaceAutoRelease: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'RoleSpaceReqVo'
  },
  RoleSpaceResVO: {
    type: 'object',
    properties: {
      checked: { type: 'integer', format: 'int32' },
      enName: { type: 'string' },
      enNameFull: { type: 'string' },
      hasPerm: { type: 'integer', format: 'int32' },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      status: { type: 'integer', format: 'int32' },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' },
      zhNameFull: { type: 'string' }
    },
    title: 'RoleSpaceResVO'
  },
  RoleUserSelectModel: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'RoleUserSelectModel'
  },
  SaveTabletAndBindReqVO: {
    type: 'object',
    properties: {
      categoryId: { type: 'integer', format: 'int64' },
      sn: { type: 'string' },
      spaceId: { type: 'integer', format: 'int64' },
      tenantId: { type: 'integer', format: 'int64' }
    },
    title: 'SaveTabletAndBindReqVO'
  },
  ScreenTurnOffVo: {
    type: 'object',
    properties: {
      isTurnOff: { type: 'boolean' },
      periods: {
        type: 'array',
        items: {
          properties: {
            endTime: { type: 'string' },
            startTime: { type: 'string' }
          }
        }
      }
    },
    title: 'ScreenTurnOffVo'
  },
  SearchDepartmentVO: {
    type: 'object',
    properties: {
      deptId: { type: 'integer', format: 'int64' },
      displayEnName: { type: 'string' },
      displayName: { type: 'string' },
      displayZhName: { type: 'string' }
    },
    title: 'SearchDepartmentVO'
  },
  SearchUserTipsVO: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      pathName: { type: 'string' },
      type: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'SearchUserTipsVO'
  },
  SensorBindReqVO: {
    type: 'object',
    properties: {
      buildingId: { type: 'integer', format: 'int64' },
      categoryId: { type: 'integer', format: 'int64' },
      floorId: { type: 'integer', format: 'int64' },
      groupAddress: { type: 'string' },
      position: { type: 'string' },
      sn: { type: 'string' },
      spaceId: { type: 'integer', format: 'int64' }
    },
    title: 'SensorBindReqVO'
  },
  SpaceAddReqVO: {
    type: 'object',
    properties: {
      area: { type: 'number' },
      bookableRoleIds: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      bookingPolicyId: { type: 'integer', format: 'int64' },
      buildingId: { type: 'integer', format: 'int64' },
      buildingName: { type: 'string' },
      capacity: { type: 'integer', format: 'int64' },
      deleteFutureAppt: { type: 'boolean' },
      devices: {
        type: 'array',
        items: {
          properties: {
            categoryId: { type: 'integer', format: 'int64' },
            groupAddress: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            position: { type: 'string' },
            sn: { type: 'string' },
            type: { type: 'integer', format: 'int32' }
          }
        }
      },
      enName: { type: 'string' },
      enableBooking: { type: 'boolean' },
      enableRelease: { type: 'boolean' },
      equipmentIds: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      floorId: { type: 'integer', format: 'int64' },
      floorName: { type: 'string' },
      images: { type: 'array', items: { type: 'string' } },
      name: { type: 'string' },
      releasePolicyId: { type: 'integer', format: 'int64' },
      syncAccount: { type: 'string' },
      syncEnabled: { type: 'boolean' },
      syncName: { type: 'string' },
      timezone: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'SpaceAddReqVO'
  },
  SpaceApptDetailsResVO: {
    type: 'object',
    properties: {
      hasBookingRole: { type: 'boolean' },
      nextApptStartTime: { type: 'integer', format: 'int64' },
      notBookingTimePart: {
        type: 'array',
        items: {
          properties: {
            ends: { type: 'integer', format: 'int64' },
            starts: { type: 'integer', format: 'int64' }
          }
        }
      },
      spaceInfo: {
        properties: {
          area: { type: 'number' },
          bookingConfig: {
            properties: {
              bookingAfterDays: { type: 'integer', format: 'int32' },
              bookingDurationMax: { type: 'integer', format: 'int32' },
              bookingDurationMin: { type: 'integer', format: 'int32' },
              bookingRuleContent: { type: 'string' },
              createTime: { type: 'integer', format: 'int64' },
              durationType: {
                type: 'string',
                enum: { '0': 'UNLIMITED', '1': 'CUSTOMIZE' }
              },
              enName: { type: 'string' },
              hasPerm: { type: 'boolean' },
              id: { type: 'integer', format: 'int64' },
              isDefault: { type: 'boolean' },
              isEnableBookingRule: { type: 'boolean' },
              isOwner: { type: 'boolean' },
              isSendSuccessEmail: { type: 'boolean' },
              isSendSuccessSystemInfo: { type: 'boolean' },
              name: { type: 'string' },
              zhName: { type: 'string' }
            }
          },
          buildingEnName: { type: 'string' },
          buildingId: { type: 'integer', format: 'int64' },
          buildingName: { type: 'string' },
          buildingZhName: { type: 'string' },
          capacity: { type: 'integer', format: 'int64' },
          deviceBindList: {
            type: 'array',
            items: {
              properties: {
                categoryId: { type: 'integer', format: 'int64' },
                deviceId: { type: 'integer', format: 'int64' },
                floorName: { type: 'string' },
                groupAddress: { type: 'string' },
                isOnline: { type: 'integer', format: 'int32' },
                locationEnName: { type: 'string' },
                locationZhName: { type: 'string' },
                productName: { type: 'string' },
                sn: { type: 'string' },
                spaceEnName: { type: 'string' },
                spaceName: { type: 'string' },
                spaceZhName: { type: 'string' },
                status: { type: 'integer', format: 'int32' },
                type: { type: 'integer', format: 'int32' }
              }
            }
          },
          enName: { type: 'string' },
          equipments: {
            type: 'array',
            items: {
              properties: {
                enName: { type: 'string' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                spaceId: { type: 'integer', format: 'int64' },
                zhName: { type: 'string' }
              }
            }
          },
          floorId: { type: 'integer', format: 'int64' },
          floorName: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          images: {
            type: 'array',
            items: {
              properties: {
                fileName: { type: 'string' },
                filePath: { type: 'string' },
                fileSize: { type: 'integer', format: 'int64' },
                hash: { type: 'string' }
              }
            }
          },
          name: { type: 'string' },
          permSelectModels: {
            type: 'array',
            items: {
              properties: {
                buildingEnName: { type: 'string' },
                buildingName: { type: 'string' },
                buildingZhName: { type: 'string' },
                enName: { type: 'string' },
                floorEnName: { type: 'string' },
                floorName: { type: 'string' },
                hasPerm: { type: 'integer', format: 'int32' },
                id: { type: 'integer', format: 'int64' },
                name: { type: 'string' },
                type: { type: 'integer', format: 'int32' },
                zhName: { type: 'string' }
              }
            }
          },
          releaseConfig: {
            properties: {
              createTime: { type: 'integer', format: 'int64' },
              enName: { type: 'string' },
              hasPerm: { type: 'boolean' },
              id: { type: 'integer', format: 'int64' },
              isDefault: { type: 'boolean' },
              isEnableReleaseRule: { type: 'boolean' },
              isNotifyAfterRelease: { type: 'boolean' },
              isNotifyBeforeRelease: { type: 'boolean' },
              isOwner: { type: 'boolean' },
              isReleaseBeforeEnd: { type: 'boolean' },
              name: { type: 'string' },
              releaseRuleContent: { type: 'string' },
              releaseTimeAfterStart: { type: 'integer', format: 'int32' },
              releaseTimeBeforeEnd: { type: 'integer', format: 'int32' },
              remindTimeBeforeRelease: { type: 'integer', format: 'int32' },
              zhName: { type: 'string' }
            }
          },
          status: { type: 'integer', format: 'int32' },
          syncAccount: { type: 'string' },
          syncEnabled: { type: 'boolean' },
          syncName: { type: 'string' },
          zhName: { type: 'string' }
        }
      },
      spaceTimeline: {
        type: 'array',
        items: {
          properties: {
            apptStatus: { type: 'integer', format: 'int32' },
            endTime: { type: 'integer', format: 'int64' },
            startTime: { type: 'integer', format: 'int64' }
          }
        }
      }
    },
    title: 'SpaceApptDetailsResVO'
  },
  SpaceBatchSettingReqVo: {
    type: 'object',
    properties: {
      bookingPolicyId: { type: 'integer', format: 'int64' },
      enableBooking: { type: 'boolean' },
      enableRelease: { type: 'boolean' },
      releasePolicyId: { type: 'integer', format: 'int64' },
      spaceIds: { type: 'array', items: { type: 'integer', format: 'int64' } }
    },
    title: 'SpaceBatchSettingReqVo'
  },
  SpaceCalendarResVO: {
    type: 'object',
    properties: {
      capacity: { type: 'integer', format: 'int64' },
      dateViewList: {
        type: 'array',
        items: {
          properties: {
            apptList: {
              type: 'array',
              items: {
                properties: {
                  apptId: { type: 'integer', format: 'int64' },
                  apptStatus: { type: 'integer', format: 'int32' },
                  apptType: { type: 'integer', format: 'int32' },
                  endTime: { type: 'integer', format: 'int64' },
                  isConflict: { type: 'boolean' },
                  isProxySpace: { type: 'boolean' },
                  myResponseCode: { type: 'integer', format: 'int32' },
                  participantType: { type: 'integer', format: 'int32' },
                  platform: { type: 'integer', format: 'int32' },
                  startTime: { type: 'integer', format: 'int64' },
                  title: { type: 'string' }
                }
              }
            },
            date: { type: 'string' },
            totalCount: { type: 'integer', format: 'int32' }
          }
        }
      },
      floorName: { type: 'string' },
      hasBookingRole: { type: 'boolean' },
      isBookable: { type: 'boolean' },
      isDisable: { type: 'boolean' },
      notBookingTimePart: {
        type: 'array',
        items: {
          properties: {
            ends: { type: 'integer', format: 'int64' },
            starts: { type: 'integer', format: 'int64' }
          }
        }
      },
      spaceEnName: { type: 'string' },
      spaceId: { type: 'integer', format: 'int64' },
      spaceName: { type: 'string' },
      spaceZhName: { type: 'string' },
      status: { type: 'integer', format: 'int32' }
    },
    title: 'SpaceCalendarResVO'
  },
  SpaceDetailResVO: {
    type: 'object',
    properties: {
      area: { type: 'number' },
      bookingConfig: {
        properties: {
          bookingAfterDays: { type: 'integer', format: 'int32' },
          bookingDurationMax: { type: 'integer', format: 'int32' },
          bookingDurationMin: { type: 'integer', format: 'int32' },
          bookingRuleContent: { type: 'string' },
          createTime: { type: 'integer', format: 'int64' },
          durationType: {
            type: 'string',
            enum: { '0': 'UNLIMITED', '1': 'CUSTOMIZE' }
          },
          enName: { type: 'string' },
          hasPerm: { type: 'boolean' },
          id: { type: 'integer', format: 'int64' },
          isDefault: { type: 'boolean' },
          isEnableBookingRule: { type: 'boolean' },
          isOwner: { type: 'boolean' },
          isSendSuccessEmail: { type: 'boolean' },
          isSendSuccessSystemInfo: { type: 'boolean' },
          name: { type: 'string' },
          zhName: { type: 'string' }
        }
      },
      buildingEnName: { type: 'string' },
      buildingId: { type: 'integer', format: 'int64' },
      buildingName: { type: 'string' },
      buildingZhName: { type: 'string' },
      capacity: { type: 'integer', format: 'int64' },
      deviceBindList: {
        type: 'array',
        items: {
          properties: {
            categoryId: { type: 'integer', format: 'int64' },
            deviceId: { type: 'integer', format: 'int64' },
            floorName: { type: 'string' },
            groupAddress: { type: 'string' },
            isOnline: { type: 'integer', format: 'int32' },
            locationEnName: { type: 'string' },
            locationZhName: { type: 'string' },
            productName: { type: 'string' },
            sn: { type: 'string' },
            spaceEnName: { type: 'string' },
            spaceName: { type: 'string' },
            spaceZhName: { type: 'string' },
            status: { type: 'integer', format: 'int32' },
            type: { type: 'integer', format: 'int32' }
          }
        }
      },
      enName: { type: 'string' },
      equipments: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            spaceId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      floorId: { type: 'integer', format: 'int64' },
      floorName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      images: {
        type: 'array',
        items: {
          properties: {
            fileName: { type: 'string' },
            filePath: { type: 'string' },
            fileSize: { type: 'integer', format: 'int64' },
            hash: { type: 'string' }
          }
        }
      },
      name: { type: 'string' },
      permSelectModels: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enName: { type: 'string' },
            floorEnName: { type: 'string' },
            floorName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      releaseConfig: {
        properties: {
          createTime: { type: 'integer', format: 'int64' },
          enName: { type: 'string' },
          hasPerm: { type: 'boolean' },
          id: { type: 'integer', format: 'int64' },
          isDefault: { type: 'boolean' },
          isEnableReleaseRule: { type: 'boolean' },
          isNotifyAfterRelease: { type: 'boolean' },
          isNotifyBeforeRelease: { type: 'boolean' },
          isOwner: { type: 'boolean' },
          isReleaseBeforeEnd: { type: 'boolean' },
          name: { type: 'string' },
          releaseRuleContent: { type: 'string' },
          releaseTimeAfterStart: { type: 'integer', format: 'int32' },
          releaseTimeBeforeEnd: { type: 'integer', format: 'int32' },
          remindTimeBeforeRelease: { type: 'integer', format: 'int32' },
          zhName: { type: 'string' }
        }
      },
      status: { type: 'integer', format: 'int32' },
      syncAccount: { type: 'string' },
      syncEnabled: { type: 'boolean' },
      syncName: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'SpaceDetailResVO'
  },
  SpaceEquipmentToIdName: {
    type: 'object',
    properties: {
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      spaceId: { type: 'integer', format: 'int64' },
      zhName: { type: 'string' }
    },
    title: 'SpaceEquipmentToIdName'
  },
  SpaceImageVO: {
    type: 'object',
    properties: {
      fileName: { type: 'string' },
      filePath: { type: 'string' },
      fileSize: { type: 'integer', format: 'int64' },
      hash: { type: 'string' }
    },
    title: 'SpaceImageVO'
  },
  SpaceInfo: {
    type: 'object',
    properties: {
      lastSyncTime: { type: 'integer', format: 'int64' },
      spaceId: { type: 'integer', format: 'int64' },
      syncAccount: { type: 'string' },
      syncEnabled: { type: 'boolean' },
      syncName: { type: 'string' },
      syncState: { type: 'string' },
      tenantId: { type: 'integer', format: 'int64' }
    },
    title: 'SpaceInfo'
  },
  SpaceInfoUpdate: {
    type: 'object',
    properties: {
      lastSyncTime: { type: 'integer', format: 'int64' },
      syncAccount: { type: 'string' },
      syncState: { type: 'string' },
      tenantId: { type: 'integer', format: 'int64' }
    },
    title: 'SpaceInfoUpdate'
  },
  SpaceLastResVO: {
    type: 'object',
    properties: {
      buildingId: { type: 'integer', format: 'int64' },
      buildingInfo: {
        properties: {
          buildingId: { type: 'integer', format: 'int64' },
          floorList: {
            type: 'array',
            items: {
              properties: {
                floorId: { type: 'integer', format: 'int64' },
                floorName: { type: 'string' }
              }
            }
          },
          locationEnName: { type: 'string' },
          locationZhName: { type: 'string' },
          spaceNum: { type: 'integer', format: 'int32' }
        }
      },
      equipmentList: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            zhName: { type: 'string' }
          }
        }
      },
      floorId: { type: 'integer', format: 'int64' },
      frontSource: { type: 'integer', format: 'int32' },
      ledColorList: {
        type: 'array',
        items: {
          properties: {
            color: { type: 'integer', format: 'int32' },
            spaceStatus: { type: 'integer', format: 'int32' }
          }
        }
      }
    },
    title: 'SpaceLastResVO'
  },
  SyncLogVO: {
    type: 'object',
    properties: {
      content: { type: 'string' },
      createBy: { type: 'string' },
      createTime: { type: 'integer', format: 'int64' },
      id: { type: 'integer', format: 'int64' },
      isDeleted: { type: 'boolean' },
      isRetry: { type: 'boolean' },
      opType: { type: 'integer', format: 'int32' },
      paramJson: { type: 'string' },
      status: { type: 'integer', format: 'int32' },
      tenantId: { type: 'integer', format: 'int64' },
      type: { type: 'integer', format: 'int32' },
      updateBy: { type: 'string' },
      updateTime: { type: 'integer', format: 'int64' }
    },
    title: 'SyncLogVO'
  },
  SysConfigFaReq: {
    type: 'object',
    properties: {
      accessToken: { type: 'string' },
      authType: { type: 'integer', format: 'int32' },
      enable: { type: 'integer', format: 'int32' },
      passwd: { type: 'string' },
      refreshToken: { type: 'string' },
      syncName: { type: 'string' },
      syncType: {
        type: 'string',
        enum: { '0': 'COMPLETE', '1': 'INCOMPLETE' }
      },
      tenantId: { type: 'string' },
      url: { type: 'string' },
      userName: { type: 'string' },
      version: { type: 'string' }
    },
    title: 'SysConfigFaReq'
  },
  TabletConfigReqVO: {
    type: 'object',
    properties: {
      adInfoId: { type: 'integer', format: 'int64' },
      adShowTime: { type: 'integer', format: 'int32' },
      enableFace: { type: 'boolean' },
      isBeginEvent: { type: 'boolean' },
      isEndEvent: { type: 'boolean' },
      isExtendEvent: { type: 'boolean' },
      isHideOrganizer: { type: 'boolean' },
      isHideRepair: { type: 'boolean' },
      isHideTitle: { type: 'boolean' },
      isOpenAd: { type: 'boolean' },
      isQuckliyBook: { type: 'boolean' },
      isShowQrcode: { type: 'boolean' },
      themeId: { type: 'integer', format: 'int64' }
    },
    title: 'TabletConfigReqVO'
  },
  TenantAddReqVO: {
    type: 'object',
    properties: {
      address: { type: 'string' },
      buildingList: {
        type: 'array',
        items: {
          properties: {
            buildingEnName: { type: 'string' },
            buildingName: { type: 'string' },
            buildingZhName: { type: 'string' },
            enNameLevel1: { type: 'string' },
            enNameLevel2: { type: 'string' },
            enNameLevel3: { type: 'string' },
            enNameLevel4: { type: 'string' },
            enNameLevel5: { type: 'string' },
            enNameLevel6: { type: 'string' },
            floorList: {
              type: 'array',
              items: {
                properties: {
                  floorId: { type: 'integer', format: 'int64' },
                  floorName: { type: 'string' },
                  floorNum: { type: 'integer', format: 'int32' },
                  interlayer: { type: 'boolean' }
                }
              }
            },
            floorPrefix: { type: 'string' },
            level1: { type: 'string' },
            level2: { type: 'string' },
            level3: { type: 'string' },
            level4: { type: 'string' },
            level5: { type: 'string' },
            level6: { type: 'string' },
            timeZoneId: { type: 'integer', format: 'int64' },
            timeZoneOffset: { type: 'string' },
            zhNameLevel1: { type: 'string' },
            zhNameLevel2: { type: 'string' },
            zhNameLevel3: { type: 'string' },
            zhNameLevel4: { type: 'string' },
            zhNameLevel5: { type: 'string' },
            zhNameLevel6: { type: 'string' }
          }
        }
      },
      email: { type: 'string' },
      enAddress: { type: 'string' },
      enName: { type: 'string' },
      logoHash: { type: 'string' },
      name: { type: 'string' },
      phoneNumber: { type: 'string' },
      postalCode: { type: 'string' },
      remark: { type: 'string' },
      zhAddress: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'TenantAddReqVO'
  },
  TenantUpdateReqVO: {
    type: 'object',
    properties: {
      address: { type: 'string' },
      email: { type: 'string' },
      enAddress: { type: 'string' },
      enName: { type: 'string' },
      logoHash: { type: 'string' },
      name: { type: 'string' },
      phoneNumber: { type: 'string' },
      postalCode: { type: 'string' },
      remark: { type: 'string' },
      zhAddress: { type: 'string' },
      zhName: { type: 'string' }
    },
    title: 'TenantUpdateReqVO'
  },
  ThemeAddOrUpdateReqVO: {
    type: 'object',
    properties: {
      backgroundHash: { type: 'string' },
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      isDefault: { type: 'boolean' },
      isShowRemark: { type: 'boolean' },
      logoHash: { type: 'string' },
      name: { type: 'string' },
      parentId: { type: 'integer', format: 'int64' },
      remark: { type: 'string' },
      styleHash: { type: 'string' },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'ThemeAddOrUpdateReqVO'
  },
  TimePeriod: {
    type: 'object',
    properties: { endTime: { type: 'string' }, startTime: { type: 'string' } },
    title: 'TimePeriod'
  },
  TimeRange: {
    type: 'object',
    properties: {
      ends: { type: 'integer', format: 'int64' },
      starts: { type: 'integer', format: 'int64' }
    },
    title: 'TimeRange'
  },
  TypeNameTuple: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      type: { type: 'integer', format: 'int32' }
    },
    title: 'TypeNameTuple'
  },
  UpdateLoopAppointmentVO: {
    type: 'object',
    properties: {
      allowConflict: { type: 'boolean' },
      booking: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          optional: { type: 'boolean' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      content: { type: 'string' },
      departmentIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      ends: { type: 'integer', format: 'int64' },
      fileHashs: { type: 'array', items: { type: 'string' } },
      frontSource: { type: 'integer', format: 'int32' },
      inviteeAdmins: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            optional: { type: 'boolean' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      invitees: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            optional: { type: 'boolean' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      isAllDay: { type: 'boolean' },
      isApptNotRelease: { type: 'boolean' },
      isChangeFile: { type: 'boolean' },
      isChangeInvitee: { type: 'boolean' },
      isChangePartialSpace: { type: 'boolean' },
      isChangeSpace: { type: 'boolean' },
      isHiddenBooker: { type: 'boolean' },
      isHiddenContent: { type: 'boolean' },
      isHiddenInviter: { type: 'boolean' },
      isHiddenOrganizer: { type: 'boolean' },
      isHiddenTitle: { type: 'boolean' },
      isSecurity: { type: 'boolean' },
      isSendEmail: { type: 'boolean' },
      isSingleToLoop: { type: 'boolean' },
      loopRule: {
        properties: {
          dayOfTheMonth: { type: 'integer', format: 'int32' },
          dayOfTheWeek: {
            type: 'array',
            items: { type: 'integer', format: 'int32' }
          },
          endDate: { type: 'integer', format: 'int64' },
          frequency: { type: 'integer', format: 'int32' },
          interval: { type: 'integer', format: 'int32' },
          loopEndType: { type: 'integer', format: 'int32' },
          loopLabel: { type: 'integer', format: 'int32' },
          loopMode: { type: 'integer', format: 'int32' },
          loopType: { type: 'integer', format: 'int32' },
          month: { type: 'integer', format: 'int32' },
          startDate: { type: 'integer', format: 'int64' },
          weekOfTheMonthIndex: { type: 'integer', format: 'int32' }
        }
      },
      organizer: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          optional: { type: 'boolean' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      platform: { type: 'integer', format: 'int32' },
      selectSpaceIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      spaceIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      starts: { type: 'integer', format: 'int64' },
      timeZone: { type: 'string' },
      title: { type: 'string' }
    },
    title: 'UpdateLoopAppointmentVO'
  },
  UpdateMessageDTO: {
    type: 'object',
    properties: {
      messageUserIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      }
    },
    title: 'UpdateMessageDTO'
  },
  UpdateNoStarteApptReqVo: {
    type: 'object',
    properties: {
      allowConflict: { type: 'boolean' },
      booking: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          optional: { type: 'boolean' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      content: { type: 'string' },
      departmentIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      ends: { type: 'integer', format: 'int64' },
      fileHashs: { type: 'array', items: { type: 'string' } },
      frontSource: { type: 'integer', format: 'int32' },
      inviteeAdmins: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            optional: { type: 'boolean' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      invitees: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            optional: { type: 'boolean' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      isAllDay: { type: 'boolean' },
      isApptNotRelease: { type: 'boolean' },
      isChangeFile: { type: 'boolean' },
      isChangeInvitee: { type: 'boolean' },
      isChangePartialSpace: { type: 'boolean' },
      isChangeSpace: { type: 'boolean' },
      isHiddenBooker: { type: 'boolean' },
      isHiddenContent: { type: 'boolean' },
      isHiddenInviter: { type: 'boolean' },
      isHiddenOrganizer: { type: 'boolean' },
      isHiddenTitle: { type: 'boolean' },
      isLoopToSingle: { type: 'boolean' },
      isSecurity: { type: 'boolean' },
      isSendEmail: { type: 'boolean' },
      loopRule: {
        properties: {
          dayOfTheMonth: { type: 'integer', format: 'int32' },
          dayOfTheWeek: {
            type: 'array',
            items: { type: 'integer', format: 'int32' }
          },
          endDate: { type: 'integer', format: 'int64' },
          frequency: { type: 'integer', format: 'int32' },
          interval: { type: 'integer', format: 'int32' },
          loopEndType: { type: 'integer', format: 'int32' },
          loopLabel: { type: 'integer', format: 'int32' },
          loopMode: { type: 'integer', format: 'int32' },
          loopType: { type: 'integer', format: 'int32' },
          month: { type: 'integer', format: 'int32' },
          startDate: { type: 'integer', format: 'int64' },
          weekOfTheMonthIndex: { type: 'integer', format: 'int32' }
        }
      },
      organizer: {
        properties: {
          email: { type: 'string' },
          enName: { type: 'string' },
          optional: { type: 'boolean' },
          userId: { type: 'integer', format: 'int64' },
          zhName: { type: 'string' }
        }
      },
      platform: { type: 'integer', format: 'int32' },
      selectSpaceIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      spaceIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      starts: { type: 'integer', format: 'int64' },
      timeZone: { type: 'string' },
      title: { type: 'string' }
    },
    title: 'UpdateNoStarteApptReqVo'
  },
  UpdateStartedApptReqVo: {
    type: 'object',
    properties: {
      content: { type: 'string' },
      departmentIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      ends: { type: 'integer', format: 'int64' },
      fileHashs: { type: 'array', items: { type: 'string' } },
      inviteeAdmins: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            optional: { type: 'boolean' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      invitees: {
        type: 'array',
        items: {
          properties: {
            email: { type: 'string' },
            enName: { type: 'string' },
            optional: { type: 'boolean' },
            userId: { type: 'integer', format: 'int64' },
            zhName: { type: 'string' }
          }
        }
      },
      isAllDay: { type: 'boolean' },
      isApptNotRelease: { type: 'boolean' },
      isChangeFile: { type: 'boolean' },
      isChangePartialSpace: { type: 'boolean' },
      isChangeSecurity: { type: 'boolean' },
      isChangeSpace: { type: 'boolean' },
      isHiddenBooker: { type: 'boolean' },
      isHiddenContent: { type: 'boolean' },
      isHiddenInviter: { type: 'boolean' },
      isHiddenOrganizer: { type: 'boolean' },
      isHiddenTitle: { type: 'boolean' },
      isSecurity: { type: 'boolean' },
      isSendEmail: { type: 'boolean' },
      selectSpaceIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      spaceIdList: {
        type: 'array',
        items: { type: 'integer', format: 'int64' }
      },
      starts: { type: 'integer', format: 'int64' }
    },
    title: 'UpdateStartedApptReqVo'
  },
  UserAddReqVO: {
    type: 'object',
    properties: {
      buildingId: { type: 'integer', format: 'int64' },
      deptIds: { type: 'array', items: { type: 'integer', format: 'int64' } },
      email: { type: 'string' },
      enName: { type: 'string' },
      enPosition: { type: 'string' },
      name: { type: 'string' },
      phoneNumber: { type: 'string' },
      position: { type: 'string' },
      remark: { type: 'string' },
      roleIds: { type: 'array', items: { type: 'integer', format: 'int64' } },
      stuffType: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' },
      zhPosition: { type: 'string' }
    },
    title: 'UserAddReqVO'
  },
  UserDetailResVO: {
    type: 'object',
    properties: {
      building: {
        properties: {
          enName: { type: 'string' },
          id: { type: 'integer', format: 'int64' },
          name: { type: 'string' },
          zhName: { type: 'string' }
        }
      },
      departments: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            id: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            zhName: { type: 'string' }
          }
        }
      },
      email: { type: 'string' },
      enName: { type: 'string' },
      enPosition: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      phoneNumber: { type: 'string' },
      position: { type: 'string' },
      remark: { type: 'string' },
      roles: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            hasPerm: { type: 'integer', format: 'int32' },
            id: { type: 'integer', format: 'int64' },
            type: { type: 'integer', format: 'int32' },
            zhName: { type: 'string' }
          }
        }
      },
      stuffType: { type: 'integer', format: 'int32' },
      userSource: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' },
      zhPosition: { type: 'string' }
    },
    title: 'UserDetailResVO'
  },
  UserInfoResVO: {
    type: 'object',
    properties: {
      deptEnName: { type: 'string' },
      deptZhName: { type: 'string' },
      email: { type: 'string' },
      enName: { type: 'string' },
      enPosition: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      locationEnName: { type: 'string' },
      locationZhName: { type: 'string' },
      name: { type: 'string' },
      position: { type: 'string' },
      remark: { type: 'string' },
      roleEnName: { type: 'string' },
      roleZhName: { type: 'string' },
      status: { type: 'integer', format: 'int32' },
      stuffType: { type: 'integer', format: 'int32' },
      userSource: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' },
      zhPosition: { type: 'string' }
    },
    title: 'UserInfoResVO'
  },
  UserInfoResVo: {
    type: 'object',
    properties: {
      depts: {
        type: 'array',
        items: {
          properties: {
            enName: { type: 'string' },
            name: { type: 'string' },
            zhName: { type: 'string' }
          }
        }
      },
      email: { type: 'string' },
      enName: { type: 'string' },
      id: { type: 'integer', format: 'int64' },
      name: { type: 'string' },
      type: { type: 'integer', format: 'int32' },
      zhName: { type: 'string' }
    },
    title: 'UserInfoResVo'
  },
  Version: {
    type: 'object',
    properties: {
      id: { type: 'integer', format: 'int64' },
      versionCode: { type: 'integer', format: 'int32' },
      versionName: { type: 'string' }
    },
    title: 'Version'
  }
};
