/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-building/updateRegionUsingPUT
 * @summary 更新片区
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateRegionUsingPUT(params) {
  return API.put(, { ...params.body })
}

