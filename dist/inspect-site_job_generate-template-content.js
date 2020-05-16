/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-site/generateTemplateContentUsingPUT
 * @summary 生成模板内容
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function generateTemplateContentUsingPUT(params) {
  return API.put(, { ...params.body })
}

