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
 * @typedef {object} findByIdUsingGET_2Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_4Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_4Body
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
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/findByIdUsingGET_2
 * @summary 需求追加处理记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_2Response>}
*/
export function findByIdUsingGET_2(params) {
  return API.get(`/demand/additional-process/${params.id}`, {})
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/updateUsingPUT_4
 * @summary 审核需求追加处理记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_4Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_4Response>}
*/
export function updateUsingPUT_4(params) {
  return API.put(`/demand/additional-process/${params.id}`, { ...params.body })
}

