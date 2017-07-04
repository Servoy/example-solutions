
/**
 * The user input for start date of the filter
 * @private 
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5A21628D-C40F-4CF0-AB1C-88B93B6086B0",variableType:93}
 */
var startDate = null;

/**
 * The user input for end date of the filter
 * @private 
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DB856376-F984-4401-B690-E0FE3A853EED",variableType:93}
 */
var endDate = null;

/**
 * The user input for selected employees to filter
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A8456D95-AC17-4B08-907B-11E7C19C710F"}
 */
var employeeIDs = '';

/**
 * The user input for selected employees to filter
 * 
 * @private 
 * @type {String}
 * @properties={typeid:35,uuid:"DAE9F767-FBC2-4E42-AEA0-5FD3EA5DE9CB"}
 */
var customerIDs = '';

/**
 * Apply filter for date range
 * 
 * @private 
 * @properties={typeid:24,uuid:"30CDBAC9-867F-48EC-9AEC-BFA6C7A165EF"}
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
 * @properties={typeid:24,uuid:"6D4889AB-4F06-43E9-93B3-F2C619728915"}
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
 * @properties={typeid:24,uuid:"7F8D8757-2054-4A86-9D9A-AEF1021A20DE"}
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
 * @properties={typeid:24,uuid:"36DEFCE7-8405-4EAA-AAF6-4FB4DE716195"}
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
 * @properties={typeid:24,uuid:"0536BC35-9B00-4F0B-94CB-C312A66D7FEB"}
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
 * @properties={typeid:24,uuid:"FA4501A0-4D9D-4BD0-87EB-D2E9312AA232"}
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
 * @properties={typeid:24,uuid:"0F1039BE-DF5B-4813-9B21-6852F5B96110"}
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
 * @properties={typeid:24,uuid:"29A96FDC-90C0-48F9-9768-E8CCF0D2ACB1"}
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
 * @properties={typeid:24,uuid:"53D27D7C-C259-4C9F-AD6C-162D4D2B41CB"}
 */
function onDataChangeDateFilter(oldValue, newValue, event) {
	filterDate();
	return true;
}
