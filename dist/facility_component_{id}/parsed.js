/**
 * @tags facility-component
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-component/updateUsingPUT_14
 * @summary 修改设备组件
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.componentBrand - 组件品牌
 * @param {string} params.body.componentCode - 组件编码
 * @param {string} params.body.componentLife - 质保周期
 * @param {string} params.body.componentModel - 组件型号
 * @param {string} params.body.componentName - 组件名称
 * @param {string} params.body.componentUnit - 组件单位
 * @param {string} params.body.enableTime - 安装时间
 * @param {string} params.body.expireTime - 质保到期
 * @param {number} params.body.facilityId - 设备id
 * @param {number} params.body.typeComponentId - 设备分类组件id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_14(params) {
  return API.put(`/facility/component/${params.id}`, { ...params.body })
}

