/**
 * @tags demand-common
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/demand-common/createCommonUsingPOST
 * @summary 新增需求评论表
 * @description 
 * @param {object} params
 * @param {number} params.demandId - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 评论内容
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createCommonUsingPOST(params) {
  return API.post(`/demand/common/${params.demandId}`, { ...params.body })
}

