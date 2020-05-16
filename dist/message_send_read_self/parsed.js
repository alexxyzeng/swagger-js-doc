/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/readMessageUsingPUT
 * @summary 个人站内信全部已读
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function readMessageUsingPUT(params) {
  return API.put(`/message/send/read/self`, {})
}

