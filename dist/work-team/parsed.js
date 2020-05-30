/**
 * @typedef {object} fileTypesItem
 * @property {string} contentType 文件ContentType
 * @property {number} fileId 文件Id
 * @property {string} fileName 文件名称
 * @property {number} fileSize 文件大小
 * @property {string} fileType 文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}
 * @property {string} ossUrl ossUrl文件下载地址
 * @property {string} path 公共上传服务返回id，用于下载
 * @property {string} storeFileName 存储文件名，用于返回ossUrl地址
 * @property {string} url 公共服务文件下载地址
 *
*/
/**
 * @typedef {object} processFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/
/**
 * @typedef {object} siteFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/
/**
 * @typedef {object} facilityDtosItem
 * @property {string} createTime 创建时间
 * @property {number} facFacilityId 设备id
 * @property {string} facilityCode 设备编码
 * @property {string} facilityName 设备名称
 * @property {string} facilityType 系统分类
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} mountSpace 位置
 * @property {string} processDesc 处理方式
 * @property {object} undefined 
 * @property {number} projectId 项目ID
 * @property {string} siteDesc 现场描述
 * @property {object} undefined 
 * @property {number} woWorkorderId 工单id
 *
*/
/**
 * @typedef {object} files
 * @property {[fileTypesItem]} fileTypes
 *
*/
/**
 * @typedef {object} spaceDtosItem
 * @property {string} createTime 创建时间
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} spBuildingId 大楼id
 * @property {string} spBuildingName 楼宇名称
 * @property {number} spFloorId 楼层id
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 房间id
 * @property {string} spSpaceName 房间名称
 * @property {number} woWorkorderId 工单id
 *
*/
/**
 * @typedef {object} workordersItem
 * @property {string} appointmentEndTime 预约结束时间，从服务台同步过来
 * @property {string} appointmentStartTime 预约开始时间，从服务台同步过来
 * @property {string} description 问题描述
 * @property {[facilityDtosItem]} facilityDtos
 * @property {object} undefined 
 * @property {string} isRefFacility 是否关联设备 0-不关联 1-关联 是否枚举{否=No, 是=Yes}
 * @property {number} orgDepartmentId 部门id
 * @property {string} phone 联系电话
 * @property {[spaceDtosItem]} spaceDtos
 * @property {number} userId 用户/客户ID
 * @property {string} userType 用户类型 1-用户 2-客户 9-填写 {员工=User, 客户=Clientele, 其他=Other}
 * @property {string} username 报障人名称
 * @property {number} woPriorityId 优先级id
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 服务类型关联id, 集团版必传
 * @property {number} woSlaId slaId
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}
 *
*/
/**
 * @typedef {object} createUsingPOSTBody
 * @property {string} address 详细地址
 * @property {string} assetNo 资产编号
 * @property {number} buildArea 建筑面积
 * @property {string} buildingNo 楼栋
 * @property {string} buildingUnit 单元
 * @property {string} code 编码
 * @property {string} completionTime 竣工时间
 * @property {string} developer 开发商
 * @property {string} displayName 房产名称，不能重复，根据appId,tenentId，bizId维度不同，房产名称，不可以重复
 * @property {string} displayNameEn 房产英文名
 * @property {number} endFloor 结束楼层
 * @property {number} floorArea 楼层标准面积
 * @property {number} id 房产ID，新增的时候不填写，修改时填写
 * @property {number} latitude 纬度
 * @property {number} longitude 经度
 * @property {string} pathName 路径名称
 * @property {string} remark 备注
 * @property {number} roomRate 得房率
 * @property {number} sort 排序，必填
 * @property {number} startFloor 起始楼层
 * @property {number} struct 房产结构
 * @property {string} timeZone 所在时区
 *
*/
/**
 * @typedef {object} updateRegionUsingPUTBody
 * @property {string} regionCode 片区编码
 * @property {string} regionName 片区名
 * @property {number} regionSort 片区排序
 *
*/
/**
 * @typedef {object} updateUsingPUTBody
 * @property {string} address 详细地址
 * @property {string} assetNo 资产编号
 * @property {number} buildArea 建筑面积
 * @property {string} buildingNo 楼栋
 * @property {string} buildingUnit 单元
 * @property {string} code 编码
 * @property {string} completionTime 竣工时间
 * @property {string} developer 开发商
 * @property {string} displayName 房产名称，不能重复，根据appId,tenentId，bizId维度不同，房产名称，不可以重复
 * @property {string} displayNameEn 房产英文名
 * @property {number} endFloor 结束楼层
 * @property {number} floorArea 楼层标准面积
 * @property {number} id 房产ID，新增的时候不填写，修改时填写
 * @property {number} latitude 纬度
 * @property {number} longitude 经度
 * @property {string} pathName 路径名称
 * @property {string} remark 备注
 * @property {number} roomRate 得房率
 * @property {number} sort 排序，必填
 * @property {number} startFloor 起始楼层
 * @property {number} struct 房产结构
 * @property {string} timeZone 所在时区
 *
*/
/**
 * @typedef {object} addressListItem
 * @property {number} id 客户地址id
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/
/**
 * @typedef {object} createUsingPOST_1Body
 * @property {[addressListItem]} addressList
 * @property {string} company 公司
 * @property {string} customerName 客户姓名
 * @property {string} customerTitle 客户称谓
 * @property {string} department 部门
 * @property {string} description 描述
 * @property {string} email 客户邮箱
 * @property {number} id 客户id
 * @property {string} mobile 客户手机号
 * @property {string} position 职位
 * @property {number} projectId 项目ID
 * @property {string} qq QQ
 * @property {string} telephone 客户电话
 * @property {string} wechat 微信
 *
*/
/**
 * @typedef {object} updateUsingPUT_3Body
 * @property {[addressListItem]} addressList
 * @property {string} company 公司
 * @property {string} customerName 客户姓名
 * @property {string} customerTitle 客户称谓
 * @property {string} department 部门
 * @property {string} description 描述
 * @property {string} email 客户邮箱
 * @property {number} id 客户id
 * @property {string} mobile 客户手机号
 * @property {string} position 职位
 * @property {number} projectId 项目ID
 * @property {string} qq QQ
 * @property {string} telephone 客户电话
 * @property {string} wechat 微信
 *
*/
/**
 * @typedef {object} executeUsingPOSTBody
 * @property {string} operate 操作 {下载模版=DownloadTemplate-0, 导出数据=Export-1, 新增=Add-2, 删除=Delete-3, 覆盖=Override-4, 增量导入=IncrAdd-5, 重新导入=Reimport-6}
 * @property {string} taskCode 文档编号
 *
*/
/**
 * @typedef {object} spacesItem
 * @property {number} id 由程序分配的唯一ID
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/
/**
 * @typedef {object} workorderListItem
 * @property {number} departmentId 部门ID
 * @property {string} description 工单描述
 * @property {[number]} facilities
 * @property {string} isRefFacility 是否关联设备 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} priorityId 优先级ID
 * @property {number} serviceTypeId 服务类型ID
 * @property {number} serviceTypeRefId 服务类型关联ID
 * @property {number} slaId SLA
 * @property {[spacesItem]} spaces
 * @property {string} workorderType 工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/
/**
 * @typedef {object} createUsingPOST_3Body
 * @property {string} appellation 称谓
 * @property {string} company 公司名称
 * @property {number} customerId 客户ID
 * @property {number} demandTypeRefId 需求类型改关联ID
 * @property {string} department 部门
 * @property {number} departmentId 部门id
 * @property {string} description 需求描述
 * @property {string} email 电子信箱
 * @property {number} employeeId 员工ID
 * @property {string} expectEndTime 预计结束时间
 * @property {string} expectStartTime 预计开始时间
 * @property {string} fromEmail 来源信箱
 * @property {string} isFromEmail 是否来自邮件 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} phone 手机号
 * @property {string} position 职位
 * @property {number} projectId 项目ID
 * @property {string} source 来源 {微信=Wechat-1, 手机=Phone-2, 邮件=Email-3, PC=Web-4}
 * @property {[spacesItem]} spaces
 * @property {string} tel 电话
 * @property {string} userType 用户类型，0：其他；1：员工；2：客户； {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @property {string} username 报障人名称
 * @property {[workorderListItem]} workorderList
 *
*/
/**
 * @typedef {object} updateLastUsingPUTBody
 * @property {string} content 跟进内容
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} otherData 其他数据
 * @property {number} processBy 处理人
 * @property {string} processType 处理类型 {创建=Create-1, 审核=Approve-2, 更新=Update-3, 跟进=Follow-4, 建单=CreateOrder-5, 处理完成=Done-6, 验证=Confirm-7, 评价=Evaluate-8, 回访=Visit-9, 取消=Cancel-10, 转派=Redeploy-11, 追加处理=Additional-12, 评论=Comment-13}
 * @property {number} refId 关联ID
 * @property {number} refType 关联类型
 * @property {string} remark 备注
 *
*/
/**
 * @typedef {object} updateUsingPUT_6Body
 * @property {string} content 跟进内容
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} otherData 其他数据
 * @property {number} processBy 处理人
 * @property {string} processType 处理类型 {创建=Create-1, 审核=Approve-2, 更新=Update-3, 跟进=Follow-4, 建单=CreateOrder-5, 处理完成=Done-6, 验证=Confirm-7, 评价=Evaluate-8, 回访=Visit-9, 取消=Cancel-10, 转派=Redeploy-11, 追加处理=Additional-12, 评论=Comment-13}
 * @property {number} refId 关联ID
 * @property {number} refType 关联类型
 * @property {string} remark 备注
 *
*/
/**
 * @typedef {object} createUsingPOST_2Body
 * @property {number} additionalBy 追加人ID
 * @property {string} approveOpinion 审核意见
 * @property {string} approveStatus 审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
 * @property {string} approveTime 审核时间
 * @property {number} approverId 审核人ID
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} processOpinion 追加处理意见
 * @property {number} projectId 项目ID
 * @property {number} tenantId 租户ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_4Body
 * @property {number} additionalBy 追加人ID
 * @property {string} approveOpinion 审核意见
 * @property {string} approveStatus 审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
 * @property {string} approveTime 审核时间
 * @property {number} approverId 审核人ID
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} processOpinion 追加处理意见
 * @property {number} projectId 项目ID
 * @property {number} tenantId 租户ID
 *
*/
/**
 * @typedef {object} createCommonUsingPOSTBody
 * @property {string} content 评论内容
 *
*/
/**
 * @typedef {object} updateByProductUsingPUTBody
 * @property {number} id 由程序分配的唯一ID
 *
*/
/**
 * @typedef {object} updateByTenantUsingPUTBody
 * @property {number} id 由程序分配的唯一ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_5Body
 * @property {number} id 由程序分配的唯一ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_7Body
 * @property {string} content 跟进内容
 * @property {number} id 由程序分配的唯一ID
 * @property {string} remark 备注
 *
*/
/**
 * @typedef {object} createUsingPOST_5Body
 * @property {string} code 需求类型编码
 * @property {string} description 需求描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRefOrder 是否关联工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isVisiblePhotograph 随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} sort 排序
 * @property {string} typeName 类型名称
 *
*/
/**
 * @typedef {object} syncDemandTypeUsingPUTBody
 * @property {number} projectId 项目ID
 * @property {[number]} typeRefs
 *
*/
/**
 * @typedef {object} updateUsingPUT_10Body
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isReqScope 需求位置是否必填 是否枚举{否=No-0, 是=Yes-1}
 * @property {[number]} reviewers
 * @property {[number]} workTeams
 *
*/
/**
 * @typedef {object} updateUsingPUT_9Body
 * @property {string} code 需求类型编码
 * @property {string} description 需求描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRefOrder 是否关联工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isVisiblePhotograph 随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} sort 排序
 * @property {string} typeName 类型名称
 *
*/
/**
 * @typedef {object} satisfactionsItem
 * @property {string} type 类型 {服务质量=Quality-1, 服务速度=Speed-2, 服务态度=Attitude-3}
 * @property {string} grade 评级
 * @property {number} maxStar 最大星数
 * @property {number} score 分值
 * @property {number} star 当前星数
 *
*/
/**
 * @typedef {object} createEvaluateUsingPOSTBody
 * @property {string} content 反馈意见-前端组件
 * @property {number} evaluateBy 评价人
 * @property {string} feedback 反馈意见
 * @property {number} id 由程序分配的唯一ID
 * @property {[satisfactionsItem]} satisfactions
 *
*/
/**
 * @typedef {object} createUsingPOST_4Body
 * @property {string} content 跟进内容
 * @property {number} id 由程序分配的唯一ID
 * @property {string} remark 备注
 *
*/
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
 * @typedef {object} updateUsingPUT_8Body
 * @property {[fileTypesItem]} fileTypes
 *
*/
/**
 * @typedef {object} satisfactionsItem
 * @property {string} type 类型 {服务质量=Quality-1, 服务速度=Speed-2, 服务态度=Attitude-3}
 * @property {string} grade 评级
 * @property {number} maxStar 最大星数
 * @property {number} score 分值
 * @property {number} star 当前星数
 *
*/
/**
 * @typedef {object} createVisitUsingPOSTBody
 * @property {string} content 反馈意见-前端组件
 * @property {number} evaluateBy 评价人
 * @property {string} feedback 反馈意见
 * @property {number} id 由程序分配的唯一ID
 * @property {[satisfactionsItem]} satisfactions
 *
*/
/**
 * @typedef {object} affirmUsingPUTBody
 * @property {string} content 内容
 * @property {string} isPass 是否通过 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 *
*/
/**
 * @typedef {object} updateDemandTypeUsingPUTBody
 * @property {number} demandTypeRefId 需求类型改关联ID
 *
*/
/**
 * @typedef {object} obsoleteUsingPUTBody
 * @property {string} content 内容
 *
*/
/**
 * @typedef {object} reviewUsingPUTBody
 * @property {string} content 内容
 * @property {boolean} isPass 是否通过
 *
*/
/**
 * @typedef {object} createWorkorderUsingPUTBodyItem
 
 *
*/
/**
 * @typedef {object} createUsingPOST_6Body
 * @property {string} code 编码
 * @property {[string]} departmentType
 * @property {string} description 描述
 * @property {number} id 部门id
 * @property {number} level 层级
 * @property {string} name 部门名称
 * @property {string} parentId 父级部门id
 * @property {string} pathName 层级名称
 * @property {[number]} projectIds
 * @property {number} sort 排序
 *
*/
/**
 * @typedef {object} updateUsingPUT_11Body
 * @property {string} code 编码
 * @property {[string]} departmentType
 * @property {string} description 描述
 * @property {number} id 部门id
 * @property {number} level 层级
 * @property {string} name 部门名称
 * @property {string} parentId 父级部门id
 * @property {string} pathName 层级名称
 * @property {[number]} projectIds
 * @property {number} sort 排序
 *
*/
/**
 * @typedef {object} createUsingPOST_7Body
 * @property {number} departmentId 部门ID
 * @property {number} id 由程序分配的唯一ID
 * @property {number} projectId 项目ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_12Body
 * @property {number} departmentId 部门ID
 * @property {number} id 由程序分配的唯一ID
 * @property {number} projectId 项目ID
 *
*/
/**
 * @typedef {object} createUsingPOST_9Body
 * @property {string} accountActivationStatus 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
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
 * @typedef {object} batchActivateUsingPUTBody
 * @property {[number]} userIds
 *
*/
/**
 * @typedef {object} batchDeactivateUsingPUTBody
 * @property {[number]} userIds
 *
*/
/**
 * @typedef {object} batchDeleteUsingPUTBody
 * @property {[number]} userIds
 *
*/
/**
 * @typedef {object} batchEditUsingPUTBody
 * @property {string} accountActivationStatus 账号状态 {失效=Failure-0, 激活=Activate-1}
 * @property {number} emLevel 职级，来源于字典表的dictValue字段
 * @property {string} emType 用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}
 * @property {string} gender 性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}
 * @property {number} orgDepartmentId 部门ID
 * @property {[number]} roleIds
 * @property {[number]} userIds
 *
*/
/**
 * @typedef {object} batchGrantProjectUsingPUTBody
 * @property {[number]} projectIds
 * @property {[number]} userIds
 *
*/
/**
 * @typedef {object} batchRemoveUsingPUTBody
 * @property {[number]} userIds
 *
*/
/**
 * @typedef {object} resetPasswordUsingPUTBody
 * @property {number} employeeId 人员id
 * @property {string} newPassword 新密码
 *
*/
/**
 * @typedef {object} updateBySelfUsingPUTBody
 * @property {string} description 描述
 * @property {string} emNo 员工编号
 * @property {string} email 邮箱
 * @property {string} gender 性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}
 * @property {string} idNumber 身份证号
 * @property {string} name 姓名
 * @property {number} orgPositionId 岗位
 * @property {number} orgPostId 职位ID
 * @property {string} phone 手机号
 * @property {string} tel 电话号
 * @property {string} telephone 分机号
 *
*/
/**
 * @typedef {object} thirdAccountBindUsingPOSTBody
 * @property {number} appId 应用ID，做数据隔离用
 * @property {number} bizId 业务ID，做数据隔离用
 * @property {string} code 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @property {string} config 第三方信息
 * @property {string} displayname 中文描述 钉钉 微信 一事通
 * @property {number} id 由程序分配的唯一ID
 * @property {number} status 
 *
*/
/**
 * @typedef {object} thirdAccountUnbindUsingPUTBody
 * @property {number} appId 应用ID，做数据隔离用
 * @property {number} bizId 业务ID，做数据隔离用
 * @property {string} code 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @property {string} config 第三方信息
 * @property {string} displayname 中文描述 钉钉 微信 一事通
 * @property {number} id 由程序分配的唯一ID
 * @property {number} status 
 *
*/
/**
 * @typedef {object} updatePasswordUsingPUTBody
 * @property {string} newPassword 新密码
 * @property {string} oldPassword 原密码
 *
*/
/**
 * @typedef {object} updateUsingPUT_14Body
 * @property {string} accountActivationStatus 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
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
 * @typedef {object} updateAvatarInfoUsingPUTBody
 
 *
*/
/**
 * @typedef {object} updateBaseInfoUsingPUTBody
 * @property {string} accountActivationStatus 账号激活状态。0、未激活 1、已激活 {失效=Failure-0, 激活=Activate-1}
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
 * @typedef {object} bindDeviceUsingPUTBody
 * @property {string} deviceId 设备信息
 *
*/
/**
 * @typedef {object} updateEmNoInfoUsingPUTBody
 * @property {string} emNo 员工编号
 *
*/
/**
 * @typedef {object} updateNameInfoUsingPUTBody
 * @property {string} name 姓名
 *
*/
/**
 * @typedef {object} updatePhoneInfoUsingPUTBody
 * @property {string} phone 手机号
 *
*/
/**
 * @typedef {object} unbindDeviceUsingPUTBody
 * @property {string} deviceId 设备信息
 *
*/
/**
 * @typedef {object} createUsingPOST_8Body
 * @property {number} currentCost 本期费用：分
 * @property {number} currentDosage 本期用量
 * @property {string} energyConsumptionCycle 能耗周期
 * @property {number} energyConsumptionType 能耗类型
 * @property {number} id 由程序分配的唯一ID
 *
*/
/**
 * @typedef {object} exportUsingPOSTBody
 * @property {string} operate 操作 {下载模版=DownloadTemplate-0, 导出数据=Export-1, 新增=Add-2, 删除=Delete-3, 覆盖=Override-4, 增量导入=IncrAdd-5, 重新导入=Reimport-6}
 * @property {string} taskCode 文档编号
 *
*/
/**
 * @typedef {object} updateUsingPUT_13Body
 * @property {number} currentCost 本期费用：分
 * @property {number} currentDosage 本期用量
 * @property {string} energyConsumptionCycle 能耗周期
 * @property {number} energyConsumptionType 能耗类型
 * @property {number} id 由程序分配的唯一ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_15Body
 * @property {[number]} permissionId
 * @property {number} tenantId tenantId
 *
*/
/**
 * @typedef {object} componentsItem
 * @property {string} componentBrand 组件品牌
 * @property {string} componentCode 组件编码
 * @property {string} componentLife 质保周期
 * @property {string} componentModel 组件型号
 * @property {string} componentName 组件名称
 * @property {string} componentUnit 组件单位
 * @property {string} enableTime 安装时间
 * @property {string} expireTime 质保到期
 * @property {number} facilityId 设备id
 * @property {number} typeComponentId 设备分类组件id
 *
*/
/**
 * @typedef {object} servicesItem
 * @property {string} serviceArea 服务区域
 * @property {string} serviceObject 服务对象
 *
*/
/**
 * @typedef {object} facilityServiceItem
 * @property {[servicesItem]} services
 *
*/
/**
 * @typedef {object} paramsItem
 * @property {string} extend 扩展
 * @property {number} facilityId 设备id
 * @property {string} paramDesc 描述
 * @property {string} paramName 参数名称
 * @property {string} paramType 参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 单位
 * @property {string} paramValue 参数值
 * @property {string} remark 备注
 * @property {number} typeParamId 设备分类参数id
 *
*/
/**
 * @typedef {object} createUsingPOST_10Body
 * @property {string} capitalCode 资产编码
 * @property {[componentsItem]} components
 * @property {string} enableDate 启用日期
 * @property {string} exfactoryDate 出厂日期
 * @property {string} extend 扩展
 * @property {string} facilityBrand 品牌dict_type=facility_tally_brand
 * @property {string} facilityCode 设备编码
 * @property {string} facilityDesc 描述
 * @property {string} facilityImportance 重要性dict_type=facility_tally_importance 1-一般 2-重要 3-非常重要 {一般=General-1, 重要=Important-2, 非常重要=VeryImportant-3}
 * @property {string} facilityLevel 设备级别dict_type=facility_tally_level 0-一级设备 1-二级设备 2-三级设备 3-四级设备 4-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
 * @property {number} facilityLife 质保周期
 * @property {string} facilityModel 型号
 * @property {string} facilityName 设备名称
 * @property {string} facilitySerial 设备序列号
 * @property {[facilityServiceItem]} facilityService
 * @property {string} facilityStatus 设备状态dict_type=facility_tally_status 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
 * @property {number} facilityTypeId 系统分类
 * @property {string} facilityWeight 重量
 * @property {string} fixedCode 固定编码
 * @property {string} lifeUnit 质保周期单位 {年=Year-1, 月=Month-2}
 * @property {string} mountDate 安装日期
 * @property {string} mountSpace 安装位置
 * @property {[paramsItem]} params
 * @property {[number]} parents
 * @property {string} remark 备注
 * @property {number} spBuildingId 大厦
 * @property {number} spFloorId 楼层
 * @property {number} spSpaceId 房间
 *
*/
/**
 * @typedef {object} updateUsingPUT_16Body
 * @property {string} componentBrand 组件品牌
 * @property {string} componentCode 组件编码
 * @property {string} componentLife 质保周期
 * @property {string} componentModel 组件型号
 * @property {string} componentName 组件名称
 * @property {string} componentUnit 组件单位
 * @property {string} enableTime 安装时间
 * @property {string} expireTime 质保到期
 * @property {number} facilityId 设备id
 * @property {number} typeComponentId 设备分类组件id
 *
*/
/**
 * @typedef {object} updateUsingPUT_18Body
 * @property {string} extend 扩展
 * @property {number} facilityId 设备id
 * @property {string} paramDesc 描述
 * @property {string} paramName 参数名称
 * @property {string} paramType 参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 单位
 * @property {string} paramValue 参数值
 * @property {string} remark 备注
 * @property {number} typeParamId 设备分类参数id
 *
*/
/**
 * @typedef {object} createBatchUsingPUTBody
 * @property {number} facilityId 设备id
 * @property {number} parentFacilityId 上级设备id
 * @property {[number]} refFacilityIds
 *
*/
/**
 * @typedef {object} componentsItem
 * @property {string} componentBrand 组件品牌
 * @property {string} componentCode 组件编码
 * @property {string} componentLife 质保周期
 * @property {string} componentModel 组件型号
 * @property {string} componentName 组件名称
 * @property {string} componentUnit 组件单位
 * @property {string} enableTime 安装时间
 * @property {string} expireTime 质保到期
 * @property {number} facilityId 设备id
 * @property {number} typeComponentId 设备分类组件id
 *
*/
/**
 * @typedef {object} servicesItem
 * @property {string} serviceArea 服务区域
 * @property {string} serviceObject 服务对象
 *
*/
/**
 * @typedef {object} facilityServiceItem
 * @property {[servicesItem]} services
 *
*/
/**
 * @typedef {object} paramsItem
 * @property {string} extend 扩展
 * @property {number} facilityId 设备id
 * @property {string} paramDesc 描述
 * @property {string} paramName 参数名称
 * @property {string} paramType 参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 单位
 * @property {string} paramValue 参数值
 * @property {string} remark 备注
 * @property {number} typeParamId 设备分类参数id
 *
*/
/**
 * @typedef {object} updateUsingPUT_17Body
 * @property {string} capitalCode 资产编码
 * @property {[componentsItem]} components
 * @property {string} enableDate 启用日期
 * @property {string} exfactoryDate 出厂日期
 * @property {string} extend 扩展
 * @property {string} facilityBrand 品牌dict_type=facility_tally_brand
 * @property {string} facilityCode 设备编码
 * @property {string} facilityDesc 描述
 * @property {string} facilityImportance 重要性dict_type=facility_tally_importance 1-一般 2-重要 3-非常重要 {一般=General-1, 重要=Important-2, 非常重要=VeryImportant-3}
 * @property {string} facilityLevel 设备级别dict_type=facility_tally_level 0-一级设备 1-二级设备 2-三级设备 3-四级设备 4-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
 * @property {number} facilityLife 质保周期
 * @property {string} facilityModel 型号
 * @property {string} facilityName 设备名称
 * @property {string} facilitySerial 设备序列号
 * @property {[facilityServiceItem]} facilityService
 * @property {string} facilityStatus 设备状态dict_type=facility_tally_status 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
 * @property {number} facilityTypeId 系统分类
 * @property {string} facilityWeight 重量
 * @property {string} fixedCode 固定编码
 * @property {string} lifeUnit 质保周期单位 {年=Year-1, 月=Month-2}
 * @property {string} mountDate 安装日期
 * @property {string} mountSpace 安装位置
 * @property {[paramsItem]} params
 * @property {[number]} parents
 * @property {string} remark 备注
 * @property {number} spBuildingId 大厦
 * @property {number} spFloorId 楼层
 * @property {number} spSpaceId 房间
 *
*/
/**
 * @typedef {object} childrenItem
 * @property {[childrenItem]} children
 * @property {string} fullName 设施分类全称
 * @property {number} id 设施分类id
 * @property {number} parentId 上级id
 * @property {number} projectId 项目ID
 * @property {number} sort 排序字段
 * @property {string} typeCode 设施分类编码
 * @property {string} typeName 设施分类名称
 *
*/
/**
 * @typedef {object} createUsingPOST_12Body
 * @property {[childrenItem]} children
 * @property {string} fullName 设施分类全称
 * @property {number} id 设施分类id
 * @property {number} parentId 上级id
 * @property {number} projectId 项目ID
 * @property {number} sort 排序字段
 * @property {string} typeCode 设施分类编码
 * @property {string} typeName 设施分类名称
 *
*/
/**
 * @typedef {object} childrenItem
 
 *
*/
/**
 * @typedef {object} updateUsingPUT_20Body
 * @property {[childrenItem]} children
 * @property {string} fullName 设施分类全称
 * @property {number} id 设施分类id
 * @property {number} parentId 上级id
 * @property {number} projectId 项目ID
 * @property {number} sort 排序字段
 * @property {string} typeCode 设施分类编码
 * @property {string} typeName 设施分类名称
 *
*/
/**
 * @typedef {object} createUsingPOST_11Body
 * @property {string} componentBelongType null {上级分类的核心组件=Parent-0, 自己的核心组件=Oneself-1}
 * @property {string} componentBrand 
 * @property {string} componentLife 
 * @property {string} componentName 
 * @property {string} componentUnit 
 * @property {string} extend 
 * @property {number} id 
 * @property {string} lifeUnit null {年=Year-1, 月=Month-2}
 * @property {string} lifeUnitName 
 * @property {string} remark 
 * @property {number} typeId 
 *
*/
/**
 * @typedef {object} updateUsingPUT_19Body
 * @property {string} componentBelongType null {上级分类的核心组件=Parent-0, 自己的核心组件=Oneself-1}
 * @property {string} componentBrand 
 * @property {string} componentLife 
 * @property {string} componentName 
 * @property {string} componentUnit 
 * @property {string} extend 
 * @property {number} id 
 * @property {string} lifeUnit null {年=Year-1, 月=Month-2}
 * @property {string} lifeUnitName 
 * @property {string} remark 
 * @property {number} typeId 
 *
*/
/**
 * @typedef {object} createUsingPOST_13Body
 * @property {string} extend 
 * @property {number} id 
 * @property {string} paramBelongType null {上级分类的参数=Parent-0, 自己的参数=Oneself-1}
 * @property {string} paramDefault 
 * @property {string} paramDesc 
 * @property {string} paramName 
 * @property {string} paramType null {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 
 * @property {string} remark 
 * @property {number} typeId 
 * @property {string} unitName 
 *
*/
/**
 * @typedef {object} updateUsingPUT_21Body
 * @property {string} extend 
 * @property {number} id 
 * @property {string} paramBelongType null {上级分类的参数=Parent-0, 自己的参数=Oneself-1}
 * @property {string} paramDefault 
 * @property {string} paramDesc 
 * @property {string} paramName 
 * @property {string} paramType null {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 
 * @property {string} remark 
 * @property {number} typeId 
 * @property {string} unitName 
 *
*/
/**
 * @typedef {object} createUsingPOST_14Body
 * @property {number} area 管理面积
 * @property {string} code 编码
 * @property {string} createTime 最后的修改时间
 * @property {number} deleted  是否删除：0、未删除 1、已删除
 * @property {string} displayName 楼层名称
 * @property {string} floorNo 楼层编号
 * @property {number} id ID
 * @property {number} interlayer 夹层，1：是，0：否
 * @property {number} level 楼层
 * @property {string} modifyTime 最后的修改时间
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spBuildingId 房产ID
 * @property {string} timeZone 所在时区，默认东8区
 *
*/
/**
 * @typedef {object} updateUsingPUT_22Body
 * @property {number} area 管理面积
 * @property {string} code 编码
 * @property {string} createTime 最后的修改时间
 * @property {number} deleted  是否删除：0、未删除 1、已删除
 * @property {string} displayName 楼层名称
 * @property {string} floorNo 楼层编号
 * @property {number} id ID
 * @property {number} interlayer 夹层，1：是，0：否
 * @property {number} level 楼层
 * @property {string} modifyTime 最后的修改时间
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spBuildingId 房产ID
 * @property {string} timeZone 所在时区，默认东8区
 *
*/
/**
 * @typedef {object} materialsItem
 * @property {string} expiredDate 过期日期
 * @property {number} inNum 入库数量
 * @property {string} isIncludeTax 是否含税 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} materialId 物资ID
 * @property {number} price 单价
 * @property {number} providerId 供应商ID
 * @property {number} shelfId 货架ID
 * @property {number} taxRate 税率
 *
*/
/**
 * @typedef {object} createUsingPOST_15Body
 * @property {number} handler 经手人
 * @property {[materialsItem]} materials
 * @property {string} remark 备注
 * @property {number} storeman 保管员
 * @property {number} totalNum 总数
 * @property {number} warehouseId 仓库ID
 *
*/
/**
 * @typedef {object} remindsItem
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} earlyTime 提前时间
 * @property {string} earlyUnit 提前单位 1-分钟 2-小时 3-天 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 *
*/
/**
 * @typedef {object} createUsingPOST_17Body
 * @property {number} copyNum 已经拷贝次数
 * @property {string} cycleType 周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}
 * @property {number} execNum 次数
 * @property {string} firstExecDate 开始巡检日期 yyyy-MM-dd
 * @property {[number]} jobs
 * @property {string} model 模式：1-常规 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {string} name 名称
 * @property {number} originPlanId 拷贝来源计划ID（新增时为空）
 * @property {[remindsItem]} reminds
 * @property {string} repeatType 重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}
 * @property {string} status 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 * @property {string} useHoliday 使用节假日 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} workTeamId 巡检人员(工作组)
 * @property {string} workday 工作日(多个逗号隔开)
 *
*/
/**
 * @typedef {object} createUsingPOST_19Body
 * @property {number} id 唯一id
 * @property {number} jobId 点位工作任务ID
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_26Body
 * @property {number} id 唯一id
 * @property {number} jobId 点位工作任务ID
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
 *
*/
/**
 * @typedef {object} updateStateUsingPUTBody
 * @property {string} status 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 *
*/
/**
 * @typedef {object} remindsItem
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} earlyTime 提前时间
 * @property {string} earlyUnit 提前单位 1-分钟 2-小时 3-天 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 *
*/
/**
 * @typedef {object} updateUsingPUT_24Body
 * @property {number} copyNum 已经拷贝次数
 * @property {string} cycleType 周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}
 * @property {number} execNum 次数
 * @property {string} firstExecDate 开始巡检日期 yyyy-MM-dd
 * @property {[number]} jobs
 * @property {string} model 模式：1-常规 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {string} name 名称
 * @property {number} originPlanId 拷贝来源计划ID（新增时为空）
 * @property {[remindsItem]} reminds
 * @property {string} repeatType 重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}
 * @property {string} status 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 * @property {string} useHoliday 使用节假日 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} workTeamId 巡检人员(工作组)
 * @property {string} workday 工作日(多个逗号隔开)
 *
*/
/**
 * @typedef {object} createUsingPOST_21Body
 * @property {string} code 编号
 * @property {number} id 唯一id
 * @property {string} name 名称
 * @property {string} nfcLabel NFC标签
 * @property {number} projectId 项目id
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/
/**
 * @typedef {object} createUsingPOST_22Body
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} job 工作任务
 * @property {number} siteId 点位ID
 *
*/
/**
 * @typedef {object} contentReorderUsingPUTBody
 * @property {number} facilityId 
 * @property {number} id ID
 * @property {number} jobId 
 * @property {string} jobType null {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} reorderType 调整方向1-向上 2-向下 {向上=Up-1, 向下=Down-2}
 *
*/
/**
 * @typedef {object} updateUsingPUT_28Body
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {number} facilityId 设备ID
 * @property {[number]} facilityIds
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} jobType 任务类型：1-综合巡检、2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} model 模式：1-常规、2-夏季、3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} runStatus 运行状态：1-不限、2-在线、3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} type 类型：1-输入、2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} createUsingPOST_23Body
 * @property {number} facilityId 设备ID
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {number} id 唯一id
 * @property {number} sort 顺序
 *
*/
/**
 * @typedef {object} facilityReorderUsingPUTBody
 * @property {number} facilityId 
 * @property {number} id ID
 * @property {number} jobId 
 * @property {string} jobType null {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} reorderType 调整方向1-向上 2-向下 {向上=Up-1, 向下=Down-2}
 *
*/
/**
 * @typedef {object} generateTemplateContentUsingPUTBody
 * @property {[number]} facilityIds
 * @property {number} id 唯一id
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {number} projectId 项目id
 * @property {[number]} templateIds
 *
*/
/**
 * @typedef {object} createUsingPOST_24Body
 * @property {[number]} facilityIds
 * @property {number} id 唯一id
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {number} projectId 项目id
 * @property {[number]} templateIds
 *
*/
/**
 * @typedef {object} updateUsingPUT_29Body
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} job 工作任务
 * @property {number} siteId 点位ID
 *
*/
/**
 * @typedef {object} createJobContentUsingPOSTBody
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {number} facilityId 设备ID
 * @property {[number]} facilityIds
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} jobType 任务类型：1-综合巡检、2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} model 模式：1-常规、2-夏季、3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} runStatus 运行状态：1-不限、2-在线、3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} type 类型：1-输入、2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} createFacilityUsingPOSTBody
 * @property {number} facilityId 设备ID
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {number} id 唯一id
 * @property {number} sort 顺序
 *
*/
/**
 * @typedef {object} updateUsingPUT_27Body
 * @property {string} code 编号
 * @property {number} id 唯一id
 * @property {string} name 名称
 * @property {string} nfcLabel NFC标签
 * @property {number} projectId 项目id
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/
/**
 * @typedef {object} createUsingPOST_25Body
 * @property {string} content 内容
 * @property {number} contentId 内容ID
 * @property {string} defaultVal 默认值
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} facilityId 设备ID
 * @property {string} faultDescription 故障描述
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {number} projectId 项目id
 * @property {string} result 巡检结果
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} status 状态：1-正常 2-异常 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 * @property {number} taskObjectId 任务对象ID
 * @property {number} templateId 模板ID
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} updateUsingPUT_30Body
 * @property {string} content 内容
 * @property {number} contentId 内容ID
 * @property {string} defaultVal 默认值
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} facilityId 设备ID
 * @property {string} faultDescription 故障描述
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {number} projectId 项目id
 * @property {string} result 巡检结果
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} status 状态：1-正常 2-异常 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 * @property {number} taskObjectId 任务对象ID
 * @property {number} templateId 模板ID
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} updateUsingPUT_32Body
 * @property {number} facilityId 设备ID
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {number} id 唯一id
 * @property {number} sort 顺序
 *
*/
/**
 * @typedef {object} spaceDtosItem
 * @property {string} description 处理方式
 * @property {number} spBuildingId 大楼id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 房间id
 *
*/
/**
 * @typedef {object} workordersItem
 * @property {string} description 问题描述
 * @property {[number]} facilities
 * @property {string} isRefFacility 是否关联设备 0-不关联 1-关联 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} orgDepartmentId 部门id
 * @property {string} phone 联系电话
 * @property {[spaceDtosItem]} spaceDtos
 * @property {number} userId 用户/客户ID
 * @property {string} userType 用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @property {string} username 报障人名称
 * @property {number} woPriorityId 优先级id
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 服务类型关联id, 集团版必传
 * @property {number} woSlaId slaId
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/
/**
 * @typedef {object} situationUsingPOSTBody
 * @property {string} description 故障描述
 * @property {string} handleResult 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} handleWay 异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} serviceman 维修人员
 * @property {number} taskContentId 任务内容ID
 * @property {number} taskId 任务ID
 * @property {string} workorderCode 工单编号
 * @property {number} workorderId 工单ID
 * @property {[workordersItem]} workorders
 *
*/
/**
 * @typedef {object} spaceDtosItem
 * @property {string} description 处理方式
 * @property {number} spBuildingId 大楼id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 房间id
 *
*/
/**
 * @typedef {object} workordersItem
 * @property {string} description 问题描述
 * @property {[number]} facilities
 * @property {string} isRefFacility 是否关联设备 0-不关联 1-关联 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} orgDepartmentId 部门id
 * @property {string} phone 联系电话
 * @property {[spaceDtosItem]} spaceDtos
 * @property {number} userId 用户/客户ID
 * @property {string} userType 用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @property {string} username 报障人名称
 * @property {number} woPriorityId 优先级id
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 服务类型关联id, 集团版必传
 * @property {number} woSlaId slaId
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/
/**
 * @typedef {object} workorderUsingPOSTBody
 * @property {string} description 故障描述
 * @property {string} handleResult 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} handleWay 异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} serviceman 维修人员
 * @property {number} taskContentId 任务内容ID
 * @property {number} taskId 任务ID
 * @property {string} workorderCode 工单编号
 * @property {number} workorderId 工单ID
 * @property {[workordersItem]} workorders
 *
*/
/**
 * @typedef {object} spaceDtosItem
 * @property {string} description 处理方式
 * @property {number} spBuildingId 大楼id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 房间id
 *
*/
/**
 * @typedef {object} workordersItem
 * @property {string} description 问题描述
 * @property {[number]} facilities
 * @property {string} isRefFacility 是否关联设备 0-不关联 1-关联 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} orgDepartmentId 部门id
 * @property {string} phone 联系电话
 * @property {[spaceDtosItem]} spaceDtos
 * @property {number} userId 用户/客户ID
 * @property {string} userType 用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @property {string} username 报障人名称
 * @property {number} woPriorityId 优先级id
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 服务类型关联id, 集团版必传
 * @property {number} woSlaId slaId
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/
/**
 * @typedef {object} updateUsingPUT_37Body
 * @property {string} description 故障描述
 * @property {string} handleResult 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} handleWay 异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} serviceman 维修人员
 * @property {number} taskContentId 任务内容ID
 * @property {number} taskId 任务ID
 * @property {string} workorderCode 工单编号
 * @property {number} workorderId 工单ID
 * @property {[workordersItem]} workorders
 *
*/
/**
 * @typedef {object} updateUsingPUT_33Body
 * @property {number} facilityNum 设备数
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} isMiss 是否漏检 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isPatch 是否补检 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSubmit 是否提交 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} job 工作任务
 * @property {number} jobId 任务ID
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {number} operator 操作人
 * @property {number} patchBy 补检人
 * @property {string} patchByUser 补检人
 * @property {string} patchEndTime 补检结束时间
 * @property {string} patchStartTime 补检开始时间
 * @property {number} projectId 项目id
 * @property {string} realityEndTime 实际结束时间
 * @property {string} realityStartTime 实际开始时间
 * @property {number} siteId 点位ID
 * @property {string} status 状态：1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}
 * @property {number} synthesizeNum 综合数
 * @property {number} taskId 任务ID
 * @property {number} taskSiteId 任务定位ID
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} description 故障描述
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {string} faultDescription 故障描述
 * @property {number} id 内容id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {string} result 巡检结果
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} facilitiesItem
 * @property {string} facilityStatus 设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} patchUsingPUTBody
 * @property {[contentsItem]} contents
 * @property {[facilitiesItem]} facilities
 * @property {number} patchBy 巡检任务-补检人员ID
 * @property {string} patchEndTime 巡检任务-补检结束时间
 * @property {string} patchStartTime 巡检任务-补检开始时间
 * @property {number} taskJobId 巡检任务-工作任务ID
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} description 故障描述
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {string} faultDescription 故障描述
 * @property {number} id 内容id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {string} result 巡检结果
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} objectsItem
 * @property {[contentsItem]} contents
 * @property {string} facilityStatus 设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} patchEndTime 补检结束时间 yyyy-MM-dd HH:mm:ss
 * @property {string} patchStartTime 补检开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} realityStartTime 实际开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} status 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} submitUsingPUT_1Body
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {[objectsItem]} objects
 * @property {string} realityEndTime 实际结束时间
 * @property {string} realityStartTime 实际开始时间
 * @property {string} status 状态：1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}
 * @property {number} taskJobId 巡检任务-工作任务ID
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} content 内容
 * @property {number} contentId 内容ID
 * @property {string} defaultVal 默认值
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} facilityId 设备ID
 * @property {string} faultDescription 故障描述
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {number} projectId 项目id
 * @property {string} result 巡检结果
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} status 状态：1-正常 2-异常 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 * @property {number} taskObjectId 任务对象ID
 * @property {number} templateId 模板ID
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} updateUsingPUT_34Body
 * @property {[contentsItem]} contents
 * @property {number} facilityId 设备ID
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {number} id 唯一id
 * @property {number} jobId 任务ID
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {number} projectId 项目id
 * @property {string} status 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} description 故障描述
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {string} faultDescription 故障描述
 * @property {number} id 内容id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {string} result 巡检结果
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} patchUsingPUT_1Body
 * @property {[contentsItem]} contents
 * @property {string} facilityStatus 设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} patchEndTime 补检结束时间 yyyy-MM-dd HH:mm:ss
 * @property {string} patchStartTime 补检开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} realityStartTime 实际开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} status 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} description 故障描述
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {string} faultDescription 故障描述
 * @property {number} id 内容id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {string} result 巡检结果
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} submitUsingPUT_2Body
 * @property {[contentsItem]} contents
 * @property {string} facilityStatus 设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} patchEndTime 补检结束时间 yyyy-MM-dd HH:mm:ss
 * @property {string} patchStartTime 补检开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} realityStartTime 实际开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} status 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} description 故障描述
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {string} faultDescription 故障描述
 * @property {number} id 内容id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {string} result 巡检结果
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} objectsItem
 * @property {[contentsItem]} contents
 * @property {string} facilityStatus 设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} patchEndTime 补检结束时间 yyyy-MM-dd HH:mm:ss
 * @property {string} patchStartTime 补检开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} realityStartTime 实际开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} status 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_36Body
 * @property {number} id 唯一id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} name 名称
 * @property {[objectsItem]} objects
 * @property {number} planId 巡检计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 * @property {string} status 状态：1-未检 2-已检 {未完成=Unfinished-1, 已完成=Complete-2}
 * @property {number} taskId 任务ID
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} description 故障描述
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {string} faultDescription 故障描述
 * @property {number} id 内容id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {string} result 巡检结果
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} objectsItem
 * @property {[contentsItem]} contents
 * @property {string} facilityStatus 设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} patchEndTime 补检结束时间 yyyy-MM-dd HH:mm:ss
 * @property {string} patchStartTime 补检开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} realityStartTime 实际开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} status 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @property {number} taskObjectId 任务对象ID
 *
*/
/**
 * @typedef {object} sitesItem
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {[objectsItem]} objects
 * @property {string} realityEndTime 实际结束时间
 * @property {string} realityStartTime 实际开始时间
 * @property {string} status 状态：1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}
 * @property {number} taskJobId 巡检任务-工作任务ID
 *
*/
/**
 * @typedef {object} submitUsingPUTBody
 * @property {number} id 巡检任务id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {[sitesItem]} sites
 * @property {string} status 状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}
 * @property {string} submit 提交 1-未提交 2-部分提交 3-全部提交 {未提交=Nd-1, 部分提交=Part-2, 全部提交=All-3}
 *
*/
/**
 * @typedef {object} updateUsingPUT_31Body
 * @property {number} exceptionNum 异常数
 * @property {string} expectEndTime 预计结束时间
 * @property {string} expectStartTime 预计开始时间
 * @property {number} id 唯一id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {number} missNum 漏检数
 * @property {string} name 巡检名称
 * @property {number} patchNum 补检数
 * @property {number} projectId 项目id
 * @property {string} realityEndTime 实际结束时间
 * @property {string} realityStartTime 实际开始时间
 * @property {number} repairNum 报修数
 * @property {number} siteNum 点位数
 * @property {string} state 状态 1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}
 * @property {string} status 状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}
 * @property {string} submit 提交 1-未提交 2-部分提交 3-全部提交 {未提交=Nd-1, 部分提交=Part-2, 全部提交=All-3}
 * @property {number} workTeamId 巡检人员
 *
*/
/**
 * @typedef {object} createUsingPOST_28Body
 * @property {string} description 描述
 * @property {string} name 模板名称
 * @property {string} type 类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
 *
*/
/**
 * @typedef {object} updateUsingPUT_38Body
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} updateUsingPUT_39Body
 * @property {string} description 描述
 * @property {string} name 模板名称
 * @property {string} type 类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
 *
*/
/**
 * @typedef {object} createUsingPOST_27Body
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} createUsingPOST_16Body
 * @property {string} endDate 结束日期
 * @property {string} isWorkday 是否工作日 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} name 名称
 * @property {string} startDate 开始日期
 *
*/
/**
 * @typedef {object} updateUsingPUT_23Body
 * @property {string} endDate 结束日期
 * @property {string} isWorkday 是否工作日 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} name 名称
 * @property {string} startDate 开始日期
 *
*/
/**
 * @typedef {object} createUsingPOST_18Body
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} earlyTime 提前时间
 * @property {string} earlyUnit 提前单位 1-分钟 2-小时 3-天 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 *
*/
/**
 * @typedef {object} updateUsingPUT_25Body
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} earlyTime 提前时间
 * @property {string} earlyUnit 提前单位 1-分钟 2-小时 3-天 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 *
*/
/**
 * @typedef {object} createUsingPOST_20Body
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 *
*/
/**
 * @typedef {object} createUsingPOST_26Body
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-任务异常提醒 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSend 是否已经发送 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 * @property {string} remindTime 提醒时间
 * @property {number} taskId 任务ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_35Body
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-任务异常提醒 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSend 是否已经发送 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 * @property {string} remindTime 提醒时间
 * @property {number} taskId 任务ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_40Body
 * @property {number} safeStock 安全库存
 *
*/
/**
 * @typedef {object} createUsingPOST_31Body
 * @property {string} brand 物资品牌
 * @property {string} code 物资编码
 * @property {string} model 物资型号
 * @property {string} name 物资名称
 * @property {number} price 核定价格
 * @property {string} remark 备注
 * @property {number} safeStock 安全库存
 * @property {string} unit 物资单位
 *
*/
/**
 * @typedef {object} updateUsingPUT_42Body
 * @property {string} brand 物资品牌
 * @property {string} code 物资编码
 * @property {string} model 物资型号
 * @property {string} name 物资名称
 * @property {number} price 核定价格
 * @property {string} remark 备注
 * @property {number} safeStock 安全库存
 * @property {string} unit 物资单位
 *
*/
/**
 * @typedef {object} createUsingPOST_32Body
 * @property {string} annex 附件
 * @property {number} bizId 业务ID
 * @property {string} bizTable 业务相关表名
 * @property {string} content 消息内容
 * @property {number} id 由程序分配的唯一ID
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} source 消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {number} templateId 模版id
 * @property {string} title 消息标题
 * @property {string} type 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} messageSendsItem
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRead 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} messageId 消息id
 * @property {number} projectId 项目ID
 * @property {number} receiver 接收人ID
 * @property {number} sendRetry 发送次数
 * @property {string} sendStatus 发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}
 * @property {string} sendTime 发送时间
 * @property {number} sender 发送人ID
 *
*/
/**
 * @typedef {object} createUsingPOST_33Body
 * @property {string} annex 附件
 * @property {number} bizId 业务ID
 * @property {string} bizTable 业务相关表名
 * @property {string} content 消息内容
 * @property {string} createTime 
 * @property {number} creator 
 * @property {boolean} delete 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {number} id 
 * @property {[messageSendsItem]} messageSends
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {number} projectId 项目ID
 * @property {string} source 消息来源：1-需求 2-工单 3-预防性维护 4-巡检 5-库存 6-cmb员工服务平台 7-审批流 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {string} templateCode 模版编码 {WORKORDER_SCHEDULE_WORKER=0, WORKORDER_CREATE=1, WORKORDER_APPROVAL_APPLY=2, WORKORDER_APPROVAL_PASS=3, WORKORDER_APPROVAL_DENY=4, WORKORDER_VERIFY_PASS=5, WORKORDER_VERIFY_DENY=6, WORKORDER_SECKILL_SUCCESS=7, WORKORDER_STOP_ALL=8, WORKORDER_AGAIN_SCHEDULE_WORKER=9, WORKORDER_TERMINAL=10, WORKORDER_FINISH=11, WORKORDER_EVENT_UPGRADE=12, PM_APPROVAL_APPLY=13, PM_JOB_REMIND=14, PM_INCOMPLETE=15, PM_UNRESPONSIVE=16, INSPECT_START=17, INSPECT_INCOMPLETE=18, INSPECT_EXCEPTION=19, DEMAND_CREATE=20, DEMAND_PENDING_CHECK=21, DEMAND_PENDING_DISPOSE=22, DEMAND_CONFIRM_FAIL=23, DEMAND_ADDITIONAL_CHECK=24, DEMAND_ADDITIONAL_PASS=25, DEMAND_ADDITIONAL_FAIL=26, DEMAND_COMMENT=27, DEMAND_CMB_CREATE=28, DEMAND_CMB_CHECK_PASS=29, DEMAND_CMB_CHECK_FAIL=30, DEMAND_CMB_CREATE_WORKORDER=31, DEMAND_CMB_WORKORDER_RECEIVE=32, DEMAND_CMB_TRACK=33, DEMAND_CMB_COMPLETE=34, DEMAND_CMB_AUTO_AFFIRM=35, DEMAND_CMB_ADDITIONAL_PASS=36, DEMAND_CMB_OBSOLETE=37, APPROVE_CREATE=38, APPROVE_PENDING_APPROVAL=39, APPROVE_MISS_APPROVER=40, APPROVE_DELAY_APPROVAL=41, APPROVE_GOBACK_APPROVAL=42, APPROVE_FINISH_APPROVAL=43, APPROVE_CC_APPROVAL=44, APPROVE_PENDING_APPROVAL_EMAIL=45, APPROVE_CREATE_EMAIL=46, APPROVE_DELAY_APPROVAL_EMAIL=47, APPROVE_GOBACK_APPROVAL_EMAIL=48, APPROVE_FINISH_APPROVAL_EMAIL=49, APPROVE_CC_APPROVAL_EMAIL=50}
 * @property {number} tenantId 
 * @property {string} title 消息标题
 * @property {string} type 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {number} version 
 *
*/
/**
 * @typedef {object} createUsingPOST_34Body
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRead 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} messageId 消息id
 * @property {number} projectId 项目ID
 * @property {number} receiver 接收人ID
 * @property {number} sendRetry 发送次数
 * @property {string} sendStatus 发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}
 * @property {string} sendTime 发送时间
 * @property {number} sender 发送人ID
 *
*/
/**
 * @typedef {object} readMessageUsingPUT_1Body
 * @property {[number]} ids
 * @property {[number]} messageIds
 * @property {number} projectId 项目Id
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} updateUsingPUT_44Body
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRead 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} messageId 消息id
 * @property {number} projectId 项目ID
 * @property {number} receiver 接收人ID
 * @property {number} sendRetry 发送次数
 * @property {string} sendStatus 发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}
 * @property {string} sendTime 发送时间
 * @property {number} sender 发送人ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_43Body
 * @property {string} annex 附件
 * @property {number} bizId 业务ID
 * @property {string} bizTable 业务相关表名
 * @property {string} content 消息内容
 * @property {number} id 由程序分配的唯一ID
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} source 消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {number} templateId 模版id
 * @property {string} title 消息标题
 * @property {string} type 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} materialsItem
 * @property {number} inventoryId 库存ID
 * @property {number} materialId 物资ID
 * @property {number} outNum 出库数量
 * @property {number} shelfId 货架ID
 * @property {number} warehouseId 仓库ID
 *
*/
/**
 * @typedef {object} createUsingPOST_35Body
 * @property {number} governor 主管
 * @property {[materialsItem]} materials
 * @property {number} recipient 领用人ID
 * @property {string} remark 备注
 * @property {string} requisitionDate 领料日期
 * @property {number} requisitionDepartment 领料部门
 * @property {number} storeman 保管员ID
 * @property {number} totalNum 总数
 * @property {number} warehouseId 仓库ID
 *
*/
/**
 * @typedef {object} facilityTypesItem
 * @property {number} facilityTypeId 设备类型ID
 * @property {number} id 唯一id
 *
*/
/**
 * @typedef {object} materialsItem
 * @property {number} id 唯一id
 * @property {number} maintId 
 * @property {string} materialBrand 物资品牌
 * @property {string} materialCode 物资编码
 * @property {number} materialId 物资id
 * @property {string} materialModel 物资型号
 * @property {string} materialName 物资名称
 * @property {number} materialUnit 物资单位
 * @property {number} projectId 
 * @property {number} reserveCount 预定数量
 * @property {number} storeId 仓库id
 * @property {string} storeName 仓库名称
 * @property {number} workTeamId 工作组id
 *
*/
/**
 * @typedef {object} noticesItem
 * @property {number} advanceDays 提前天数
 * @property {number} id 唯一id
 * @property {[string]} messageTypes
 * @property {string} noticeType 通知类型1-审批提醒；2-完成升级提醒；3-工作提醒 {审批提醒=Approve-1, 完成升级提醒=Promotion-2, 工作提醒=Work-3}
 *
*/
/**
 * @typedef {object} spacesItem
 * @property {number} id 唯一id
 * @property {number} spBuildingId 大厦id
 * @property {string} spBuildingName 大厦名称
 * @property {number} spFloorId 楼层id
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间id
 * @property {string} spSpaceName 空间名称
 *
*/
/**
 * @typedef {object} stepsItem
 * @property {number} id 唯一id
 * @property {string} stepName 步骤
 * @property {number} workTeamId 工作组id
 *
*/
/**
 * @typedef {object} toolsItem
 * @property {number} cost 花费
 * @property {number} id 唯一id
 * @property {number} toolCount 数量
 * @property {string} toolModel 工具型号
 * @property {string} toolName 工具名称
 *
*/
/**
 * @typedef {object} workTeamsItem
 * @property {number} id 唯一id
 * @property {number} workTeamId 工作组id
 *
*/
/**
 * @typedef {object} createUsingPOST_29Body
 * @property {number} beginMonth 维保时间开始
 * @property {number} cycle 维保周期
 * @property {string} cycleUnit 周期单位:1-天;2-周;3-月;4-季;5年 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}
 * @property {string} effect 影响
 * @property {number} endMonth 维保时间结束
 * @property {[number]} excludeFacilityIds
 * @property {[number]} facilityIds
 * @property {[facilityTypesItem]} facilityTypes
 * @property {string} firstDate 首次维保日期
 * @property {string} isAllYear 是否全年 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isApprove 是否审批 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isAutoArchive 是否自动存档 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isAutoWorkorder 是否自动生成工单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isCopySave 是否拷贝保存 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isFacilityQrcode 是否通过扫码访问设备 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSlideCycle 是否滑动周期 1-是；0-否 是否枚举{否=No-0, 是=Yes-1}
 * @property {[materialsItem]} materials
 * @property {string} name 维保名称
 * @property {[noticesItem]} notices
 * @property {number} oriMaintId 拷贝前维保设置id
 * @property {number} predictTime 维保时长
 * @property {string} predictUnit 维保时长单位:1-分钟;2-小时;3-天;4-月;5-年 {分钟=Min-1, 小时=Hour-2, 天=Day-3, 月=Month-4, 年=Year-5}
 * @property {string} priorityName 优先级名称：一般、紧急、紧急重要
 * @property {[spacesItem]} spaces
 * @property {string} status 计划状态 1-启用 2-暂停 {启用=Enable-1, 暂停=Pause-2}
 * @property {[stepsItem]} steps
 * @property {number} storeId 仓库id
 * @property {string} storeName 仓库名称
 * @property {[toolsItem]} tools
 * @property {[workTeamsItem]} workTeams
 *
*/
/**
 * @typedef {object} facilityTypesItem
 * @property {number} facilityTypeId 设备类型ID
 * @property {number} id 唯一id
 *
*/
/**
 * @typedef {object} materialsItem
 * @property {number} id 唯一id
 * @property {number} maintId 
 * @property {string} materialBrand 物资品牌
 * @property {string} materialCode 物资编码
 * @property {number} materialId 物资id
 * @property {string} materialModel 物资型号
 * @property {string} materialName 物资名称
 * @property {number} materialUnit 物资单位
 * @property {number} projectId 
 * @property {number} reserveCount 预定数量
 * @property {number} storeId 仓库id
 * @property {string} storeName 仓库名称
 * @property {number} workTeamId 工作组id
 *
*/
/**
 * @typedef {object} noticesItem
 * @property {number} advanceDays 提前天数
 * @property {number} id 唯一id
 * @property {[string]} messageTypes
 * @property {string} noticeType 通知类型1-审批提醒；2-完成升级提醒；3-工作提醒 {审批提醒=Approve-1, 完成升级提醒=Promotion-2, 工作提醒=Work-3}
 *
*/
/**
 * @typedef {object} spacesItem
 * @property {number} id 唯一id
 * @property {number} spBuildingId 大厦id
 * @property {string} spBuildingName 大厦名称
 * @property {number} spFloorId 楼层id
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间id
 * @property {string} spSpaceName 空间名称
 *
*/
/**
 * @typedef {object} stepsItem
 * @property {number} id 唯一id
 * @property {string} stepName 步骤
 * @property {number} workTeamId 工作组id
 *
*/
/**
 * @typedef {object} toolsItem
 * @property {number} cost 花费
 * @property {number} id 唯一id
 * @property {number} toolCount 数量
 * @property {string} toolModel 工具型号
 * @property {string} toolName 工具名称
 *
*/
/**
 * @typedef {object} workTeamsItem
 * @property {number} id 唯一id
 * @property {number} workTeamId 工作组id
 *
*/
/**
 * @typedef {object} updateUsingPUT_41Body
 * @property {number} beginMonth 维保时间开始
 * @property {number} cycle 维保周期
 * @property {string} cycleUnit 周期单位:1-天;2-周;3-月;4-季;5年 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}
 * @property {string} effect 影响
 * @property {number} endMonth 维保时间结束
 * @property {[number]} excludeFacilityIds
 * @property {[number]} facilityIds
 * @property {[facilityTypesItem]} facilityTypes
 * @property {string} firstDate 首次维保日期
 * @property {string} isAllYear 是否全年 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isApprove 是否审批 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isAutoArchive 是否自动存档 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isAutoWorkorder 是否自动生成工单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isCopySave 是否拷贝保存 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isFacilityQrcode 是否通过扫码访问设备 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSlideCycle 是否滑动周期 1-是；0-否 是否枚举{否=No-0, 是=Yes-1}
 * @property {[materialsItem]} materials
 * @property {string} name 维保名称
 * @property {[noticesItem]} notices
 * @property {number} oriMaintId 拷贝前维保设置id
 * @property {number} predictTime 维保时长
 * @property {string} predictUnit 维保时长单位:1-分钟;2-小时;3-天;4-月;5-年 {分钟=Min-1, 小时=Hour-2, 天=Day-3, 月=Month-4, 年=Year-5}
 * @property {string} priorityName 优先级名称：一般、紧急、紧急重要
 * @property {[spacesItem]} spaces
 * @property {string} status 计划状态 1-启用 2-暂停 {启用=Enable-1, 暂停=Pause-2}
 * @property {[stepsItem]} steps
 * @property {number} storeId 仓库id
 * @property {string} storeName 仓库名称
 * @property {[toolsItem]} tools
 * @property {[workTeamsItem]} workTeams
 *
*/
/**
 * @typedef {object} createUsingPOST_30Body
 * @property {number} maintId 维保设置id
 * @property {string} planDate 维保日期
 *
*/
/**
 * @typedef {object} createWorkorderUsingPOSTBody
 * @property {number} id 计划id
 * @property {number} maintId 设置id
 * @property {string} planDate 计划时间
 *
*/
/**
 * @typedef {object} createUsingPOST_36Body
 * @property {string} code 编码
 * @property {string} description 描述
 * @property {number} id 岗位id
 * @property {number} level 层级
 * @property {string} name 岗位名称
 * @property {string} parentId 上级id
 * @property {number} sort 排序
 *
*/
/**
 * @typedef {object} updateUsingPUT_45Body
 * @property {string} code 编码
 * @property {string} description 描述
 * @property {number} id 岗位id
 * @property {number} level 层级
 * @property {string} name 岗位名称
 * @property {string} parentId 上级id
 * @property {number} sort 排序
 *
*/
/**
 * @typedef {object} createUsingPOST_37Body
 * @property {string} address 项目详细地址
 * @property {number} area 项目(建筑)面积
 * @property {string} bizType 项目业态
 * @property {string} code 项目编码
 * @property {string} geoIds 项目城市：ID
 * @property {string} geoLabels 项目城市：显示名
 * @property {string} identifier 项目标识号
 * @property {string} latitude 项目所在纬度
 * @property {string} longitude 项目所在经度
 * @property {number} maxUser 授权用户数
 * @property {number} projectGroupId 项目组
 * @property {string} projectName 项目名称
 * @property {[string]} propertyTelephoneList
 * @property {string} propertyTelephones 
 * @property {number} refPropertyPointId 所属物业点id
 * @property {number} refSupplierId 所属物业公司ID
 * @property {string} serviceEndDate 服务结束时间
 * @property {string} serviceStartDate 服务开始时间
 * @property {number} usedArea 项目(使用)面积
 *
*/
/**
 * @typedef {object} createUsingPOST_38Body
 * @property {string} description 项目组描述
 * @property {string} projectGroupName 项目组名称
 *
*/
/**
 * @typedef {object} updateUsingPUT_46Body
 * @property {string} description 项目组描述
 * @property {string} projectGroupName 项目组名称
 *
*/
/**
 * @typedef {object} patchUsingPUT_2Body
 * @property {string} address 项目详细地址
 * @property {number} area 项目(建筑)面积
 * @property {string} bizType 项目业态
 * @property {string} code 项目编码
 * @property {string} geoIds 项目城市：ID
 * @property {string} geoLabels 项目城市：显示名
 * @property {string} identifier 项目标识号
 * @property {string} latitude 项目所在纬度
 * @property {string} longitude 项目所在经度
 * @property {number} maxUser 授权用户数
 * @property {number} projectGroupId 项目组
 * @property {string} projectName 项目名称
 * @property {[string]} propertyTelephoneList
 * @property {string} propertyTelephones 
 * @property {number} refPropertyPointId 所属物业点id
 * @property {number} refSupplierId 所属物业公司ID
 * @property {string} serviceEndDate 服务结束时间
 * @property {string} serviceStartDate 服务开始时间
 * @property {number} usedArea 项目(使用)面积
 *
*/
/**
 * @typedef {object} createUsingPOST_40Body
 * @property {string} nfcLabel 活码NFC标签
 * @property {string} uniqueCode 唯一码，一般用来生成NFC标签和二维码的
 *
*/
/**
 * @typedef {object} updateUsingPUT_48Body
 * @property {string} nfcLabel 活码NFC标签
 * @property {string} uniqueCode 唯一码，一般用来生成NFC标签和二维码的
 *
*/
/**
 * @typedef {object} createUsingPOST_39Body
 * @property {number} bindId 绑定ID
 * @property {string} bindType 绑定类型 {巡检点位=InSite-1, 设备=Fac-2, 库存=Inventory-3}
 * @property {number} projectId 项目id
 * @property {number} qrcodeDynamicId 活码ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_47Body
 * @property {number} bindId 绑定ID
 * @property {string} bindType 绑定类型 {巡检点位=InSite-1, 设备=Fac-2, 库存=Inventory-3}
 * @property {number} projectId 项目id
 * @property {number} qrcodeDynamicId 活码ID
 *
*/
/**
 * @typedef {object} createUsingPOST_43Body
 * @property {string} code 编码
 * @property {string} displayName 空间名称，同一楼层不重复
 * @property {number} id 空间ID，新增时不可填写，修改时填写
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spFloorId 楼层ID，不能为空
 * @property {string} spaceNo 房间编号
 * @property {number} spaceType 空间类型：1、房间，默认 1
 *
*/
/**
 * @typedef {object} updateUsingPUT_51Body
 * @property {string} code 编码
 * @property {string} displayName 空间名称，同一楼层不重复
 * @property {number} id 空间ID，新增时不可填写，修改时填写
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spFloorId 楼层ID，不能为空
 * @property {string} spaceNo 房间编号
 * @property {number} spaceType 空间类型：1、房间，默认 1
 *
*/
/**
 * @typedef {object} createUsingPOST_44Body
 * @property {number} dataScope 数据作用域：1、私有 2、应用公用 3、租户公用
 * @property {string} emailSender 发件人显示名称
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isCustomize 是否用户自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} projectId 项目ID
 * @property {string} reset 是否重置 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} tenantId 租户ID
 * @property {string} webTitle 系统名称
 * @property {string} webTitleEn 系统英文名称
 *
*/
/**
 * @typedef {object} content
 * @property {string} annex 附件
 * @property {string} contentCn 中文内容
 * @property {string} contentEn 英文内容
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} templateId 消息模版ID
 * @property {string} titleCn 中文标题
 * @property {string} titleEn 英文标题
 * @property {string} type 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} paramsItem
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
 *
*/
/**
 * @typedef {object} createUsingPOST_46Body
 * @property {string} code 消息模版编码
 * @property {object} undefined 
 * @property {string} depict 消息模版描述
 * @property {number} id 唯一id
 * @property {[paramsItem]} params
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} sort 排序
 *
*/
/**
 * @typedef {object} createUsingPOST_45Body
 * @property {string} annex 附件
 * @property {string} contentCn 中文内容
 * @property {string} contentEn 英文内容
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} templateId 消息模版ID
 * @property {string} titleCn 中文标题
 * @property {string} titleEn 英文标题
 * @property {string} type 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} updateUsingPUT_52Body
 * @property {string} annex 附件
 * @property {string} contentCn 中文内容
 * @property {string} contentEn 英文内容
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} templateId 消息模版ID
 * @property {string} titleCn 中文标题
 * @property {string} titleEn 英文标题
 * @property {string} type 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} createUsingPOST_47Body
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} updateUsingPUT_54Body
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} content
 * @property {string} annex 附件
 * @property {string} contentCn 中文内容
 * @property {string} contentEn 英文内容
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} templateId 消息模版ID
 * @property {string} titleCn 中文标题
 * @property {string} titleEn 英文标题
 * @property {string} type 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @typedef {object} paramsItem
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_53Body
 * @property {string} code 消息模版编码
 * @property {object} undefined 
 * @property {string} depict 消息模版描述
 * @property {number} id 唯一id
 * @property {[paramsItem]} params
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} sort 排序
 *
*/
/**
 * @typedef {object} createUsingPOST_48Body
 * @property {number} appId 应用ID，做数据隔离用
 * @property {number} bizId 业务ID，做数据隔离用
 * @property {string} code 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @property {string} config 第三方信息
 * @property {string} displayname 中文描述 钉钉 微信 一事通
 * @property {number} id 由程序分配的唯一ID
 * @property {number} status 
 *
*/
/**
 * @typedef {object} updateUsingPUT_55Body
 * @property {number} appId 应用ID，做数据隔离用
 * @property {number} bizId 业务ID，做数据隔离用
 * @property {string} code 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @property {string} config 第三方信息
 * @property {string} displayname 中文描述 钉钉 微信 一事通
 * @property {number} id 由程序分配的唯一ID
 * @property {number} status 
 *
*/
/**
 * @typedef {object} acceptedByTaskIdUsingPUTBody
 * @property {string} remark 备注
 *
*/
/**
 * @typedef {object} andGetIsException
 * @property {string} content 查验内容
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {number} id 唯一id
 * @property {string} isException 是否异常 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {number} objectId 对象id
 * @property {string} objectType 对象类型：1-位置 2-设备 {位置=Site-1, 设备=Facility-2}
 * @property {number} projectId 项目id
 * @property {string} result 查验结果
 * @property {string} resultDesc 结果描述
 * @property {number} taskId 承接查验任务id
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {object} undefined 
 * @property {number} id 查验内容id
 * @property {string} result 查验结果，不带单位
 * @property {string} resultDesc 记录
 *
*/
/**
 * @typedef {object} checkedByObjectIdUsingPUTBody
 * @property {[contentsItem]} contents
 * @property {number} exceptionNum 异常查验数量
 *
*/
/**
 * @typedef {object} accepterListItem
 * @property {string} type 验收人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} accepterId 验收用户/工作组id
 *
*/
/**
 * @typedef {object} checkerListItem
 * @property {string} type 查验人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} checkerId 查验用户/工作组id
 *
*/
/**
 * @typedef {object} templatePoListItem
 * @property {number} id 模版id
 * @property {string} name 模版名称
 *
*/
/**
 * @typedef {object} facilityListItem
 * @property {number} facilityId 设备ID
 * @property {[templatePoListItem]} templatePoList
 *
*/
/**
 * @typedef {object} siteListItem
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 * @property {[templatePoListItem]} templatePoList
 *
*/
/**
 * @typedef {object} createUsingPOST_49Body
 * @property {[accepterListItem]} accepterList
 * @property {[checkerListItem]} checkerList
 * @property {string} description 查验说明
 * @property {[facilityListItem]} facilityList
 * @property {string} name 任务名称
 * @property {number} priorityId 优先级id
 * @property {[siteListItem]} siteList
 * @property {number} slaId 流程设置id
 * @property {string} startTime 开始时间
 * @property {string} takeFrom 交验方
 * @property {string} takeOver 接管方
 *
*/
/**
 * @typedef {object} accepterListItem
 * @property {string} type 验收人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} accepterId 验收用户/工作组id
 *
*/
/**
 * @typedef {object} checkerListItem
 * @property {string} type 查验人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} checkerId 查验用户/工作组id
 *
*/
/**
 * @typedef {object} templatePoListItem
 * @property {number} id 模版id
 * @property {string} name 模版名称
 *
*/
/**
 * @typedef {object} facilityListItem
 * @property {number} facilityId 设备ID
 * @property {[templatePoListItem]} templatePoList
 *
*/
/**
 * @typedef {object} siteListItem
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 * @property {[templatePoListItem]} templatePoList
 *
*/
/**
 * @typedef {object} checkNameUsingGETBody
 * @property {[accepterListItem]} accepterList
 * @property {[checkerListItem]} checkerList
 * @property {string} description 查验说明
 * @property {[facilityListItem]} facilityList
 * @property {string} name 任务名称
 * @property {number} priorityId 优先级id
 * @property {[siteListItem]} siteList
 * @property {number} slaId 流程设置id
 * @property {string} startTime 开始时间
 * @property {string} takeFrom 交验方
 * @property {string} takeOver 接管方
 *
*/
/**
 * @typedef {object} accepterListItem
 * @property {string} type 验收人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} accepterId 验收用户/工作组id
 *
*/
/**
 * @typedef {object} checkerListItem
 * @property {string} type 查验人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} checkerId 查验用户/工作组id
 *
*/
/**
 * @typedef {object} templatePoListItem
 * @property {number} id 模版id
 * @property {string} name 模版名称
 *
*/
/**
 * @typedef {object} facilityListItem
 * @property {number} facilityId 设备ID
 * @property {[templatePoListItem]} templatePoList
 *
*/
/**
 * @typedef {object} siteListItem
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 * @property {[templatePoListItem]} templatePoList
 *
*/
/**
 * @typedef {object} updateUsingPUT_56Body
 * @property {[accepterListItem]} accepterList
 * @property {[checkerListItem]} checkerList
 * @property {string} description 查验说明
 * @property {[facilityListItem]} facilityList
 * @property {string} name 任务名称
 * @property {number} priorityId 优先级id
 * @property {[siteListItem]} siteList
 * @property {number} slaId 流程设置id
 * @property {string} startTime 开始时间
 * @property {string} takeFrom 交验方
 * @property {string} takeOver 接管方
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {number} id 查验内容id，更新时将原id传回服务端
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} createUsingPOST_50Body
 * @property {[contentsItem]} contents
 * @property {string} name 模板名称
 *
*/
/**
 * @typedef {object} contentsItem
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {number} id 查验内容id，更新时将原id传回服务端
 * @property {string} unit 单位
 *
*/
/**
 * @typedef {object} updateUsingPUT_57Body
 * @property {[contentsItem]} contents
 * @property {string} name 模板名称
 *
*/
/**
 * @typedef {object} loginUsingPOSTBody
 * @property {string} captchaCode 验证码
 * @property {string} deviceToken 设备信息
 * @property {string} loginName 登录名
 * @property {string} password 密码
 *
*/
/**
 * @typedef {object} createUsingPOST_51Body
 * @property {string} isEmail 是否邮件通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {[number]} managements
 * @property {string} name 仓库名称
 * @property {string} remark 备注
 * @property {number} spBuildingId 大厦ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 *
*/
/**
 * @typedef {object} createUsingPOST_52Body
 * @property {string} name 货架名称
 * @property {number} warehouseId 仓库ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_59Body
 * @property {string} name 货架名称
 * @property {number} warehouseId 仓库ID
 *
*/
/**
 * @typedef {object} updateUsingPUT_58Body
 * @property {string} isEmail 是否邮件通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {[number]} managements
 * @property {string} name 仓库名称
 * @property {string} remark 备注
 * @property {number} spBuildingId 大厦ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 *
*/
/**
 * @typedef {object} archiverItem
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/
/**
 * @typedef {object} dispatcherItem
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/
/**
 * @typedef {object} supervisorItem
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/
/**
 * @typedef {object} tracerItem
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/
/**
 * @typedef {object} verifierItem
 * @property {number} employeeId 成员ID
 * @property {number} id 工作组成员ID，为空代表新增
 *
*/
/**
 * @typedef {object} createUsingPOST_53Body
 * @property {[archiverItem]} archiver
 * @property {string} description 工作组描述
 * @property {[dispatcherItem]} dispatcher
 * @property {string} name 工作组名称
 * @property {number} parentId 上级id
 * @property {number} sort 排序
 * @property {[supervisorItem]} supervisor
 * @property {[tracerItem]} tracer
 * @property {[verifierItem]} verifier
 *
*/
/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/findUsingGET_68
 * @summary 工作组列表&搜索
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.workTeamName - 工作组名称
* @param {string} params.query.supervisorNames - 主管名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_68(params) {
  return API.get(`/work-team`, { params: { ...params.query })
}

/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/createUsingPOST_53
 * @summary 新增工作组
 * @description 
 * @param {object} params
  * @param {createUsingPOST_53Body} params.body - 请求体 [object Object]
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_53(params) {
  return API.post(`/work-team`, { ...params.body })
}

