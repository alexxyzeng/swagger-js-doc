/**
 * @typedef {object} dataItem
 
 * @property {string} createTime 创建时间
 * @property {string} deleted 是否删除 {删除=Deleted-1, 有效=Valid-0}
 * @property {string} facilityCode 设备编码
 * @property {string} facilityLevel 设备级别 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
 * @property {string} facilityName 设备名称
 * @property {string} facilityStatus 设备状态 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
 * @property {string} facilityType 设备分类
 * @property {number} facilityTypeId 设备分类ID
 * @property {number} id 设备台帐ID
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目ID
 * @property {number} spBuildingId 大厦
 * @property {string} spBuildingName 大厦名称
 * @property {number} spFloorId 楼层
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 房间
 * @property {string} spSpaceName 房间名称
 *
*/

/**
 * @typedef {object} findByLastUpdatedTimestampUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility/findByLastUpdatedTimestampUsingGET_1
 * @summary 设备离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise<findByLastUpdatedTimestampUsingGET_1Response>}
*/
export function findByLastUpdatedTimestampUsingGET_1(params) {
  return API.get(`/facility/download`, { params: { ...params.query })
}

