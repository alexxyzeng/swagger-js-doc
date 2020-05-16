/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-component/queryUsingGET
 * @summary 查询设施分类对应的所有核心组件
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function queryUsingGET(params) {
  return API.get(`/facilityTypeComponent`, { params: { ...params.query })
}

/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-component/createUsingPOST_9
 * @summary 新增核心组件
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.componentBelongType - null {上级分类的核心组件=Parent-0, 自己的核心组件=Oneself-1}
 * @param {string} params.body.componentBrand - 
 * @param {string} params.body.componentLife - 
 * @param {string} params.body.componentName - 
 * @param {string} params.body.componentUnit - 
 * @param {string} params.body.extend - 
 * @param {number} params.body.id - 
 * @param {string} params.body.lifeUnit - null {年=Year-1, 月=Month-2}
 * @param {string} params.body.lifeUnitName - 
 * @param {string} params.body.remark - 
 * @param {number} params.body.typeId - 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_9(params) {
  return API.post(`/facilityTypeComponent`, { ...params.body })
}

