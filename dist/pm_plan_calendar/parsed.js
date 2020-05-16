/**
 * @tags pm-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm-plan/findCalendarUsingGET
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findCalendarUsingGET(params) {
  return API.get(`/pm/plan/calendar`, { params: { ...params.query })
}

