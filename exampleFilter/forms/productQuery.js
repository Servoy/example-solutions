/**
 * The current group
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"74E80FCE-FD9F-4611-BED4-AFBFD675ACF0"}
 */
var selectedGrouping = 'Category';

/**
 * The applied filters i.e.{Product:Chai}
 * 
 * @private
 * @type {} 
 * @properties={typeid:35,uuid:"B28061D7-8C0C-43E1-B6B3-1BF6FA9A9DE0",variableType:-4}
 */
var filters = {};

/**
 * The grouping "path" for drill down
 * @private 
 * @properties={typeid:35,uuid:"541631F4-A783-49FE-9CDC-EE5D14AE49BD",variableType:-4}
 */
var groups = [
	'Category',
	'Product',
	'Customer'
];

/**
 * Runs the query with the applied group and filters
 * 
 * @private 
 * @properties={typeid:24,uuid:"968EFAD0-8C0A-47BA-9736-06724D7918EF"}
 */
function runQuery(){
	
	// CREATE SELECT FROM ORDER DETAILS
	var q = datasources.db.example_data.order_details.createSelect();
	
	// JOINS
	var orders = q.joins.order_details_to_orders;
	var customers = orders.joins.orders_to_customers;
	var products = q.joins.order_details_to_products;
	var categories = products.joins.products_to_categories;
	var suppliers = products.joins.products_to_suppliers;
	
	
	// DETERMINE GROUPING
	switch (selectedGrouping) {
		case 'Category':
			q.groupBy.add(categories.columns.categoryname);
			q.result.add(categories.columns.categoryname);
			break;
		case 'Product' :
			q.groupBy.add(products.columns.productname);
			q.result.add(products.columns.productname);
			break;
		case 'Customer' :
			q.groupBy.add(customers.columns.companyname);
			q.result.add(customers.columns.companyname);
			break;
		case 'Supplier' :
			q.groupBy.add(suppliers.columns.companyname);
			q.result.add(suppliers.columns.companyname);
		break;
	default:
		break;
	}
	
	
	// ADD AGGREGATE
	q.result.add(
		q.columns.quantity.multiply(
			q.columns.unitprice
		)
		.sum
	);
		
	// ADD FILTERS
	for (var groupName in filters) {
		var value = filters[groupName];

		switch (groupName) {
			case 'Category':
				q.where.add(categories.columns.categoryname.eq(value));
				break;
			case 'Product' :
				q.where.add(products.columns.productname.eq(value));
				break;
			case 'Customer' :
				q.where.add(customers.columns.companyname.eq(value));
				break;
			case 'Supplier' :
				q.where.add(suppliers.columns.companyname.eq(value));
			break;
			default:
				break;
		}
	}
	
	// RUN QUERY
	var ds = databaseManager.getDataSetByQuery(q,-1);
	
	// update chart
	var labels = ds.getColumnAsArray(1);
	var values = ds.getColumnAsArray(2);
	updateChart(labels,values)
	
}


/**
 * Callback for when chart is clicked
 * 
 * @param {Number} index The index of the data
 * @param {string} label The label that was clicked, i.e. "Chai"
 * @param {Number} value The value that was clicked, i.e. "10000"
 *
 * @private
 *
 * @properties={typeid:24,uuid:"578476DD-9B55-4388-9450-782C51B6A6AF"}
 */
function onClickChart(index, label, value) {
	
	// ADD CRUMB FOR DRILL-DOWN
	/** @type {bootstrapextracomponents-breadcrumbs.crumb} */
	var crumb = {
		crumbId:selectedGrouping,
		displayName:selectedGrouping + ' = ' + label
	};
	elements.crumbs.addCrumb(crumb);
	
	// ADD FILTER
	filters[selectedGrouping] = label;
	
	// SET GROUPING TO THE NEXT LEVEL IN DRILL-DDOWN
	nextGroup();
	
	// UPDATE RESULTS
	runQuery();
}


/**
 * Advances the selected grouping to the next level in the drill-down
 * 
 * @private 
 * @properties={typeid:24,uuid:"A9781205-AE68-426C-BD68-A673587E089F"}
 */
function nextGroup(){
	var nextIndex = groups.indexOf(selectedGrouping) + 1
	var group = groups[nextIndex] 
	if(group){
		selectedGrouping = group;
	}
}

/**
 * Updates the grouping and filters when a crumb is clicked
 * i.e. navigating back out from drill-down
 *
 * @param {JSEvent} event
 * @param {bootstrapextracomponents-breadcrumbs.crumb} crumb
 * @param {Number} index
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D3B00D8A-E71E-41E9-ACAB-7FAC92FA16AE"}
 */
function onCrumbClicked(event, crumb, index) {
	
	// UPDATE THE SELECTD GROUP (NEXT LEVEL FROM CLICKED CRUMB)
	selectedGrouping = groups[index+1];
	
	// RE APPLY FILTERS
	filters = {};
	for(var i in elements.crumbs.breadcrumbs){
		var bc = elements.crumbs.breadcrumbs[i];
		filters[bc.crumbId] = bc.displayName.split(' = ')[1];
	}
	
	// UPDATE RESULTS
	runQuery();
}


/**
 * Clear all filters, reset grouping, re query
 * @private 
 * @properties={typeid:24,uuid:"89F29A73-2FD6-4DD4-969B-D0AA8ECC35F4"}
 */
function clearFilters(){
	
	// GO TO FIRST GROUP
	selectedGrouping = groups[0];
	
	// CLEAR FILTERS
	filters = {};
	
	// CLEAR BREADCRUMBS
	elements.crumbs.breadcrumbs = [];
	
	// RERUN QUERY
	runQuery();
}

/**
 * Runs query when form is first shown
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3267C034-08AF-4772-A79B-2FF5CFBF07C5"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		runQuery();
	}
}

/**
 * Updates the chart with labels and values
 * 
 * @private 
 * @param labels
 * @param values
 * 
 * TODO Add more colors
 * @properties={typeid:24,uuid:"B39866E5-5C08-4C68-9C1B-F9A9F2FC02F8"}
 */
function updateChart(labels,values){
	elements.chart.setOptions({responsive: false});
	elements.chart.setData({
		type: 'pie',
		data: {
			labels: labels,
			datasets: [{
				data: values,
				backgroundColor: [
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#F7464A",
				"#46BFBD",
				"#FDB45C"],
				hoverBackgroundColor: [
				"#FF5A5E",
				"#5AD3D1",
				"#FFC870",
				"#FF5A5E",
				"#5AD3D1",
				"#FFC870",
				"#FF5A5E",
				"#5AD3D1",
				"#FFC870"]
			}]
		}
	});
}