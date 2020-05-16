var example = {
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
};
