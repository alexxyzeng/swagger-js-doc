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
 * @typedef {object} typeParam
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
 * @typedef {object} data
 * @property {string} extend 扩展
 * @property {number} facilityId 设备id
 * @property {string} paramDesc 描述
 * @property {string} paramName 参数名称
 * @property {string} paramType 参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 单位
 * @property {string} paramValue 参数值
 * @property {string} remark 备注
 * @property {typeParam} typeParam 
 * @property {number} typeParamId 设备分类参数id
 *
*/

/**
 * @typedef {object} updateUsingPUT_18Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_18Body
 * @property {string} extend 扩展
 * @property {number} facilityId 设备id
 * @property {string} paramDesc 描述
 * @property {string} paramName 参数名称
 * @property {string} paramType 参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 单位
 * @property {string} paramValue 参数值
 * @property {string} remark 备注
 * @property {number} typeParamId 设备分类参数id
 *
*/
/**
 * @tags facility-param
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-param/updateUsingPUT_18
 * @summary 修改设备参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_18Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_18Response>}
*/
export function updateUsingPUT_18(params) {
  return API.put(`/facility/param/${params.id}`, { ...params.body })
}

