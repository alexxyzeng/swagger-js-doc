/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/findRefFacilitysUsingGET
 * @summary 设备台帐-关联设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.id - 设备台帐ID
* @param {string} params.query.facilityCode - 设备编码
* @param {string} params.query.facilityName - 设备名称
* @param {string} params.query.capitalCode - 资产编码
* @param {string} params.query.fixedCode - 固定编码
* @param {string} params.query.facilityLevel - 设备级别dict_type=facility_tally_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
* @param {string} params.query.facilitySearchLevel - facilitySearchLevel {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
* @param {string} params.query.facilityType - 设备分类
* @param {string} params.query.facilityStatus - 设备状态dict_type=facility_tally_status 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
* @param {string} params.query.facilityBrand - 品牌
* @param {string} params.query.facilityModel - 型号
* @param {string} params.query.mountSpace - 安装位置
* @param {number} params.query.spBuildingId - 大厦id
* @param {number} params.query.spFloorId - 楼层id
* @param {number} params.query.spSpaceId - 空间id
* @param {[number]} params.query.ids - 设备id集合
* @param {string} params.query.direct - 只查上级关联设备或者只查下级关联设备或全部关联设备 {上级设备=Up-0, 下级设备=Down-1, 全部关联设备=All-2}
* @param {string} params.query.code - 编码
* @param {string} params.query.name - 设备名称
* @param {string} params.query.status - 设备状态 1,2,3,4,5
* @param {number} params.query.lastUpdatedTimestamp - 上次离线下载时间
* @param {[number]} params.query.excludeIds - 过滤设备id集合
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findRefFacilitysUsingGET(params) {
  return API.get(`/facility/ref/${params.id}`, { params: { ...params.query })
}

