/**
 * @typedef {object} data
 * @property {number} commonBy 评论人
 * @property {string} content 评论内容
 * @property {string} createTime 创建时间
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} createCommonUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createCommonUsingPOSTBody
 * @property {string} content 评论内容
 *
*/
/**
 * @tags demand-common
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/demand-common/createCommonUsingPOST
 * @summary 新增需求评论表
 * @description 
 * @param {object} params
 * @param {number} params.demandId - path
 * @param {createCommonUsingPOSTBody} params.body - 请求体 undefined
 * @return {Promise<createCommonUsingPOSTResponse>}
*/
export function createCommonUsingPOST(params) {
  return API.post(`/demand/common/${params.demandId}`, { ...params.body })
}

