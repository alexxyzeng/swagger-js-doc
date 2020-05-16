/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect/findUsingGET_25
 * @summary 巡检设置-默认
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_25(params) {
  return API.get(, {})
}

/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect/createUsingPOST_18
 * @summary 新增巡检设置
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_18(params) {
  return API.post(, { ...params.body })
}

