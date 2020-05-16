/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-building/findAllUsingGET
 * @summary 获取房产所有信息，包括所有楼宇、楼层和空间，随后拍需显示上传项目ID
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
* @param {number} params.query.projectId - projectId
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllUsingGET(params) {
  return API.get(`/building/whole`, { params: { ...params.query })
}

