/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF96E0EF-C749-4E4A-A834-B71045AD9543"}
 */
var callout = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9394DB5E-82F5-4D7B-AC3A-B24283947541"}
 */
var INVALID = 'invalid';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"20B4D04D-6148-4359-9E45-C9C08340015D"}
 */
var VISIBLE = 'visible';

/**
 * @protected 
 * @type {Array<{dataProviderID:String,message:String}>}
 * @properties={typeid:35,uuid:"B42482A5-5017-4A1E-A93C-B435413CCC72",variableType:-4}
 */
var validationMarkers = {};

/**
 * Handle changed data, return false if the value should not be accepted. 
 * In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"23647245-1957-4D6C-BF9D-9979BCFE9363"}
 */
function onElementDataChange(oldValue, newValue, event) {
	
	// VALIDATE THE FOUNDSET FOR EVERY CHANGE
	validate();
	return true;
}

/**
 * @properties={typeid:24,uuid:"56082B87-B86D-4B58-8FBE-1BEF6301C0D6"}
 */
function validate(){
	validationMarkers = [];
	
	/** @type {Function} */	
	var validationHandler = foundset['validate'];
	if(validationHandler){		
		validationMarkers = validationHandler();
	}
	updateUI();
	return validationMarkers.length > 0;
}

/**
 * @properties={typeid:24,uuid:"0D53726C-7140-4036-BDD1-5D40C9971F76"}
 */
function updateUI(){
	
	
	// collect messages
	var messages = [];
	
	//	check each field
	for(var i in elements.allnames){
		var name = elements.allnames[i];
		var e = elements[name];
		/** @type {RuntimeTextField} */
		var field = e;
		if(!field.getDataProviderID) continue;	// really anything that can have a data provider
		
		//	Error marker associated with this field's data provider
		var marker = getMarker(field);
		if(marker){
			
			// Add the invalid style class to the field nd set a tooltip
			field.addStyleClass(INVALID);
			field.toolTipText = marker.message;
			
			// move callout bubble
			var x = 400; //field.getLocationX() + field.getWidth() + 10;
			var y = field.getLocationY();
			elements.callout.setLocation(x,y)
			
			// collect messages
			messages.push(marker.message);
			
		//	no markers associated with this field's data provider
		} else {
			field.removeStyleClass(INVALID);
			field.toolTipText = '';
		}
	}
	
	// add messages to callout bubble and show (fade-in)
	if(messages.length){
		callout = messages.join('<br>');
		elements.callout.addStyleClass(VISIBLE);

	// no messages?  then hid callout
	} else {
		elements.callout.removeStyleClass(VISIBLE);
		callout = '';
	}
}

/**
 * @protected 
 * @param {RuntimeTextField} target
 * @return {{dataProviderID:String,message:String}}
 * @properties={typeid:24,uuid:"F6726299-0D83-4FCE-91DC-B819A4497E19"}
 */
function getMarker(target){
	for(var i in validationMarkers){
		var marker = validationMarkers[i];
		if(marker.dataProviderID == target.getDataProviderID()){
			return marker;
		}
	}
	return null;
}
