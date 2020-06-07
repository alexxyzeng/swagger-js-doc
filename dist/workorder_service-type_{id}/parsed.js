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
 * @typedef {object} findByIdUsingGET_41Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_49Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_49Body
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
 * @typedef {object} deleteUsingDELETE_47Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-service-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type/findByIdUsingGET_41
 * @summary 查询服务类型-byId
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_41Response>}
*/
export function findByIdUsingGET_41(params) {
  return API.get(`/workorder/service-type/${params.id}`, {})
}

/**
 * @tags workorder-service-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type/updateUsingPUT_49
 * @summary 更新服务类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_49Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_49Response>}
*/
export function updateUsingPUT_49(params) {
  return API.put(`/workorder/service-type/${params.id}`, { ...params.body })
}

/**
 * @tags workorder-service-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type/deleteUsingDELETE_47
 * @summary 删除服务类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_47Response>}
*/
export function deleteUsingDELETE_47(params) {
  return API.delete(`/workorder/service-type/${params.id}`, {})
}

