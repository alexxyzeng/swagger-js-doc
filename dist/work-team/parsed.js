/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/findUsingGET_64
 * @summary 工作组列表&搜索
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.workTeamName - 工作组名称
* @param {string} params.query.supervisorNames - 主管名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_64(params) {
  return API.get(`/work-team`, { params: { ...params.query })
}

/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/createUsingPOST_49
 * @summary 新增工作组
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[archiverItem]} params.body.archiver - 存档
 * @param {string} params.body.description - 工作组描述
 * @param {[dispatcherItem]} params.body.dispatcher - 排程派工
 * @param {string} params.body.name - 工作组名称
 * @param {number} params.body.parentId - 上级id
 * @param {number} params.body.sort - 排序
 * @param {[supervisorItem]} params.body.supervisor - 主管
 * @param {[tracerItem]} params.body.tracer - 追踪
 * @param {[verifierItem]} params.body.verifier - 验证
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_49(params) {
  return API.post(`/work-team`, { ...params.body })
}

