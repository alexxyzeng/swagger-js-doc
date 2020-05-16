/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/createUsingPOST_21
 * @summary 新增巡检点位-工作任务-设备
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.facilityId - 设备ID
 * @param {string} params.body.facilityStatus - 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.sort - 顺序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_21(params) {
  return API.post(`/inspect-site/job/facility`, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/deleteUsingPUT_7
 * @summary 批量删除巡检点位-工作任务-设备
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_7(params) {
  return API.put(`/inspect-site/job/facility`, { ...params.body })
}

