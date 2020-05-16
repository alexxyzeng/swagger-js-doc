/**
 * @tags base-menu
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-menu/findAllMenusUsingGET
 * @summary 显示所有菜单
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllMenusUsingGET(params) {
  return API.get(`/enterprisemenu/findAllMenus`, {})
}

