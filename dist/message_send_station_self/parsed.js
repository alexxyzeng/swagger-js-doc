/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/findStationOfSelfUsingGET
 * @summary 个人站内信列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.type - 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
* @param {string} params.query.sendTimeStart - 发送时间开始
* @param {string} params.query.sendTimeEnd - 发送时间结束
* @param {string} params.query.content - 消息内容
* @param {string} params.query.isRead - 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
* @param {string} params.query.source - 消息来源 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findStationOfSelfUsingGET(params) {
  return API.get(`/message/send/station/self`, { params: { ...params.query })
}

