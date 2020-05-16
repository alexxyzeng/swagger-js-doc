/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/findByIdUsingGET_28
 * @summary 巡检模板-内容-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_28(params) {
  return API.get(`/inspect-template/content/${params.id}`, {})
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/updateUsingPUT_36
 * @summary 修改巡检模板-内容-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
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
export function updateUsingPUT_36(params) {
  return API.put(`/inspect-template/content/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-template/deleteUsingDELETE_26
 * @summary 删除巡检模板-内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_26(params) {
  return API.delete(`/inspect-template/content/${params.id}`, {})
}

