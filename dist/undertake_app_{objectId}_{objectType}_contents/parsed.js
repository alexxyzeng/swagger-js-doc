/**
 * @tags undertake-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-app/findByObjectIdUsingGET
 * @summary 查验内容列表
 * @description 
 * @param {object} params
 * @param {number} params.objectId - path
* @param {string} params.objectType - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByObjectIdUsingGET(params) {
  return API.get(`/undertake/app/${params.objectId}/${params.objectType}/contents`, {})
}

