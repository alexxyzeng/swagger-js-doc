/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-site/createJobContentUsingPOST
 * @summary 自定义巡检点位-工作任务-内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createJobContentUsingPOST(params) {
  return API.post(`/inspect-site/job/${id}/custom-content`, { ...params.body })
}

