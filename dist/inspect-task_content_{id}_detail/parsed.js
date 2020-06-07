/**
 * @typedef {object} data
 * @property {number} spBuildingId 大厦id
 * @property {string} spBuildingName 大厦名称
 * @property {number} spFloorId 楼层id
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间id
 * @property {string} spSpaceName 空间名称
 * @property {string} woDesc 工单描述
 *
*/

/**
 * @typedef {object} findDetailByIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/findDetailByIdUsingGET
 * @summary 巡检任务-内容-其他详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findDetailByIdUsingGETResponse>}
*/
export function findDetailByIdUsingGET(params) {
  return API.get(`/inspect-task/content/${params.id}/detail`, {})
}

