/**
 * @typedef {object} employeeInfoDtosItem
 
 * @property {number} employeeId 
 * @property {string} employeeName 
 *
*/

/**
 * @typedef {object} progressInfosItem
 
 * @property {string} createTime 创建时间
 * @property {[employeeInfoDtosItem]} employeeInfoDtos
 * @property {string} processType null {创建=WorkorderProcessTypeEnum-1, 创建=WorkorderProcessTypeEnum-2, 创建=WorkorderProcessTypeEnum-3, 创建=WorkorderProcessTypeEnum-4, 转单=WorkorderProcessTypeEnum-5, 转单=WorkorderProcessTypeEnum-6, 转单=WorkorderProcessTypeEnum-7, 转单=WorkorderProcessTypeEnum-8, 派工=WorkorderProcessTypeEnum-9, 派工=WorkorderProcessTypeEnum-10, 派工=WorkorderProcessTypeEnum-11, 增派=WorkorderProcessTypeEnum-12, 抢单=WorkorderProcessTypeEnum-13, 抢单超时=WorkorderProcessTypeEnum-14, 抢单超时=WorkorderProcessTypeEnum-15, 抢单超时=WorkorderProcessTypeEnum-16, 接单=WorkorderProcessTypeEnum-17, 接单=WorkorderProcessTypeEnum-18, 退单=WorkorderProcessTypeEnum-19, 退单=WorkorderProcessTypeEnum-20, 暂停=WorkorderProcessTypeEnum-21, 暂停=WorkorderProcessTypeEnum-22, 暂停=WorkorderProcessTypeEnum-23, 暂停=WorkorderProcessTypeEnum-24, 继续=WorkorderProcessTypeEnum-25, 继续=WorkorderProcessTypeEnum-26, 完成=WorkorderProcessTypeEnum-27, 终止=WorkorderProcessTypeEnum-28, 终止=WorkorderProcessTypeEnum-29, 转单=WorkorderProcessTypeEnum-30, 验证=WorkorderProcessTypeEnum-31, 验证=WorkorderProcessTypeEnum-32, 验证=WorkorderProcessTypeEnum-33, 存档=WorkorderProcessTypeEnum-34, 审批申请=WorkorderProcessTypeEnum-35, 审批通过=WorkorderProcessTypeEnum-36, 审批拒绝=WorkorderProcessTypeEnum-37, 更新=WorkorderProcessTypeEnum-38, 升级=WorkorderProcessTypeEnum-39, 升级=WorkorderProcessTypeEnum-40, 升级=WorkorderProcessTypeEnum-41, 退单=WorkorderProcessTypeEnum-42, 退单=WorkorderProcessTypeEnum-43, 暂停=WorkorderProcessTypeEnum-44}
 * @property {string} progressName 节点名称
 * @property {string} status 完成状态 1-已完成 2-待完成 3-未完成 {已完成=Completed-1, 待完成=WaitComplete-2, 未完成=Incomplete-3}
 *
*/

/**
 * @typedef {object} data
 * @property {[progressInfosItem]} progressInfos
 *
*/

/**
 * @typedef {object} findProgressUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-process/findProgressUsingGET
 * @summary 查询工单处理进度条
 * @description 
 * @param {object} params
 * @param {number} params.woId - path
 * @return {Promise<findProgressUsingGETResponse>}
*/
export function findProgressUsingGET(params) {
  return API.get(`/workorder-process/progress/${params.woId}`, {})
}

