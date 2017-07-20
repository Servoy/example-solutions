
/**
 * @public 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"EC1E0D4C-18F6-4BF1-90B6-CCED4755C890"}
 */
function getName() {
	return 'CSS Examples';
}



/**
* @public 
* @return {String}
*
* @properties={typeid:24,uuid:"FEBE3BE1-543A-4EB8-A67A-1C62E6048C0E"}
*/
function getDescription() {
	return 'How to do cool stuff with CSS';
}


/**
* @public 
* @return {String}
*
* @properties={typeid:24,uuid:"94D12C65-D11A-4ACC-B5CF-050FCE11F86D"}
*/
function getIconStyleClass() {
	return 'fa fa-css3';
}

/**
 * @public 
 * @return {String} Download URL
 *
 * @properties={typeid:24,uuid:"512BCF67-910E-4054-8A93-EA127328B588"}
 */
function getDownloadURL() {
	return 'https://github.com/Servoy/example-solutions/releases/download/1.0.0/exampleCSS.servoy';
}



/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"2D1940BC-3490-4939-ACB9-10F74AD68A31"}
*/
function getMoreInfo() {
	return '';
}

/**
*
* @return {Array<String>} code lines
*
* @properties={typeid:24,uuid:"A405DF67-04EE-42E9-9D50-C8239E247BC5"}
*/
function getSampleCode() {
	return plugins.http.getPageData('resources/fs/exampleCSS/css/custom.css').split('\n');
}

/**
 * @properties={typeid:24,uuid:"68E47235-C8AC-47F4-8426-636F65A1F9F7"}
 */
function allowFormIncludedInMenu() {
	return true;
}

/**
 * @public 
 * @return {String} The sort order, i.e. 1, 1.1, 1.1.2
 *
 * @properties={typeid:24,uuid:"978E7D34-106B-4FF9-AB32-2095EBABA343"}
 */
function getSort() {
	return '5'
}
