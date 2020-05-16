/**
 * @tags base-dict
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-dict/findUsingGET
 * @summary 公共字典查询
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.dictType - dictType
* @param {string} params.query.dictText - dictText
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET(params) {
  return API.get(`/comDict`, { params: { ...params.query })
}

