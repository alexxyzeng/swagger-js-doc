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
 * @typedef {object} optionsItem
 
 * @property {string} key key
 * @property {boolean} selected 是否选中
 * @property {string} value 值
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
 * @typedef {object} contentItem
 
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
 * @typedef {object} findUpAndDownFacilityUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility/findUpAndDownFacilityUsingGET
 * @summary 设备台帐-选择关联设备(默认上级设备)
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - 设备台帐ID
* @param {number} params.query.exId - 不包含设备ID(编辑时使用)
* @param {string} params.query.facilityCode - 设备编码
* @param {string} params.query.facilityName - 设备名称
* @param {string} params.query.facilityLevel - 设备级别dict_type=facility_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
* @param {string} params.query.currentLevel - 设备级别dict_type=facility_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}
* @param {[number]} params.query.levels - levels
* @param {string} params.query.facilityType - 设备分类
* @param {string} params.query.mountSpace - 安装位置
 * @return {Promise<findUpAndDownFacilityUsingGETResponse>}
*/
export function findUpAndDownFacilityUsingGET(params) {
  return API.get(`/facility/link`, { params: { ...params.query })
}

