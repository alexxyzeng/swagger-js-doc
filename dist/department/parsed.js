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
 * @typedef {object} createUsingPOST_6Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_6Body
 * @property {string} code 编码
 * @property {[string]} departmentType
 * @property {string} description 描述
 * @property {functionType} functionType 
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
 * @typedef {object} updateUsingPUT_11Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_11Body
 * @property {string} code 编码
 * @property {[string]} departmentType
 * @property {string} description 描述
 * @property {functionType} functionType 
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
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/createUsingPOST_6
 * @summary 创建部门
 * @description 
 * @param {object} params
  * @param {createUsingPOST_6Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_6Response>}
*/
export function createUsingPOST_6(params) {
  return API.post(`/department`, { ...params.body })
}

/**
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/updateUsingPUT_11
 * @summary 更新部门
 * @description 
 * @param {object} params
  * @param {updateUsingPUT_11Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_11Response>}
*/
export function updateUsingPUT_11(params) {
  return API.put(`/department`, { ...params.body })
}

