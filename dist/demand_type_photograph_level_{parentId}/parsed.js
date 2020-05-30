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
 * @tags service-center-demand-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/findLevelOfPhotographUsingGET_1
 * @summary 需求类型-随手拍-层级查询
 * @description 
 * @param {object} params
 * @param {number} params.parentId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findLevelOfPhotographUsingGET_1(params) {
  return API.get(`/demand/type/photograph/level/${params.parentId}`, {})
}

