/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/statisticUsingGET
 * @summary 需求追加处理记录-统计
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function statisticUsingGET(params) {
  return API.get(`/demand/additional-process/unchecked/num`, {})
}

