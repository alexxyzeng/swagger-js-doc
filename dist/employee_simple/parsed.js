/**
 * @typedef {object} contentItem
 
 * @property {string} accountActivationStatus 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
 * @property {string} emNo 员工编号
 * @property {number} id 用户ID
 * @property {string} name 用户名称
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
 * @typedef {object} findSimpleUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/findSimpleUsingGET
 * @summary 用户列表-simple
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.name - 姓名
* @param {string} params.query.emNo - 员工编号
* @param {string} params.query.accountActivationStatus - 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
 * @return {Promise<findSimpleUsingGETResponse>}
*/
export function findSimpleUsingGET(params) {
  return API.get(`/employee/simple`, { params: { ...params.query })
}

