/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3B246DA4-75D2-4D71-83AF-25B307F98021",variableType:4}
 */
var enabled = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3088AC74-F551-41F1-B2F9-D729048083AF"}
 */
var supplierIDs = '';

/**
 * Filter products based on supplier
 * @private
 *
 * @properties={typeid:24,uuid:"BD6B252A-0B6F-4E6A-82A9-E7297A08075B"}
 */
function filter() {
	
	//	clear filter
	var filterName = 'supplierFilter';
	foundset.removeFoundSetFilterParam(filterName);
	if(supplierIDs){
		
		// split into array and filter
		var ids = supplierIDs.split('\n');
		if(!foundset.addFoundSetFilterParam('supplierid','IN',ids,filterName)){
			
		}
		
	}
	foundset.loadAllRecords();
}

/**
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0F608C12-6B2C-465D-BEAF-41F8AEBC572A"}
 */
function onDataChange(oldValue, newValue, event) {
	filter();
	return true;
}

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
 * @properties={typeid:24,uuid:"D9ED2B71-E650-44F3-A79C-609BE4BC608F"}
 */
function onDataChangeEnabled(oldValue, newValue, event) {
	elements.select.enabled = enabled == 1;
	return true
}