/**
 * @tags <%= InterfaceTags %>
 * @link <%= InterfaceDocUrl %>
 * @summary <%= InterfaceSummary %>
 * @description <%= InterfaceDescription %>
 * @param params <%= InterfaceParams %>
 <%= InterfaceParamsProps %>
 */
export function <%= InterfaceName %>(<%= InterfaceParams %>) {
  return API.<%= InterfaceMethod %>(<%= InterfaceUrl %>, <%= InterfaceParamsMethod %>)
}
