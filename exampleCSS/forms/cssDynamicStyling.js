/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"A48AB4F6-96C5-45C1-B654-F0C38579D10B"}
 */
function getName() {
	return 'Dynamic Styling';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"92019D3D-FE2D-4570-827C-D528EF6ABE7C"}
*/
function getDescription() {
	return 'Style selectors can be added and removed at runtime';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"FF8CA3A6-8CDB-4638-B05E-BF6245734E73"}
*/
function getIconStyleClass() {
	return 'fa fa-bolt';
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"973B62DF-96EA-41AC-B0CF-F7698B170989"}
*/
function getParent() {
	return forms.cssSampleProvider;
}
