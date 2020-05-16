/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/addExecutorUsingPUT_1
 * @summary 增派
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.execEmployeeId - 执行员工id
 * @param {string} params.body.execEmployeeName - 执行人名称
 * @param {string} params.body.isCharged - 是否负责人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function addExecutorUsingPUT_1(params) {
  return API.put(`/workorder/${params.id}/addExecutor`, { ...params.body })
}

