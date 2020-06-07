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
 * @property {number} contentId 内容ID
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {exceptions} exceptions 
 * @property {number} facilityId 设备ID
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} model 模式：不限、夏季、冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} modifyTime 最后修改时间
 * @property {options} options 
 * @property {string} result 结果
 * @property {string} runStatus 运行状态：不限、在线、停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {number} templateId 模板ID
 * @property {string} templateName 模板名称
 * @property {string} type 类型：输入、选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/

/**
 * @typedef {object} createJobContentUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createJobContentUsingPOSTBody
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {exceptions} exceptions 
 * @property {number} facilityId 设备ID
 * @property {[number]} facilityIds
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} jobType 任务类型：1-综合巡检、2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} model 模式：1-常规、2-夏季、3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {options} options 
 * @property {string} runStatus 运行状态：1-不限、2-在线、3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} type 类型：1-输入、2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/createJobContentUsingPOST
 * @summary 自定义巡检点位-工作任务-内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {createJobContentUsingPOSTBody} params.body - 请求体 undefined
 * @return {Promise<createJobContentUsingPOSTResponse>}
*/
export function createJobContentUsingPOST(params) {
  return API.post(`/inspect-site/job/${params.id}/custom-content`, { ...params.body })
}

