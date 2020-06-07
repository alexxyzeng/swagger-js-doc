/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} facilityId 设备ID
 * @property {number} id 唯一id
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} templateId 模块ID
 *
*/

/**
 * @typedef {object} findByIdUsingGET_22Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findByIdUsingGET_22
 * @summary 巡检点位-工作任务-模板-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_22Response>}
*/
export function findByIdUsingGET_22(params) {
  return API.get(`/inspect-site/job/template/${params.id}`, {})
}

