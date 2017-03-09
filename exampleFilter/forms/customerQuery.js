/**
 * User input for min sales filter
 * 
 * @private 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"90894F7F-4186-46B5-8B27-61866015D3C9",variableType:4}
 */
var minSales;

/**
 * User input for max sales filter
 * 
 * @private 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D996CB6-F754-430F-AC2B-592A691C8707",variableType:4}
 */
var maxSales;

/**
 * User input for country filter
 * 
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0263404F-CCB5-4782-B423-A46B21681244"}
 */
var countries = '';


/**
 * Loads the data based on the filter choices
 * @private 
 * @properties={typeid:24,uuid:"5DEDA8DD-F159-45B2-ACCA-0F40993E9B1B"}
 */
function runQuery(){
	
	// QUERY FOR CUSTOMERS TABLE
	var q = datasources.db.example_data.customers.createSelect();
	
	// MUST USE A GROUP-BY BECAUSE AGGREGATES ARE USED
	q.groupBy.add(q.columns.customerid);
	
	// JOINS
	var orders = q.joins.customers_to_orders;
	var orderDetails = orders.joins.orders_to_order_details;
	
	// MIN SALES FILTER
	if(minSales){
		
		// USE SQL FUNTION (MULTIPLY) AND SUM AGGREGATE
		var totalSales = orderDetails.columns.quantity
			.multiply(orderDetails.columns.unitprice)
			.sum;
		
		// MUST USE "HAVING" CLAUSE FOR CONDITIONS W/ AGGREGATES
		q.having.add(totalSales.ge(minSales));
	}
	
	// MAX SSALES FILTER
	if(maxSales){
		
		// USE SQL FUNTION (MULTIPLY) AND SUM AGGREGATE
		totalSales = orderDetails.columns.quantity
			.multiply(orderDetails.columns.unitprice)
			.sum;
		
		// MUST USE "HAVING" CLAUSE FOR CONDITIONS W/ AGGREGATES
		q.having.add(totalSales.le(maxSales));
	}

	
	// LOAD RECORDS
	foundset.loadRecords(q);
}

/**
 * (Re)Apply country filter
 * @private 
 * @properties={typeid:24,uuid:"75CD7F45-D39E-44A2-B399-1A5F09748275"}
 */
function filterCountry(){
	
	// REMOVE FILTER
	var filterName = 'countryFilter';
	foundset.removeFoundSetFilterParam(filterName);
	
	// (RE)APPLY FILTER
	if(countries){
		foundset.addFoundSetFilterParam(
			'country',
			'IN',
			countries.split('\n'),
			filterName
		);
	}
	
	// RE-RUN QUERY **WORKS TOGETHER WITH FILTER!**
	runQuery();
}

/**
 * Update filter when user input changes
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4DEF31D6-60AF-4943-A4C6-5EC4D0DEE6F5"}
 */
function onDataChangeCountries(oldValue, newValue, event) {
	filterCountry();
	return true;
}

/**
 * re-run query when user input changes
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A67436DC-0CAE-45A5-8E3C-B1D6472D78F1"}
 */
function onDataChangeTotalSales(oldValue, newValue, event) {
	runQuery();
	return true
}
