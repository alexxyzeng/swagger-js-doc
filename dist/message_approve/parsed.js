/**
 * @typedef {object} data
 * @property {string} annex 附件
 * @property {number} bizId 业务ID
 * @property {string} bizTable 业务相关表名
 * @property {string} content 消息内容
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} source 消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {number} templateId 模版id
 * @property {string} title 消息标题
 * @property {string} type 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/

/**
 * @typedef {object} createUsingPOST_33Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} messageSendsItem
 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRead 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} messageId 消息id
 * @property {number} projectId 项目ID
 * @property {number} receiver 接收人ID
 * @property {number} sendRetry 发送次数
 * @property {string} sendStatus 发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}
 * @property {string} sendTime 发送时间
 * @property {number} sender 发送人ID
 *
*/

/**
 * @typedef {object} params
 
 *
*/

/**
 * @typedef {object} createUsingPOST_33Body
 * @property {string} annex 附件
 * @property {number} bizId 业务ID
 * @property {string} bizTable 业务相关表名
 * @property {string} content 消息内容
 * @property {string} createTime 
 * @property {number} creator 
 * @property {boolean} delete 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {number} id 
 * @property {[messageSendsItem]} messageSends
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {params} params 
 * @property {number} projectId 项目ID
 * @property {string} source 消息来源：1-需求 2-工单 3-预防性维护 4-巡检 5-库存 6-cmb员工服务平台 7-审批流 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {string} templateCode 模版编码 {WORKORDER_SCHEDULE_WORKER=0, WORKORDER_CREATE=1, WORKORDER_APPROVAL_APPLY=2, WORKORDER_APPROVAL_PASS=3, WORKORDER_APPROVAL_DENY=4, WORKORDER_VERIFY_PASS=5, WORKORDER_VERIFY_DENY=6, WORKORDER_SECKILL_SUCCESS=7, WORKORDER_STOP_ALL=8, WORKORDER_AGAIN_SCHEDULE_WORKER=9, WORKORDER_TERMINAL=10, WORKORDER_FINISH=11, WORKORDER_EVENT_UPGRADE=12, PM_APPROVAL_APPLY=13, PM_JOB_REMIND=14, PM_INCOMPLETE=15, PM_UNRESPONSIVE=16, INSPECT_START=17, INSPECT_INCOMPLETE=18, INSPECT_EXCEPTION=19, DEMAND_CREATE=20, DEMAND_PENDING_CHECK=21, DEMAND_PENDING_DISPOSE=22, DEMAND_CONFIRM_FAIL=23, DEMAND_ADDITIONAL_CHECK=24, DEMAND_ADDITIONAL_PASS=25, DEMAND_ADDITIONAL_FAIL=26, DEMAND_COMMENT=27, DEMAND_CMB_CREATE=28, DEMAND_CMB_CHECK_PASS=29, DEMAND_CMB_CHECK_FAIL=30, DEMAND_CMB_CREATE_WORKORDER=31, DEMAND_CMB_WORKORDER_RECEIVE=32, DEMAND_CMB_TRACK=33, DEMAND_CMB_COMPLETE=34, DEMAND_CMB_AUTO_AFFIRM=35, DEMAND_CMB_ADDITIONAL_PASS=36, DEMAND_CMB_OBSOLETE=37, APPROVE_CREATE=38, APPROVE_PENDING_APPROVAL=39, APPROVE_MISS_APPROVER=40, APPROVE_DELAY_APPROVAL=41, APPROVE_GOBACK_APPROVAL=42, APPROVE_FINISH_APPROVAL=43, APPROVE_CC_APPROVAL=44, APPROVE_PENDING_APPROVAL_EMAIL=45, APPROVE_CREATE_EMAIL=46, APPROVE_DELAY_APPROVAL_EMAIL=47, APPROVE_GOBACK_APPROVAL_EMAIL=48, APPROVE_FINISH_APPROVAL_EMAIL=49, APPROVE_CC_APPROVAL_EMAIL=50}
 * @property {number} tenantId 
 * @property {string} title 消息标题
 * @property {string} type 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {number} version 
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/createUsingPOST_33
 * @summary 新增审批流消息
 * @description 
 * @param {object} params
  * @param {createUsingPOST_33Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_33Response>}
*/
export function createUsingPOST_33(params) {
  return API.post(`/message/approve`, { ...params.body })
}

