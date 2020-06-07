/**
 * @typedef {object} setting
 * @property {string} isNfcClockIn 员工是否必须使用NFC打卡巡检 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isNfcCodeDone 完成巡检内容时必须扫码或NFC打卡 是否枚举{否=No-0, 是=Yes-1}
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {setting} setting 
 *
*/

/**
 * @typedef {object} findUsingGET_28Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_20Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_20Body
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {setting} setting 
 *
*/
/**
 * @tags inspect
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect/findUsingGET_28
 * @summary 巡检设置-默认
 * @description 
 * @param {object} params
 
 * @return {Promise<findUsingGET_28Response>}
*/
export function findUsingGET_28() {
  return API.get(`/inspect/setting`, {})
}

/**
 * @tags inspect
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect/createUsingPOST_20
 * @summary 新增巡检设置
 * @description 
 * @param {object} params
  * @param {createUsingPOST_20Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_20Response>}
*/
export function createUsingPOST_20(params) {
  return API.post(`/inspect/setting`, { ...params.body })
}

