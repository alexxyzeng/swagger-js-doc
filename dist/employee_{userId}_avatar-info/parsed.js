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
 * @typedef {object} data
 * @property {string} accountActivationStatus 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
 * @property {string} accountActivationStatusName 账号激活状态名称。0、未激活 1、已激活
 * @property {avatarUrl} avatarUrl 
 * @property {string} avatarUrlStr 头像文件地址-String
 * @property {string} bindAccount 绑定的账号，为空则表示未绑定账号
 * @property {number} bindAccountId 绑定的账号ID，为空则表示未绑定账号
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
 * @property {string} hgjId 汇管家账号
 * @property {number} id 用户ID
 * @property {string} idNumber 身份证号
 * @property {string} name 姓名
 * @property {number} orgDepartmentId 部门ID
 * @property {string} orgDepartmentName 部门名称
 * @property {string} orgDepartmentPathName 部门路径名称
 * @property {number} orgPositionId 岗位ID
 * @property {string} orgPositionName 岗位名称
 * @property {string} orgPositionPathName 岗位路径名称
 * @property {string} phone 手机号
 * @property {string} skills 技能
 * @property {string} source  {手动增加=ManualIncrease-0, 一事通=SystemSync-2, HR系统推送=HRPush-3, 汇管家=HGJSync-4}
 * @property {string} tel 电话号
 * @property {string} telephone 固定电话
 * @property {string} ystId 一事通账号
 *
*/

/**
 * @typedef {object} updateAvatarInfoUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateAvatarInfoUsingPUTBody
 * @property {avatarUrl} avatarUrl 
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/updateAvatarInfoUsingPUT
 * @summary 修改用户头像信息
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {updateAvatarInfoUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<updateAvatarInfoUsingPUTResponse>}
*/
export function updateAvatarInfoUsingPUT(params) {
  return API.put(`/employee/${params.userId}/avatar-info`, { ...params.body })
}

