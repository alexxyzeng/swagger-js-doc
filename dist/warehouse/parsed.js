/**
 * @typedef {object} managementsItem
 
 * @property {string} key 
 * @property {string} label 
 *
*/

/**
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
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
 * @typedef {object} findUsingGET_66Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_51Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_51Body
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
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/findUsingGET_66
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
 * @return {Promise<findUsingGET_66Response>}
*/
export function findUsingGET_66(params) {
  return API.get(`/warehouse`, { params: { ...params.query })
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/createUsingPOST_51
 * @summary 新增库存仓库
 * @description 
 * @param {object} params
  * @param {createUsingPOST_51Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_51Response>}
*/
export function createUsingPOST_51(params) {
  return API.post(`/warehouse`, { ...params.body })
}

