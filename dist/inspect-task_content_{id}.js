/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/findByIdUsingGET_21
 * @summary 巡检任务-内容-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_21(params) {
  return API.get(`/inspect-task/content/${id}`, {})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/updateUsingPUT_28
 * @summary 修改巡检任务-内容-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_28(params) {
  return API.put(`/inspect-task/content/${id}`, { ...params.body })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/deleteUsingDELETE_25
 * @summary 删除巡检任务-内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_25(params) {
  return API.delete(`/inspect-task/content/${id}`, {})
}

