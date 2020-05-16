/**
 * @tags workorder-facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-facility/updateUsingPUT_60
 * @summary 修改工单对应的设备
 * @description 
 * @param {object} params
 * @param {number} params.workorderFacId - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.createTime - 创建时间
 * @param {number} params.body.facFacilityId - 设备id
 * @param {string} params.body.facilityCode - 设备编码
 * @param {string} params.body.facilityName - 设备名称
 * @param {string} params.body.facilityType - 系统分类
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.modifyTime - 最后的修改时间
 * @param {string} params.body.mountSpace - 位置
 * @param {string} params.body.processDesc - 处理方式
 * @param {undefined} params.body.processFiles - undefined
 * @param {number} params.body.projectId - 项目ID
 * @param {string} params.body.siteDesc - 现场描述
 * @param {undefined} params.body.siteFiles - undefined
 * @param {number} params.body.woWorkorderId - 工单id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_60(params) {
  return API.put(`/workorder-facility/${params.workorderFacId}`, { ...params.body })
}

/**
 * @tags workorder-facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-facility/removeByIdUsingDELETE
 * @summary 删除工单对应的设备
 * @description 
 * @param {object} params
 * @param {number} params.workorderFacId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function removeByIdUsingDELETE(params) {
  return API.delete(`/workorder-facility/${params.workorderFacId}`, {})
}

