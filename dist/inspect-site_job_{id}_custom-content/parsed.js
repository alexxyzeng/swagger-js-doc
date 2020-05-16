/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/createJobContentUsingPOST
 * @summary 自定义巡检点位-工作任务-内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 内容
 * @param {string} params.body.defaultVal - 默认值
 * @param {undefined} params.body.exceptions - undefined
 * @param {number} params.body.facilityId - 设备ID
 * @param {[facilityIdsItem]} params.body.facilityIds - 选择的设备
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.isCustom - 是否自定义 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.jobType - 任务类型：1-综合巡检、2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @param {string} params.body.model - 模式：1-常规、2-夏季、3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @param {undefined} params.body.options - undefined
 * @param {string} params.body.runStatus - 运行状态：1-不限、2-在线、3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @param {number} params.body.sort - 顺序
 * @param {string} params.body.type - 类型：1-输入、2-选择 {输入=Input-1, 选择=Select-2}
 * @param {string} params.body.unit - 单位
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createJobContentUsingPOST(params) {
  return API.post(`/inspect-site/job/${params.id}/custom-content`, { ...params.body })
}

