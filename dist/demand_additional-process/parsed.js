/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/findUsingGET_2
 * @summary 需求追加处理记录-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.demandId - 需求ID
* @param {[string]} params.query.approveStatus - 审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
* @param {string} params.query.processOpinion - 追加处理意见
* @param {[number]} params.query.demandIds - 需求ID(批量查询)
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_2(params) {
  return API.get(`/demand/additional-process`, { params: { ...params.query })
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/createUsingPOST_2
 * @summary 新增需求追加处理记录
 * @description 
 * @param {object} params
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
export function createUsingPOST_2(params) {
  return API.post(`/demand/additional-process`, { ...params.body })
}

