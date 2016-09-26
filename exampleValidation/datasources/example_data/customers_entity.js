/**
 * @properties={typeid:24,uuid:"57FDBEFC-375C-496E-8B77-6A6597488572"}
 */
function validate()
{
	var markers = [];
	
	var requiredFields = [
		'companyname',
		'contactname',
		'contacttitle'
	];
	for(var i in requiredFields){
		var dataProviderID = requiredFields[i];
		var title = databaseManager.getTable(this).getColumn(dataProviderID).getTitle();
		if(!getSelectedRecord()[dataProviderID]){
			markers.push({dataProviderID:dataProviderID,message:'Missing required field: ' + title});
		}
	}
	
	return markers;
}
