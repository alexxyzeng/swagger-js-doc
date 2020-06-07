/**
 * @typedef {object} assetItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} billItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} bulletinItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} contractItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} demandItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} energyItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} inspectItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} inventoryItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} maintItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} onGuardItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} reportItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} repositoryItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} sportItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} undertakeItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} visitorItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} workorderItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} data
 * @property {[assetItem]} asset
 * @property {[billItem]} bill
 * @property {[bulletinItem]} bulletin
 * @property {[contractItem]} contract
 * @property {[demandItem]} demand
 * @property {[energyItem]} energy
 * @property {[inspectItem]} inspect
 * @property {[inventoryItem]} inventory
 * @property {[maintItem]} maint
 * @property {[onGuardItem]} onGuard
 * @property {[reportItem]} report
 * @property {[repositoryItem]} repository
 * @property {[sportItem]} sport
 * @property {[undertakeItem]} undertake
 * @property {[visitorItem]} visitor
 * @property {[workorderItem]} workorder
 *
*/

/**
 * @typedef {object} findUsingGET_57Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-statistics
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-statistics/findUsingGET_57
 * @summary 工作台任务数
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.location - 查询类型 1-首页 2-工作台 {首页=Home-1, 工作台=Work-2}
 * @return {Promise<findUsingGET_57Response>}
*/
export function findUsingGET_57(params) {
  return API.get(`/stat/home`, { params: { ...params.query })
}

