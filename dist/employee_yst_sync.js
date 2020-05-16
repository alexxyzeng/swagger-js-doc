/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/ystUpdateUsingPOST
 * @summary 根据一事通号同步相应一事通人员信息
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function ystUpdateUsingPOST(params) {
  return API.post(, { ...params.body })
}

