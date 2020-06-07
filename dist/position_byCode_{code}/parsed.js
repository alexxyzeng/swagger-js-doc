/**
 * @typedef {object} data
 * @property {string} code 岗位编码
 * @property {string} description 岗位描述
 * @property {number} id 岗位id
 * @property {number} level 岗位层级
 * @property {string} name 岗位名称
 * @property {number} parentId 上级岗位id
 * @property {number} sort 岗位排序
 *
*/

/**
 * @typedef {object} findByCodeUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-position
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-position/findByCodeUsingGET_1
 * @summary 查找指定编码岗位
 * @description 
 * @param {object} params
 * @param {string} params.code - path
 * @return {Promise<findByCodeUsingGET_1Response>}
*/
export function findByCodeUsingGET_1(params) {
  return API.get(`/position/byCode/${params.code}`, {})
}

