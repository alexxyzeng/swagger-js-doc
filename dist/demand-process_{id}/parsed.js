/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/findByIdUsingGET_6
 * @summary 需求处理记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_6(params) {
  return API.get(`/demand-process/${params.id}`, {})
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/updateUsingPUT_6
 * @summary 修改需求处理记录-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 跟进内容
 * @param {number} params.body.demandId - 需求ID
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.otherData - 其他数据
 * @param {number} params.body.processBy - 处理人
 * @param {string} params.body.processType - 处理类型 {创建=Create-1, 审核=Approve-2, 更新=Update-3, 跟进=Follow-4, 建单=CreateOrder-5, 处理完成=Done-6, 验证=Confirm-7, 评价=Evaluate-8, 回访=Visit-9, 取消=Cancel-10, 转派=Redeploy-11, 追加处理=Additional-12, 评论=Comment-13}
 * @param {number} params.body.refId - 关联ID
 * @param {number} params.body.refType - 关联类型
 * @param {string} params.body.remark - 备注
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_6(params) {
  return API.put(`/demand-process/${params.id}`, { ...params.body })
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/deleteUsingDELETE_3
 * @summary 删除需求处理记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_3(params) {
  return API.delete(`/demand-process/${params.id}`, {})
}

