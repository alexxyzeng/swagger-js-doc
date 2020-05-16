/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/createFacilityUsingPOST
 * @summary 新增巡检点位-工作任务-设备(单个)
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.facilityId - 设备ID
 * @param {string} params.body.facilityStatus - 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.sort - 顺序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createFacilityUsingPOST(params) {
  return API.post(`/inspect-site/job/${params.id}/facility`, { ...params.body })
}

