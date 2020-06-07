/**
 * @typedef {object} dataItem
 
 * @property {string} componentBelongType null {上级分类的核心组件=Parent-0, 自己的核心组件=Oneself-1}
 * @property {string} componentBrand 
 * @property {string} componentLife 
 * @property {string} componentName 
 * @property {string} componentUnit 
 * @property {string} extend 
 * @property {number} id 
 * @property {string} lifeUnit null {年=Year-1, 月=Month-2}
 * @property {string} lifeUnitName 
 * @property {string} remark 
 * @property {number} typeId 
 *
*/

/**
 * @typedef {object} queryUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} data
 * @property {string} componentBelongType null {上级分类的核心组件=Parent-0, 自己的核心组件=Oneself-1}
 * @property {string} componentBrand 
 * @property {string} componentLife 
 * @property {string} componentName 
 * @property {string} componentUnit 
 * @property {string} extend 
 * @property {number} id 
 * @property {string} lifeUnit null {年=Year-1, 月=Month-2}
 * @property {string} lifeUnitName 
 * @property {string} remark 
 * @property {number} typeId 
 *
*/

/**
 * @typedef {object} createUsingPOST_11Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_11Body
 * @property {string} componentBelongType null {上级分类的核心组件=Parent-0, 自己的核心组件=Oneself-1}
 * @property {string} componentBrand 
 * @property {string} componentLife 
 * @property {string} componentName 
 * @property {string} componentUnit 
 * @property {string} extend 
 * @property {number} id 
 * @property {string} lifeUnit null {年=Year-1, 月=Month-2}
 * @property {string} lifeUnitName 
 * @property {string} remark 
 * @property {number} typeId 
 *
*/
/**
 * @tags facility-type-component
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type-component/queryUsingGET
 * @summary 查询设施分类对应的所有核心组件
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise<queryUsingGETResponse>}
*/
export function queryUsingGET(params) {
  return API.get(`/facilityTypeComponent`, { params: { ...params.query })
}

/**
 * @tags facility-type-component
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type-component/createUsingPOST_11
 * @summary 新增核心组件
 * @description 
 * @param {object} params
  * @param {createUsingPOST_11Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_11Response>}
*/
export function createUsingPOST_11(params) {
  return API.post(`/facilityTypeComponent`, { ...params.body })
}

