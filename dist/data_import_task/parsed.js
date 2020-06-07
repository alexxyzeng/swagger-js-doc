/**
 * @typedef {object} statNumsItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} dataItem
 
 * @property {[statNumsItem]} statNums
 *
*/

/**
 * @typedef {object} listUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-data-import
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-data-import/listUsingGET
 * @summary 批量任务列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.taskName - 文档名称
* @param {string} params.query.lastUpdateTime - 更新时间
* @param {string} params.query.lastUpdateStartTime - 更新起始时间
* @param {string} params.query.lastUpdateEndTime - 更新结束时间
* @param {string} params.query.lastOperator - 操作人
* @param {string} params.query.lastImportStatus - 导入结果 {成功=Success-1, 部分失败=PartialFail-2, 处理中=Processing-3}
 * @return {Promise<listUsingGETResponse>}
*/
export function listUsingGET(params) {
  return API.get(`/data/import/task`, { params: { ...params.query })
}

