/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-component/queryUsingGET
 * @summary 查询设施分类对应的所有核心组件
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function queryUsingGET(params) {
  return API.get(, { params: { params.idparams.idparams.id }})
}

/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-component/createUsingPOST_9
 * @summary 新增核心组件
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_9(params) {
  return API.post(, { ...params.body })
}

