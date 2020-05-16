/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/relationUsingGET
 * @summary 查询设备是否被预防性维护和巡检关联
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function relationUsingGET(params) {
  return API.get(`/facility/relation`, { params: { ...params.query })
}

