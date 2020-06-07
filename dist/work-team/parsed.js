/**
 * @typedef {object} enum
 
 *
*/

/**
 * @typedef {object} childrenItem
 
 
 
 * @property {enum} enum 
 
 *
*/

/**
 * @typedef {object} contentItem
 
 * @property {[childrenItem]} children
 * @property {number} id 工作组ID
 * @property {number} parentId 上级id
 * @property {number} sort 排序
 * @property {string} supervisorNames 主管名字，逗号分隔
 * @property {number} tenantId 企业ID
 * @property {string} workTeamName 工作组名称
 *
*/

/**
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
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
 * @typedef {object} findUsingGET_68Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

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
 * @typedef {object} createUsingPOST_53Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_53Body
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
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/findUsingGET_68
 * @summary 工作组列表&搜索
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.workTeamName - 工作组名称
* @param {string} params.query.supervisorNames - 主管名称
 * @return {Promise<findUsingGET_68Response>}
*/
export function findUsingGET_68(params) {
  return API.get(`/work-team`, { params: { ...params.query })
}

/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/createUsingPOST_53
 * @summary 新增工作组
 * @description 
 * @param {object} params
  * @param {createUsingPOST_53Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_53Response>}
*/
export function createUsingPOST_53(params) {
  return API.post(`/work-team`, { ...params.body })
}

