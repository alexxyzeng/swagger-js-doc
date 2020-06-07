/**
 * @typedef {object} batchEditUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} partitionsItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} propertyPointsItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} grantPartition
 * @property {[partitionsItem]} partitions
 * @property {[propertyPointsItem]} propertyPoints
 *
*/

/**
 * @typedef {object} projectGroupsItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} projectsItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} grantProject
 * @property {[projectGroupsItem]} projectGroups
 * @property {[projectsItem]} projects
 *
*/

/**
 * @typedef {object} batchEditUsingPUTBody
 * @property {string} accountActivationStatus 账号状态 {失效=Failure-0, 激活=Activate-1}
 * @property {number} emLevel 职级，来源于字典表的dictValue字段
 * @property {string} emType 用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}
 * @property {string} gender 性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}
 * @property {grantPartition} grantPartition 
 * @property {grantProject} grantProject 
 * @property {number} orgDepartmentId 部门ID
 * @property {[number]} roleIds
 * @property {[number]} userIds
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/batchEditUsingPUT
 * @summary 批量编辑用户
 * @description 
 * @param {object} params
  * @param {batchEditUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<batchEditUsingPUTResponse>}
*/
export function batchEditUsingPUT(params) {
  return API.put(`/employee/batch-edit`, { ...params.body })
}

