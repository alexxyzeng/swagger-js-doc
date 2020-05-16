/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/findByLastUpdatedTimestampUsingGET_1
 * @summary 设备离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByLastUpdatedTimestampUsingGET_1(params) {
  return API.get(`/facility/download`, { params: { ...params.query })
}

