/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/updateBaseInfoUsingPUT
 * @summary 修改用户基本信息
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.accountActivationStatus - 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
 * @param {undefined} params.body.avatarUrl - undefined
 * @param {string} params.body.bindAccount - 绑定的账号
 * @param {[bindRoleIdsItem]} params.body.bindRoleIds - 绑定的角色id
 * @param {string} params.body.demandScope - 需求权限：0、所有需求可见 1、相关需求可见 {所有需求可见=All-0, 相关需求可见=Related-1}
 * @param {string} params.body.description - 备注
 * @param {string} params.body.emNo - 员工编号
 * @param {string} params.body.emStatus - 用户状态：0、离职 1、在职 {员工=EmStatusEnum-1, 在职=EmStatusEnum-2}
 * @param {string} params.body.emType - 用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}
 * @param {string} params.body.email - 邮箱
 * @param {string} params.body.gender - 性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}
 * @param {[grantProjectIdsItem]} params.body.grantProjectIds - 授权项目ID
 * @param {string} params.body.inspectionScope - 巡检权限：0、所有巡检可见 1、相关巡检可见 {所有巡检可见=All-0, 相关巡检可见=Related-1}
 * @param {string} params.body.name - 姓名
 * @param {number} params.body.orgDepartmentId - 部门ID
 * @param {number} params.body.orgPositionId - 岗位ID
 * @param {number} params.body.orgPostId - 职位ID
 * @param {string} params.body.password - 账号初始密码
 * @param {string} params.body.phone - 手机号
 * @param {string} params.body.skills - 技能
 * @param {number} params.body.spBuildingId - 大楼ID
 * @param {number} params.body.spFloorId - 楼层ID
 * @param {number} params.body.spSpaceId - 空间ID
 * @param {string} params.body.telephone - 固定电话
 * @param {number} params.body.userId - ID
 * @param {string} params.body.workOrderScope - 工单权限：0、所有工单可见 1、相关工单可见 {所有工单可见=All-0, 相关工单可见=Related-1}
 * @param {[workTeamIdsItem]} params.body.workTeamIds - 工作组ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateBaseInfoUsingPUT(params) {
  return API.put(`/employee/${params.userId}/base-info`, { ...params.body })
}

