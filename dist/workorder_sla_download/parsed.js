/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-sla/findByLastUpdatedTimestampUsingGET_4
 * @summary 流程设置离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByLastUpdatedTimestampUsingGET_4(params) {
  return API.get(`/workorder/sla/download`, { params: { ...params.query })
}

