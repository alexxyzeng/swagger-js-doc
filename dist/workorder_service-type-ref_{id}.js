/**
 * @tags workorder-service-type-ref
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-service-type-ref/deleteUsingDELETE_44
 * @summary 删除关联服务类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_44(params) {
  return API.delete(`/workorder/service-type-ref/${id}`, {})
}

