/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {string} facilityCode 设备编码
 * @property {number} facilityId 设备ID
 * @property {string} facilityName 设备名称
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {string} facilityType 系统分类
 * @property {number} id 唯一id
 * @property {number} jobId 工作任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目id
 * @property {number} sort 顺序
 * @property {string} status 设备模块-设备状态 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
 *
*/

/**
 * @typedef {object} createFacilityUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createFacilityUsingPOSTBody
 * @property {number} facilityId 设备ID
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {number} id 唯一id
 * @property {number} sort 顺序
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/createFacilityUsingPOST
 * @summary 新增巡检点位-工作任务-设备(单个)
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {createFacilityUsingPOSTBody} params.body - 请求体 undefined
 * @return {Promise<createFacilityUsingPOSTResponse>}
*/
export function createFacilityUsingPOST(params) {
  return API.post(`/inspect-site/job/${params.id}/facility`, { ...params.body })
}

