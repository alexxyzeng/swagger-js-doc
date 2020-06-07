/**
 * @typedef {object} contentItem
 
 * @property {string} content 审批内容
 * @property {string} createTime 创建时间
 * @property {number} employeeId 处理人id
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isCreatedApproval 是否维保工单创建审批申请
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {string} status 审批结果 0-拒绝 1-通过 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} woCode 工单编码
 * @property {string} woDescription 工单描述
 * @property {number} woWorkorderId 工单id
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
 * @typedef {object} searchUsingGET_8Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-pm
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-pm/searchUsingGET_8
 * @summary 查询工单审批列表-PM
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.woCode - 工单编码
* @param {string} params.query.woDescription - 工单描述
* @param {string} params.query.content - 审批内容
* @param {string} params.query.startTime - 创建开始事件
* @param {string} params.query.endTime - 创建结束事件
 * @return {Promise<searchUsingGET_8Response>}
*/
export function searchUsingGET_8(params) {
  return API.get(`/workorder/pm/approval/search`, { params: { ...params.query })
}

