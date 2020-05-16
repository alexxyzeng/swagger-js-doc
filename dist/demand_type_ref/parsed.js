/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/findUsingGET_13
 * @summary 需求类型关联-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.lastUpdatedTimestamp - 取增量数据用
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.pathName - 需求类型全称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_13(params) {
  return API.get(`/demand/type/ref`, { params: { ...params.query })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_9
 * @summary 批量删除需求类型关联
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
export function deleteUsingDELETE_9(params) {
  return API.delete(`/demand/type/ref`, { ...params.body })
}

