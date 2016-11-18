/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C3CD5F88-D026-48AB-BDCC-375768639697"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders,[{dataProvider:'employeeid',operator:'=',value:employeeid}], orderid, true);
}
