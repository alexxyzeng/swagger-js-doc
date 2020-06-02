/**
 * @typedef {object} workorderStatisticsItem
 * @property {string} type 操作类型 {抢单=Scramble-1, 派工=Dispatch-2, 处理=Process-3, 审批=Approval-4, 待验证或存档=CheckArchive-5, 我的报单=MyReport-6, 待转单=Transfer-7, 待完成=Pending-8, 待验证=Check-9, 待存档=Archive-10}
 * @property {number} count 数量
 * @property {string} permission 用户是否有此操作权限，app首页使用 是否枚举{否=No-0, 是=Yes-1}
 *
*/

/**
 * @typedef {object} data
 * @property {[workorderStatisticsItem]} workorderStatistics
 *
*/

/**
 * @typedef {object} appIndexUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags app-index
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/app-index/appIndexUsingGET
 * @summary app首页查询
 * @description 
 * @param {object} params
 
 * @return {Promise<appIndexUsingGETResponse>}
*/
export function appIndexUsingGET() {
  return API.get(`/app/index`, {})
}

