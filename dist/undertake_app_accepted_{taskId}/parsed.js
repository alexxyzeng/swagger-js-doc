/**
 * @tags undertake-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-app/acceptedByTaskIdUsingPUT
 * @summary 对象完成验收
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @param {object} params.body - 请求体
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.remark - 备注
 * @param {undefined} params.body.sign - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function acceptedByTaskIdUsingPUT(params) {
  return API.put(`/undertake/app/accepted/${params.taskId}`, { ...params.body })
}

