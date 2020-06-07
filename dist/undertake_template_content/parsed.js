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
 * @typedef {object} contentItem
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} content 内容
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {options} options 
 * @property {number} projectId 项目id
 * @property {string} resultOption 检查结果项
 * @property {number} sort 顺序
 * @property {number} templateId 模板ID
 * @property {string} unit 单位
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
 * @property {[contentItem]} content
 * @property {number} currentSize 当前页条数
 * @property {boolean} first 是否第一页
 * @property {boolean} last 是否最后一页
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {pageable} pageable 
 * @property {number} totalElements 总条数
 * @property {number} totalPages 总页数
 *
*/

/**
 * @typedef {object} findUsingGET_64Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-template-content
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-template-content/findUsingGET_64
 * @summary 承接查验模板-内容-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.templateId - 模版id
* @param {number} params.query.contentId - 查验内容id
 * @return {Promise<findUsingGET_64Response>}
*/
export function findUsingGET_64(params) {
  return API.get(`/undertake/template/content`, { params: { ...params.query })
}

