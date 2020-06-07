/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} facilityNum 设备数量
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} job 工作任务
 * @property {number} jobId 点位任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目id
 * @property {string} siteName 点位名称
 * @property {number} spBuildingId 大厦id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 空间id
 *
*/

/**
 * @typedef {object} findByIdUsingGET_21Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_29Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_29Body
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} job 工作任务
 * @property {number} siteId 点位ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_27Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findByIdUsingGET_21
 * @summary 巡检点位-工作任务-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_21Response>}
*/
export function findByIdUsingGET_21(params) {
  return API.get(`/inspect-site/job/${params.id}`, {})
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/updateUsingPUT_29
 * @summary 修改巡检点位-工作任务-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_29Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_29Response>}
*/
export function updateUsingPUT_29(params) {
  return API.put(`/inspect-site/job/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/deleteUsingDELETE_27
 * @summary 删除巡检点位-工作任务
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_27Response>}
*/
export function deleteUsingDELETE_27(params) {
  return API.delete(`/inspect-site/job/${params.id}`, {})
}

