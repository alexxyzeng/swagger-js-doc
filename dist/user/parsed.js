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
 * @typedef {object} detail
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
 * @typedef {object} enterpriseSetting
 * @property {string} createTime 
 * @property {number} creator 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {string} enterpriseDomain 
 * @property {string} enterpriseName 
 * @property {string} enterpriseNameEn 
 * @property {number} id 
 * @property {string} isSyncApp null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} managementMode null {多项目版=Project-1, 集团版=Enterprise-2}
 * @property {number} maxProject 
 * @property {number} maxUser 
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {string} serviceEndDate 
 * @property {string} serviceStartDate 
 * @property {string} shortName 
 * @property {number} tenantId 
 * @property {string} unifiedBeautifyBarcode null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedDepartment null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedPageStyle null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedPosition null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedPriority null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedRequirementType null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedRole null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedServiceType null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedUser null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} unifiedWebsiteTitle null 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} usedProject 
 * @property {number} usedUser 
 * @property {number} version 
 *
*/

/**
 * @typedef {object} data
 * @property {string} accountType 账号类型：0: 系统、 1: 租户 {耘申=Boss-0, 租户=Tenant-1}
 * @property {boolean} admin 是否是管理员（SuperAdmin、Admin、PAdmin）
 * @property {[number]} allProjects
 * @property {number} currentProjectId 当前所处项目，可能为空(例如在项目主页时)
 * @property {detail} detail [object Object]
 * @property {enterpriseSetting} enterpriseSetting 
 * @property {boolean} fmadmin 是否是FM系统管理员（Admin）
 * @property {string} isAdmin 是否管理员 1：是 0：否，结合accountType可以知道是超级管理员(SuperAdmin)还是FM系统管理员(Admin) 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} lastLoginIp 本次登录IP
 * @property {string} lastLoginTime 本次登录时间
 * @property {number} loginCount 登录次数
 * @property {string} loginName 登录账号
 * @property {boolean} padmin 是否是项目管理员（PAdmin）
 * @property {[string]} permissions
 * @property {string} previousLoginIp 上次登录IP
 * @property {string} previousLoginTime 上次登录时间
 * @property {[string]} roles
 * @property {boolean} superAdmin 是否是超级管理员（SuperAdmin）
 * @property {number} tenantId 租户ID（企业ID）
 * @property {number} userId 用户ID
 * @property {string} username 用户名字
 *
*/

/**
 * @typedef {object} userUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags app-index,base-user-login
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/app-index/userUsingGET
 * @summary 获取当前登录用户信息
 * @description 
 * @param {object} params
 
 * @return {Promise<userUsingGETResponse>}
*/
export function userUsingGET() {
  return API.get(`/user`, {})
}

