/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type/findByIdUsingGET_39
 * @summary 查询服务类型-byId
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_39(params) {
  return API.get(`/workorder/service-type/${params.id}`, {})
}

/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type/updateUsingPUT_47
 * @summary 更新服务类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.code - 编码
 * @param {string} params.body.description - 描述
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {number} params.body.level - 层级
 * @param {string} params.body.name - 服务类型名称
 * @param {number} params.body.parentId - 父ID
 * @param {string} params.body.pathName - 全称
 * @param {number} params.body.projectId - 项目ID
 * @param {number} params.body.sort - 排序
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_47(params) {
  return API.put(`/workorder/service-type/${params.id}`, { ...params.body })
}

/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type/deleteUsingDELETE_43
 * @summary 删除服务类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_43(params) {
  return API.delete(`/workorder/service-type/${params.id}`, {})
}

