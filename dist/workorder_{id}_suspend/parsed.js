/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/suspendUsingPUT
 * @summary 暂停
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.desc - 暂停描述
 * @param {number} params.body.execEmployeeId - 工单执行人ID
 * @param {string} params.body.execEmployeeName - 工单执行人名称
 * @param {string} params.body.isAllSuspend - 是否全部暂停 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isContinue - 是否继续 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.woExecEmployeeId - 工单执行人主键ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function suspendUsingPUT(params) {
  return API.put(`/workorder/${params.id}/suspend`, { ...params.body })
}

