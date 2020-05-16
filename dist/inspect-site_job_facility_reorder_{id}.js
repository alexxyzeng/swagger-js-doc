/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-site/facilityReorderUsingPUT
 * @summary 点位-设备调整顺序
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function facilityReorderUsingPUT(params) {
  return API.put(`/inspect-site/job/facility/reorder/${id}`, { ...params.body })
}

