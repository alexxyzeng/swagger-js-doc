/**
 * @typedef {object} dataItem
 * @property {string} type 操作类型 {抢单=Scramble-1, 派工=Dispatch-2, 处理=Process-3, 审批=Approval-4, 待验证或存档=CheckArchive-5, 我的报单=MyReport-6, 待转单=Transfer-7, 待完成=Pending-8, 待验证=Check-9, 待存档=Archive-10}
 * @property {number} count 数量
 * @property {string} permission 用户是否有此操作权限，app首页使用 是否枚举{否=No-0, 是=Yes-1}
 *
*/

/**
 * @typedef {object} woStatisticsUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-pm
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-pm/woStatisticsUsingGET
 * @summary PM工单待处理数量统计
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[string]} params.query.types - types
 * @return {Promise<woStatisticsUsingGETResponse>}
*/
export function woStatisticsUsingGET(params) {
  return API.get(`/workorder/pm/statistics`, { params: { ...params.query })
}

