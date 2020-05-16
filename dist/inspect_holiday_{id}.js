/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect/findByIdUsingGET_13
 * @summary 巡检节假日-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_13(params) {
  return API.get(`/inspect/holiday/${id}`, {})
}

/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect/updateUsingPUT_21
 * @summary 修改巡检节假日-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_21(params) {
  return API.put(`/inspect/holiday/${id}`, { ...params.body })
}

/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect/deleteUsingDELETE_17
 * @summary 删除巡检节假日
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_17(params) {
  return API.delete(`/inspect/holiday/${id}`, {})
}

