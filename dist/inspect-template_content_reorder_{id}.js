/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/reorderUsingPUT
 * @summary 修改巡检模板-内容-顺序
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function reorderUsingPUT(params) {
  return API.put(`/inspect-template/content/reorder/${id}`, { params: { params.id }})
}

