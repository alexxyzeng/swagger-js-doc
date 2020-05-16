/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/findUsingGET_17
 * @summary 设备台帐列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
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
export function findUsingGET_17(params) {
  return API.get(`/facility`, { params: { ...params.query })
}

/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/createUsingPOST_8
 * @summary 新增设备
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.capitalCode - 资产编码
 * @param {[componentsItem]} params.body.components - 设备核心组件
 * @param {string} params.body.enableDate - 启用日期
 * @param {string} params.body.exfactoryDate - 出厂日期
 * @param {string} params.body.extend - 扩展
 * @param {string} params.body.facilityBrand - 品牌dict_type=facility_tally_brand
 * @param {string} params.body.facilityCode - 设备编码
 * @param {string} params.body.facilityDesc - 描述
 * @param {string} params.body.facilityImportance - 重要性dict_type=facility_tally_importance 1-一般 2-重要 3-非常重要 {一般=General-1, 重要=Important-2, 非常重要=VeryImportant-3}
 * @param {string} params.body.facilityLevel - 设备级别dict_type=facility_tally_level 0-一级设备 1-二级设备 2-三级设备 3-四级设备 4-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
 * @param {number} params.body.facilityLife - 质保周期
 * @param {string} params.body.facilityModel - 型号
 * @param {string} params.body.facilityName - 设备名称
 * @param {string} params.body.facilitySerial - 设备序列号
 * @param {[facilityServiceItem]} params.body.facilityService - 服务区域和对象
 * @param {string} params.body.facilityStatus - 设备状态dict_type=facility_tally_status 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
 * @param {number} params.body.facilityTypeId - 系统分类
 * @param {string} params.body.facilityWeight - 重量
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.fixedCode - 固定编码
 * @param {string} params.body.lifeUnit - 质保周期单位 {年=Year-1, 月=Month-2}
 * @param {string} params.body.mountDate - 安装日期
 * @param {string} params.body.mountSpace - 安装位置
 * @param {[paramsItem]} params.body.params - 设备参数
 * @param {[parentsItem]} params.body.parents - 上级设备
 * @param {undefined} params.body.qrCode - undefined
 * @param {string} params.body.remark - 备注
 * @param {undefined} params.body.serviceAreaObject - undefined
 * @param {number} params.body.spBuildingId - 大厦
 * @param {number} params.body.spFloorId - 楼层
 * @param {number} params.body.spSpaceId - 房间
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_8(params) {
  return API.post(`/facility`, { ...params.body })
}

