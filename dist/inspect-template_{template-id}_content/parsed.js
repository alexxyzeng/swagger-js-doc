/**
 * @typedef {object} exceptions
 * @property {[string]} exceptions
 *
*/

/**
 * @typedef {object} inputRange
 * @property {number} ceiling 上限
 * @property {number} lower 下限
 *
*/

/**
 * @typedef {object} optionsItem
 
 * @property {boolean} isRight 选项是否正确
 * @property {string} option 选项值
 *
*/

/**
 * @typedef {object} options
 * @property {inputRange} inputRange 
 * @property {[optionsItem]} options
 *
*/

/**
 * @typedef {object} data
 * @property {string} content 内容
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {exceptions} exceptions 
 * @property {number} id 唯一id
 * @property {string} model 模式：不限、夏季、冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {string} modifyTime 最后修改时间
 * @property {options} options 
 * @property {number} projectId 项目id
 * @property {string} result 结果
 * @property {string} runStatus 运行状态：不限、在线、停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {number} templateId 模板ID
 * @property {string} type 类型：1-输入、2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/

/**
 * @typedef {object} createUsingPOST_27Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_27Body
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {exceptions} exceptions 
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {options} options 
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @tags inspect-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-template/createUsingPOST_27
 * @summary 新增巡检模板-内容
 * @description 
 * @param {object} params
 * @param {number} params.template-id - path
 * @param {createUsingPOST_27Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_27Response>}
*/
export function createUsingPOST_27(params) {
  return API.post(`/inspect-template/${params.template-id}/content`, { ...params.body })
}

