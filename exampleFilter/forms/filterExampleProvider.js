/**
 * @public  
 * @return {String}
 *
 * @properties={typeid:24,uuid:"7E36E1D7-85FE-4BA3-B0C3-6C94327B1791"}
 */
function getName() {
	return "Basic Filtering";
}

/**
* @public  
* @return {String}
*
* @properties={typeid:24,uuid:"7D0F0ED9-84B1-483C-876C-1BCE954F445A"}
*/
function getDescription() {
	return "Example of basic FoundSet Filter Params";
}

/**
* @public  
* @return {String} Download URL
*
* @properties={typeid:24,uuid:"B38944C4-FCFC-4456-A8B2-0F5F55532990"}
*/
function getDownloadURL() {
	return 'https://github.com/Servoy/example-solutions/releases/download/v1.2.0/exampleFilter.servoy'
}


/**
* @public  
* @return {String}
*
* @properties={typeid:24,uuid:"E0D78457-B241-4C53-8988-4DB0934CCC51"}
*/
function getIconStyleClass() {
	return 'fa fa-filter';
}

/**
* @public  
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"088745E8-5EF5-41E9-883D-3F773F606064"}
*/
function getMoreInfo() {
	return 'addFoundSetFilterParam()';
}

/**
* @public 
* @return {Array<String>} code lines
* @SuppressWarnings(private) TODO suppress not working ?
* @properties={typeid:24,uuid:"E9C5AC56-EC9A-4CE5-AA2A-5DCA57335130"}
*/
function getSampleCode() {
	return printMethodCode(forms.filterOrdersList.filterDate)
		.concat(printMethodCode(forms.filterOrdersList.filterCustomers))
		.concat(printMethodCode(forms.filterOrdersList.filterEmployees))
}

/**
 *
 * @return {String} Website URL
 *
 * @properties={typeid:24,uuid:"90D09AC8-4EE7-45EE-8C20-DCC59C5D95AF"}
 */
function getWebSiteURL() {
	return 'https://github.com/Servoy/example-solutions';
}
/**
* @public 
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"A4CA84CA-F486-4014-BB99-7EAA5FFBBAF9"}
*/
function getParent() {
	return forms.dataSamples;
}
