/**
 * @tags inspect-task
 * @link undefined/swagger-ui.html#!/inspect-task/findByIdUsingGET_26
 * @summary 巡检任务-工单-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
undefined
 */
export function findByIdUsingGET_26(<%= InterfaceParams %>) {
  return API.get("/inspect-task/handle/${id}", <%= InterfaceParamsMethod %>)
}

/**
 * @tags inspect-task
 * @link undefined/swagger-ui.html#!/inspect-task/updateUsingPUT_34
 * @summary 修改巡检任务-工单-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.description - 故障描述
 * @param {string} params.body.handleResult - 异常处理结果：1-已处理、2-未处理 {已处理=Dispose, 未处理=Undispose}
 * @param {string} params.body.handleWay - 异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation, 报修工单=Workorder}
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.serviceman - 维修人员
 * @param {number} params.body.taskContentId - 任务内容ID
 * @param {number} params.body.taskId - 任务ID
 * @param {string} params.body.workorderCode - 工单编号
 * @param {number} params.body.workorderId - 工单ID
 * @param {array} params.body.workorders - undefined
 */
export function updateUsingPUT_34(<%= InterfaceParams %>) {
  return API.put("/inspect-task/handle/${id}", <%= InterfaceParamsMethod %>)
}

/**
 * @tags inspect-task
 * @link undefined/swagger-ui.html#!/inspect-task/deleteUsingDELETE_31
 * @summary 删除巡检任务-工单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
undefined
 */
export function deleteUsingDELETE_31(<%= InterfaceParams %>) {
  return API.delete("/inspect-task/handle/${id}", <%= InterfaceParamsMethod %>)
}

