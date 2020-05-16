/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/updateUsingPUT_30
 * @summary 修改巡检任务-设备-部分
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
export function updateUsingPUT_30(params) {
  return API.put(`/inspect-task/facility/${params.id}`, { ...params.body })
}

