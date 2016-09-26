/**
 * @properties={typeid:24,uuid:"D28B2126-444F-4D16-A5DC-113EA88F5223"}
 */
function validate()
{
var markers = [];
	
	var requiredFields = [
		'title',
		'firstname',
		'lastname'
	];
	for(var i in requiredFields){
		var dataProviderID = requiredFields[i];
		var colTitle = databaseManager.getTable(this).getColumn(dataProviderID).getTitle();
		if(!getSelectedRecord()[dataProviderID]){
			markers.push({dataProviderID:dataProviderID,message:'Missing required field: ' + colTitle});
		}
	}
	
	if(getSelectedRecord().hiredate > new Date()){
		markers.push({dataProviderID:'hiredate',message:'Hire date cannot be in the future'});
	}
	return markers;
}
