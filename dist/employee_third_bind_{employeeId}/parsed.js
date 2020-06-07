/**
 * @typedef {object} thirdAccountBindUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} thirdAccountBindUsingPOSTBody
 * @property {number} appId 应用ID，做数据隔离用
 * @property {number} bizId 业务ID，做数据隔离用
 * @property {string} code 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @property {string} config 第三方信息
 * @property {string} displayname 中文描述 钉钉 微信 一事通
 * @property {number} id 由程序分配的唯一ID
 * @property {number} status 
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/thirdAccountBindUsingPOST
 * @summary 绑定第三方账号
 * @description 
 * @param {object} params
 * @param {number} params.employeeId - path
 * @param {thirdAccountBindUsingPOSTBody} params.body - 请求体 undefined
 * @return {Promise<thirdAccountBindUsingPOSTResponse>}
*/
export function thirdAccountBindUsingPOST(params) {
  return API.post(`/employee/third/bind/${params.employeeId}`, { ...params.body })
}

