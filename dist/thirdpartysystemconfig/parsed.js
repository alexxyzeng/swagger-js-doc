/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/thirdparty-system-config-feign/findUsingGET_58
 * @summary 第三方账户-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
* @param {number} params.query.pageNumber - 当前页
* @param {number} params.query.pageSize - 每页条数
* @param {[string]} params.query.pageSort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_58(params) {
  return API.get(`/thirdpartysystemconfig`, { params: { ...params.query })
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/thirdparty-system-config-feign/createUsingPOST_44
 * @summary 新增第三方账户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.appId - 应用ID，做数据隔离用
 * @param {number} params.body.bizId - 业务ID，做数据隔离用
 * @param {string} params.body.code - 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @param {string} params.body.config - 第三方信息
 * @param {string} params.body.displayname - 中文描述 钉钉 微信 一事通
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {number} params.body.status - 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_44(params) {
  return API.post(`/thirdpartysystemconfig`, { ...params.body })
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/thirdparty-system-config-feign/deleteUsingDELETE_54
 * @summary 批量删除第三方账户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_54(params) {
  return API.delete(`/thirdpartysystemconfig`, { ...params.body })
}

