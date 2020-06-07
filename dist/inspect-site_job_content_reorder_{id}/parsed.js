/**
 * @typedef {object} contentReorderUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} contentReorderUsingPUTBody
 * @property {number} facilityId 
 * @property {number} id ID
 * @property {number} jobId 
 * @property {string} jobType null {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} reorderType 调整方向1-向上 2-向下 {向上=Up-1, 向下=Down-2}
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/contentReorderUsingPUT
 * @summary 点位-工作任务-内容调整顺序
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {contentReorderUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<contentReorderUsingPUTResponse>}
*/
export function contentReorderUsingPUT(params) {
  return API.put(`/inspect-site/job/content/reorder/${params.id}`, { ...params.body })
}

