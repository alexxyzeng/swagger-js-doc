/**
 * @typedef {object} checkNameUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-template/checkNameUsingGET_1
 * @summary 承接查验模板名称唯一性校验, 名称唯一返回true
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.templateId - 模版id
* @param {string} params.query.name - 模版名称
 * @return {Promise<checkNameUsingGET_1Response>}
*/
export function checkNameUsingGET_1(params) {
  return API.get(`/undertake/template/check-name`, { params: { ...params.query })
}

