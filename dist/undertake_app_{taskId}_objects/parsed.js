/**
 * @typedef {object} dataItem
 
 * @property {number} contentNum 查验内容数量
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} isCompleted 是否完成 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isException 是否异常 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 对象(位置/设备)名称
 * @property {string} objectType 对象类型 {位置=Site-1, 设备=Facility-2}
 * @property {number} projectId 项目id
 *
*/

/**
 * @typedef {object} findObjectsByTaskIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-app/findObjectsByTaskIdUsingGET
 * @summary 查验对象列表
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @return {Promise<findObjectsByTaskIdUsingGETResponse>}
*/
export function findObjectsByTaskIdUsingGET(params) {
  return API.get(`/undertake/app/${params.taskId}/objects`, {})
}

