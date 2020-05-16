/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-config/findByIdUsingGET_3
 * @summary 需求配置-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_3(params) {
  return API.get(`/demand/config/${id}`, {})
}

/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-config/updateUsingPUT_5
 * @summary 修改需求配置-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_5(params) {
  return API.put(`/demand/config/${id}`, { ...params.body })
}

