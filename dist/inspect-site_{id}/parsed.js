/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findByIdUsingGET_17
 * @summary 巡检点位-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_17(params) {
  return API.get(`/inspect-site/${params.id}`, {})
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/updateUsingPUT_25
 * @summary 修改巡检点位-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.code - 编号
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.name - 名称
 * @param {string} params.body.nfcLabel - NFC标签
 * @param {number} params.body.projectId - 项目id
 * @param {undefined} params.body.qrcode - undefined
 * @param {number} params.body.spBuildingId - 大楼ID
 * @param {string} params.body.spBuildingName - 大楼名称
 * @param {number} params.body.spFloorId - 楼层ID
 * @param {string} params.body.spFloorName - 楼层名称
 * @param {number} params.body.spSpaceId - 空间ID
 * @param {string} params.body.spSpaceName - 空间名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_25(params) {
  return API.put(`/inspect-site/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/deleteUsingDELETE_21
 * @summary 删除巡检点位
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_21(params) {
  return API.delete(`/inspect-site/${params.id}`, {})
}

