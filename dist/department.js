/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-department/createUsingPOST_6
 * @summary 创建部门
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_6(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-department/updateUsingPUT_11
 * @summary 更新部门
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_11(params) {
  return API.put(, { ...params.body })
}

