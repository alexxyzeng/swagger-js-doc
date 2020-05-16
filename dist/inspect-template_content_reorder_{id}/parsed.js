/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/reorderUsingPUT
 * @summary 修改巡检模板-内容-顺序
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {string} params.query.reorderType - 调整方向1-向上 2-向下 {向上=Up-1, 向下=Down-2}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function reorderUsingPUT(params) {
  return API.put(`/inspect-template/content/reorder/${params.id}`, { params: { ...params.query })
}

