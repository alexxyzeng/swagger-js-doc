/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/modifyUsingPUT
 * @summary 工单修改
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.description - 问题描述
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function modifyUsingPUT(params) {
  return API.put(`/workorder/${params.id}`, { ...params.body })
}

