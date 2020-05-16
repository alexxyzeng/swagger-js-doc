/**
 * @tags undertake-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-template/detailUsingGET_4
 * @summary 承接查验模板-详情
 * @description 
 * @param {object} params
 * @param {number} params.templateId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailUsingGET_4(params) {
  return API.get(`/undertake/template/${params.templateId}`, {})
}

/**
 * @tags undertake-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-template/updateUsingPUT_55
 * @summary 修改承接查验模板-部分
 * @description 
 * @param {object} params
 * @param {number} params.templateId - path
 * @param {object} params.body - 请求体
 * @param {[contentsItem]} params.body.contents - 查验内容
 * @param {string} params.body.name - 模板名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_55(params) {
  return API.put(`/undertake/template/${params.templateId}`, { ...params.body })
}

/**
 * @tags undertake-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-template/deleteUsingDELETE_55
 * @summary 删除承接查验模板
 * @description 
 * @param {object} params
 * @param {number} params.templateId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_55(params) {
  return API.delete(`/undertake/template/${params.templateId}`, {})
}

