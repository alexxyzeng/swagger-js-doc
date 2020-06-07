/**
 * @typedef {object} orgInfo
 * @property {string} groupId 
 * @property {string} groupName 
 * @property {string} isAvailable 
 * @property {string} isLeaf 
 * @property {number} orgId 
 * @property {number} orgOrd 
 * @property {number} parentOrgId 
 * @property {string} pathId 
 * @property {string} pathName 
 * @property {string} type 
 *
*/

/**
 * @typedef {object} dataItem
 * @property {string} type 
 * @property {string} gender 
 * @property {string} groupId 
 * @property {number} orgId 
 * @property {orgInfo} orgInfo 
 * @property {string} sapId 
 * @property {string} status 
 * @property {string} userId 
 * @property {string} userName 
 *
*/

/**
 * @typedef {object} ystUpdateUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/ystUpdateUsingPOST
 * @summary 根据一事通号同步相应一事通人员信息
 * @description 
 * @param {object} params
  * @param {[string]} params.body - 请求体 ystIds
 * @return {Promise<ystUpdateUsingPOSTResponse>}
*/
export function ystUpdateUsingPOST(params) {
  return API.post(`/employee/yst/sync`, { ...params.body })
}

