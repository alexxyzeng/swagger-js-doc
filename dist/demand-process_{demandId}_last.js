/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/updateLastUsingPUT
 * @summary 修改需求验证未通过描述
 * @description 
 * @param {object} params
 * @param {number} params.demandId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateLastUsingPUT(params) {
  return API.put(`/demand-process/${demandId}/last`, { ...params.body })
}

