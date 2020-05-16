/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findByIdUsingGET_24
 * @summary 巡检任务-对象-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_24(params) {
  return API.get(`/inspect-task/object/${params.id}`, {})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/updateUsingPUT_32
 * @summary 修改巡检任务-对象-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {[contentsItem]} params.body.contents - 巡检任务-点位-对象-内容
 * @param {number} params.body.facilityId - 设备ID
 * @param {string} params.body.facilityStatus - 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.jobId - 任务ID
 * @param {string} params.body.mark - 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.status - 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @param {number} params.body.taskId - 任务ID
 * @param {number} params.body.taskJobId - 任务点位工作任务ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_32(params) {
  return API.put(`/inspect-task/object/${params.id}`, { ...params.body })
}

