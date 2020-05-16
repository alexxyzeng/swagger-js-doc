/**
 * @tags base-project
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project/detailUsingGET_1
 * @summary 项目详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailUsingGET_1(params) {
  return API.get(`/project/${params.id}`, {})
}

/**
 * @tags base-project
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project/patchUsingPUT_2
 * @summary 修改项目信息
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.description - 项目组描述
 * @param {string} params.body.projectGroupName - 项目组名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function patchUsingPUT_2(params) {
  return API.put(`/project/${params.id}`, { ...params.body })
}

/**
 * @tags base-project
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project/deleteUsingDELETE_37
 * @summary 删除项目
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_37(params) {
  return API.delete(`/project/${params.id}`, {})
}

