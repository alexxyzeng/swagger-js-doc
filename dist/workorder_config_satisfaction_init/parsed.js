/**
 * @typedef {object} satisfactionsItem
 
 * @property {string} grade 评级
 * @property {string} isDefault 是否默认 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} score 分值
 *
*/

/**
 * @typedef {object} satisfactionSet
 * @property {string} isSyncDemand 是否同步服务中心配置 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {[satisfactionsItem]} satisfactions
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {satisfactionSet} satisfactionSet 
 *
*/

/**
 * @typedef {object} initUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-config
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-config/initUsingPUT
 * @summary 初始化
 * @description 
 * @param {object} params
 
 * @return {Promise<initUsingPUTResponse>}
*/
export function initUsingPUT() {
  return API.put(`/workorder/config/satisfaction/init`, {})
}

