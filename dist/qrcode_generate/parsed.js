/**
 * @tags qrcode
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcode/generateUsingGET
 * @summary 生成二维码
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.content - 内容
* @param {string} params.query.word - 文本
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function generateUsingGET(params) {
  return API.get(`/qrcode/generate`, { params: { ...params.query })
}

