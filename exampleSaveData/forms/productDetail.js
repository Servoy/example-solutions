
/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"827C3230-D086-46BE-A54E-EBED311A226A"}
 */
function onDataChangeUnitPrice(oldValue, newValue, event) {
	
	// confirm if user wants to update ALL orders with this product
	var msg = 'You have changed unit price. Update all order details referencing this product?';
	var confirmed = plugins.dialogs.showQuestionDialog('Unit Price Changed',msg,'Yes', 'No');
	if(confirmed){
		
		// call update routine
		
//		foundset.updateOrderDetails();
		foundset.updateOrderDetailsIterative();
	}
	
	return true
}