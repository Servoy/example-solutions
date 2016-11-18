
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"52DFE5A5-34D3-4C6A-8DC6-0467D7C408DE"}
 */
function showCustomer(event) {
	forms.navMain.navigate(forms.customers,null,customerid,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EC701414-9263-4765-BAC3-CF589E71E079"}
 */
function showEmployee(event) {
	forms.navMain.navigate(forms.employees,null,employeeid,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"70DB494A-5584-4A63-92FC-8637FF26AB81"}
 */
function showShipper(event) {
	forms.navMain.navigate(forms.shippers,null,shipvia,true);
}
