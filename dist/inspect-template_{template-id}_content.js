/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/createUsingPOST_25
 * @summary 新增巡检模板-内容
 * @description 
 * @param {object} params
 * @param {number} params.template-id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_25(params) {
  return API.post(`/inspect-template/${template-id}/content`, { ...params.body })
}

