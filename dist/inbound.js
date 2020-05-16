/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inventory/findUsingGET_19
 * @summary 入库单-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_19(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inventory/createUsingPOST_13
 * @summary 新增入库单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_13(params) {
  return API.post(, { ...params.body })
}

