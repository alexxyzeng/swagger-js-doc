/**
 * @typedef {object} statusSummaryItem
 
 * @property {number} num 状态对应的数量
 * @property {string} status 设备状态 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
 *
*/

/**
 * @typedef {object} data
 * @property {[statusSummaryItem]} statusSummary
 * @property {number} totalFacNum 设备总数
 * @property {number} totalFacTypeNum 设备分类总数
 * @property {number} totalPmNum 保养计划数
 *
*/

/**
 * @typedef {object} overviewUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility/overviewUsingGET
 * @summary 设备资产概览
 * @description 
 * @param {object} params
 
 * @return {Promise<overviewUsingGETResponse>}
*/
export function overviewUsingGET() {
  return API.get(`/facility/overview`, {})
}

