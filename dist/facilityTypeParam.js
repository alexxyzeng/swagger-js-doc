/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-param/queryUsingGET_1
 * @summary 查询设施分类对应的所有参数
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function queryUsingGET_1(params) {
  return API.get(, { params: { params.idparams.idparams.id }})
}

/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-param/createUsingPOST_11
 * @summary 新增设施分类对应的参数
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_11(params) {
  return API.post(, { ...params.body })
}

