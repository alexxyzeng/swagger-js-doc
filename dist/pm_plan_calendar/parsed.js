/**
 * @typedef {object} plansItem
 
 * @property {number} beginMonth 设置周期范围，起始月
 * @property {string} createTime 创建时间
 * @property {number} endMonth 设置周期范围，结束月
 * @property {number} id 唯一id
 * @property {string} isAutoWorkorder 是否字段生成工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isGenWorkorder 是否生成工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isGenerated 是否已生成计划 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} maintId 维保规则id
 * @property {string} maintName 计划/设置名称
 * @property {string} modifyTime 最后修改时间
 * @property {string} planDate 计划日期
 * @property {string} planEndTime 计划结束时间
 * @property {string} planStartTime 计划开始时间
 * @property {number} projectId 项目id
 * @property {string} status 计划状态1-未开始;2-处理中;3-已完成;4-已过期;5-逾期 {未开始=NotBegin-1, 处理中=InProgress-2, 已完成=JobDone-3, 已过期=Expired-4, 已逾期=Overdue-5}
 *
*/

/**
 * @typedef {object} dataItem
 
 * @property {string} date 唯一id
 * @property {[plansItem]} plans
 *
*/

/**
 * @typedef {object} findCalendarUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags pm-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm-plan/findCalendarUsingGET
 * @summary 维保计划-日历
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.beginDate - 日历开始时间
* @param {string} params.query.endDate - 日历结束时间
* @param {string} params.query.keyWord - 关键词查询
* @param {number} params.query.facilityTypeId - 设备分类
* @param {number} params.query.spaceId - 大楼|楼层|房间 Id
* @param {string} params.query.status - 计划状态 {未开始=NotBegin-1, 处理中=InProgress-2, 已完成=JobDone-3, 已过期=Expired-4, 已逾期=Overdue-5}
 * @return {Promise<findCalendarUsingGETResponse>}
*/
export function findCalendarUsingGET(params) {
  return API.get(`/pm/plan/calendar`, { params: { ...params.query })
}

