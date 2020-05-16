/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/findByIdUsingGET_16
 * @summary 巡检计划-点位-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_16(params) {
  return API.get(`/inspect-plan/site/${params.id}`, {})
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/updateUsingPUT_24
 * @summary 修改巡检计划-点位-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.jobId - 点位工作任务ID
 * @param {number} params.body.planId - 计划ID
 * @param {number} params.body.projectId - 项目id
 * @param {number} params.body.siteId - 点位ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_24(params) {
  return API.put(`/inspect-plan/site/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/deleteUsingDELETE_20
 * @summary 删除巡检计划-点位
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_20(params) {
  return API.delete(`/inspect-plan/site/${params.id}`, {})
}

