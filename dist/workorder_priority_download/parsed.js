/**
 * @tags workorder-priority
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-priority/findByLastUpdatedTimestampUsingGET_2
 * @summary 优先级离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByLastUpdatedTimestampUsingGET_2(params) {
  return API.get(`/workorder/priority/download`, { params: { ...params.query })
}

