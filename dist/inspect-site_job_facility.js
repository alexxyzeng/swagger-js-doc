/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-site/createUsingPOST_21
 * @summary 新增巡检点位-工作任务-设备
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_21(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-site/deleteUsingPUT_7
 * @summary 批量删除巡检点位-工作任务-设备
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_7(params) {
  return API.put(, { ...params.body })
}

