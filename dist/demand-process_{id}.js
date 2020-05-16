/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/findByIdUsingGET_6
 * @summary 需求处理记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_6(params) {
  return API.get(`/demand-process/${id}`, {})
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/updateUsingPUT_6
 * @summary 修改需求处理记录-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_6(params) {
  return API.put(`/demand-process/${id}`, { ...params.body })
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/deleteUsingDELETE_3
 * @summary 删除需求处理记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_3(params) {
  return API.delete(`/demand-process/${id}`, {})
}

