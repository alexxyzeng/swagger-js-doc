/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-config/findByProductIdUsingGET
 * @summary 需求配置-根据项目
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByProductIdUsingGET(params) {
  return API.get(`/demand/config/by-product`, {})
}

/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-config/updateByProductUsingPUT
 * @summary 修改需求配置-根据项目
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.autoAffirm - undefined
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {undefined} params.body.noticeSet - undefined
 * @param {undefined} params.body.satisfactionSet - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateByProductUsingPUT(params) {
  return API.put(`/demand/config/by-product`, { ...params.body })
}

