/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B6C07AB9-0DF4-458B-9FE4-BAA62E945240"}
 */
function onLoad(event) {
	foundset.multiSelect = true;
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or.
 * when the ENTER key is used then only the selected foundset index is given
 * Use the record to exactly match where the user clicked on
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F593B94E-B635-4F22-ABD7-63E09AFEA5D2"}
 */
function onCellClick(foundsetindex, columnindex, record) {
	application.output(foundsetindex +',' + columnindex + ',' + record.getPKs()[0]);

}

/**
 *
 * @param {Number} columnindex
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EE31D77E-B7B1-4F10-B2D7-A292AD330011"}
 */
function onHeaderClick(columnindex) {
	var col = elements.table_710.columns[columnindex];
	var dp = col.dataprovider
	foundset.sort(dp + ' asc');
	col.headerStyleClass = 'table-header-selected';
}

/**
 * @properties={typeid:24,uuid:"5499B589-9C7C-4552-9515-D66BF940F312"}
 */
function exportCSV(){
	var data = plugins.textxport.textExport(foundset,['companyname','country'],',',true);
	var temp = plugins.file.createTempFile('export','.txt');
	plugins.file.writeTXTFile(temp,data)
	var file = new java.io.File(temp.getAbsolutePath());
	var url = file.toURL().toString();
	application.output(url);
	application.showURL(url);
}
