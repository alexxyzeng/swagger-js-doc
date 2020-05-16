/**
 * @tags base-customer
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-customer/createUsingPOST_1
 * @summary 新增客户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_1(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags base-customer
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-customer/updateUsingPUT_3
 * @summary 更新客户信息
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_3(params) {
  return API.put(, { ...params.body })
}

