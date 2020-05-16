/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/modifyUsingPUT
 * @summary 工单修改
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function modifyUsingPUT(params) {
  return API.put(`/workorder/${id}`, { ...params.body })
}

