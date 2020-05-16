/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findByIdUsingGET_19
 * @summary 巡检点位-工作任务-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_19(params) {
  return API.get(`/inspect-site/job/${params.id}`, {})
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/updateUsingPUT_27
 * @summary 修改巡检点位-工作任务-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.intro - 内容介绍
 * @param {string} params.body.job - 工作任务
 * @param {number} params.body.siteId - 点位ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_27(params) {
  return API.put(`/inspect-site/job/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/deleteUsingDELETE_23
 * @summary 删除巡检点位-工作任务
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_23(params) {
  return API.delete(`/inspect-site/job/${params.id}`, {})
}

