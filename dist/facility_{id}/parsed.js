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
 * @typedef {object} data
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
 * @typedef {object} findByIdUsingGET_13Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_17Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} facilityServiceItem
 
 * @property {[servicesItem]} services
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
 * @property {files} files 
 * @property {string} fixedCode 固定编码
 * @property {string} lifeUnit 质保周期单位 {年=Year-1, 月=Month-2}
 * @property {string} mountDate 安装日期
 * @property {string} mountSpace 安装位置
 * @property {[paramsItem]} params
 * @property {[number]} parents
 * @property {qrCode} qrCode 
 * @property {string} remark 备注
 * @property {serviceAreaObject} serviceAreaObject 
 * @property {number} spBuildingId 大厦
 * @property {number} spFloorId 楼层
 * @property {number} spSpaceId 房间
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_15Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility/findByIdUsingGET_13
 * @summary 设备台帐-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_13Response>}
*/
export function findByIdUsingGET_13(params) {
  return API.get(`/facility/${params.id}`, {})
}

/**
 * @tags facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility/updateUsingPUT_17
 * @summary 修改设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_17Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_17Response>}
*/
export function updateUsingPUT_17(params) {
  return API.put(`/facility/${params.id}`, { ...params.body })
}

/**
 * @tags facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility/deleteUsingDELETE_15
 * @summary 删除设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_15Response>}
*/
export function deleteUsingDELETE_15(params) {
  return API.delete(`/facility/${params.id}`, {})
}

