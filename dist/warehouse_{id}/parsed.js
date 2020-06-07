/**
 * @typedef {object} managementsItem
 
 * @property {string} key 
 * @property {string} label 
 *
*/

/**
 * @typedef {object} data
 * @property {string} address 位置
 * @property {string} code 仓库编码ID
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} management 管理员
 * @property {string} managementIds 仓库管理员ID
 * @property {[managementsItem]} managements
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 仓库名称
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} spBuildingId 大厦ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 *
*/

/**
 * @typedef {object} findByIdUsingGET_47Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_58Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_58Body
 * @property {string} isEmail 是否邮件通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {[number]} managements
 * @property {string} name 仓库名称
 * @property {string} remark 备注
 * @property {number} spBuildingId 大厦ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_60Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/findByIdUsingGET_47
 * @summary 库存仓库-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_47Response>}
*/
export function findByIdUsingGET_47(params) {
  return API.get(`/warehouse/${params.id}`, {})
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/updateUsingPUT_58
 * @summary 修改库存仓库-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_58Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_58Response>}
*/
export function updateUsingPUT_58(params) {
  return API.put(`/warehouse/${params.id}`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/deleteUsingDELETE_60
 * @summary 删除库存仓库
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_60Response>}
*/
export function deleteUsingDELETE_60(params) {
  return API.delete(`/warehouse/${params.id}`, {})
}

