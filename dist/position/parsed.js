/**
 * @tags base-org-position
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-position/createUsingPOST_33
 * @summary 创建岗位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.code - 编码
 * @param {string} params.body.description - 描述
 * @param {number} params.body.id - 岗位id
 * @param {number} params.body.level - 层级
 * @param {string} params.body.name - 岗位名称
 * @param {string} params.body.parentId - 上级id
 * @param {number} params.body.sort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_33(params) {
  return API.post(`/position`, { ...params.body })
}

/**
 * @tags base-org-position
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-position/updateUsingPUT_43
 * @summary 更新岗位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.code - 编码
 * @param {string} params.body.description - 描述
 * @param {number} params.body.id - 岗位id
 * @param {number} params.body.level - 层级
 * @param {string} params.body.name - 岗位名称
 * @param {string} params.body.parentId - 上级id
 * @param {number} params.body.sort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_43(params) {
  return API.put(`/position`, { ...params.body })
}

