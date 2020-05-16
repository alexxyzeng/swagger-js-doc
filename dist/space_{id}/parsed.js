/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-space/findUsingGET_52
 * @summary 查找空间
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_52(params) {
  return API.get(`/space/${params.id}`, {})
}

/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-space/updateUsingPUT_49
 * @summary 更新空间
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.code - 编码
 * @param {string} params.body.displayName - 空间名称，同一楼层不重复
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.id - 空间ID，新增时不可填写，修改时填写
 * @param {string} params.body.pathName - 层级名称
 * @param {number} params.body.sort - 排序
 * @param {number} params.body.spFloorId - 楼层ID，不能为空
 * @param {string} params.body.spaceNo - 房间编号
 * @param {number} params.body.spaceType - 空间类型：1、房间，默认 1
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_49(params) {
  return API.put(`/space/${params.id}`, { ...params.body })
}

/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-space/deleteUsingDELETE_46
 * @summary 删除空间
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.spFloorId - 楼层ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_46(params) {
  return API.delete(`/space/${params.id}`, { params: { ...params.query })
}

