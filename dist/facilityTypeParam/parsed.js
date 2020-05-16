/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-param/queryUsingGET_1
 * @summary 查询设施分类对应的所有参数
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function queryUsingGET_1(params) {
  return API.get(`/facilityTypeParam`, { params: { ...params.query })
}

/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-param/createUsingPOST_11
 * @summary 新增设施分类对应的参数
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.extend - 
 * @param {number} params.body.id - 
 * @param {undefined} params.body.optionContent - undefined
 * @param {string} params.body.paramBelongType - null {上级分类的参数=Parent-0, 自己的参数=Oneself-1}
 * @param {string} params.body.paramDefault - 
 * @param {string} params.body.paramDesc - 
 * @param {string} params.body.paramName - 
 * @param {string} params.body.paramType - null {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @param {string} params.body.paramUnit - 
 * @param {string} params.body.remark - 
 * @param {number} params.body.typeId - 
 * @param {string} params.body.unitName - 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_11(params) {
  return API.post(`/facilityTypeParam`, { ...params.body })
}

