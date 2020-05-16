/**
 * @tags pm
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm/findUsingGET_42
 * @summary 维保规则列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目id
* @param {number} params.query.facilityId - 设备id
* @param {number} params.query.facilityTypeId - 设备分类id
* @param {string} params.query.facilityTypeName - 设备分类
* @param {[number]} params.query.spaceIds - 大楼|楼层|房间 位置id
* @param {string} params.query.spaceName - 大楼|楼层|房间 位置
* @param {string} params.query.name - 维保名称
* @param {string} params.query.cycleUnit - 周期单位 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}
* @param {string} params.query.isSlideCycle - 是否滑动周期1-是；0-否 是否枚举{否=No-0, 是=Yes-1}
* @param {string} params.query.nextDateBegin - 下次维保日期开始
* @param {string} params.query.nextDateEnd - 下次维保日期结束
* @param {string} params.query.isAutoWorkorder - 是否自动生成工单 是否枚举{否=No-0, 是=Yes-1}
* @param {string} params.query.status - 设置状态0-暂停；1-启用 {启用=Enable-1, 暂停=Pause-2}
* @param {string} params.query.keyWord - 关键词查询，用于日历查询
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_42(params) {
  return API.get(`/pm/maint`, { params: { ...params.query })
}

/**
 * @tags pm
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm/createUsingPOST_27
 * @summary 新增设置
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.approver - undefined
 * @param {number} params.body.beginMonth - 维保时间开始
 * @param {number} params.body.cycle - 维保周期
 * @param {string} params.body.cycleUnit - 周期单位:1-天;2-周;3-月;4-季;5年 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}
 * @param {string} params.body.effect - 影响
 * @param {number} params.body.endMonth - 维保时间结束
 * @param {[excludeFacilityIdsItem]} params.body.excludeFacilityIds - 不维保设备id
 * @param {[facilityIdsItem]} params.body.facilityIds - 设备id列表
 * @param {[facilityTypesItem]} params.body.facilityTypes - 维保设备分类
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.firstDate - 首次维保日期
 * @param {undefined} params.body.generateTime - undefined
 * @param {string} params.body.isAllYear - 是否全年 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isApprove - 是否审批 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isAutoArchive - 是否自动存档 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isAutoWorkorder - 是否自动生成工单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isCopySave - 是否拷贝保存 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isFacilityQrcode - 是否通过扫码访问设备 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSlideCycle - 是否滑动周期 1-是；0-否 是否枚举{否=No-0, 是=Yes-1}
 * @param {[materialsItem]} params.body.materials - 维保物资
 * @param {string} params.body.name - 维保名称
 * @param {[noticesItem]} params.body.notices - 维保提醒
 * @param {number} params.body.oriMaintId - 拷贝前维保设置id
 * @param {number} params.body.predictTime - 维保时长
 * @param {string} params.body.predictUnit - 维保时长单位:1-分钟;2-小时;3-天;4-月;5-年 {分钟=Min-1, 小时=Hour-2, 天=Day-3, 月=Month-4, 年=Year-5}
 * @param {string} params.body.priorityName - 优先级名称：一般、紧急、紧急重要
 * @param {[spacesItem]} params.body.spaces - 维保空间
 * @param {string} params.body.status - 计划状态 1-启用 2-暂停 {启用=Enable-1, 暂停=Pause-2}
 * @param {[stepsItem]} params.body.steps - 维保步骤
 * @param {number} params.body.storeId - 仓库id
 * @param {string} params.body.storeName - 仓库名称
 * @param {[toolsItem]} params.body.tools - 维保工具
 * @param {[workTeamsItem]} params.body.workTeams - 工作组
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_27(params) {
  return API.post(`/pm/maint`, { ...params.body })
}

