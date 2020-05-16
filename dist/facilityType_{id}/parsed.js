/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type/getSplicingCodeUsingGET
 * @summary 拼接设施编码
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function getSplicingCodeUsingGET(params) {
  return API.get(`/facilityType/${params.id}`, {})
}

/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type/updateUsingPUT_18
 * @summary 修改设施分类
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {[childrenItem]} params.body.children - 子节点
 * @param {string} params.body.fullName - 设施分类全称
 * @param {number} params.body.id - 设施分类id
 * @param {number} params.body.parentId - 上级id
 * @param {number} params.body.projectId - 项目ID
 * @param {number} params.body.sort - 排序字段
 * @param {string} params.body.typeCode - 设施分类编码
 * @param {string} params.body.typeName - 设施分类名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_18(params) {
  return API.put(`/facilityType/${params.id}`, { ...params.body })
}

/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type/deleteUsingDELETE_14
 * @summary 根据id删除设施分类
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_14(params) {
  return API.delete(`/facilityType/${params.id}`, {})
}

