/**
 * @tags workorder-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-app/statisticsUsingGET_2
 * @summary 工单待处理数量统计
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[string]} params.query.types - 工单统计类型 {抢单=Scramble-1, 派工=Dispatch-2, 处理=Process-3, 审批=Approval-4, 待验证或存档=CheckArchive-5, 我的报单=MyReport-6, 待转单=Transfer-7, 待完成=Pending-8, 待验证=Check-9, 待存档=Archive-10}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function statisticsUsingGET_2(params) {
  return API.get(`/workorder-app/statistics`, { params: { ...params.query })
}

