/**
 * @typedef {object} data
 * @property {string} content 审批内容
 * @property {string} createTime 创建时间
 * @property {number} employeeId 处理人id
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isCreatedApproval 是否维保工单创建审批申请
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {string} status 审批结果 0-拒绝 1-通过 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} woCode 工单编码
 * @property {string} woDescription 工单描述
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} approvalUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} approvalUsingPUTBody
 * @property {string} result 拒绝/通过原因
 * @property {string} type 操作类型 0-拒绝 1-通过 是否枚举{否=No-0, 是=Yes-1}
 *
*/
/**
 * @tags workorder-approval
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-approval/approvalUsingPUT
 * @summary 工单审批操作
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {approvalUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<approvalUsingPUTResponse>}
*/
export function approvalUsingPUT(params) {
  return API.put(`/workorder-approval/approval/${params.id}`, { ...params.body })
}

