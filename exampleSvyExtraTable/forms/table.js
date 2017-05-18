
/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or.
 * when the ENTER key is used then only the selected foundset index is given
 * Use the record to exactly match where the user clicked on
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord<db:/example_data/order_details>} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"49C1E2B0-52C4-44DF-A9E3-BA1C4E23E5D3"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if (columnindex == 0) {
		record.is_checked = record.is_checked ? 0 : 1;
	}
}
