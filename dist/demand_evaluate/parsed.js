/**
 * @tags service-center-demand-evaluate
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-evaluate/findUsingGET_5
 * @summary 需求评价（回访）-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.tenantId - 租户ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.type - 类型 {评价=Evaluate-1, 回访=Visit-2}
* @param {number} params.query.demandId - 需求标识
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_5(params) {
  return API.get(`/demand/evaluate`, { params: { ...params.query })
}

