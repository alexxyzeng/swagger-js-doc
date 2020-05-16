/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/readMessageUsingPUT_1
 * @summary 消息已读
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function readMessageUsingPUT_1(params) {
  return API.put(, { ...params.body })
}

