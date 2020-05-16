/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/createUsingPOST_25
 * @summary 新增巡检模板-内容
 * @description 
 * @param {object} params
 * @param {number} params.template-id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 内容
 * @param {string} params.body.defaultVal - 默认值
 * @param {undefined} params.body.exceptions - undefined
 * @param {string} params.body.model - 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @param {undefined} params.body.options - undefined
 * @param {string} params.body.runStatus - 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @param {number} params.body.sort - 顺序
 * @param {string} params.body.type - 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @param {string} params.body.unit - 单位
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_25(params) {
  return API.post(`/inspect-template/${params.template-id}/content`, { ...params.body })
}

