/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/findAllUsingGET_5
 * @summary 仓库管理员-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.warehouseId - 仓库ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllUsingGET_5(params) {
  return API.get(`/warehouse/management/all`, { params: { ...params.query })
}

