
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9BE23E83-0FED-4ED2-A48B-42D6F81147CB"}
 */
function onLoad(event) {
	initNav();
}

/**
 * @private 
 * @properties={typeid:24,uuid:"61755506-5A06-49B4-8ED4-6442C0D7257E"}
 */
function initNav(){
	
	
	/** @type {Array<servoyextra-sidenav.MenuItem>} */
	var items = [
		{
			id: 'home', 
			text:'Home', 
			iconStyleClass:'fa fa-home svy-sidenav-font-icon',
			data:{formName:'home'}
		},
		
		{divider:true, styleClass:'svy-sidenav-divider'},
		
		{
			id: 'customers', 
			text:'Customers', 
			iconStyleClass:'fa fa-users svy-sidenav-font-icon',
			data:{formName:'customers'}
		},
		{
			id: 'orders', 
			text:'Orders', 
			iconStyleClass:'fa fa-credit-card svy-sidenav-font-icon',
			data:{formName:'orders'}
		},
		{
			id: 'employees', 
			text:'Employees', 
			iconStyleClass:'fa fa-user svy-sidenav-font-icon',
			data:{formName:'employees'}
		},
		
		{divider:true, styleClass:'svy-sidenav-divider'},
		
		{
			id: 'products', 
			text:'Products', 
			iconStyleClass:'fa fa-shopping-bag svy-sidenav-font-icon',
			data:{formName:'products'}
		},
		{
			id: 'suppliers', 
			text:'Suppliers', 
			iconStyleClass:'fa fa-truck svy-sidenav-font-icon',
			data:{formName:'suppliers'}
		},
		{
			id: 'shippers', 
			text:'Shippers', 
			iconStyleClass:'fa fa-plane svy-sidenav-font-icon',
			data:{formName:'shippers'}
		}
	];
	elements.nav.setRootMenuItems(items);
	
	elements.nav.addMenuItem({divider:true, styleClass:'svy-sidenav-divider'});
	
	elements.nav.addMenuItem({
		id: 'settings', 
		text:'Settings', 
		iconStyleClass:'fa fa-gear  svy-sidenav-font-icon',
		data:{formName:'settings'}
	});
	
	
	
	
	
	// Add filters for products
	var categories = application.getValueListItems('categories');
	for (var i = 1; i <= categories.getMaxRowIndex(); i++) {
		var categoryName = categories.getValue(i,1);
		var categoryID = categories.getValue(i,2);
		
		//	add menu item
		elements.nav.addMenuItem({
			id: 'category-'+categoryID,
			text:categoryName, 
			data:{formName:'products', filters:[{dataProvider:'categoryid',operator:'=',value:categoryID}]}
		},'products');
	}
	
	// add suppliers individually
	var shippers = application.getValueListItems('shippers');
	for (var i = 1; i <= shippers.getMaxRowIndex(); i++) {
		var shipperName = shippers.getValue(i,1);
		var shipperID = shippers.getValue(i,2);
		
		//	add menu item
		elements.nav.addMenuItem({
			id: 'suppliers-'+shipperID,
			text:shipperName, 
			data:{formName:'shippers', pk:shipperID}
		},'shippers');
	}	
	
	navigate(forms.home,null,null,true);
}

/**
 *
 * @param {object} menuItemId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F16C6A51-60C2-4C1C-88E1-6B008E3601D0"}
 */
function onMenuItemSelected(menuItemId, event) {
	var item = elements.nav.getMenuItem(menuItemId);
	if(item.data && item.data.formName){
		navigate(item.data.formName, item.data.filters, item.data.pk);
	}
	return true;
}

/**
 * @public 
 * @param {String|RuntimeForm} form
 * @param {Array<{dataProvider:String, operator:String, value:*}>} [filters]
 * @param {Number|String} [selectedPK]
 * @param {Boolean} [updateMenu] 
 * 
 * @properties={typeid:24,uuid:"55E28CF9-C6C5-4BAB-9502-2A34608298EC"}
 */
function navigate(form, filters, selectedPK, updateMenu){
	
	//	check form exists 
	if(form instanceof String){
		form = forms[form];
		if(!form){
			return;
		}
	}
	
	//	add tab
	elements.tabs.removeAllTabs();
	elements.tabs.addTab(form);
	
	//	apply filters
	var filterName = 'filters'; 
	form.foundset.removeFoundSetFilterParam(filterName);
	if(filters){
		for(var i in filters){
			if(!form.foundset.addFoundSetFilterParam(filters[i].dataProvider,filters[i].operator,filters[i].value, filterName)){
				application.output('Failed to addd filter: ' + filters[i],LOGGINGLEVEL.WARNING);
			}
		}
		form.foundset.loadAllRecords();
	}
	
	//	apply selection
	if(selectedPK){
		form.foundset.selectRecord(selectedPK);
	}
	
	//	update menu
	if(updateMenu){
		var id = form.controller.getName().toLowerCase();
		elements.nav.setSelectedMenuItem(id, false);
	}
}