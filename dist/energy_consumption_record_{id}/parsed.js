/**
 * @typedef {object} data
 * @property {number} currentCost 本期费用：元
 * @property {number} currentDosage 本期用量
 * @property {string} currentDosageUnitNameCh 本期用量单位：汉语
 * @property {string} currentDosageUnitNameEn 本期用量单位：英文
 * @property {string} energyConsumptionCycle 能耗周期
 * @property {number} energyConsumptionType 能耗类型
 * @property {string} energyConsumptionTypeName 能耗类型名称
 * @property {number} id 由程序分配的唯一ID
 *
*/

/**
 * @typedef {object} findByIdUsingGET_12Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_13Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_13Body
 * @property {number} currentCost 本期费用：分
 * @property {number} currentDosage 本期用量
 * @property {string} energyConsumptionCycle 能耗周期
 * @property {number} energyConsumptionType 能耗类型
 * @property {number} id 由程序分配的唯一ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_13Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/findByIdUsingGET_12
 * @summary 能耗记录表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_12Response>}
*/
export function findByIdUsingGET_12(params) {
  return API.get(`/energy/consumption/record/${params.id}`, {})
}

/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/updateUsingPUT_13
 * @summary 修改能耗记录表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_13Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_13Response>}
*/
export function updateUsingPUT_13(params) {
  return API.put(`/energy/consumption/record/${params.id}`, { ...params.body })
}

/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/deleteUsingDELETE_13
 * @summary 删除能耗记录表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_13Response>}
*/
export function deleteUsingDELETE_13(params) {
  return API.delete(`/energy/consumption/record/${params.id}`, {})
}

