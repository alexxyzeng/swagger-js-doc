/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findUsingGET_28
 * @summary 巡检点位-工作任务-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.id - ID
* @param {number} params.query.siteId - 点位ID
* @param {string} params.query.job - 工作任务
* @param {string} params.query.intro - 内容描述
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_28(params) {
  return API.get(`/inspect-site/job`, { params: { ...params.query })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/createUsingPOST_20
 * @summary 新增巡检点位-工作任务
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.intro - 内容介绍
 * @param {string} params.body.job - 工作任务
 * @param {number} params.body.siteId - 点位ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_20(params) {
  return API.post(`/inspect-site/job`, { ...params.body })
}

