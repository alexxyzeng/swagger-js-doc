/**
 * @typedef {object} contentItem
 
 * @property {number} additionalBy 追加人ID
 * @property {string} additionalByAvatar 追加人头像
 * @property {string} additionalByName 追加人
 * @property {string} approveOpinion 审核意见
 * @property {string} approveStatus 审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
 * @property {string} approveTime 审核时间
 * @property {string} approver 审核人
 * @property {number} approverId 审核人ID
 * @property {string} createTime 创建时间
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} processOpinion 追加处理意见
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

/**
 * @typedef {object} data
 * @property {number} additionalBy 追加人ID
 * @property {string} additionalByAvatar 追加人头像
 * @property {string} additionalByName 追加人
 * @property {string} approveOpinion 审核意见
 * @property {string} approveStatus 审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
 * @property {string} approveTime 审核时间
 * @property {string} approver 审核人
 * @property {number} approverId 审核人ID
 * @property {string} createTime 创建时间
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} processOpinion 追加处理意见
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} findUsingGET_2Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_2Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_2Body
 * @property {number} additionalBy 追加人ID
 * @property {string} approveOpinion 审核意见
 * @property {string} approveStatus 审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
 * @property {string} approveTime 审核时间
 * @property {number} approverId 审核人ID
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} processOpinion 追加处理意见
 * @property {number} projectId 项目ID
 * @property {number} tenantId 租户ID
 *
*/
/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/findUsingGET_2
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
 * @return {Promise<findUsingGET_2Response>}
*/
export function findUsingGET_2(params) {
  return API.get(`/demand/additional-process`, { params: { ...params.query })
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/createUsingPOST_2
 * @summary 新增需求追加处理记录
 * @description 
 * @param {object} params
  * @param {createUsingPOST_2Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_2Response>}
*/
export function createUsingPOST_2(params) {
  return API.post(`/demand/additional-process`, { ...params.body })
}

