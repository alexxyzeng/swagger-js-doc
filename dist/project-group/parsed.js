/**
 * @tags base-project-group
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project-group/searchUsingGET_4
 * @summary 项目组列表&搜索
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchUsingGET_4(params) {
  return API.get(`/project-group`, { params: { ...params.query }, { ...params.body })
}

/**
 * @tags base-project-group
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project-group/createUsingPOST_35
 * @summary 新增项目组
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.description - 项目组描述
 * @param {string} params.body.projectGroupName - 项目组名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_35(params) {
  return API.post(`/project-group`, { ...params.body })
}

