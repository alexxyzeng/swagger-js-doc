/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/findUpAndDownFacilityUsingGET
 * @summary 设备台帐-选择关联设备(默认上级设备)
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - 设备台帐ID
* @param {number} params.query.exId - 不包含设备ID(编辑时使用)
* @param {string} params.query.facilityCode - 设备编码
* @param {string} params.query.facilityName - 设备名称
* @param {string} params.query.facilityLevel - 设备级别dict_type=facility_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
* @param {string} params.query.currentLevel - 设备级别dict_type=facility_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
* @param {[number]} params.query.levels - levels
* @param {string} params.query.facilityType - 设备分类
* @param {string} params.query.mountSpace - 安装位置
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUpAndDownFacilityUsingGET(params) {
  return API.get(`/facility/link`, { params: { ...params.query })
}

