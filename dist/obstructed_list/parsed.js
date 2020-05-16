/**
 * @tags base-obstructed
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-obstructed/listUsingGET_1
 * @summary 查询报障人
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.name - name
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function listUsingGET_1(params) {
  return API.get(`/obstructed/list`, { params: { ...params.query })
}

