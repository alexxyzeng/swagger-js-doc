/**
 * @typedef {object} data
 * @property {number} facilityTotal 设施设备总数
 * @property {number} inspectPlanTotal 巡检计划数
 * @property {number} maintTotal 维护保养计划数
 * @property {number} slaTotal 报修工作流数
 * @property {number} workerTotal 执行人员
 *
*/

/**
 * @typedef {object} indexStatisticsOfProjectUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags index
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/index/indexStatisticsOfProjectUsingGET
 * @summary 项目-首页统计接口
 * @description 
 * @param {object} params
 
 * @return {Promise<indexStatisticsOfProjectUsingGETResponse>}
*/
export function indexStatisticsOfProjectUsingGET() {
  return API.get(`/index/statistics/project`, {})
}

