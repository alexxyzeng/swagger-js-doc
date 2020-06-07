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
 * @typedef {object} updateUsingPUT_19Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_19Body
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
 * @typedef {object} deleteUsingDELETE_17Response
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-type-component
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type-component/updateUsingPUT_19
 * @summary 修改核心组件
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_19Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_19Response>}
*/
export function updateUsingPUT_19(params) {
  return API.put(`/facilityTypeComponent/${params.id}`, { ...params.body })
}

/**
 * @tags facility-type-component
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type-component/deleteUsingDELETE_17
 * @summary 根据核心组件id删除参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_17Response>}
*/
export function deleteUsingDELETE_17(params) {
  return API.delete(`/facilityTypeComponent/${params.id}`, {})
}

