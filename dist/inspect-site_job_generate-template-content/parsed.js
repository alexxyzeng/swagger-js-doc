/**
 * @typedef {object} generateTemplateContentUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} generateTemplateContentUsingPUTBody
 * @property {[number]} facilityIds
 * @property {number} id 唯一id
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {number} projectId 项目id
 * @property {[number]} templateIds
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/generateTemplateContentUsingPUT
 * @summary 生成模板内容
 * @description 
 * @param {object} params
  * @param {generateTemplateContentUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<generateTemplateContentUsingPUTResponse>}
*/
export function generateTemplateContentUsingPUT(params) {
  return API.put(`/inspect-site/job/generate-template-content`, { ...params.body })
}

