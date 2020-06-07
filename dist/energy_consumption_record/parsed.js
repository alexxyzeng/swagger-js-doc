/**
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

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
 * @typedef {object} findUsingGET_16Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_8Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_8Body
 * @property {number} currentCost 本期费用：分
 * @property {number} currentDosage 本期用量
 * @property {string} energyConsumptionCycle 能耗周期
 * @property {number} energyConsumptionType 能耗类型
 * @property {number} id 由程序分配的唯一ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_14Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/findUsingGET_16
 * @summary 能耗记录表-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.energyConsumptionCycle - 能耗周期
* @param {string} params.query.energyConsumptionType - 能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
 * @return {Promise<findUsingGET_16Response>}
*/
export function findUsingGET_16(params) {
  return API.get(`/energy/consumption/record`, { params: { ...params.query })
}

/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/createUsingPOST_8
 * @summary 新增能耗记录表
 * @description 
 * @param {object} params
  * @param {createUsingPOST_8Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_8Response>}
*/
export function createUsingPOST_8(params) {
  return API.post(`/energy/consumption/record`, { ...params.body })
}

/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/deleteUsingDELETE_14
 * @summary 批量删除能耗记录表
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_14Response>}
*/
export function deleteUsingDELETE_14(params) {
  return API.delete(`/energy/consumption/record`, { ...params.body })
}

