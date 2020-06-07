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
 * @typedef {object} appLaunchImg
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} loginLogoImg
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} loginPageImg
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} menuCollapseLogo
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} menuNormalLogo
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} data
 * @property {appLaunchImg} appLaunchImg 
 * @property {string} createTime 创建时间
 * @property {number} dataScope 数据作用域：1、私有 2、应用公用 3、租户公用
 * @property {string} emailSender 发件人显示名称
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isCustomize 是否用户自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {loginLogoImg} loginLogoImg 
 * @property {loginPageImg} loginPageImg 
 * @property {menuCollapseLogo} menuCollapseLogo 
 * @property {menuNormalLogo} menuNormalLogo 
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {string} webTitle 系统名称
 * @property {string} webTitleEn 系统英文名称
 *
*/

/**
 * @typedef {object} createUsingPOST_44Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_44Body
 * @property {appLaunchImg} appLaunchImg 
 * @property {number} dataScope 数据作用域：1、私有 2、应用公用 3、租户公用
 * @property {string} emailSender 发件人显示名称
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isCustomize 是否用户自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {loginLogoImg} loginLogoImg 
 * @property {loginPageImg} loginPageImg 
 * @property {menuCollapseLogo} menuCollapseLogo 
 * @property {menuNormalLogo} menuNormalLogo 
 * @property {number} projectId 项目ID
 * @property {string} reset 是否重置 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} tenantId 租户ID
 * @property {string} webTitle 系统名称
 * @property {string} webTitleEn 系统英文名称
 *
*/
/**
 * @tags systemsetting
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/systemsetting/createUsingPOST_44
 * @summary 新增系统配置
 * @description 
 * @param {object} params
  * @param {createUsingPOST_44Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_44Response>}
*/
export function createUsingPOST_44(params) {
  return API.post(`/system/setting/config`, { ...params.body })
}

