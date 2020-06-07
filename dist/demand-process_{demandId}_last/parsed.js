/**
 * @typedef {object} updateLastUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateLastUsingPUTBody
 * @property {string} content 跟进内容
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} otherData 其他数据
 * @property {number} processBy 处理人
 * @property {string} processType 处理类型 {创建=Create-1, 审核=Approve-2, 更新=Update-3, 跟进=Follow-4, 建单=CreateOrder-5, 处理完成=Done-6, 验证=Confirm-7, 评价=Evaluate-8, 回访=Visit-9, 取消=Cancel-10, 转派=Redeploy-11, 追加处理=Additional-12, 评论=Comment-13}
 * @property {number} refId 关联ID
 * @property {number} refType 关联类型
 * @property {string} remark 备注
 *
*/
/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/updateLastUsingPUT
 * @summary 修改需求验证未通过描述
 * @description 
 * @param {object} params
 * @param {number} params.demandId - path
 * @param {updateLastUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<updateLastUsingPUTResponse>}
*/
export function updateLastUsingPUT(params) {
  return API.put(`/demand-process/${params.demandId}/last`, { ...params.body })
}

