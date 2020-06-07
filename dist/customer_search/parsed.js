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
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

/**
 * @typedef {object} data
 * @property {[contentItem]} content
 * @property {number} currentSize 当前页条数
 * @property {boolean} first 是否第一页
 * @property {boolean} last 是否最后一页
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {pageable} pageable 
 * @property {number} totalElements 总条数
 * @property {number} totalPages 总页数
 *
*/

/**
 * @typedef {object} findUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-customer
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-customer/findUsingGET_1
 * @summary 查询客户信息-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.customerName - 客户姓名
* @param {string} params.query.customerTitle - 客户称谓
* @param {string} params.query.mobile - 客户手机号
* @param {string} params.query.telephone - 客户电话
* @param {string} params.query.company - 公司
* @param {string} params.query.position - 职位
 * @return {Promise<findUsingGET_1Response>}
*/
export function findUsingGET_1(params) {
  return API.get(`/customer/search`, { params: { ...params.query })
}

