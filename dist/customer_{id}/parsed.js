/**
 * @typedef {object} addressListItem
 
 * @property {number} id 客户地址id
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/

/**
 * @typedef {object} data
 * @property {[addressListItem]} addressList
 * @property {string} company 公司
 * @property {string} customerName 客户姓名
 * @property {string} customerTitle 客户称谓
 * @property {string} department 部门
 * @property {string} description 描述
 * @property {string} email 客户邮箱
 * @property {number} id 客户id
 * @property {string} mobile 客户手机号
 * @property {string} position 职位
 * @property {number} projectId 项目ID
 * @property {string} qq QQ
 * @property {string} telephone 客户电话
 * @property {string} wechat 微信
 *
*/

/**
 * @typedef {object} findByIdUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_1Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-customer
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-customer/findByIdUsingGET_1
 * @summary 查询客户信息-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_1Response>}
*/
export function findByIdUsingGET_1(params) {
  return API.get(`/customer/${params.id}`, {})
}

/**
 * @tags base-customer
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-customer/deleteUsingDELETE_1
 * @summary 删除客户信息
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_1Response>}
*/
export function deleteUsingDELETE_1(params) {
  return API.delete(`/customer/${params.id}`, {})
}

