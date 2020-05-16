/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/findWorkersUsingGET
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findWorkersUsingGET(params) {
  return API.get(`/work-team/${params.workTeamId}/worker`, { params: { ...params.query })
}

/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/createWorkersUsingPOST
 * @summary 新增工作组执行人
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {undefined} params.body.valueType - undefined
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createWorkersUsingPOST(params) {
  return API.post(`/work-team/${params.workTeamId}/worker`, { ...params.body })
}

