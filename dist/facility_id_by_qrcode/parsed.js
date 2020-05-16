/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/findIdByQrcodeUsingGET
 * @summary 扫描设备码获取设备ID
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.qrcode - 二维码字符串
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findIdByQrcodeUsingGET(params) {
  return API.get(`/facility/id_by_qrcode`, { params: { ...params.query })
}

