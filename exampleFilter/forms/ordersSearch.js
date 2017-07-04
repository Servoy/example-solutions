/**
 * The user input for start date of the filter
 * @private 
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"1E7EAE65-2C15-4184-A078-64A2C7599DAA",variableType:93}
 */
var startDate = null;

/**
 * The user input for end date of the filter
 * @private 
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"0BCC64A1-2FFF-4C32-9DBC-6B9B53004908",variableType:93}
 */
var endDate = null;

/**
 * The user input for selected employees to filter
 * @private 
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"C6D53542-6FD4-483F-93FC-85AF74CF629A"}
 */
var employeeIDs = '';

/**
 * The user input for selected employees to filter
 * 
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4DB2E6CA-95B2-418A-8A13-D4C7D6635BBA"}
 */
var customerIDs = '';

/**
 * Apply filter for date range
 * 
 * @private 
 *
 * @properties={typeid:24,uuid:"2F64B934-2E42-4B9A-99A3-6D04CC9F87AF"}
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
 *
 * @properties={typeid:24,uuid:"75B76538-40FF-47CE-9500-346D37C8183F"}
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
 *
 * @properties={typeid:24,uuid:"7F8F077F-60E3-4306-99B4-F804C46BC6FA"}
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
 * @properties={typeid:24,uuid:"0ADE1270-49C6-4B3F-B00F-8B90D013C67C"}
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
 * @properties={typeid:24,uuid:"A5308F75-26EC-4AA4-8DB1-70885CFC0517"}
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
 * @properties={typeid:24,uuid:"E1C3C4C9-8222-4D70-B025-BE950F97135B"}
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
 * @properties={typeid:24,uuid:"6553213D-74F5-43DA-B115-4DCB9F13115A"}
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
 * @properties={typeid:24,uuid:"8126CACB-5A4D-4D68-A911-93BD557572F7"}
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
 * @properties={typeid:24,uuid:"2E42A242-173A-4EA3-9F59-DE992CB0A073"}
 */
function onDataChangeDateFilter(oldValue, newValue, event) {
	filterDate();
	return true;
}
