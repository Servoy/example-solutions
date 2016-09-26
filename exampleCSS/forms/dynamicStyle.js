/**
 * Keep track of applied styles in a simple array
 * @private 
 * @type {Array<String>}
 * @properties={typeid:35,uuid:"70D2993A-9EE5-4F1D-B460-10AD86D50255",variableType:-4}
 */
var appliedStyles = [];

/**
 * Show the list of styles
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"426646AB-B7EA-4F10-9F6A-4333835FDB3C"}
 */
var displayAppliedStyles = '';

/**
 * Toggle the selected style on/off
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8FA245FE-3E0D-44C2-A8AA-4A0C82ACB250"}
 */
function toggleStyle(event) {
	/**
	 * Get component that as clicked
	 * @type {RuntimeComponent} 
	 */
	var element = event.getSource();
	
	// parse style name encoded a design-time property
	var styleName = element.getDesignTimeProperty('styleName');
	
	//	remove toggle if image has style
	if(appliedStyles.indexOf(styleName) >= 0){
		
		// THIS IS WHERE THE MAGIC HAPPENS
		// remove style class
		elements.image.removeStyleClass(styleName);
		
		// remove from array to keep track of applied styles
		appliedStyles.splice(appliedStyles.indexOf(styleName),1);
		
		// remove toggle style on button
		element.removeStyleClass('toggled');
		element.addStyleClass('box-shadow');
		
	} else {
		
		// remove style class
		elements.image.addStyleClass(styleName);
		
		// add to array tp keep track of applied styles
		appliedStyles.push(styleName);
		
		// add toggle style on button
		element.addStyleClass('toggled');
		element.removeStyleClass('box-shadow');
	}
	
	// Update the list of applied styles to a string
	displayAppliedStyles = appliedStyles.join('\n');
}
