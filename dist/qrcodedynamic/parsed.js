/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamic/findUsingGET_50
 * @summary 活码表-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_50(params) {
  return API.get(`/qrcodedynamic`, { params: { ...params.query })
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamic/createUsingPOST_37
 * @summary 新增活码表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.nfcLabel - 活码NFC标签
 * @param {undefined} params.body.qrcodeUrl - undefined
 * @param {string} params.body.uniqueCode - 唯一码，一般用来生成NFC标签和二维码的
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_37(params) {
  return API.post(`/qrcodedynamic`, { ...params.body })
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamic/deleteUsingDELETE_41
 * @summary 批量删除活码表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_41(params) {
  return API.delete(`/qrcodedynamic`, { ...params.body })
}

