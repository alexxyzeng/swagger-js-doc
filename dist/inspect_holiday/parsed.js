/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect/findUsingGET_21
 * @summary 巡检节假日-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.name - 名称 
* @param {string} params.query.isWorkday - 是否工作日  是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_21(params) {
  return API.get(`/inspect/holiday`, { params: { ...params.query })
}

/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect/createUsingPOST_14
 * @summary 新增巡检节假日
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.endDate - 结束日期
 * @param {string} params.body.isWorkday - 是否工作日 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.name - 名称
 * @param {string} params.body.startDate - 开始日期
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_14(params) {
  return API.post(`/inspect/holiday`, { ...params.body })
}

/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect/deleteUsingPUT_1
 * @summary 批量删除巡检节假日
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
export function deleteUsingPUT_1(params) {
  return API.put(`/inspect/holiday`, { ...params.body })
}

