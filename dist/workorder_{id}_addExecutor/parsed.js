/**
 * @typedef {object} data
 * @property {string} acceptTime 接单/抢单时间
 * @property {string} createTime 创建时间
 * @property {string} dispatchedType 派单方式 1-自动派单 2-智能排单 3-抢单 4-指派 {自动派单=AutoDispatch-1, 智能派单=IntelligentDispatch-2, 排程派工=ManualDispatch-3, 抢单=Scramble-4, 增派=AddExecutor-5}
 * @property {number} execEmployeeId 执行员工id
 * @property {string} execEmployeeName 执行员工名称
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isCharged 是否负责人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后的修改时间
 * @property {boolean} notEnd 
 * @property {string} phone 执行人电话
 * @property {number} projectId 项目ID
 * @property {string} status 执行人状态 {未接单=NoOrder-1, 已接单=Order-2, 暂停中=Pause-3, 已上交=Submitted-4, 已退单=Chargeback-5}
 * @property {number} woDispatcherId 工单_派工人id
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} addExecutorUsingPUT_1Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} addExecutorUsingPUT_1Body
 * @property {number} execEmployeeId 执行员工id
 * @property {string} execEmployeeName 执行人名称
 * @property {string} isCharged 是否负责人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 *
*/
/**
 * @tags workorder
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder/addExecutorUsingPUT_1
 * @summary 增派
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {addExecutorUsingPUT_1Body} params.body - 请求体 undefined
 * @return {Promise<addExecutorUsingPUT_1Response>}
*/
export function addExecutorUsingPUT_1(params) {
  return API.put(`/workorder/${params.id}/addExecutor`, { ...params.body })
}

