/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-floor/createUsingPOST_12
 * @summary 新建楼层
 * @description 
 * @param {object} params
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
export function createUsingPOST_12(params) {
  return API.post(`/floor`, { ...params.body })
}

