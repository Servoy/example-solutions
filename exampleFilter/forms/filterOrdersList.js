
/**
 * The user input for start date of the filter
 * @private 
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6D9C3FC1-4743-49B8-9A4D-1459F85FE2BA",variableType:93}
 */
var startDate = null;

/**
 * The user input for end date of the filter
 * @private 
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BD858580-10F6-42F9-88C4-845E47176579",variableType:93}
 */
var endDate = null;

/**
 * The user input for selected employees to filter
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2CC716B-5313-4058-B0E6-83504F4D517E"}
 */
var employeeIDs = '';

/**
 * The user input for selected employees to filter
 * 
 * @private 
 * @type {String}
 * @properties={typeid:35,uuid:"E1861E89-3644-4C79-B5E7-C393D96DC6E4"}
 */
var customerIDs = '';

/**
 * Apply filter for date range
 * 
 * @private 
 * @properties={typeid:24,uuid:"590FD950-0894-4EAB-952C-93784DF71085"}
 */
function filterDate(){

	//	REMOVED NAMED FILTER
	var filterName = 'dateFilter';
	foundset.removeFoundSetFilterParam(filterName);
	
	// ADD START DATE LOWER BOUND IF SPECIFIED
	if(startDate){
		startDate.setHours(0,0,0,0);
		foundset.addFoundSetFilterParam(
			'orderdate',
			'>=',
			startDate,
			filterName
		);
	}
	
	// ADD END DATE UPPER BOUND IF SPECIFIED
	if(endDate){
		endDate.setHours(23,59,59,999);
		foundset.addFoundSetFilterParam(
			'orderdate',
			'<=',
			endDate,
			filterName
		);
	}
	
	// LOAD ALL RECORDS - REQUIRED TO APPLY THE FILTERS
	foundset.loadAllRecords();
}

/**
 * Apply the employee (IN) filter
 * @private 
 * @properties={typeid:24,uuid:"0D51C4FE-6951-491F-B0BA-317871E165BE"}
 */
function filterEmployees(){
	
	// REMOVED NAMED FILTER
	var filterName = 'employeeFilter';
	foundset.removeFoundSetFilterParam(filterName);
	
	// APPLY IN FILTER IF ANY IDS SPECIFEID
	if(employeeIDs){
		var ids = employeeIDs.split('\n');
		
		foundset.addFoundSetFilterParam(
			'employeeid',
			'IN',
			ids,
			filterName
		);
	}
	
	// LOAD ALL RECORDS - REQUIRED TO APPLY THE FILTERS
	foundset.loadAllRecords();
}

/**
 * Apply the customer (IN) filter
 * 
 * @private 
 * @properties={typeid:24,uuid:"F904916E-0E0D-491F-947C-03B4364D9477"}
 */
function filterCustomers(){
	
	// REMOVED NAMED FILTER
	var filterName = 'customerFilter';
	foundset.removeFoundSetFilterParam(filterName);
	
	// APPLY IN FILTER IF ANY IDS SPECIFEID
	if(customerIDs){
		var ids = customerIDs.split('\n');
		
		foundset.addFoundSetFilterParam(
			'customerid',
			'IN',
			ids,
			filterName
		);
	}
	
	// LOAD ALL RECORDS - REQUIRED TO APPLY THE FILTERS
	foundset.loadAllRecords();
}

/**
 * Clears the date filters
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A87DCD78-57A2-46A1-A85F-0D2428B5BE77"}
 */
function clearDateFilter(event) {
	startDate = null;
	endDate = null;
	filterDate();
}

/**
 * Clears the customer filter
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BD5A9D70-A1BF-4104-8641-89C950870C96"}
 */
function clearCustomerFilter(event) {
	customerIDs = null;
	filterCustomers();
}

/**
 * Clears the employee filter
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6D5403BD-CCD7-4D33-8350-0AFE5F764B34"}
 */
function clearEmployeeFilter(event) {
	employeeIDs = null;
	filterEmployees();
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"29276E6D-58E4-42E0-86CD-EBF724658F00"}
 */
function onDataChangeEmployees(oldValue, newValue, event) {
	filterEmployees();
	return true;
}

/**
 * Apply customer filter when selected ids change
 * 
 * @private 
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"D4EF6F27-85EA-4A9F-9B4E-F152D212EB3E"}
 */
function onDataChangeCustomers(oldValue, newValue, event) {
	filterCustomers();
	return true;
}

/**
 * Apply the date filter when input dates change
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A9869114-3ADD-4D2C-94F3-FCDDE0907FE5"}
 */
function onDataChangeDateFilter(oldValue, newValue, event) {
	filterDate();
	return true;
}
