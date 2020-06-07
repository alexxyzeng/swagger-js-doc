/**
 * @typedef {object} data
 * @property {string} code 编码
 * @property {string} createTime 创建时间
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {number} level 层级
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 服务类型名称
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} projectId 项目ID
 * @property {number} sort 排序
 *
*/

/**
 * @typedef {object} createUsingPOST_41Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_41Body
 * @property {string} code 编码
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {number} level 层级
 * @property {string} name 服务类型名称
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} projectId 项目ID
 * @property {number} sort 排序
 *
*/
/**
 * @tags workorder-service-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type/createUsingPOST_41
 * @summary 新增服务类型
 * @description 
 * @param {object} params
  * @param {createUsingPOST_41Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_41Response>}
*/
export function createUsingPOST_41(params) {
  return API.post(`/workorder/service-type`, { ...params.body })
}

