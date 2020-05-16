/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/generateTemplateContentUsingPUT
 * @summary 生成模板内容
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[facilityIdsItem]} params.body.facilityIds - 设备ID
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.jobId - 工作任务ID
 * @param {string} params.body.jobType - 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @param {number} params.body.projectId - 项目id
 * @param {[templateIdsItem]} params.body.templateIds - 模块ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function generateTemplateContentUsingPUT(params) {
  return API.put(`/inspect-site/job/generate-template-content`, { ...params.body })
}

