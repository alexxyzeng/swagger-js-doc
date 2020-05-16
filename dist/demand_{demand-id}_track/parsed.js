/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-track/createUsingPOST_4
 * @summary 新增需求跟进记录
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 跟进内容
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.remark - 备注
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_4(params) {
  return API.post(`/demand/${params.demand-id}/track`, { ...params.body })
}

