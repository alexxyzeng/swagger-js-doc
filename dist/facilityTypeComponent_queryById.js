/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-component/queryByIdUsingGET
 * @summary 根据核心组件id查询
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function queryByIdUsingGET(params) {
  return API.get(, { params: { params.id }})
}

