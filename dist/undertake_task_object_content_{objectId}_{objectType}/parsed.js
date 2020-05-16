/**
 * @tags undertake-task-object-content
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-task-object-content/findByObjectIdUsingGET_1
 * @summary 承接查验-任务-对象-查验内容-列表
 * @description 
 * @param {object} params
 * @param {number} params.objectId - path
* @param {string} params.objectType - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByObjectIdUsingGET_1(params) {
  return API.get(`/undertake/task/object/content/${params.objectId}/${params.objectType}`, { params: { ...params.query })
}

