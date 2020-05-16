/**
 * @tags base-customer
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-customer/createUsingPOST_1
 * @summary 新增客户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[addressListItem]} params.body.addressList - 位置信息
 * @param {string} params.body.company - 公司
 * @param {string} params.body.customerName - 客户姓名
 * @param {string} params.body.customerTitle - 客户称谓
 * @param {string} params.body.department - 部门
 * @param {string} params.body.description - 描述
 * @param {string} params.body.email - 客户邮箱
 * @param {number} params.body.id - 客户id
 * @param {string} params.body.mobile - 客户手机号
 * @param {string} params.body.position - 职位
 * @param {number} params.body.projectId - 项目ID
 * @param {string} params.body.qq - QQ
 * @param {string} params.body.telephone - 客户电话
 * @param {string} params.body.wechat - 微信
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_1(params) {
  return API.post(`/customer`, { ...params.body })
}

/**
 * @tags base-customer
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-customer/updateUsingPUT_3
 * @summary 更新客户信息
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[addressListItem]} params.body.addressList - 位置信息
 * @param {string} params.body.company - 公司
 * @param {string} params.body.customerName - 客户姓名
 * @param {string} params.body.customerTitle - 客户称谓
 * @param {string} params.body.department - 部门
 * @param {string} params.body.description - 描述
 * @param {string} params.body.email - 客户邮箱
 * @param {number} params.body.id - 客户id
 * @param {string} params.body.mobile - 客户手机号
 * @param {string} params.body.position - 职位
 * @param {number} params.body.projectId - 项目ID
 * @param {string} params.body.qq - QQ
 * @param {string} params.body.telephone - 客户电话
 * @param {string} params.body.wechat - 微信
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_3(params) {
  return API.put(`/customer`, { ...params.body })
}

