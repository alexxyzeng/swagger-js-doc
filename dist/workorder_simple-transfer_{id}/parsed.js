/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/simpleOfTransferUsingGET
 * @summary 转单信息查询
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function simpleOfTransferUsingGET(params) {
  return API.get(`/workorder/simple-transfer/${params.id}`, {})
}

