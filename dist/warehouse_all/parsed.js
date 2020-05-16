/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/findAllUsingGET_4
 * @summary 库存仓库-所有
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.code - 仓库编码ID
* @param {string} params.query.name - 仓库名称
* @param {string} params.query.address - 位置
* @param {string} params.query.managements - 仓库管理员
* @param {number} params.query.managementId - 仓库管理员ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllUsingGET_4(params) {
  return API.get(`/warehouse/all`, { params: { ...params.query })
}

