/**
 * @tags workorder-config
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-config/updateUsingPUT_2
 * @summary 更新配置
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {number} params.body.projectId - 项目ID
 * @param {undefined} params.body.satisfactionSet - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_2(params) {
  return API.put(`/workorder/config/satisfaction/${params.id}`, { ...params.body })
}

