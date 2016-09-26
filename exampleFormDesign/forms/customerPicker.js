/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A774895-5AB9-4208-B17A-29CA48D49E0C"}
 */
var selection = '';

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F8C2D9FC-228A-49E7-9ADB-32BBC6E59985"}
 */
function onDataChange(oldValue, newValue, event) {
	foundset.selectRecord(selection);
	return true;
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3C4F43C4-2951-41C4-B3F5-804E93EEC829"}
 */
function onRecordSelection(event) {
	selection = customerid;
}
