/**
 * @tags workorder-tool
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-tool/createUsingPOST_57
 * @summary 创建工单关联的工具
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.cost - 花费 单位：元
 * @param {number} params.body.count - 数量
 * @param {string} params.body.createTime - 创建时间
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.model - 工具型号
 * @param {string} params.body.modifyTime - 最后的修改时间
 * @param {string} params.body.name - 工具名称
 * @param {number} params.body.projectId - 项目ID
 * @param {string} params.body.remark - 备注
 * @param {string} params.body.unit - 单位
 * @param {number} params.body.woWorkorderId - 工单id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_57(params) {
  return API.post(`/workorder-tool`, { ...params.body })
}

