/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-building/updateRegionUsingPUT
 * @summary 更新片区
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.regionCode - 片区编码
 * @param {string} params.body.regionName - 片区名
 * @param {number} params.body.regionSort - 片区排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateRegionUsingPUT(params) {
  return API.put(`/building/region`, { ...params.body })
}

