/**
 * @typedef {object} exceptions
 * @property {[string]} exceptions
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
 * @typedef {object} inputRange
 * @property {number} ceiling 上限
 * @property {number} lower 下限
 *
*/

/**
 * @typedef {object} optionsItem
 
 * @property {string} key key
 * @property {boolean} selected 是否选中
 * @property {string} value 值
 *
*/

/**
 * @typedef {object} options
 * @property {inputRange} inputRange 
 * @property {[optionsItem]} options
 *
*/

/**
 * @typedef {object} workordersItem
 
 * @property {string} createTime 创建时间
 * @property {string} description 故障描述
 * @property {string} handleResult 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} handleWay 异常处理方式：现状处理、保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} serviceman 维修人员
 * @property {number} taskContentId 任务内容ID
 * @property {number} taskId 任务ID
 * @property {string} workorderCode 工单编号
 * @property {number} workorderId 工单ID
 * @property {string} workorderStatus 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 *
*/

/**
 * @typedef {object} contentsItem
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} content 内容
 * @property {number} contentId 内容ID
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {exceptions} exceptions 
 * @property {number} facilityId 设备ID
 * @property {string} faultDescription 故障描述
 * @property {files} files 
 * @property {number} handleNum 操作记录数
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSituation 是否进行过现状处理 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} model 模式：1-常规 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} modifyTime 最后修改时间
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {options} options 
 * @property {number} projectId 项目id
 * @property {string} result 巡检结果
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {string} situationOperator 现状处理人
 * @property {string} situationTime 现状处理时间
 * @property {string} situationWay 现状处理 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} sort 顺序
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 * @property {number} taskObjectId 任务对象ID
 * @property {number} templateId 模板ID
 * @property {string} unit 单位
 * @property {[workordersItem]} workorders
 *
*/

/**
 * @typedef {object} componentsItem
 
 * @property {string} componentBrand 
 * @property {string} componentCode 
 * @property {string} componentLife 
 * @property {string} componentModel 
 * @property {string} componentName 
 * @property {string} componentUnit 
 * @property {string} createTime 
 * @property {number} creator 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {string} enableTime 
 * @property {string} expireTime 
 * @property {boolean} expired 
 * @property {string} extend 
 * @property {number} facilityId 
 * @property {number} id 
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {number} projectId 
 * @property {string} remark 
 * @property {number} tenantId 
 * @property {number} typeComponentId 
 * @property {number} version 
 *
*/

/**
 * @typedef {object} optionContent
 * @property {[optionsItem]} options
 *
*/

/**
 * @typedef {object} typeParam
 * @property {string} extend 
 * @property {number} id 
 * @property {optionContent} optionContent 
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
 * @typedef {object} paramsItem
 
 * @property {string} extend 扩展
 * @property {number} facilityId 设备id
 * @property {string} paramDesc 描述
 * @property {string} paramName 参数名称
 * @property {string} paramType 参数类型1-文本 2-数字 3-日期 4-单选 {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}
 * @property {string} paramUnit 单位
 * @property {string} paramValue 参数值
 * @property {string} remark 备注
 * @property {typeParam} typeParam 
 * @property {number} typeParamId 设备分类参数id
 *
*/

/**
 * @typedef {object} qrCode
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} servicesItem
 
 * @property {string} serviceArea 服务区域
 * @property {string} serviceObject 服务对象
 *
*/

/**
 * @typedef {object} serviceAreaObject
 * @property {[servicesItem]} services
 *
*/

/**
 * @typedef {object} parentsItem
 
 * @property {string} capitalCode 
 * @property {string} createTime 
 * @property {number} creator 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {string} enableDate 
 * @property {string} exfactoryDate 
 * @property {string} extend 
 * @property {string} facilityBrand 
 * @property {string} facilityCode 
 * @property {string} facilityDesc 
 * @property {number} facilityImportance 
 * @property {string} facilityLevel null {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
 * @property {number} facilityLife 
 * @property {string} facilityModel 
 * @property {string} facilityName 
 * @property {string} facilitySerial 
 * @property {string} facilityStatus null {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
 * @property {string} facilityType 
 * @property {number} facilityTypeId 
 * @property {string} facilityWeight 
 * @property {files} files 
 * @property {string} fixedCode 
 * @property {number} id 
 * @property {number} lifeUnit 
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {string} mountDate 
 * @property {string} mountSpace 
 * @property {number} projectId 
 * @property {qrCode} qrCode 
 * @property {string} remark 
 * @property {serviceAreaObject} serviceAreaObject 
 * @property {number} spBuildingId 
 * @property {number} spFloorId 
 * @property {number} spSpaceId 
 * @property {number} tenantId 
 * @property {number} version 
 *
*/

/**
 * @typedef {object} typeParamsItem
 
 * @property {string} extend 
 * @property {number} id 
 * @property {optionContent} optionContent 
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
 * @typedef {object} facility
 * @property {string} annex 附件
 * @property {string} capitalCode 资产编码
 * @property {[componentsItem]} components
 * @property {string} createTime 创建时间
 * @property {number} creator 创建人
 * @property {number} deleteTime 删除时间
 * @property {number} deleted 是否删除0-未删除；1-已删除
 * @property {string} enableDate 启用日期
 * @property {string} exfactoryDate 出厂日期
 * @property {string} extend 扩展
 * @property {string} facilityBrand 品牌dict_type=facility_tally_brand
 * @property {string} facilityCode 设备编码
 * @property {string} facilityDesc 描述
 * @property {number} facilityImportance 重要性dict_type=facility_tally_importance
 * @property {number} facilityLevel 设备级别dict_type=facility_tally_level
 * @property {number} facilityLife 质保周期
 * @property {string} facilityModel 型号
 * @property {string} facilityName 设备名称
 * @property {string} facilitySerial 设备序列号
 * @property {number} facilityStatus 设备状态dict_type=facility_tally_status
 * @property {string} facilityType 系统分类展示
 * @property {number} facilityTypeId 系统分类
 * @property {string} facilityWeight 重量
 * @property {files} files 
 * @property {string} fixedCode 固定编码
 * @property {number} id 设备台帐ID
 * @property {boolean} isDirectRef 是否直接关联
 * @property {boolean} isMaintenance 是否维保中
 * @property {boolean} isRepairing 是否维修中
 * @property {number} lifeUnit 质保周期单位dict_type=facility_tally_life_unit
 * @property {number} modifier 最后修改人
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountDate 安装日期
 * @property {string} mountSpace 安装位置
 * @property {[paramsItem]} params
 * @property {[parentsItem]} parents
 * @property {string} parentsShow 上级设备展示
 * @property {string} picture 图片
 * @property {number} projectId 项目ID
 * @property {qrCode} qrCode 
 * @property {string} qrCodeStr 二维码地址-String
 * @property {string} regionName 片区
 * @property {string} remark 备注
 * @property {serviceAreaObject} serviceAreaObject 
 * @property {number} spBuildingId 大厦
 * @property {string} spBuildingName 大厦名称
 * @property {number} spFloorId 楼层
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 房间
 * @property {string} spSpaceName 房间名称
 * @property {number} tenantId 企业ID
 * @property {[typeParamsItem]} typeParams
 * @property {number} version 版本号
 *
*/

/**
 * @typedef {object} contentItem
 
 * @property {[contentsItem]} contents
 * @property {string} createTime 创建时间
 * @property {string} facStatOpera 设备状态是否可修改 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {facility} facility 
 * @property {number} facilityId 设备ID
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {number} id 唯一id
 * @property {string} isMiss 是否漏检 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isPatch 是否补检 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 任务ID
 * @property {string} jobType 任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} modifyTime 最后修改时间
 * @property {number} patchBy 补检人
 * @property {string} patchByUser 补检人
 * @property {string} patchEndTime 补检结束时间
 * @property {string} patchStartTime 补检开始时间
 * @property {number} projectId 项目id
 * @property {string} status 状态 {未检=Unstart-1, 已检=Complete-2}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 * @property {[workordersItem]} workorders
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
 * @property {[contentItem]} content
 * @property {number} currentSize 当前页条数
 * @property {boolean} first 是否第一页
 * @property {boolean} last 是否最后一页
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {pageable} pageable 
 * @property {number} totalElements 总条数
 * @property {number} totalPages 总页数
 *
*/

/**
 * @typedef {object} findUsingGET_36Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/findUsingGET_36
 * @summary 巡检任务-设备-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.taskJobId - 巡检任务-工作任务ID
* @param {string} params.query.jobType - 巡检任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @return {Promise<findUsingGET_36Response>}
*/
export function findUsingGET_36(params) {
  return API.get(`/inspect-task/facility`, { params: { ...params.query })
}

