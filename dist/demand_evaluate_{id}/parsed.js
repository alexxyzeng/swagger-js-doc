/**
 * @typedef {object} satisfactionsItem
 * @property {string} type 类型 {服务质量=Quality-1, 服务速度=Speed-2, 服务态度=Attitude-3}
 * @property {string} createTime 创建时间
 * @property {number} demandId 需求ID
 * @property {number} evaluateId 评价ID
 * @property {string} grade 评级
 * @property {number} id 由程序分配的唯一ID
 * @property {number} maxStar 最大星数
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
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
 * @typedef {object} findByIdUsingGET_5Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-evaluate
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-evaluate/findByIdUsingGET_5
 * @summary 需求评价（回访）-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_5Response>}
*/
export function findByIdUsingGET_5(params) {
  return API.get(`/demand/evaluate/${params.id}`, {})
}

