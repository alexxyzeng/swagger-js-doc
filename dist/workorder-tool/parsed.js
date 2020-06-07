/**
 * @typedef {object} data
 * @property {number} cost 花费 单位：元
 * @property {number} count 数量
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} model 工具型号
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 工具名称
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} unit 单位
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} createUsingPOST_61Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_61Body
 * @property {number} cost 花费 单位：元
 * @property {number} count 数量
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} model 工具型号
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 工具名称
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} unit 单位
 * @property {number} woWorkorderId 工单id
 *
*/
/**
 * @tags workorder-tool
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-tool/createUsingPOST_61
 * @summary 创建工单关联的工具
 * @description 
 * @param {object} params
  * @param {createUsingPOST_61Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_61Response>}
*/
export function createUsingPOST_61(params) {
  return API.post(`/workorder-tool`, { ...params.body })
}

