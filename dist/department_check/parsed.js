/**
 * @typedef {object} checkNameOrCodeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/checkNameOrCodeUsingGET
 * @summary 检验部门名称或编码
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.departmentId - 部门id
* @param {number} params.query.parentId - 上级部门id
* @param {string} params.query.name - 名称
* @param {string} params.query.code - 编码
 * @return {Promise<checkNameOrCodeUsingGETResponse>}
*/
export function checkNameOrCodeUsingGET(params) {
  return API.get(`/department/check`, { params: { ...params.query })
}

