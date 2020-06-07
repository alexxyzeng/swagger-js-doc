/**
 * @typedef {object} data
 * @property {number} bindId 绑定ID
 * @property {number} bindType 绑定类型
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} qrcodeDynamicId 活码ID
 *
*/

/**
 * @typedef {object} findByIdUsingGET_39Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_47Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_47Body
 * @property {number} bindId 绑定ID
 * @property {string} bindType 绑定类型 {巡检点位=InSite-1, 设备=Fac-2, 库存=Inventory-3}
 * @property {number} projectId 项目id
 * @property {number} qrcodeDynamicId 活码ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_44Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/findByIdUsingGET_39
 * @summary 活码绑定表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_39Response>}
*/
export function findByIdUsingGET_39(params) {
  return API.get(`/qrcodedynamicbind/${params.id}`, {})
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/updateUsingPUT_47
 * @summary 修改活码绑定表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_47Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_47Response>}
*/
export function updateUsingPUT_47(params) {
  return API.put(`/qrcodedynamicbind/${params.id}`, { ...params.body })
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/deleteUsingDELETE_44
 * @summary 删除活码绑定表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_44Response>}
*/
export function deleteUsingDELETE_44(params) {
  return API.delete(`/qrcodedynamicbind/${params.id}`, {})
}

