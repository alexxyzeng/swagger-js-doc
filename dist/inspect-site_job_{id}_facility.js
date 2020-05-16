/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-site/createFacilityUsingPOST
 * @summary 新增巡检点位-工作任务-设备(单个)
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createFacilityUsingPOST(params) {
  return API.post(`/inspect-site/job/${id}/facility`, { ...params.body })
}

