/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-track/findByIdUsingGET_7
 * @summary 需求跟进记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_7(params) {
  return API.get(`/demand/track/${params.id}`, {})
}

/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-track/updateUsingPUT_7
 * @summary 修改需求跟进记录-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 跟进内容
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.remark - 备注
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_7(params) {
  return API.put(`/demand/track/${params.id}`, { ...params.body })
}

/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-track/deleteUsingDELETE_5
 * @summary 删除需求跟进记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_5(params) {
  return API.delete(`/demand/track/${params.id}`, {})
}

