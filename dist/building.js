/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-building/createUsingPOST
 * @summary 新建房产
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST(params) {
  return API.post(, { ...params.body })
}

