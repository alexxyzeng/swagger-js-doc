/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/syncDemandTypeUsingPUT
 * @summary 同步需求类型
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.projectId - 项目ID
 * @param {[typeRefsItem]} params.body.typeRefs - 需求类型应用列表
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function syncDemandTypeUsingPUT(params) {
  return API.put(`/demand/type/ref/sync`, { ...params.body })
}

