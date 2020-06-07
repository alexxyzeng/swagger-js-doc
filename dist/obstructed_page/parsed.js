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
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-obstructed
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-obstructed/pageUsingGET
 * @summary 分页查询报障人
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.name - name
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise<pageUsingGETResponse>}
*/
export function pageUsingGET(params) {
  return API.get(`/obstructed/page`, { params: { ...params.query })
}

