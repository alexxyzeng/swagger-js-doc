/**
 * @tags base-customer
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-customer/findUsingGET_1
 * @summary 查询客户信息-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.customerName - 客户姓名
* @param {string} params.query.customerTitle - 客户称谓
* @param {string} params.query.mobile - 客户手机号
* @param {string} params.query.telephone - 客户电话
* @param {string} params.query.company - 公司
* @param {string} params.query.position - 职位
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_1(params) {
  return API.get(`/customer/search`, { params: { ...params.query })
}

