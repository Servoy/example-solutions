/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B84B1044-5EBA-453F-96F4-9D8F56A19151"}
 */
function showInfo(event) {
	plugins.webnotificationsToastr.info('Good Morning!','From Servoy');
}

/**
 * @properties={typeid:24,uuid:"DE2FDAFA-BE03-423C-A4E2-42E5BE6F3017"}
 */
function showError(){
	plugins.webnotificationsToastr.error('OH NO!!','You have an error',{closeButton:true});
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5476F515-C5F9-4CF0-B09F-B39EAAA651F1"}
 */
function showSuccess(event) {
	plugins.webnotificationsToastr.success('Great Job!','Almost done...',{progressBar:true});
}
