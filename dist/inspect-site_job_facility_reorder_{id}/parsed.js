/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/facilityReorderUsingPUT
 * @summary 点位-设备调整顺序
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.facilityId - 
 * @param {number} params.body.id - ID
 * @param {number} params.body.jobId - 
 * @param {string} params.body.jobType - null {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @param {string} params.body.reorderType - 调整方向1-向上 2-向下 {向上=Up-1, 向下=Down-2}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function facilityReorderUsingPUT(params) {
  return API.put(`/inspect-site/job/facility/reorder/${params.id}`, { ...params.body })
}

