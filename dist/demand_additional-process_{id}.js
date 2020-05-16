/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/findByIdUsingGET_2
 * @summary 需求追加处理记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_2(params) {
  return API.get(`/demand/additional-process/${id}`, {})
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/updateUsingPUT_4
 * @summary 审核需求追加处理记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_4(params) {
  return API.put(`/demand/additional-process/${id}`, { ...params.body })
}

