/**
 * @typedef {object} addProcessesItem
 
 * @property {number} additionalBy 追加人ID
 * @property {string} additionalByAvatar 追加人头像
 * @property {string} additionalByName 追加人
 * @property {string} approveOpinion 审核意见
 * @property {string} approveStatus 审核情况 1-待审核 2-通过 3-不通过 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}
 * @property {string} approveTime 审核时间
 * @property {string} approver 审核人
 * @property {number} approverId 审核人ID
 * @property {string} createTime 创建时间
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} processOpinion 追加处理意见
 * @property {number} projectId 项目ID
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
 * @typedef {object} files
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} demandTypeInfo
 * @property {string} code 需求类型编码
 * @property {string} createTime 创建时间
 * @property {string} description 需求描述
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRefOrder 是否关联工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isVisiblePhotograph 随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isVisiblePhotographOfParent 上级随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后的修改时间
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} projectId 项目ID
 * @property {number} sort 排序
 * @property {string} typeName 类型名称
 *
*/

/**
 * @typedef {object} satisfactionsItem
 * @property {string} type 类型 {服务质量=Quality-1, 服务速度=Speed-2, 服务态度=Attitude-3}
 * @property {string} createTime 创建时间
 * @property {number} demandId 需求ID
 * @property {number} evaluateId 评价ID
 * @property {string} grade 评级
 * @property {number} id 由程序分配的唯一ID
 * @property {number} maxStar 最大星数
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} score 分值
 * @property {number} star 当前星数
 *
*/

/**
 * @typedef {object} evaluate
 * @property {string} createTime 创建时间
 * @property {number} creator 创建者
 * @property {number} demandId 需求ID
 * @property {number} evaluateBy 评价人
 * @property {string} feedback 反馈意见
 * @property {number} id 由程序分配的唯一ID
 * @property {number} modifier 修改者
 * @property {string} modifyTime 修改时间
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {[satisfactionsItem]} satisfactions
 * @property {string} type 类型：评价、回访 {评价=Evaluate-1, 回访=Visit-2}
 *
*/

/**
 * @typedef {object} processesItem
 
 * @property {string} content 跟进内容
 * @property {string} createTime 创建时间
 * @property {number} creator 创建者
 * @property {string} creatorName 创建人名称
 * @property {number} demandId 需求ID
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} otherData 其他数据
 * @property {number} processBy 处理人ID
 * @property {string} processType 处理类型 {创建=Create-1, 审核=Approve-2, 更新=Update-3, 跟进=Follow-4, 建单=CreateOrder-5, 处理完成=Done-6, 验证=Confirm-7, 评价=Evaluate-8, 回访=Visit-9, 取消=Cancel-10, 转派=Redeploy-11, 追加处理=Additional-12, 评论=Comment-13}
 * @property {string} processTypeDesc 处理类型描述
 * @property {string} processorAvatarUrl 处理人头像地址
 * @property {string} processorName 处理人名称
 * @property {number} projectId 项目ID
 * @property {number} refId 关联ID
 * @property {number} refType 关联类型
 * @property {string} remark 备注
 *
*/

/**
 * @typedef {object} spacesItem
 
 * @property {string} createTime 创建时间
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/

/**
 * @typedef {object} traceFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} workTeamsItem
 
 * @property {number} id 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} workordersItem
 
 * @property {string} createTime 创建时间
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {string} status 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 * @property {string} workorderCode 工单编码
 * @property {number} workorderId 工单ID
 *
*/

/**
 * @typedef {object} data
 * @property {[addProcessesItem]} addProcesses
 * @property {string} appellation 称谓
 * @property {string} code 需求编码
 * @property {string} company 公司名称
 * @property {string} completeTime 完成时间
 * @property {number} completionDuration 完成时长(分钟)
 * @property {string} createTime 创建时间
 * @property {number} creator 创建者
 * @property {string} creatorName 创建者名称
 * @property {number} customerId 客户ID
 * @property {number} demandTypeId 需求类型ID
 * @property {demandTypeInfo} demandTypeInfo [object Object]
 * @property {string} demandTypeName 需求类型名称
 * @property {string} demandTypePathName 需求类型全称
 * @property {number} demandTypeRefId 需求类型改关联ID
 * @property {string} department 部门
 * @property {number} departmentId 部门id
 * @property {string} description 需求描述
 * @property {string} email 电子信箱
 * @property {number} employeeId 员工ID
 * @property {evaluate} evaluate 
 * @property {string} evaluateStatus 评价状态 {未评价=No-1, 手动评价=YesHand-2, 自动评价=YesAuto-3}
 * @property {string} expectEndTime 预计结束时间
 * @property {string} expectStartTime 预计开始时间
 * @property {string} feedback 反馈意见
 * @property {files} files 
 * @property {string} fromEmail 来源信箱
 * @property {string} hasPermission 是否有权限 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isComplete 是否完成 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isFromEmail 是否来自邮件 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isRefOrder 是否关联工单
 * @property {string} isReqScope 是否必填位置 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} modifier 修改者
 * @property {string} modifyTime 修改时间
 * @property {number} orderNum 关联的工单数量
 * @property {number} origin 第三方来源：1-随手拍
 * @property {string} phone 手机号
 * @property {string} position 职位
 * @property {[processesItem]} processes
 * @property {number} projectId 项目ID
 * @property {string} projectName 项目名称
 * @property {number} responseDuration 响应时长(分钟)
 * @property {string} source 来源 {微信=Wechat-1, 手机=Phone-2, 邮件=Email-3, PC=Web-4}
 * @property {[spacesItem]} spaces
 * @property {string} status 状态 {待审核=PendingCheck-1, 待处理=PendingDispose-2, 跟进中=Follow-3, 已建单=CreatedOrder-4, 待验收=PendingConfirm-5, 待评价=PendingEvaluate-6, 已完成=Done-7, 已评价=Evaluate-9, 已取消=Cancel-8}
 * @property {string} tel 电话
 * @property {traceFiles} traceFiles 
 * @property {number} unreadCommonCount 未读评论数
 * @property {string} userType 用户类型 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @property {string} username 报账人名称
 * @property {string} visitStatus 回访状态 {未回访=No-1, 已回访=Yes-2}
 * @property {[workTeamsItem]} workTeams
 * @property {[workordersItem]} workorders
 *
*/

/**
 * @typedef {object} affirmUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} affirmUsingPUTBody
 * @property {string} content 内容
 * @property {string} isPass 是否通过 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 *
*/
/**
 * @tags service-center-demand
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand/affirmUsingPUT
 * @summary 需求验收
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {affirmUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<affirmUsingPUTResponse>}
*/
export function affirmUsingPUT(params) {
  return API.put(`/demand/${params.id}/affirm`, { ...params.body })
}

