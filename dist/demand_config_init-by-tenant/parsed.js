/**
 * @typedef {object} autoAffirm
 * @property {string} isAutoAffirm 是否自动确认 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} timeUnit 时间单位 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} times 需求完成后-时间
 *
*/

/**
 * @typedef {object} noticesItem
 * @property {string} type 需求通知类型 {需求创建=Create-1, 审核通过=Approved-2, 审核不通过=ApproveDenied-3, 需求创建工单=CreateOrder-4, 接单（需求关联工单第一次接单）=Ordered-5, 需求跟进=Track-6, 需求处理完成=Done-7, 需求自动验证=AutomaticVerification-8, 追加处理审核通过=AddProcessingApproved-9, 需求取消=Cancel-10}
 * @property {string} enable 是否开启 是否枚举{否=No-0, 是=Yes-1}
 *
*/

/**
 * @typedef {object} noticeSet
 * @property {[noticesItem]} notices
 *
*/

/**
 * @typedef {object} satisfactionsItem
 
 * @property {string} grade 评级
 * @property {string} isDefault 是否默认 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} score 分值
 *
*/

/**
 * @typedef {object} satisfactionSet
 * @property {string} isAutoEvaluate 是否自动评价 是否枚举{否=No-0, 是=Yes-1}
 * @property {[satisfactionsItem]} satisfactions
 * @property {string} timeUnit 时间单位 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} times 需求确认后-时间
 *
*/

/**
 * @typedef {object} data
 * @property {autoAffirm} autoAffirm 
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {noticeSet} noticeSet 
 * @property {number} projectId 项目ID
 * @property {satisfactionSet} satisfactionSet 
 *
*/

/**
 * @typedef {object} initByTenantUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-config
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-config/initByTenantUsingPUT
 * @summary 初始化需求配置-根据租户
 * @description 
 * @param {object} params
 
 * @return {Promise<initByTenantUsingPUTResponse>}
*/
export function initByTenantUsingPUT() {
  return API.put(`/demand/config/init-by-tenant`, {})
}

