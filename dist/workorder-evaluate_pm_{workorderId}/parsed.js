/**
 * @typedef {object} satisfactionsItem
 * @property {string} type 类型 {服务质量=ServiceQuality-1, 服务速度=ServiceSpeed-2, 服务态度=ServiceAttitude-3}
 * @property {string} grade 评级
 * @property {number} maxStar 最大星数
 * @property {number} score 分值
 * @property {number} star 当前星数
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {string} feedback 反馈意见
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {[satisfactionsItem]} satisfactions
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} pmEvaluateUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} pmEvaluateUsingPOSTBody
 * @property {string} feedback 反馈意见
 * @property {[satisfactionsItem]} satisfactions
 * @property {string} type 评价类型 {客户评价=CustomerEvaluate-1, 维保工作评价=PmEvaluate-2}
 *
*/
/**
 * @tags workorder-evaluate
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-evaluate/pmEvaluateUsingPOST
 * @summary 维保工作评价
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {pmEvaluateUsingPOSTBody} params.body - 请求体 undefined
 * @return {Promise<pmEvaluateUsingPOSTResponse>}
*/
export function pmEvaluateUsingPOST(params) {
  return API.post(`/workorder-evaluate/pm/${params.workorderId}`, { ...params.body })
}

