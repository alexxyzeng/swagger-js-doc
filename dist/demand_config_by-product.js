/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-config/findByProductIdUsingGET
 * @summary 需求配置-根据项目
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByProductIdUsingGET(params) {
  return API.get(, {})
}

/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-config/updateByProductUsingPUT
 * @summary 修改需求配置-根据项目
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateByProductUsingPUT(params) {
  return API.put(, { ...params.body })
}

