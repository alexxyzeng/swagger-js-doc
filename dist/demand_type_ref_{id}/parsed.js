/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/findByIdUsingGET_9
 * @summary 需求类型关联-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_9(params) {
  return API.get(`/demand/type/ref/${params.id}`, {})
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/updateUsingPUT_10
 * @summary 修改需求类型关联-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.isReqScope - 需求位置是否必填 是否枚举{否=No-0, 是=Yes-1}
 * @param {[reviewersItem]} params.body.reviewers - 需求追加处理审核人id列表
 * @param {undefined} params.body.spaceInfo - undefined
 * @param {[workTeamsItem]} params.body.workTeams - 需求处理工作组列表
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_10(params) {
  return API.put(`/demand/type/ref/${params.id}`, { ...params.body })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_8
 * @summary 删除需求类型关联
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_8(params) {
  return API.delete(`/demand/type/ref/${params.id}`, {})
}

