/**
 * @typedef {object} data
 * @property {boolean} demandTypeNeedUpdate 需求类型信息是否有更新
 * @property {boolean} departmentNeedUpdate 部门信息是否有更新
 * @property {boolean} facilityNeedUpdate 设备信息是否有更新
 * @property {boolean} facilityTypeNeedUpdate 设备类型信息是否有更新
 * @property {boolean} serviceTypeNeedUpdate 服务类型信息是否有更新
 * @property {boolean} spaceNeedUpdate 位置信息是否有更新
 * @property {number} timestamp 服务器当前时间戳（毫秒）
 * @property {boolean} woPriorityNeedUpdate 工单优先级信息是否有更新
 * @property {boolean} woSlaNeedUpdate 工单工作流程信息是否有更新
 *
*/

/**
 * @typedef {object} offlineDataHasUpdateUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
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
 * @return {Promise<offlineDataHasUpdateUsingGETResponse>}
*/
export function offlineDataHasUpdateUsingGET(params) {
  return API.get(`/app/index/check-offline-data-update`, { params: { ...params.query })
}

