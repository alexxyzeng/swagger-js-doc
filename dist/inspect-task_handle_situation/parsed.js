/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/situationUsingPOST
 * @summary 新增巡检任务-现状处理
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.description - 故障描述
 * @param {string} params.body.handleResult - 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @param {string} params.body.handleWay - 异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.serviceman - 维修人员
 * @param {number} params.body.taskContentId - 任务内容ID
 * @param {number} params.body.taskId - 任务ID
 * @param {string} params.body.workorderCode - 工单编号
 * @param {number} params.body.workorderId - 工单ID
 * @param {[workordersItem]} params.body.workorders - 工单信息
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function situationUsingPOST(params) {
  return API.post(`/inspect-task/handle/situation`, { ...params.body })
}

