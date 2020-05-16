/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-floor/findByIdUsingGET_12
 * @summary 查找楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_12(params) {
  return API.get(`/floor/${params.id}`, {})
}

/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-floor/updateUsingPUT_20
 * @summary 更新楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.area - 管理面积
 * @param {string} params.body.code - 编码
 * @param {string} params.body.createTime - 最后的修改时间
 * @param {number} params.body.deleted -  是否删除：0、未删除 1、已删除
 * @param {string} params.body.displayName - 楼层名称
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.floorNo - 楼层编号
 * @param {number} params.body.id - ID
 * @param {number} params.body.interlayer - 夹层，1：是，0：否
 * @param {number} params.body.level - 楼层
 * @param {string} params.body.modifyTime - 最后的修改时间
 * @param {string} params.body.pathName - 层级名称
 * @param {number} params.body.sort - 排序
 * @param {number} params.body.spBuildingId - 房产ID
 * @param {string} params.body.timeZone - 所在时区，默认东8区
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_20(params) {
  return API.put(`/floor/${params.id}`, { ...params.body })
}

/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-floor/deleteUsingDELETE_16
 * @summary 删除楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.id - 楼层ID
* @param {number} params.query.spBuildingId - 房产ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_16(params) {
  return API.delete(`/floor/${params.id}`, { params: { ...params.query })
}

