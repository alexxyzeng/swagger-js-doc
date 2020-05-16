/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand/findUsingGET_4
 * @summary 需求-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_4(params) {
  return API.get(`/demand`, { params: { ...params.query })
}

/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand/createUsingPOST_3
 * @summary 新增需求
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.appellation - 称谓
 * @param {string} params.body.company - 公司名称
 * @param {number} params.body.customerId - 客户ID
 * @param {number} params.body.demandTypeRefId - 需求类型改关联ID
 * @param {string} params.body.department - 部门
 * @param {number} params.body.departmentId - 部门id
 * @param {string} params.body.description - 需求描述
 * @param {string} params.body.email - 电子信箱
 * @param {number} params.body.employeeId - 员工ID
 * @param {string} params.body.expectEndTime - 预计结束时间
 * @param {string} params.body.expectStartTime - 预计开始时间
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.fromEmail - 来源信箱
 * @param {string} params.body.isFromEmail - 是否来自邮件 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.phone - 手机号
 * @param {string} params.body.position - 职位
 * @param {number} params.body.projectId - 项目ID
 * @param {string} params.body.source - 来源 {微信=Wechat-1, 手机=Phone-2, 邮件=Email-3, PC=Web-4}
 * @param {[spacesItem]} params.body.spaces - 空间位置列表
 * @param {string} params.body.tel - 电话
 * @param {string} params.body.userType - 用户类型，0：其他；1：员工；2：客户； {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @param {string} params.body.username - 报障人名称
 * @param {[workorderListItem]} params.body.workorderList - 工单信息列表
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_3(params) {
  return API.post(`/demand`, { ...params.body })
}

