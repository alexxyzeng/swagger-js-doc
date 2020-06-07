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
 * @typedef {object} customerItem
 
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
 * @typedef {object} employeeItem
 
 * @property {number} accountActivationStatus 
 * @property {avatarUrl} avatarUrl 
 * @property {string} bindAccount 
 * @property {string} createTime 
 * @property {number} creator 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {string} description 
 * @property {string} emNo 
 * @property {number} emStatus 
 * @property {number} emType 
 * @property {string} email 
 * @property {number} gender 
 * @property {number} id 
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {string} name 
 * @property {number} orgDepartmentId 
 * @property {string} orgDepartmentName 
 * @property {number} orgPositionId 
 * @property {string} orgPositionName 
 * @property {string} phone 
 * @property {number} projectId 
 * @property {string} skills 
 * @property {number} source 
 * @property {number} spBuildingId 
 * @property {string} spBuildingName 
 * @property {number} spFloorId 
 * @property {string} spFloorName 
 * @property {number} spSpaceId 
 * @property {string} spSpaceName 
 * @property {string} telephone 
 * @property {number} tenantId 
 * @property {number} version 
 *
*/

/**
 * @typedef {object} files
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} addressItem
 
 * @property {string} code 编码
 * @property {string} createTime 最后的修改时间
 * @property {number} deleted  是否删除：0、未删除 1、已删除
 * @property {string} displayName 楼层名称
 * @property {files} files 
 * @property {number} id ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spFloorId 楼层ID
 * @property {string} spaceNo 房间编号
 * @property {number} spaceType 空间类型：1、房间
 *
*/

/**
 * @typedef {object} userInfosItem
 
 * @property {[addressItem]} address
 * @property {string} company 公司
 * @property {string} department 部门
 * @property {number} departmentId 部门Id
 * @property {string} emNo 员工编号
 * @property {string} email 邮箱
 * @property {string} phone 手机
 * @property {string} position 岗位
 * @property {number} positionId 岗位id
 * @property {string} telephone 电话号码
 * @property {string} title 称谓
 * @property {number} userId 用户/客户ID
 * @property {string} userName 姓名
 * @property {string} userType 报障人类型 1-员工 2-客户 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 *
*/

/**
 * @typedef {object} data
 * @property {[customerItem]} customer
 * @property {[employeeItem]} employee
 * @property {[userInfosItem]} userInfos
 *
*/

/**
 * @typedef {object} searchUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-obstructed
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-obstructed/searchUsingGET_1
 * @summary 查询报障人
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.name - name
 * @return {Promise<searchUsingGET_1Response>}
*/
export function searchUsingGET_1(params) {
  return API.get(`/obstructed`, { params: { ...params.query })
}

