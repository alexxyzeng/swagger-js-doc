/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/findAllIdUsingPOST
 * @summary 全选巡检模板-内容
 * @description 
 * @param {object} params
 * @param {number} params.template-id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllIdUsingPOST(params) {
  return API.post(`/inspect-template/${params.template-id}/all-content`, {})
}

