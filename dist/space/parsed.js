/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-space/createUsingPOST_40
 * @summary 新建空间
 * @description 
 * @param {object} params
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
export function createUsingPOST_40(params) {
  return API.post(`/space`, { ...params.body })
}

