/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/findByIdUsingGET_2
 * @summary 需求追加处理记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_2(params) {
  return API.get(`/demand/additional-process/${params.id}`, {})
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/updateUsingPUT_4
 * @summary 审核需求追加处理记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.additionalBy - 追加人ID
 * @param {string} params.body.approveOpinion - 审核意见
 * @param {string} params.body.approveStatus - 审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
 * @param {string} params.body.approveTime - 审核时间
 * @param {number} params.body.approverId - 审核人ID
 * @param {number} params.body.demandId - 需求ID
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.processOpinion - 追加处理意见
 * @param {number} params.body.projectId - 项目ID
 * @param {number} params.body.tenantId - 租户ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_4(params) {
  return API.put(`/demand/additional-process/${params.id}`, { ...params.body })
}

