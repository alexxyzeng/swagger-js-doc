/**
 * @tags base-org-position
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-position/findByCodeUsingGET_1
 * @summary 查找指定编码岗位
 * @description 
 * @param {object} params
 * @param {string} params.code - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByCodeUsingGET_1(params) {
  return API.get(`/position/byCode/${code}`, {})
}

