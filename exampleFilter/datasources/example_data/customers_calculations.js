/**
 * @properties={type:8,typeid:36,uuid:"7EE23B6B-A0C6-4858-A848-D89E64557D46"}
 */
function total_sales()
{
	var sum = 0;
	for (var i = 1; i <= customers_to_orders.getSize(); i++) {
		var order = customers_to_orders.getRecord(i);
		sum += order.order_total;
	}
	return sum;
}
