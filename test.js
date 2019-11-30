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
  }
};
