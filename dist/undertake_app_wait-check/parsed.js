/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {number} facilityNum 设备数量
 * @property {number} id 唯一id
 * @property {string} isCompleted 是否已完成 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isException 是否异常 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 任务名称
 * @property {number} projectId 项目id
 * @property {number} siteNum 位置数量
 * @property {string} startTime 开始时间
 * @property {string} startTimeStr 开始时间 yyyy-MM-dd HH:mm
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
 * @typedef {object} findWaitCheckUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-app/findWaitCheckUsingGET
 * @summary 查验任务
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.isCompleted - isCompleted
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise<findWaitCheckUsingGETResponse>}
*/
export function findWaitCheckUsingGET(params) {
  return API.get(`/undertake/app/wait-check`, { params: { ...params.query })
}

