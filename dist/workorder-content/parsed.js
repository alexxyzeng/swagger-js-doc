/**
 * @tags workorder-content
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-content/createUsingPOST_52
 * @summary 创建工作内容
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.content - 工作内容
 * @param {string} params.body.createTime - 创建时间
 * @param {number} params.body.creator - 创建人
 * @param {string} params.body.creatorName - 创建人名称
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.modifyTime - 最后的修改时间
 * @param {number} params.body.projectId - 项目ID
 * @param {number} params.body.woWorkorderId - 工单id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_52(params) {
  return API.post(`/workorder-content`, { ...params.body })
}

