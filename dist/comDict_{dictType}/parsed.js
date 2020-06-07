/**
 * @typedef {object} dataItem
 
 * @property {string} dictDesc 描述
 * @property {string} dictText 字典项
 * @property {string} dictType 字典类型
 * @property {number} dictValue 字典值
 * @property {number} fixed 是否固定
 * @property {number} id 字典id，一般不用
 * @property {number} isDefault 是否默认值：0-不默认；1-默认
 * @property {number} parentId 上级id
 * @property {number} sort 排序
 *
*/

/**
 * @typedef {object} findByTypeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-dict
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-dict/findByTypeUsingGET
 * @summary 根据类型查询字典值列表
 * @description 
 * @param {object} params
 * @param {string} params.dictType - path
 * @return {Promise<findByTypeUsingGETResponse>}
*/
export function findByTypeUsingGET(params) {
  return API.get(`/comDict/${params.dictType}`, {})
}

