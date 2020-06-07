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
 * @typedef {object} findWorkerUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder/findWorkerUsingGET
 * @summary 查询未派工执行人
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @return {Promise<findWorkerUsingGETResponse>}
*/
export function findWorkerUsingGET(params) {
  return API.get(`/workorder/${params.workorderId}/worker`, {})
}

