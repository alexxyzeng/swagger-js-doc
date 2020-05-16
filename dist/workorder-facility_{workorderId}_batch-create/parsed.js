/**
 * @tags workorder-facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-facility/batchCreateUsingPOST_1
 * @summary 创建工单对应的设备
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @param {[facFacilityIdsItem]} params.body.facFacilityIds - 设备id
 * @param {string} params.body.processDesc - 处理方式
 * @param {undefined} params.body.processFiles - undefined
 * @param {string} params.body.siteDesc - 现场描述
 * @param {undefined} params.body.siteFiles - undefined
 * @param {number} params.body.woWorkorderId - 工单id, 新增设备时必传
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchCreateUsingPOST_1(params) {
  return API.post(`/workorder-facility/${params.workorderId}/batch-create`, { ...params.body })
}

