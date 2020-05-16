/**
 * @tags workorder-pm
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-pm/searchUsingGET_8
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchUsingGET_8(params) {
  return API.get(`/workorder/pm/approval/search`, { params: { ...params.query })
}

