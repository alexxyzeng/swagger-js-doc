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
 * @typedef {object} queryByIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-type-component
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type-component/queryByIdUsingGET
 * @summary 根据核心组件id查询
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise<queryByIdUsingGETResponse>}
*/
export function queryByIdUsingGET(params) {
  return API.get(`/facilityTypeComponent/queryById`, { params: { ...params.query })
}

