/**
 * @tags app-index
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/app-index/offlineDataHasUpdateUsingGET
 * @summary 离线数据是否有更新
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.facilityLastUpdatedTimestamp - 设备信息最后一次更新时间
* @param {number} params.query.facilityTypeLastUpdatedTimestamp - 设备类型信息最后一次更新时间
* @param {number} params.query.spaceLastUpdatedTimestamp - 位置信息最后一次更新时间
* @param {number} params.query.departmentLastUpdatedTimestamp - 部门信息最后一次更新时间
* @param {number} params.query.woPriorityLastUpdatedTimestamp - 工单优先级信息最后一次更新时间
* @param {number} params.query.woSlaLastUpdatedTimestamp - 工单工作流程信息最后一次更新时间
* @param {number} params.query.serviceTypeLastUpdatedTimestamp - 服务类型信息最后一次更新时间
* @param {number} params.query.demandTypeLastUpdatedTimestamp - 需求类型信息最后一次更新时间
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function offlineDataHasUpdateUsingGET(params) {
  return API.get(`/app/index/check-offline-data-update`, { params: { ...params.query })
}

