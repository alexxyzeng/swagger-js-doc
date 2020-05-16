/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findUsingGET_26
 * @summary 巡检点位-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.name - 点位名称
* @param {string} params.query.address - 空间名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_26(params) {
  return API.get(`/inspect-site`, { params: { ...params.query })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/createUsingPOST_19
 * @summary 新增巡检点位
 * @description 
 * @param {object} params
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
export function createUsingPOST_19(params) {
  return API.post(`/inspect-site`, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/deleteUsingPUT_5
 * @summary 批量删除巡检点位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_5(params) {
  return API.put(`/inspect-site`, { ...params.body })
}

