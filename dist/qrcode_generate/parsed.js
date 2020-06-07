/**
 * @typedef {object} generateUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags qrcode
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcode/generateUsingGET
 * @summary 生成二维码
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.content - 内容
* @param {string} params.query.word - 文本
 * @return {Promise<generateUsingGETResponse>}
*/
export function generateUsingGET(params) {
  return API.get(`/qrcode/generate`, { params: { ...params.query })
}

