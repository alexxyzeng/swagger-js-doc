/**
 * @typedef {object} satisfactionsItem
 * @property {string} type 类型 {服务质量=Quality-1, 服务速度=Speed-2, 服务态度=Attitude-3}
 * @property {string} grade 评级
 * @property {number} maxStar 最大星数
 * @property {number} score 分值
 * @property {number} star 当前星数
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} creator 创建者
 * @property {number} demandId 需求ID
 * @property {number} evaluateBy 评价人
 * @property {string} feedback 反馈意见
 * @property {number} id 由程序分配的唯一ID
 * @property {number} modifier 修改者
 * @property {string} modifyTime 修改时间
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {[satisfactionsItem]} satisfactions
 * @property {string} type 类型：评价、回访 {评价=Evaluate-1, 回访=Visit-2}
 *
*/

/**
 * @typedef {object} createEvaluateUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createEvaluateUsingPOSTBody
 * @property {string} content 反馈意见-前端组件
 * @property {number} evaluateBy 评价人
 * @property {string} feedback 反馈意见
 * @property {number} id 由程序分配的唯一ID
 * @property {[satisfactionsItem]} satisfactions
 *
*/
/**
 * @tags service-center-demand-evaluate
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-evaluate/createEvaluateUsingPOST
 * @summary 新增需求评价
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @param {createEvaluateUsingPOSTBody} params.body - 请求体 undefined
 * @return {Promise<createEvaluateUsingPOSTResponse>}
*/
export function createEvaluateUsingPOST(params) {
  return API.post(`/demand/${params.demand-id}/evaluate`, { ...params.body })
}

