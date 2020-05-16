/**
 * @tags workorder-space
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-space/createUsingPOST_56
 * @summary 创建工单空间位置
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.description - 处理方式
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.spBuildingId - 大楼id
 * @param {number} params.body.spFloorId - 楼层id
 * @param {number} params.body.spSpaceId - 房间id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_56(params) {
  return API.post(`/workorder-space/${params.workorderId}`, { ...params.body })
}

