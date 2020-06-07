/**
 * @typedef {object} dataItem
 
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
 * @typedef {object} findAllUsingGET_2Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-priority
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-priority/findAllUsingGET_2
 * @summary 查询优先级列表
 * @description 
 * @param {object} params
 
 * @return {Promise<findAllUsingGET_2Response>}
*/
export function findAllUsingGET_2() {
  return API.get(`/workorder/priority/search`, {})
}

