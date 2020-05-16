/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type/createUsingPOST_38
 * @summary 新增服务类型
 * @description 
 * @param {object} params
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
export function createUsingPOST_38(params) {
  return API.post(`/workorder/service-type`, { ...params.body })
}

