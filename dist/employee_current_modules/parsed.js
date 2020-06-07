/**
 * @typedef {object} dataItem
 
 * @property {boolean} disabled 是否可用：true 可用，false、不可用
 * @property {number} useType 使用类型：1、管理中心，2、资管pc，3、物管pc，4、物管app，5、白名单
 *
*/

/**
 * @typedef {object} getCurrentModulesUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/getCurrentModulesUsingGET
 * @summary 当前用户所拥有的的模块权限：管理中心、资产管理、物业管理
 * @description 
 * @param {object} params
 
 * @return {Promise<getCurrentModulesUsingGETResponse>}
*/
export function getCurrentModulesUsingGET() {
  return API.get(`/employee/current/modules`, {})
}

