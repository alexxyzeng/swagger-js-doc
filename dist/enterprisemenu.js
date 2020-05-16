/**
 * @tags base-menu
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-menu/findUsingGET_16
 * @summary 根据企业查询菜单
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_16(params) {
  return API.get(, { params: { params.id }})
}

/**
 * @tags base-menu
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-menu/updateUsingPUT_13
 * @summary 修改企业菜单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_13(params) {
  return API.put(, { ...params.body })
}

