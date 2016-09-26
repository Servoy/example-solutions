/**
 * @properties={typeid:24,uuid:"CC8EFA94-279F-4BAD-8359-9B3005E36646"}
 */
function validate()
{
	var markers = [];
	
	if(getSelectedRecord().unitsinstock < 0){
		markers.push({
			dataProviderID:'unitsinstock',
			message:'Cannot be negative'
		});
	}
	return markers;
}
