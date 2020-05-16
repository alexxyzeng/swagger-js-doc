/**
 * @tags base-org-position
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-position/createUsingPOST_33
 * @summary 创建岗位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_33(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags base-org-position
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-position/updateUsingPUT_43
 * @summary 更新岗位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_43(params) {
  return API.put(, { ...params.body })
}

