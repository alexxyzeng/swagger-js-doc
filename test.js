/**
 * @tags inspect-task
 * @link http://test.fm.dfocus.tech/df-fm/swagger-ui.html#!/inspect-task/findByIdUsingGET_26
 * @summary 巡检任务-工单-详情
 * @description 
 * @param params <%= InterfaceParams %>
 <%= InterfaceParamsProps %>
 */
export function findByIdUsingGET_26(<%= InterfaceParams %>) {
    return API.get(<%= InterfaceUrl %>, <%= InterfaceParamsMethod %>)
}

/**
 * @tags inspect-task
 * @link http://test.fm.dfocus.tech/df-fm/swagger-ui.html#!/inspect-task/updateUsingPUT_33
 * @summary 修改巡检任务-工单-部分
 * @description 
 * @param params <%= InterfaceParams %>
 <%= InterfaceParamsProps %>
 */
export function updateUsingPUT_33(<%= InterfaceParams %>) {
    return API.put(<%= InterfaceUrl %>, <%= InterfaceParamsMethod %>)
}

/**
 * @tags inspect-task
 * @link http://test.fm.dfocus.tech/df-fm/swagger-ui.html#!/inspect-task/deleteUsingDELETE_31
 * @summary 删除巡检任务-工单
 * @description 
 * @param params <%= InterfaceParams %>
 <%= InterfaceParamsProps %>
 */
export function deleteUsingDELETE_31(<%= InterfaceParams %>) {
    return API.delete(<%= InterfaceUrl %>, <%= InterfaceParamsMethod %>)
}

