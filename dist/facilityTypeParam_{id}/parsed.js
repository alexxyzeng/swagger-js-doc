/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-param/updateUsingPUT_19
 * @summary 修改设施分类对应的参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
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
export function updateUsingPUT_19(params) {
  return API.put(`/facilityTypeParam/${params.id}`, { ...params.body })
}

/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-param/deleteUsingDELETE_15
 * @summary 根据参数id删除参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_15(params) {
  return API.delete(`/facilityTypeParam/${params.id}`, {})
}

