/**
 * Update all orders' unit price
 * Does this in-memory, data is NOT yet saved
 * Performance is slower, but all tabe events and auditing is preserved
 * @public 
 * @properties={typeid:24,uuid:"F77A2D84-FBD5-482C-8895-FD2C777A6A16"}
 */
function updateOrderDetailsIterative()
{
	var updater = databaseManager.getFoundSetUpdater(products_to_order_details);
	
	while(updater.next()){
		updater.setColumn('unitprice',unitprice);
	}
}

/**
 * Updates all orders' unit price immediately with a single query
 * Performs quickly but will bypass table events and auditing
 *  
 * @public 
 * @return {Boolean}
 * @properties={typeid:24,uuid:"6772C4C0-9CEB-4B4B-BC0C-4D5782B0D91B"}
 */
function updateOrderDetails()
{
	var updater = databaseManager.getFoundSetUpdater(products_to_order_details);
	updater.setColumn('unitprice',unitprice);
	return updater.performUpdate();
	
}