/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findUsingGET_27
 * @summary 巡检点位-工作任务-内容-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.jobId - 工作任务ID
* @param {string} params.query.jobType - 任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
* @param {number} params.query.facilityId - 设备ID
* @param {string} params.query.model - 模式 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
* @param {string} params.query.runStatus - 运行状态 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
* @param {string} params.query.content - 巡检内容
* @param {string} params.query.templateName - 巡检模板名称
* @param {string} params.query.result - 结果
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_27(params) {
  return API.get(`/inspect-site/job/content`, { params: { ...params.query })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/deleteUsingPUT_6
 * @summary 批量删除巡检点位-工作任务-内容
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
export function deleteUsingPUT_6(params) {
  return API.put(`/inspect-site/job/content`, { ...params.body })
}

