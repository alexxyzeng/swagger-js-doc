/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type/createUsingPOST_10
 * @summary 新增设施分类
 * @description 
 * @param {object} params
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
export function createUsingPOST_10(params) {
  return API.post(`/facilityType`, { ...params.body })
}

