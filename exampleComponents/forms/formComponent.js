/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"151AE3C9-167E-40EF-9C48-03E287B7B6CE"}
 */
var searchtext = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6D564A7F-8282-49CE-85E9-66A1912CD50C"}
 */
var billToAddress = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"46800092-F664-414B-8920-48C654CE2A94"}
 */
var billToCity = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"39358573-63CC-4301-94DA-E6D4AA1B177E"}
 */
var billToRegion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B824E44E-7A7D-4F1F-B96F-509052E087F4"}
 */
var billToPostal = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"13996011-3847-44BC-B45A-20029CC145B2"}
 */
var billToCountry = '';

/**
 * @properties={typeid:24,uuid:"F1C067A3-91DE-4E94-9EC6-A743A4EC2584"}
 */
function copyFromShipTo(){
	billToAddress = shipaddress;
	billToCity = shipcity;
	billToCountry = shipcountry;
	billToPostal = shippostalcode;
	billToRegion = shipregion;
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F3EB41E1-EEB4-42DB-836F-601012CBFA91"}
 */
function onRecordSelection(event) {
	
	//	there is no bill-to columns in this table, so we copy into form variables and fake it
	copyFromShipTo();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7070EBDE-2E44-4D66-B7A5-0B85334B28BB"}
 * @AllowToRunInFind
 */
function search(event) {
	if(!searchtext){
		foundset.loadAllRecords();
		return;
	}
	foundset.find();
	shipcity = '#%'+searchtext+'%';
	foundset.newRecord();
	shipcountry = '#%'+searchtext+'%';
	foundset.search();
}
