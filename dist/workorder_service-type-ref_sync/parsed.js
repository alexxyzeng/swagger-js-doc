/**
 * @tags workorder-service-type-ref
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type-ref/syncServiceTypeUsingPUT
 * @summary 同步服务类型
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[typeIdsItem]} params.body.typeIds - 同步的服务类型id，为空则全部删除
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function syncServiceTypeUsingPUT(params) {
  return API.put(`/workorder/service-type-ref/sync`, { ...params.body })
}

