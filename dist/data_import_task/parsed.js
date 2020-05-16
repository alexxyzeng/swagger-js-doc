/**
 * @tags base-data-import
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-data-import/listUsingGET
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function listUsingGET(params) {
  return API.get(`/data/import/task`, { params: { ...params.query })
}

