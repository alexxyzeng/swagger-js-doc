/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/thirdparty-system-config-feign/findByIdUsingGET_43
 * @summary 第三方账户-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_43(params) {
  return API.get(`/thirdpartysystemconfig/${params.id}`, {})
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/thirdparty-system-config-feign/updateUsingPUT_53
 * @summary 修改第三方账户-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.appId - 应用ID，做数据隔离用
 * @param {number} params.body.bizId - 业务ID，做数据隔离用
 * @param {string} params.body.code - 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @param {string} params.body.config - 第三方信息
 * @param {string} params.body.displayname - 中文描述 钉钉 微信 一事通
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {number} params.body.status - 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_53(params) {
  return API.put(`/thirdpartysystemconfig/${params.id}`, { ...params.body })
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/thirdparty-system-config-feign/deleteUsingDELETE_53
 * @summary 删除第三方账户
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_53(params) {
  return API.delete(`/thirdpartysystemconfig/${params.id}`, {})
}

