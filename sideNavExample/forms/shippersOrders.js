
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2A9B5460-1F95-4ABC-AE02-FC58D2F37619"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders,[{dataProvider:'shipvia',operator:'=',value:shipvia}], orderid, true);
}
