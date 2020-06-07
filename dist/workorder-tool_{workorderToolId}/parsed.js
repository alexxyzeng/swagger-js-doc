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
 * @typedef {object} updateUsingPUT_64Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_64Body
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
 * @typedef {object} removeByIdUsingDELETE_2Response
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-tool
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-tool/updateUsingPUT_64
 * @summary 修改工单关联的工具
 * @description 
 * @param {object} params
 * @param {number} params.workorderToolId - path
 * @param {updateUsingPUT_64Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_64Response>}
*/
export function updateUsingPUT_64(params) {
  return API.put(`/workorder-tool/${params.workorderToolId}`, { ...params.body })
}

/**
 * @tags workorder-tool
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-tool/removeByIdUsingDELETE_2
 * @summary 删除工单关联的工具
 * @description 
 * @param {object} params
 * @param {number} params.workorderToolId - path
 * @return {Promise<removeByIdUsingDELETE_2Response>}
*/
export function removeByIdUsingDELETE_2(params) {
  return API.delete(`/workorder-tool/${params.workorderToolId}`, {})
}

