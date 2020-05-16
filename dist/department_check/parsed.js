/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-department/checkNameOrCodeUsingGET
 * @summary 检验部门名称或编码
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.departmentId - 部门id
* @param {number} params.query.parentId - 上级部门id
* @param {string} params.query.name - 名称
* @param {string} params.query.code - 编码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkNameOrCodeUsingGET(params) {
  return API.get(`/department/check`, { params: { ...params.query })
}

