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
 * @typedef {object} dataItem
 * @property {number} type 机构类型
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
 *
*/

/**
 * @typedef {object} findUsingGET_14Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/findUsingGET_14
 * @summary 查找部门列表-非树形
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.pathName - 层级名称
* @param {number} params.query.isPMC - 查询物业公司 1-仅查询物业公司
 * @return {Promise<findUsingGET_14Response>}
*/
export function findUsingGET_14(params) {
  return API.get(`/department/find`, { params: { ...params.query })
}

