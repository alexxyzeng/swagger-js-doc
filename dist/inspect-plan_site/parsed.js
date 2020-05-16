/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/findUsingGET_24
 * @summary 巡检计划-点位-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_24(params) {
  return API.get(`/inspect-plan/site`, { params: { ...params.query })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/createUsingPOST_17
 * @summary 新增巡检计划-点位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.jobId - 点位工作任务ID
 * @param {number} params.body.planId - 计划ID
 * @param {number} params.body.projectId - 项目id
 * @param {number} params.body.siteId - 点位ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_17(params) {
  return API.post(`/inspect-plan/site`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/deleteUsingPUT_4
 * @summary 批量删除巡检计划-点位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_4(params) {
  return API.put(`/inspect-plan/site`, { ...params.body })
}

