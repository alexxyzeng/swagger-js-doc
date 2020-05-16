/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-site/contentReorderUsingPUT
 * @summary 点位-工作任务-内容调整顺序
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function contentReorderUsingPUT(params) {
  return API.put(`/inspect-site/job/content/reorder/${id}`, { ...params.body })
}

