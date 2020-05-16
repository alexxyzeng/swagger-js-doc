/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/findUsingGET_40
 * @summary 巡检模板-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.name - 模板名称
* @param {string} params.query.type - 模板类型：1-清洁 2-安保 3-设备 4-机房 5-抄表 6-绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
* @param {string} params.query.description - 描述
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_40(params) {
  return API.get(`/inspect-template`, { params: { ...params.query })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/createUsingPOST_26
 * @summary 新增巡检模板
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.description - 描述
 * @param {string} params.body.name - 模板名称
 * @param {string} params.body.type - 类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_26(params) {
  return API.post(`/inspect-template`, { ...params.body })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/deleteUsingPUT_10
 * @summary 批量删除巡检模板
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
export function deleteUsingPUT_10(params) {
  return API.put(`/inspect-template`, { ...params.body })
}

