/**
 * @tags undertake-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-template/checkNameUsingGET_1
 * @summary 承接查验模板名称唯一性校验, 名称唯一返回true
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.templateId - 模版id
* @param {string} params.query.name - 模版名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkNameUsingGET_1(params) {
  return API.get(`/undertake/template/check-name`, { params: { ...params.query })
}

