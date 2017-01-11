
/**
 * Record pre-update trigger.
 * Validate the record to be updated.
 * When false is returned the record will not be updated in the database.
 * When an exception is thrown the record will also not be updated in the database but it will be added to databaseManager.getFailedRecords(),
 * the thrown exception can be retrieved via record.exception.getValue().
 *
 * @param {JSRecord<db:/example_data/order_details>} record record that will be updated
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"59D129F1-549C-425A-B02A-82F872FA7344"}
 */
function onRecordUpdate(record) {
	
	// validate order total rule
	if(!validateOrderTotal(record)){
		throw 'Change in item(s) causes order ['+record.orderid+'] to exceed 50K limit';
	}

	// return boolean to indicate success
	return true
}

/**
 * Record pre-insert trigger.
 * Validate the record to be inserted.
 * When false is returned the record will not be inserted in the database.
 * When an exception is thrown the record will also not be inserted in the database but it will be added to databaseManager.getFailedRecords(),
 * the thrown exception can be retrieved via record.exception.getValue().
 *
 * @param {JSRecord<db:/example_data/order_details>} record record that will be inserted
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EFEEF482-9B1B-47CC-A239-EA3FD7562A17"}
 */
function onRecordInsert(record) {
	
	// validate order total rule
	if(!validateOrderTotal(record)){
		throw 'Change in item(s) causes order ['+record.orderid+'] to exceed 50K limit';
	}

	// return boolean to indicate success
	return true;
}

/**
 * Validates that the order total doesn't excede 50K
 * 
 * @private 
 * @param {JSRecord<db:/example_data/order_details>} record record that will be inserted
 * @return {Boolean}
 * @properties={typeid:24,uuid:"DEE76FEB-5FEA-4BAA-82C5-62133388E691"}
 */
function validateOrderTotal(record){
	return record.order_details_to_orders.order_total < 50000;
}
