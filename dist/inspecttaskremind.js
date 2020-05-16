/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/findUsingGET_36
 * @summary 巡检任务-提醒-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_36(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/createUsingPOST_24
 * @summary 新增巡检任务-提醒
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_24(params) {
  return API.post(, { ...params.body })
}

