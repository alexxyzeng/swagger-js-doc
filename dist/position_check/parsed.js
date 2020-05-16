/**
 * @tags base-org-position
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-position/checkNameOrCodeUsingGET_1
 * @summary 检验部门名称或编码
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.positionId - 岗位id
* @param {number} params.query.parentId - 上级岗位id
* @param {string} params.query.name - 名称
* @param {string} params.query.code - 编码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkNameOrCodeUsingGET_1(params) {
  return API.get(`/position/check`, { params: { ...params.query })
}

