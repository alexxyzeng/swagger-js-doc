/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/updateAvatarInfoUsingPUT
 * @summary 修改用户头像信息
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {object} params.body - 请求体
 * @param {undefined} params.body.avatarUrl - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateAvatarInfoUsingPUT(params) {
  return API.put(`/employee/${params.userId}/avatar-info`, { ...params.body })
}

