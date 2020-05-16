/**
 * @tags base-project-group
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-project-group/searchUsingGET_4
 * @summary 项目组列表&搜索
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchUsingGET_4(params) {
  return API.get(, { params: { params.idparams.idparams.id }}, { ...params.body })
}

/**
 * @tags base-project-group
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-project-group/createUsingPOST_35
 * @summary 新增项目组
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_35(params) {
  return API.post(, { ...params.body })
}

