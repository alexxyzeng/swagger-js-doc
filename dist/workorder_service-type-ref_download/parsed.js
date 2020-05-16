/**
 * @tags workorder-service-type-ref
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type-ref/findByLastUpdatedTimestampUsingGET_3
 * @summary 服务类型离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByLastUpdatedTimestampUsingGET_3(params) {
  return API.get(`/workorder/service-type-ref/download`, { params: { ...params.query })
}

