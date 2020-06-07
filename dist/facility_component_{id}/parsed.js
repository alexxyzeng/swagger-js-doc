/**
 * @typedef {object} data
 
 *
*/

/**
 * @typedef {object} updateUsingPUT_16Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_16Body
 * @property {string} componentBrand 组件品牌
 * @property {string} componentCode 组件编码
 * @property {string} componentLife 质保周期
 * @property {string} componentModel 组件型号
 * @property {string} componentName 组件名称
 * @property {string} componentUnit 组件单位
 * @property {string} enableTime 安装时间
 * @property {string} expireTime 质保到期
 * @property {number} facilityId 设备id
 * @property {number} typeComponentId 设备分类组件id
 *
*/
/**
 * @tags facility-component
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-component/updateUsingPUT_16
 * @summary 修改设备组件
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_16Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_16Response>}
*/
export function updateUsingPUT_16(params) {
  return API.put(`/facility/component/${params.id}`, { ...params.body })
}

