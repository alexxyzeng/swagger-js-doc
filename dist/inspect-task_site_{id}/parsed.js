/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findByIdUsingGET_26
 * @summary 巡检任务-点位-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_26(params) {
  return API.get(`/inspect-task/site/${params.id}`, {})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/updateUsingPUT_34
 * @summary 修改巡检任务-点位-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.mark - 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @param {string} params.body.name - 名称
 * @param {[objectsItem]} params.body.objects - 巡检任务-点位-对象
 * @param {number} params.body.planId - 巡检计划ID
 * @param {number} params.body.projectId - 项目id
 * @param {number} params.body.siteId - 点位ID
 * @param {number} params.body.spBuildingId - 大楼ID
 * @param {string} params.body.spBuildingName - 大楼名称
 * @param {number} params.body.spFloorId - 楼层ID
 * @param {string} params.body.spFloorName - 楼层名称
 * @param {number} params.body.spSpaceId - 空间ID
 * @param {string} params.body.spSpaceName - 空间名称
 * @param {string} params.body.status - 状态：1-未检 2-已检 {未完成=Unfinished-1, 已完成=Complete-2}
 * @param {number} params.body.taskId - 任务ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_34(params) {
  return API.put(`/inspect-task/site/${params.id}`, { ...params.body })
}

