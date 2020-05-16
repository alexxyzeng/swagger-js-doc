/**
 * @tags base-data-import
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-data-import/executeUsingPOST
 * @summary 执行操作
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.file - undefined
 * @param {string} params.body.operate - 操作 {下载模版=DownloadTemplate-0, 导出数据=Export-1, 新增=Add-2, 删除=Delete-3, 覆盖=Override-4, 增量导入=IncrAdd-5, 重新导入=Reimport-6}
 * @param {string} params.body.taskCode - 文档编号
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function executeUsingPOST(params) {
  return API.post(`/data/import`, { ...params.body })
}

