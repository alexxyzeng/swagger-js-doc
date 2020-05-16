/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/findUsingGET_56
 * @summary 消息模版-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_56(params) {
  return API.get(`/template`, { params: { ...params.query })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/createUsingPOST_42
 * @summary 新增消息模版
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.code - 消息模版编码
 * @param {[object Object]} params.body.content - undefined
 * @param {string} params.body.depict - 消息模版描述
 * @param {number} params.body.id - 唯一id
 * @param {[paramsItem]} params.body.params - 
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.sort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_42(params) {
  return API.post(`/template`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/deleteUsingDELETE_50
 * @summary 批量删除消息模版
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
export function deleteUsingDELETE_50(params) {
  return API.delete(`/template`, { ...params.body })
}

