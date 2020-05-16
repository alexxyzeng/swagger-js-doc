/**
 * @tags undertake-task-object-content
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-task-object-content/findByObjectIdUsingGET_1
 * @summary 承接查验-任务-对象-查验内容-列表
 * @description 
 * @param {object} params
 * @param {number} params.objectId - path
* @param {string} params.objectType - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByObjectIdUsingGET_1(params) {
  return API.get(`/undertake/task/object/content/${objectId}/${objectType}`, { params: { params.idparams.idparams.id }})
}

