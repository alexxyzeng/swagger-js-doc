/**
 * @typedef {object} exportUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[string]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand/exportUsingGET
 * @summary 需求列表导出
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.customerId - 客户ID
* @param {string} params.query.search - 查询：编号、姓名、描述、需求类型、工单号、联系方式
* @param {string} params.query.workorderCode - 查询：工单编号
* @param {string} params.query.hfmSearch - 查询：编号、项目名称、描述、需求类型
* @param {string} params.query.code - 需求编码
* @param {string} params.query.username - 保障人
* @param {string} params.query.createByName - 创建人
* @param {string} params.query.demandTypeName - 需求类型名称
* @param {number} params.query.demandTypeId - 需求类型ID
* @param {string} params.query.description - 需求内容
* @param {string} params.query.evaluateStatus - 是否评价 {未评价=No-1, 手动评价=YesHand-2, 自动评价=YesAuto-3}
* @param {string} params.query.visitStatus - 是否回访 {未回访=No-1, 已回访=Yes-2}
* @param {string} params.query.isRefOrder - 是否有关联的工单 是否枚举{否=No-0, 是=Yes-1}
* @param {[string]} params.query.refOrders - 是否关联工单列表 是否枚举{否=No-0, 是=Yes-1}
* @param {[string]} params.query.statusList - 状态 {待审核=PendingCheck-1, 待处理=PendingDispose-2, 跟进中=Follow-3, 已建单=CreatedOrder-4, 待验收=PendingConfirm-5, 待评价=PendingEvaluate-6, 已完成=Done-7, 已评价=Evaluate-9, 已取消=Cancel-8}
* @param {[string]} params.query.sourceList - 来源 {微信=Wechat-1, 手机=Phone-2, 邮件=Email-3, PC=Web-4}
* @param {string} params.query.startDate - 开始日期
* @param {string} params.query.endDate - 结束日期
* @param {string} params.query.completeStartDate - 工单完成开始日期
* @param {string} params.query.completeEndDate - 工单完成结束日期
* @param {string} params.query.feedback - 反馈意见
* @param {number} params.query.responseDuration - 响应时长
* @param {number} params.query.completionDuration - 完成时长
* @param {string} params.query.additionalApproveStatus - 追加处理审核状态 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
* @param {string} params.query.isReadCommon - 需求评论是否已读 是否枚举{否=No-0, 是=Yes-1}
* @param {string} params.query.clientType - 查询来源 1-web 2-h5 {PC浏览器=Web-1, 手机浏览器=H5-2}
 * @return {Promise<exportUsingGETResponse>}
*/
export function exportUsingGET(params) {
  return API.get(`/demand/export`, { params: { ...params.query })
}

