/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamic/findByIdUsingGET_38
 * @summary 活码表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_38(params) {
  return API.get(`/qrcodedynamic/${params.id}`, {})
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamic/updateUsingPUT_46
 * @summary 修改活码表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.nfcLabel - 活码NFC标签
 * @param {undefined} params.body.qrcodeUrl - undefined
 * @param {string} params.body.uniqueCode - 唯一码，一般用来生成NFC标签和二维码的
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_46(params) {
  return API.put(`/qrcodedynamic/${params.id}`, { ...params.body })
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamic/deleteUsingDELETE_42
 * @summary 删除活码表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_42(params) {
  return API.delete(`/qrcodedynamic/${params.id}`, {})
}

