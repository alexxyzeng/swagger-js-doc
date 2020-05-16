/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-building/findByIdUsingGET
 * @summary 查找房产
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET(params) {
  return API.get(`/building/${params.id}`, {})
}

/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-building/updateUsingPUT
 * @summary 更新房产
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.address - 详细地址
 * @param {string} params.body.assetNo - 资产编号
 * @param {number} params.body.buildArea - 建筑面积
 * @param {string} params.body.buildingNo - 楼栋
 * @param {string} params.body.buildingUnit - 单元
 * @param {string} params.body.code - 编码
 * @param {string} params.body.completionTime - 竣工时间
 * @param {string} params.body.developer - 开发商
 * @param {string} params.body.displayName - 房产名称，不能重复，根据appId,tenentId，bizId维度不同，房产名称，不可以重复
 * @param {string} params.body.displayNameEn - 房产英文名
 * @param {number} params.body.endFloor - 结束楼层
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.floorArea - 楼层标准面积
 * @param {number} params.body.id - 房产ID，新增的时候不填写，修改时填写
 * @param {number} params.body.latitude - 纬度
 * @param {number} params.body.longitude - 经度
 * @param {string} params.body.pathName - 路径名称
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.roomRate - 得房率
 * @param {number} params.body.sort - 排序，必填
 * @param {number} params.body.startFloor - 起始楼层
 * @param {number} params.body.struct - 房产结构
 * @param {string} params.body.timeZone - 所在时区
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT(params) {
  return API.put(`/building/${params.id}`, { ...params.body })
}

/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-building/deleteUsingDELETE
 * @summary 删除房产
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE(params) {
  return API.delete(`/building/${params.id}`, {})
}

