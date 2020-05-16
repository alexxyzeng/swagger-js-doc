/**
 * @tags pm-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm-plan/findFacilitiesUsingGET
 * @summary 查询维保设备分类关联设备
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.maintId - 设置id
* @param {string} params.query.planDate - 计划日期
* @param {string} params.query.facilityCode - 设备编码
* @param {string} params.query.facilityName - 设备名称
* @param {string} params.query.facilityType - 系统分类
* @param {string} params.query.mountSpace - 安装位置
* @param {string} params.query.isMaintained - 是否维保 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findFacilitiesUsingGET(params) {
  return API.get(`/pm/plan/facility-type/facility`, { params: { ...params.query })
}

