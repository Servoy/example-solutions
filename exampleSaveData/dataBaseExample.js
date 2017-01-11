
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"AD2CD63C-C506-4C65-8B6C-906CE83A28BC"}
 */
function onSolutionOpen(arg, queryParams) {
	
	// for smart/web client show the orders lock form to demo locking
	if(application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT){
		application.getWindow().show(forms.ordersLock)
	}
	
	// set auto save off
	databaseManager.setAutoSave(false);
}
