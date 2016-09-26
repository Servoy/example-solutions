/**
 * @properties={typeid:24,uuid:"33345E72-D7BB-438B-9F8B-DFC9960A9F56"}
 */
function validate()
{
var markers = [];
	
	var requiredFields = [
		'customerid',
		'employeeid'
	];
	for(var i in requiredFields){
		var dataProviderID = requiredFields[i];
		var title = databaseManager.getTable(this).getColumn(dataProviderID).getTitle();
		if(!getSelectedRecord()[dataProviderID]){
			markers.push({dataProviderID:dataProviderID,message:'Missing required field: ' + title});
		}
	}
	
	if(getSelectedRecord().shippeddate <= getSelectedRecord().orderdate){
		
		markers.push({dataProviderID:'shippeddate',message:'Ship date must be after order date'});
		markers.push({dataProviderID:'orderdate',message:'Order date must be before ship date'});
	}
	return markers;
}
