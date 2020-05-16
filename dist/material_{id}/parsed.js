/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/findByIdUsingGET_32
 * @summary 库存物资-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.warehouseId - 仓库ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_32(params) {
  return API.get(`/material/${params.id}`, { params: { ...params.query })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/updateUsingPUT_40
 * @summary 修改库存物资-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.brand - 物资品牌
 * @param {string} params.body.code - 物资编码
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.model - 物资型号
 * @param {string} params.body.name - 物资名称
 * @param {number} params.body.price - 核定价格
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.safeStock - 安全库存
 * @param {string} params.body.unit - 物资单位
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_40(params) {
  return API.put(`/material/${params.id}`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/deleteUsingDELETE_31
 * @summary 删除库存物资
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_31(params) {
  return API.delete(`/material/${params.id}`, {})
}

