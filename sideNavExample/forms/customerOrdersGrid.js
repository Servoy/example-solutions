
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5601B839-2813-4293-B777-25C21AF7FEE2"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders,[{dataProvider:'customerid',operator:'=',value:customerid}], orderid, true);
}
