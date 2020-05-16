/**
 * @tags pm
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm/findFacilityUsingPUT
 * @summary 维保设备列表筛选
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[number]} params.query.facilityIds - 设备ID
* @param {string} params.query.facilityCode - 设备编码
* @param {string} params.query.facilityName - 设备名称
* @param {string} params.query.facilityType - 系统分类
* @param {string} params.query.mountSpace - 安装位置
* @param {number} params.query.pageNumber - 当前页
* @param {number} params.query.pageSize - 每页条数
* @param {[string]} params.query.pageSort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findFacilityUsingPUT(params) {
  return API.put(`/pm/maint/facility`, { params: { ...params.query })
}

