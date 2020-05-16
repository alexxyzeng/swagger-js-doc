/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-sla/findUsingGET_51
 * @summary 查询sla列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.serviceTypePathName - 服务类型全称
* @param {string} params.query.spaceWholeName - 位置名称
* @param {string} params.query.orgDepartmentName - 部门名称
* @param {[string]} params.query.woType - 工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
* @param {string} params.query.priorityNames - 优先级名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_51(params) {
  return API.get(`/workorder/sla/search`, { params: { ...params.query })
}

