/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/searchByFaIdUsingGET
 * @summary 查询设备关联工单
 * @description 
 * @param {object} params
 * @param {number} params.facId - path
* @param {object} params.query - 请求查询参数
* @param {[string]} params.query.woTypes - woTypes
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchByFaIdUsingGET(params) {
  return API.get(`/workorder/by-facId/${params.facId}`, { params: { ...params.query })
}

