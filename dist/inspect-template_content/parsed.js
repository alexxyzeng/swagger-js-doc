/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/findUsingGET_39
 * @summary 巡检模板-内容-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.templateId - 模板ID
* @param {string} params.query.content - 内容
* @param {string} params.query.model - 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
* @param {string} params.query.type - 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
* @param {string} params.query.runStatus - 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
* @param {string} params.query.defaultVal - 默认值
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_39(params) {
  return API.get(`/inspect-template/content`, { params: { ...params.query })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/deleteUsingPUT_9
 * @summary 批量删除巡检模板-内容
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
export function deleteUsingPUT_9(params) {
  return API.put(`/inspect-template/content`, { ...params.body })
}

