/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inventory/updateUsingPUT_38
 * @summary 修改安全库存
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_38(params) {
  return API.put(`/inventory/${id}/safe-stock`, { ...params.body })
}

