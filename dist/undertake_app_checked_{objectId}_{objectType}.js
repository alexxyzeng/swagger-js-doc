/**
 * @tags undertake-app
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-app/checkedByObjectIdUsingPUT
 * @summary 对象完成查验
 * @description 
 * @param {object} params
 * @param {number} params.objectId - path
* @param {string} params.objectType - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkedByObjectIdUsingPUT(params) {
  return API.put(`/undertake/app/checked/${objectId}/${objectType}`, { ...params.body })
}

