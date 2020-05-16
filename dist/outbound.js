/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inventory/findUsingGET_46
 * @summary 出库单-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_46(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.id }})
}

/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inventory/createUsingPOST_32
 * @summary 新增出库单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_32(params) {
  return API.post(, { ...params.body })
}

