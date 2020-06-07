/**
 * @typedef {object} archiverItem
 
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/

/**
 * @typedef {object} dispatcherItem
 
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/

/**
 * @typedef {object} supervisorItem
 
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/

/**
 * @typedef {object} tracerItem
 
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/

/**
 * @typedef {object} verifierItem
 
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/

/**
 * @typedef {object} workerItem
 
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
 * @typedef {object} data
 * @property {[archiverItem]} archiver
 * @property {string} description 工作组描述
 * @property {[dispatcherItem]} dispatcher
 * @property {number} id 工作组ID
 * @property {string} name 工作组名称
 * @property {number} parentId 上级id
 * @property {number} projectId 项目ID
 * @property {number} sort 排序
 * @property {[supervisorItem]} supervisor
 * @property {number} tenantId 企业ID
 * @property {[tracerItem]} tracer
 * @property {[verifierItem]} verifier
 * @property {[workerItem]} worker
 *
*/

/**
 * @typedef {object} findUsingGET_69Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_60Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_60Body
 * @property {[archiverItem]} archiver
 * @property {string} description 工作组描述
 * @property {[dispatcherItem]} dispatcher
 * @property {string} name 工作组名称
 * @property {number} parentId 上级id
 * @property {number} sort 排序
 * @property {[supervisorItem]} supervisor
 * @property {[tracerItem]} tracer
 * @property {[verifierItem]} verifier
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_62Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/findUsingGET_69
 * @summary 工作组详情
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @return {Promise<findUsingGET_69Response>}
*/
export function findUsingGET_69(params) {
  return API.get(`/work-team/${params.workTeamId}`, {})
}

/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/updateUsingPUT_60
 * @summary 修改工作组
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @param {updateUsingPUT_60Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_60Response>}
*/
export function updateUsingPUT_60(params) {
  return API.put(`/work-team/${params.workTeamId}`, { ...params.body })
}

/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/deleteUsingDELETE_62
 * @summary 删除工作组
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @return {Promise<deleteUsingDELETE_62Response>}
*/
export function deleteUsingDELETE_62(params) {
  return API.delete(`/work-team/${params.workTeamId}`, {})
}

