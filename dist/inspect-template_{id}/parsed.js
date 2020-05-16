/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/findByIdUsingGET_29
 * @summary 巡检模板-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_29(params) {
  return API.get(`/inspect-template/${params.id}`, {})
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/updateUsingPUT_37
 * @summary 修改巡检模板-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.description - 描述
 * @param {string} params.body.name - 模板名称
 * @param {string} params.body.type - 类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_37(params) {
  return API.put(`/inspect-template/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/deleteUsingDELETE_27
 * @summary 删除巡检模板
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_27(params) {
  return API.delete(`/inspect-template/${params.id}`, {})
}

