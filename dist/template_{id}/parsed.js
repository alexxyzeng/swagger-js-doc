/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/findByIdUsingGET_41
 * @summary 消息模版-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_41(params) {
  return API.get(`/template/${params.id}`, {})
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/updateUsingPUT_51
 * @summary 修改消息模版-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.code - 消息模版编码
 * @param {[object Object]} params.body.content - undefined
 * @param {string} params.body.depict - 消息模版描述
 * @param {number} params.body.id - 唯一id
 * @param {[paramsItem]} params.body.params - 
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.sort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_51(params) {
  return API.put(`/template/${params.id}`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/deleteUsingDELETE_49
 * @summary 删除消息模版
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_49(params) {
  return API.delete(`/template/${params.id}`, {})
}

