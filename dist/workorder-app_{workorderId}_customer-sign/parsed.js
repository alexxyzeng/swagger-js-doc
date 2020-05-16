/**
 * @tags workorder-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-app/customerSignUsingPUT
 * @summary 客户签字
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @param {[fileTypesItem]} params.body.fileTypes - 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function customerSignUsingPUT(params) {
  return API.put(`/workorder-app/${params.workorderId}/customer-sign`, { ...params.body })
}

