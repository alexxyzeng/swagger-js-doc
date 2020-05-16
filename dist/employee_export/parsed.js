/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/exportUsingGET_1
 * @summary 用户列表导出
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.name - 姓名
* @param {string} params.query.eqBindAccount - 精确匹配账号
* @param {string} params.query.likeBindAccount - 模糊匹配账号
* @param {string} params.query.emNo - 员工编号
* @param {string} params.query.phone - 手机号
* @param {string} params.query.telephone - 固定电话
* @param {string} params.query.emType - 用户类型：1、员工 2、领导层 3、管理层 4、供应商 5、内置用户 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}
* @param {string} params.query.accountActivationStatus - 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
* @param {number} params.query.orgPositionId - 岗位ID
* @param {number} params.query.employeeId - 查询主管的用户ID
* @param {[number]} params.query.idx - 岗位ID
* @param {string} params.query.orgDepartmentName - 部门名称
* @param {string} params.query.frontSource - 用户来源 {系统创建=SystemCreate-0, 第三方同步=ThirdPartSync-1}
* @param {string} params.query.ext1 - 一事通号
* @param {number} params.query.workTeamId - 工作组id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function exportUsingGET_1(params) {
  return API.get(`/employee/export`, { params: { ...params.query })
}

