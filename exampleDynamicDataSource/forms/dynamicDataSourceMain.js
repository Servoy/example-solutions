/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C323F8EB-0E28-4634-A8A7-7D96AF3F7D03"}
 */
function loadProductAggregates(event) {
	elements.tabs.removeAllTabs();
	scopes.dynamicDataSource.loadProductAggregates();
	elements.tabs.addTab(forms.productAggregates);
}
