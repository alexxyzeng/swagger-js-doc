/**
 * @tags base-log
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-log/updateLevelUsingGET
 * @summary 日志级别修改
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.level - level
* @param {string} params.query.packageName - packageName
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateLevelUsingGET(params) {
  return API.get(`/log/update-level`, { params: { ...params.query })
}

