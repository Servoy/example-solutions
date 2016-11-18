
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9A485CE8-1E45-4AE3-8E1F-B82CDB74F9BA"}
 */
function showProduct(event) {
	forms.navMain.navigate(forms.products,[{dataProvider:'supplierid',operator:'=',value:supplierid}],productid,true);
}
