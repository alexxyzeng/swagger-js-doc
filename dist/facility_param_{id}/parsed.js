/**
 * @tags facility-param
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-param/updateUsingPUT_16
 * @summary 修改设备参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.extend - 扩展
 * @param {number} params.body.facilityId - 设备id
 * @param {string} params.body.paramDesc - 描述
 * @param {string} params.body.paramName - 参数名称
 * @param {string} params.body.paramType - 参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @param {string} params.body.paramUnit - 单位
 * @param {string} params.body.paramValue - 参数值
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.typeParamId - 设备分类参数id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_16(params) {
  return API.put(`/facility/param/${params.id}`, { ...params.body })
}

