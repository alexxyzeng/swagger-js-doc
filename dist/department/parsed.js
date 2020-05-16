/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-department/createUsingPOST_6
 * @summary 创建部门
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.code - 编码
 * @param {string} params.body.description - 描述
 * @param {number} params.body.id - 部门id
 * @param {number} params.body.level - 层级
 * @param {string} params.body.name - 部门名称
 * @param {string} params.body.parentId - 父级部门id
 * @param {string} params.body.pathName - 层级名称
 * @param {number} params.body.sort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_6(params) {
  return API.post(`/department`, { ...params.body })
}

/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-department/updateUsingPUT_11
 * @summary 更新部门
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.code - 编码
 * @param {string} params.body.description - 描述
 * @param {number} params.body.id - 部门id
 * @param {number} params.body.level - 层级
 * @param {string} params.body.name - 部门名称
 * @param {string} params.body.parentId - 父级部门id
 * @param {string} params.body.pathName - 层级名称
 * @param {number} params.body.sort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_11(params) {
  return API.put(`/department`, { ...params.body })
}

