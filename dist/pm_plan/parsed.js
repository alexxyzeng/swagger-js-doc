/**
 * @tags pm-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm-plan/createUsingPOST_28
 * @summary 新增计划
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.maintId - 维保设置id
 * @param {string} params.body.planDate - 维保日期
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_28(params) {
  return API.post(`/pm/plan`, { ...params.body })
}

/**
 * @tags pm-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm-plan/deleteUsingDELETE_30
 * @summary 删除计划
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - 计划id
* @param {number} params.query.maintId - 设置id
* @param {string} params.query.planDate - 计划时间
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_30(params) {
  return API.delete(`/pm/plan`, { params: { ...params.query })
}

