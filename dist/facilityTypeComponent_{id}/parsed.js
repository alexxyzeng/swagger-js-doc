/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-component/updateUsingPUT_17
 * @summary 修改核心组件
 * @description 
 * @param {object} params
 * @param {number} params.id - path
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
export function updateUsingPUT_17(params) {
  return API.put(`/facilityTypeComponent/${params.id}`, { ...params.body })
}

/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-component/deleteUsingDELETE_13
 * @summary 根据核心组件id删除参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_13(params) {
  return API.delete(`/facilityTypeComponent/${params.id}`, {})
}

