/**
 * @typedef {object} data
 * @property {string} color 颜色
 * @property {string} createTime 创建时间
 * @property {string} deleted 删除状态, 离线下载接口使用 {删除=Deleted-1, 有效=Valid-0}
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 优先级名称
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} findByNameUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-priority
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-priority/findByNameUsingGET
 * @summary 查询优先级-byName
 * @description 
 * @param {object} params
 * @param {string} params.name - path
 * @return {Promise<findByNameUsingGETResponse>}
*/
export function findByNameUsingGET(params) {
  return API.get(`/workorder/priority/by-name/${params.name}`, {})
}

