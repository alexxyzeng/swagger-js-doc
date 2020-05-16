/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/findByIdUsingGET_11
 * @summary 设备台帐-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_11(params) {
  return API.get(`/facility/${params.id}`, {})
}

/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/updateUsingPUT_15
 * @summary 修改设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
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
export function updateUsingPUT_15(params) {
  return API.put(`/facility/${params.id}`, { ...params.body })
}

/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/deleteUsingDELETE_11
 * @summary 删除设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_11(params) {
  return API.delete(`/facility/${params.id}`, {})
}

