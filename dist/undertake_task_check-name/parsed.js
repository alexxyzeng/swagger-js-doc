/**
 * @typedef {object} checkNameUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} accepterListItem
 * @property {string} type 验收人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} accepterId 验收用户/工作组id
 *
*/

/**
 * @typedef {object} checkerListItem
 * @property {string} type 查验人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} checkerId 查验用户/工作组id
 *
*/

/**
 * @typedef {object} templatePoListItem
 
 * @property {number} id 模版id
 * @property {string} name 模版名称
 *
*/

/**
 * @typedef {object} facilityListItem
 
 * @property {number} facilityId 设备ID
 * @property {[templatePoListItem]} templatePoList
 *
*/

/**
 * @typedef {object} siteListItem
 
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 * @property {[templatePoListItem]} templatePoList
 *
*/

/**
 * @typedef {object} checkNameUsingGETBody
 * @property {[accepterListItem]} accepterList
 * @property {[checkerListItem]} checkerList
 * @property {string} description 查验说明
 * @property {[facilityListItem]} facilityList
 * @property {string} name 任务名称
 * @property {number} priorityId 优先级id
 * @property {[siteListItem]} siteList
 * @property {number} slaId 流程设置id
 * @property {string} startTime 开始时间
 * @property {string} takeFrom 交验方
 * @property {string} takeOver 接管方
 *
*/
/**
 * @tags undertake-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-task/checkNameUsingGET
 * @summary 承接查验任务名称唯一性校验, 名称唯一返回true
 * @description 
 * @param {object} params
  * @param {checkNameUsingGETBody} params.body - 请求体 [object Object]
 * @return {Promise<checkNameUsingGETResponse>}
*/
export function checkNameUsingGET(params) {
  return API.get(`/undertake/task/check-name`, { ...params.body })
}

