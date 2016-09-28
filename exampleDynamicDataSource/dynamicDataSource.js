/**
 * @public 
 * Create product aggregates data source
 * @properties={typeid:24,uuid:"B101ECF0-7B5B-48DA-982C-8AC00DC401FB"}
 */
function loadProductAggregates() {
	
	//	The name of the in-mem table to create 
	var tableName = 'product_aggregates'
	
	//	create a query to products table
	var q = datasources.db.example_data.products.createSelect();
	
	//	 group on product ID
	q.groupBy.add(q.columns.productid);
	
	//	results
	q.result
	.addPk()
	
	// units sold
	.add(q.joins.products_to_order_details.columns.quantity.sum, 'total_units_sold')
	
	// total sales
	.add(q.joins.products_to_order_details.columns.quantity.multiply(q.joins.products_to_order_details.columns.unitprice).sum, 'total_sales')
	
	//	order count (number of orders this product appears on)
	.add(q.joins.products_to_order_details.joins.order_details_to_orders.columns.orderid.count, 'order_count')
	
	//	load the in-mem table from query
	databaseManager.createDataSourceByQuery(tableName,q,-1);
}
