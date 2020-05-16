/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/work-team/findUsingGET_64
 * @summary 工作组列表&搜索
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_64(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/work-team/createUsingPOST_49
 * @summary 新增工作组
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_49(params) {
  return API.post(, { ...params.body })
}

