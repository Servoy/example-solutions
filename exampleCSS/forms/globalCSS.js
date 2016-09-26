/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70D07256-52BC-4A0B-80ED-8288ADF95F7D"}
 */
var textBox = 'This is a textbox';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A4FBE28E-C5ED-4F1D-ADD7-8B7358F3DD22"}
 */
var textArea = 'This is a text area.\nBlah Blah Blah...';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"279653F9-EDFA-4573-B678-F646E468CE2B"}
 */
function toggleTextBoxEnabled(event) {
	elements.textBox.enabled = !elements.textBox.enabled;  
}
