/**
 * @tags undertake-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-template/findUsingGET_61
 * @summary 承接查验模板-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - 模版id
* @param {string} params.query.name - 模版名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_61(params) {
  return API.get(`/undertake/template`, { params: { ...params.query })
}

/**
 * @tags undertake-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-template/createUsingPOST_46
 * @summary 新增承接查验模板
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[contentsItem]} params.body.contents - 查验内容
 * @param {string} params.body.name - 模板名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_46(params) {
  return API.post(`/undertake/template`, { ...params.body })
}

