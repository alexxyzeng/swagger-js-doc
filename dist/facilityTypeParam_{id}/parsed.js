/**
 * @typedef {object} optionsItem
 
 * @property {string} key key
 * @property {boolean} selected 是否选中
 * @property {string} value 值
 *
*/

/**
 * @typedef {object} optionContent
 * @property {[optionsItem]} options
 *
*/

/**
 * @typedef {object} data
 * @property {string} extend 
 * @property {number} id 
 * @property {optionContent} optionContent 
 * @property {string} paramBelongType null {上级分类的参数=Parent-0, 自己的参数=Oneself-1}
 * @property {string} paramDefault 
 * @property {string} paramDesc 
 * @property {string} paramName 
 * @property {string} paramType null {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 
 * @property {string} remark 
 * @property {number} typeId 
 * @property {string} unitName 
 *
*/

/**
 * @typedef {object} updateUsingPUT_21Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_21Body
 * @property {string} extend 
 * @property {number} id 
 * @property {optionContent} optionContent 
 * @property {string} paramBelongType null {上级分类的参数=Parent-0, 自己的参数=Oneself-1}
 * @property {string} paramDefault 
 * @property {string} paramDesc 
 * @property {string} paramName 
 * @property {string} paramType null {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 
 * @property {string} remark 
 * @property {number} typeId 
 * @property {string} unitName 
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_19Response
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-type-param
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type-param/updateUsingPUT_21
 * @summary 修改设施分类对应的参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_21Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_21Response>}
*/
export function updateUsingPUT_21(params) {
  return API.put(`/facilityTypeParam/${params.id}`, { ...params.body })
}

/**
 * @tags facility-type-param
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type-param/deleteUsingDELETE_19
 * @summary 根据参数id删除参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_19Response>}
*/
export function deleteUsingDELETE_19(params) {
  return API.delete(`/facilityTypeParam/${params.id}`, {})
}

