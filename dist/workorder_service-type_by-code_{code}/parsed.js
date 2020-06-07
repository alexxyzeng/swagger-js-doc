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
 * @typedef {object} findByCodeUsingGET_2Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-service-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type/findByCodeUsingGET_2
 * @summary 查询服务类型-byCode
 * @description 
 * @param {object} params
 * @param {string} params.code - path
 * @return {Promise<findByCodeUsingGET_2Response>}
*/
export function findByCodeUsingGET_2(params) {
  return API.get(`/workorder/service-type/by-code/${params.code}`, {})
}

