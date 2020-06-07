/**
 * @typedef {object} fileTypesItem
 
 * @property {string} contentType 文件ContentType
 * @property {number} fileId 文件Id
 * @property {string} fileName 文件名称
 * @property {number} fileSize 文件大小
 * @property {string} fileType 文件类型 文件类型{图片=Image-1, 视频=Video-2, 音频=Voice-3, 附件=Attachment-4}
 * @property {string} ossUrl ossUrl文件下载地址
 * @property {string} path 公共上传服务返回id，用于下载
 * @property {string} storeFileName 存储文件名，用于返回ossUrl地址
 * @property {string} url 公共服务文件下载地址
 *
*/

/**
 * @typedef {object} avatarUrl
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} bindRoleIdsItem
 
 * @property {string} code code
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} pathName 全称
 * @property {string} roleName 名称
 *
*/

/**
 * @typedef {object} customizedFieldsItem
 
 * @property {string} actualMeaning 
 * @property {string} originalFieldName 
 * @property {string} value 
 *
*/

/**
 * @typedef {object} partitionsItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} propertyPointsItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} grantPartition
 * @property {[partitionsItem]} partitions
 * @property {[propertyPointsItem]} propertyPoints
 *
*/

/**
 * @typedef {object} projectGroupsItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} projectsItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} grantProject
 * @property {[projectGroupsItem]} projectGroups
 * @property {[projectsItem]} projects
 *
*/

/**
 * @typedef {object} syncPartition
 * @property {[partitionsItem]} partitions
 * @property {[propertyPointsItem]} propertyPoints
 *
*/

/**
 * @typedef {object} syncProject
 * @property {[projectGroupsItem]} projectGroups
 * @property {[projectsItem]} projects
 *
*/

/**
 * @typedef {object} workTeamItem
 
 * @property {number} id 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} contentItem
 
 * @property {string} accountActivationStatus 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
 * @property {string} accountActivationStatusName 账号激活状态名称。0、未激活 1、已激活
 * @property {avatarUrl} avatarUrl 
 * @property {string} avatarUrlStr 头像文件地址-String
 * @property {string} bindAccount 绑定的账号，为空则表示未绑定账号
 * @property {number} bindAccountId 绑定的账号ID，为空则表示未绑定账号
 * @property {[bindRoleIdsItem]} bindRoleIds
 * @property {string} bindRolesFullName 绑定角色
 * @property {[customizedFieldsItem]} customizedFields
 * @property {string} deletePossible 是否可删除 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} demandScope 需求权限：0、所有需求可见 1、相关需求可见 {所有需求可见=All-0, 相关需求可见=Related-1}
 * @property {string} description 备注
 * @property {string} emDepartment 所属单位
 * @property {number} emLevel 职级，来源于字典表的dictValue字段
 * @property {string} emNo 员工编号
 * @property {number} emSource 员工类型，来源于字典表的dictValue字段
 * @property {string} emStatus 用户状态：0、离职 1、在职 {离职=EmStatusEnum-0, 在职=EmStatusEnum-1}
 * @property {string} emType 用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}
 * @property {string} emTypeName 用户类型名称：1、员工 2、领导层 3、管理层 4、供应商
 * @property {string} email 邮箱
 * @property {string} gender 性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}
 * @property {string} geoIds 项目城市IDs，以逗号分割
 * @property {string} geoLabels 项目城市显示名，以逗号分割
 * @property {grantPartition} grantPartition 
 * @property {string} grantPartitionFullName 分区权限全称
 * @property {grantProject} grantProject 
 * @property {string} grantProjectFullName 项目权限全称
 * @property {string} hgjId 汇管家账号
 * @property {number} id 用户ID
 * @property {string} idNumber 身份证号
 * @property {string} inspectionScope 巡检权限：0、所有巡检可见 1、相关巡检可见 {所有巡检可见=All-0, 相关巡检可见=Related-1}
 * @property {string} name 姓名
 * @property {number} orgDepartmentId 部门ID
 * @property {string} orgDepartmentName 部门名称
 * @property {string} orgDepartmentPathName 部门路径名称
 * @property {number} orgPositionId 岗位ID
 * @property {string} orgPositionName 岗位名称
 * @property {string} orgPositionPathName 岗位路径名称
 * @property {string} phone 手机号
 * @property {string} removePossible 是否可移出 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} skills 技能
 * @property {string} source  {手动增加=ManualIncrease-0, 一事通=SystemSync-2, HR系统推送=HRPush-3, 汇管家=HGJSync-4}
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 * @property {syncPartition} syncPartition 
 * @property {syncProject} syncProject 
 * @property {string} tel 电话号
 * @property {string} telephone 固定电话
 * @property {string} workOrderScope 工单权限：0、所有工单可见 1、相关工单可见 {所有工单可见=All-0, 相关工单可见=Related-1}
 * @property {[workTeamItem]} workTeam
 * @property {[number]} workTeamIds
 * @property {string} ystId 一事通账号
 *
*/

/**
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

/**
 * @typedef {object} data
 * @property {string} accountActivationStatus 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
 * @property {string} accountActivationStatusName 账号激活状态名称。0、未激活 1、已激活
 * @property {avatarUrl} avatarUrl 
 * @property {string} avatarUrlStr 头像文件地址-String
 * @property {string} bindAccount 绑定的账号，为空则表示未绑定账号
 * @property {number} bindAccountId 绑定的账号ID，为空则表示未绑定账号
 * @property {[bindRoleIdsItem]} bindRoleIds
 * @property {string} bindRolesFullName 绑定角色
 * @property {[customizedFieldsItem]} customizedFields
 * @property {string} deletePossible 是否可删除 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} demandScope 需求权限：0、所有需求可见 1、相关需求可见 {所有需求可见=All-0, 相关需求可见=Related-1}
 * @property {string} description 备注
 * @property {string} emDepartment 所属单位
 * @property {number} emLevel 职级，来源于字典表的dictValue字段
 * @property {string} emNo 员工编号
 * @property {number} emSource 员工类型，来源于字典表的dictValue字段
 * @property {string} emStatus 用户状态：0、离职 1、在职 {离职=EmStatusEnum-0, 在职=EmStatusEnum-1}
 * @property {string} emType 用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}
 * @property {string} emTypeName 用户类型名称：1、员工 2、领导层 3、管理层 4、供应商
 * @property {string} email 邮箱
 * @property {string} gender 性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}
 * @property {string} geoIds 项目城市IDs，以逗号分割
 * @property {string} geoLabels 项目城市显示名，以逗号分割
 * @property {grantPartition} grantPartition 
 * @property {string} grantPartitionFullName 分区权限全称
 * @property {grantProject} grantProject 
 * @property {string} grantProjectFullName 项目权限全称
 * @property {string} hgjId 汇管家账号
 * @property {number} id 用户ID
 * @property {string} idNumber 身份证号
 * @property {string} inspectionScope 巡检权限：0、所有巡检可见 1、相关巡检可见 {所有巡检可见=All-0, 相关巡检可见=Related-1}
 * @property {string} name 姓名
 * @property {number} orgDepartmentId 部门ID
 * @property {string} orgDepartmentName 部门名称
 * @property {string} orgDepartmentPathName 部门路径名称
 * @property {number} orgPositionId 岗位ID
 * @property {string} orgPositionName 岗位名称
 * @property {string} orgPositionPathName 岗位路径名称
 * @property {string} phone 手机号
 * @property {string} removePossible 是否可移出 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} skills 技能
 * @property {string} source  {手动增加=ManualIncrease-0, 一事通=SystemSync-2, HR系统推送=HRPush-3, 汇管家=HGJSync-4}
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 * @property {syncPartition} syncPartition 
 * @property {syncProject} syncProject 
 * @property {string} tel 电话号
 * @property {string} telephone 固定电话
 * @property {string} workOrderScope 工单权限：0、所有工单可见 1、相关工单可见 {所有工单可见=All-0, 相关工单可见=Related-1}
 * @property {[workTeamItem]} workTeam
 * @property {[number]} workTeamIds
 * @property {string} ystId 一事通账号
 *
*/

/**
 * @typedef {object} findUsingGET_17Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_9Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_9Body
 * @property {string} accountActivationStatus 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
 * @property {avatarUrl} avatarUrl 
 * @property {string} bindAccount 绑定的账号
 * @property {[number]} bindRoleIds
 * @property {string} demandScope 需求权限：0、所有需求可见 1、相关需求可见 {所有需求可见=All-0, 相关需求可见=Related-1}
 * @property {string} description 备注
 * @property {string} emDepartment 所属单位
 * @property {number} emLevel 职级，来源于字典表的dictValue字段
 * @property {string} emNo 员工编号
 * @property {number} emSource 员工类型，来源于字典表的dictValue字段
 * @property {string} emStatus 用户状态：0、离职 1、在职 {离职=EmStatusEnum-0, 在职=EmStatusEnum-1}
 * @property {string} emType 用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}
 * @property {string} email 邮箱
 * @property {string} gender 性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}
 * @property {string} geoIds 项目城市IDs，以逗号分割
 * @property {string} geoLabels 项目城市显示名，以逗号分割
 * @property {grantPartition} grantPartition 
 * @property {grantProject} grantProject 
 * @property {string} hgjId 汇管家账号
 * @property {string} idNumber 身份证号
 * @property {string} inspectionScope 巡检权限：0、所有巡检可见 1、相关巡检可见 {所有巡检可见=All-0, 相关巡检可见=Related-1}
 * @property {string} isUpdateProjectExt 是否更新扩展属性 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} name 姓名
 * @property {number} orgDepartmentId 部门ID
 * @property {string} orgDepartmentName 部门名称
 * @property {number} orgPositionId 岗位ID
 * @property {number} orgPostId 职位ID
 * @property {string} password 账号初始密码
 * @property {string} phone 手机号
 * @property {string} skills 技能
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 * @property {string} tel 电话号
 * @property {string} telephone 分机号
 * @property {number} userId ID
 * @property {string} workOrderScope 工单权限：0、所有工单可见 1、相关工单可见 {所有工单可见=All-0, 相关工单可见=Related-1}
 * @property {[number]} workTeamIds
 * @property {string} ystId 一事通账号
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/findUsingGET_17
 * @summary 用户列表&搜索
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.name - 姓名
* @param {string} params.query.eqBindAccount - 精确匹配账号
* @param {string} params.query.likeBindAccount - 模糊匹配账号
* @param {string} params.query.likeRoleName - 模糊匹配角色
* @param {string} params.query.likePartitionName - 模糊匹配分区
* @param {string} params.query.likeProjectName - 模糊匹配项目
* @param {string} params.query.emNo - 员工编号
* @param {string} params.query.phone - 手机号
* @param {string} params.query.telephone - 固定电话
* @param {string} params.query.emType - 用户类型：1、员工 2、领导层 3、管理层 4、供应商 5、内置用户 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}
* @param {string} params.query.accountActivationStatus - 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
* @param {number} params.query.orgPositionId - 岗位ID
* @param {number} params.query.employeeId - 查询主管的用户ID
* @param {[number]} params.query.idx - 岗位ID
* @param {string} params.query.orgDepartmentName - 部门名称
* @param {[string]} params.query.source - 用户来源 {手动增加=ManualIncrease-0, 一事通=SystemSync-2, HR系统推送=HRPush-3, 汇管家=HGJSync-4}
* @param {string} params.query.likeYstId - 模糊匹配一事通号
* @param {number} params.query.workTeamId - 工作组ID
 * @return {Promise<findUsingGET_17Response>}
*/
export function findUsingGET_17(params) {
  return API.get(`/employee`, { params: { ...params.query })
}

/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/createUsingPOST_9
 * @summary 新增用户
 * @description 
 * @param {object} params
  * @param {createUsingPOST_9Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_9Response>}
*/
export function createUsingPOST_9(params) {
  return API.post(`/employee`, { ...params.body })
}

