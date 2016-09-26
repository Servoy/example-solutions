/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"58EB0EFB-6014-4291-999E-47F4A92C79B3"}
 */
function toggleListView(event) {
	/** @type {Array<String>} */
	var styles = forms.responsiveContainer1.elements.tablesspanel_1.styleClass.split(' ');
	var index = styles.indexOf( 'visible-xs-block' );
	if(index >= 0){
		styles.splice(index,1);
	} else {
		styles.push( 'visible-xs-block' );
	}
	forms.responsiveContainer1.elements.tablesspanel_1.styleClass = styles.join(' ');
}
