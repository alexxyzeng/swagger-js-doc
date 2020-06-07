/**
 * @typedef {object} dataItem
 
 * @property {string} event 触发事件值 {创建=Create-1, 派工=Dispatch-2, 抢单=Scramble-3, 接单=Accept-4, 退单=Refund-5, 增派=AddExecutor-6, 暂停=Suspend-7, 继续=Continue-8, 待料=WaitMaterial-9, 来料=IncomingMaterial-10, 终止=Termination-11, 终止转单=TerminationTransfer-12, 完成=Complete-13, 验证=Check-14, 存档=Archive-15, 转单=Transfer-16, 抢单超时=ScrambleTimeout-17, 审批申请=Approve-18, 打印=Print-19}
 * @property {string} eventValue 事件值
 *
*/

/**
 * @typedef {object} getEventConfigUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-config
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-config/getEventConfigUsingGET
 * @summary 查询工单事件字典项
 * @description 
 * @param {object} params
 
 * @return {Promise<getEventConfigUsingGETResponse>}
*/
export function getEventConfigUsingGET() {
  return API.get(`/workorder/config/event`, {})
}

