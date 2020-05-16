/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findUsingGET_29
 * @summary 巡检点位-工作任务-模板-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.jobId - 点位工作任务ID
* @param {[number]} params.query.facilityIds - 点位工作任务设备ID
* @param {string} params.query.jobType - 点位工作类型1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
* @param {string} params.query.name - 模板名称
* @param {string} params.query.type - 模板类型：1-清洁 2-安保 3-设备 4-机房 5-抄表 6-绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
* @param {string} params.query.description - 模版描述
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_29(params) {
  return API.get(`/inspect-site/job/template`, { params: { ...params.query })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/createUsingPOST_22
 * @summary 新增巡检点位-工作任务-模板
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[facilityIdsItem]} params.body.facilityIds - 设备ID
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.jobId - 工作任务ID
 * @param {string} params.body.jobType - 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @param {number} params.body.projectId - 项目id
 * @param {[templateIdsItem]} params.body.templateIds - 模块ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_22(params) {
  return API.post(`/inspect-site/job/template`, { ...params.body })
}

