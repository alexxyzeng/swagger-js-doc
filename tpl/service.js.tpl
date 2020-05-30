/**
 * @tags <%= InterfaceTags %>
 * @link <%= InterfaceDocUrl %>
 * @summary <%= InterfaceSummary %>
 * @description <%= InterfaceDescription %>
 * @param {object} params
 <%= InterfaceParamsProps %>
 * @return {Promise<<%= ReturnValueType %>>}
*/
export function <%= InterfaceName %>(<%= InterfaceParams %>) {
  return API.<%= InterfaceMethod %>(<%= InterfaceUrl %>, <%= InterfaceParamsMethod %>)
}
