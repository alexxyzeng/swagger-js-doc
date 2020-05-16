/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/findUsingGET_62
 * @summary 库存仓库-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.code - 仓库编码ID
* @param {string} params.query.name - 仓库名称
* @param {string} params.query.address - 位置
* @param {string} params.query.managements - 仓库管理员
* @param {number} params.query.managementId - 仓库管理员ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_62(params) {
  return API.get(`/warehouse`, { params: { ...params.query })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/createUsingPOST_47
 * @summary 新增库存仓库
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.isEmail - 是否邮件通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isMobilePush - 是否移动推送通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSiteMessage - 是否站内信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSms - 是否短信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {[managementsItem]} params.body.managements - 仓库管理员
 * @param {string} params.body.name - 仓库名称
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.spBuildingId - 大厦ID
 * @param {number} params.body.spFloorId - 楼层ID
 * @param {number} params.body.spSpaceId - 空间ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_47(params) {
  return API.post(`/warehouse`, { ...params.body })
}

