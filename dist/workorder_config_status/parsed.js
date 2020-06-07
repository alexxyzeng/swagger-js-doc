/**
 * @typedef {object} dataItem
 
 * @property {string} status 状态值 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 * @property {string} statusValue 状态值
 *
*/

/**
 * @typedef {object} getStatusConfigUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-config
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-config/getStatusConfigUsingGET
 * @summary 查询工单状态字典项
 * @description 
 * @param {object} params
 
 * @return {Promise<getStatusConfigUsingGETResponse>}
*/
export function getStatusConfigUsingGET() {
  return API.get(`/workorder/config/status`, {})
}

