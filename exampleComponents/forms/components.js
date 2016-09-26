/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0BAF9532-CA10-45A2-A589-0791E03081E5"}
 */
var foo = 'Foobar!';

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"909ADB2B-2E0F-4CCC-AF4D-945BC7D9FA62"}
 */
function loadTree(event) {
	
	var categoryImage = "media:///labels.png";
	var productImage = "media:///food.png";
	
	//	create the data set for the tree
	var ds = databaseManager.createEmptyDataSet(0,['id','pid','icon','treeColumn']);
	
	//	load all product categories
	var categories = datasources.db.example_data.categories.getFoundSet();
	categories.sort('categoryname asc',true);
	categories.loadAllRecords();
	
	for (var i = 1; i <= categories.getSize(); i++) {
		var category = categories.getRecord(i);
		ds.addRow([category.categoryid, null, categoryImage, category.categoryname]);
		var products = category.categories_to_products;
		for (var j = 1; j <= products.getSize(); j++) {
			var product = products.getRecord(j);
			ds.addRow([product.categoryid, category.categoryid, productImage, product.productname]);
		}
	}
	
	
	elements.tree.jsDataSet = ds;
//	elements.tree.setDataSet(ds);
}

/**
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E2B28225-BCC8-45BA-A18B-07EE8EFEF4F5"}
 */
function expandAll(event) {
	var roots = elements.tree.getRootNodes();
	for (var i = 0; i < roots.length(); i++) {
		elements.tree.expandNode(roots.get(i));
	}
}

/**
 * @properties={typeid:24,uuid:"D9A862FA-AAED-4EF3-8CD7-4D5583429E08"}
 */
function collapseAll(){
	var roots = elements.tree.getRootNodes();
	for (var i = 0; i < roots.length(); i++) {
		elements.tree.collapseNode(roots.get(i));
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0969E1FC-6A53-4B1F-B36B-69575A86ADEA"}
 */
function onRecordSelection(event) {
	elements.tree.setSelectedNode(productid);
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"B9DCACE9-59DA-403C-997C-CF5CBA78075B"}
 */
function onNodeSelected(id) {
	
}
