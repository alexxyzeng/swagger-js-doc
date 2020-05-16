/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/findByQrCodeUsingGET
 * @summary 库存-扫一扫物资详情
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.qrcode - 二维码字符串
* @param {number} params.query.warehouseId - 仓库ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByQrCodeUsingGET(params) {
  return API.get(`/inventory/qrcode`, { params: { ...params.query })
}

