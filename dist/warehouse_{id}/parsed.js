/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/findByIdUsingGET_44
 * @summary 库存仓库-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_44(params) {
  return API.get(`/warehouse/${params.id}`, {})
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/updateUsingPUT_56
 * @summary 修改库存仓库-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
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
export function updateUsingPUT_56(params) {
  return API.put(`/warehouse/${params.id}`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/deleteUsingDELETE_56
 * @summary 删除库存仓库
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_56(params) {
  return API.delete(`/warehouse/${params.id}`, {})
}

