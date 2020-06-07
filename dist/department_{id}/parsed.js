/**
 * @typedef {object} functionType
 * @property {number} isMU 
 * @property {number} isPMC 
 *
*/

/**
 * @typedef {object} projectsItem
 
 * @property {number} id 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} data
 * @property {string} code 部门编码
 * @property {string} deleted 删除状态, 离线下载接口使用 {删除=Deleted-1, 有效=Valid-0}
 * @property {[string]} departmentType
 * @property {string} description 部门描述
 * @property {functionType} functionType 
 * @property {number} id 部门id
 * @property {number} level 部门层级
 * @property {string} name 部门名称
 * @property {number} parentId 上级部门id
 * @property {string} pathName 部门全称
 * @property {[projectsItem]} projects
 * @property {number} sort 部门排序
 * @property {number} source 来源，0：手动增加，1：外部导入，2：系统同步
 * @property {string} thirdId 第三方ID
 * @property {string} thirdParentId 第三方父级ID
 * @property {number} type 机构类型
 *
*/

/**
 * @typedef {object} findByIdUsingGET_10Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_10Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/findByIdUsingGET_10
 * @summary 查找指定ID部门
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_10Response>}
*/
export function findByIdUsingGET_10(params) {
  return API.get(`/department/${params.id}`, {})
}

/**
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/deleteUsingDELETE_10
 * @summary 删除部门
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_10Response>}
*/
export function deleteUsingDELETE_10(params) {
  return API.delete(`/department/${params.id}`, {})
}

