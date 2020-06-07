/**
 * @typedef {object} dataItem
 
 * @property {string} emNo 员工编号
 * @property {number} employeeId 成员ID
 * @property {string} employeeName 成员姓名
 * @property {number} id 工作组成员ID
 * @property {string} orgDepartmentName 部门名
 * @property {string} phone 手机号
 * @property {number} processWorkorderCount 处理中工单数量
 * @property {string} skills 技能
 * @property {number} sort 工作组中的排序号
 * @property {string} teamRole 团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}
 * @property {number} workTeamId 工作组ID
 * @property {string} workTeamName 工作组名称
 *
*/

/**
 * @typedef {object} findWorkersUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createWorkersUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} enum
 
 *
*/

/**
 * @typedef {object} createWorkersUsingPOSTBodyItem
 
 
 
 * @property {enum} enum 
 
 *
*/
/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/findWorkersUsingGET
 * @summary 工作组执行人列表&搜索
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
* @param {object} params.query - 请求查询参数
* @param {string} params.query.teamRole - 团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}
* @param {string} params.query.employeeName - 成员姓名
* @param {string} params.query.emNo - 员工编号
* @param {string} params.query.phone - 手机号
* @param {string} params.query.orgDepartmentName - 部门名
* @param {string} params.query.skills - 技能
* @param {number} params.query.employeeId - 员工id
* @param {string} params.query.isProcessWorkorderCount - 是否查询处理中工单数量 是否枚举{否=No-0, 是=Yes-1}
* @param {[string]} params.query.teamRoles - 团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}
* @param {[string]} params.query.pageSort - 排序
 * @return {Promise<findWorkersUsingGETResponse>}
*/
export function findWorkersUsingGET(params) {
  return API.get(`/work-team/${params.workTeamId}/worker`, { params: { ...params.query })
}

/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/createWorkersUsingPOST
 * @summary 新增工作组执行人
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @param {[createWorkersUsingPOSTBodyItem]} params.body - 请求体 workers
 * @return {Promise<createWorkersUsingPOSTResponse>}
*/
export function createWorkersUsingPOST(params) {
  return API.post(`/work-team/${params.workTeamId}/worker`, { ...params.body })
}

