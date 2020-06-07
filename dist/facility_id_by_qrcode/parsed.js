/**
 * @typedef {object} findIdByQrcodeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility/findIdByQrcodeUsingGET
 * @summary 扫描设备码获取设备ID
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.qrcode - 二维码字符串
 * @return {Promise<findIdByQrcodeUsingGETResponse>}
*/
export function findIdByQrcodeUsingGET(params) {
  return API.get(`/facility/id_by_qrcode`, { params: { ...params.query })
}

