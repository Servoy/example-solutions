/**
 * Indicates if this form has locked the record
 * @private 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C300FA4-FF55-4CD1-886D-F6F6FD500A70",variableType:4}
 */
var lock = 0;


/**
 * Turn lock onn/off
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A59D4BEF-C6B6-4373-8D69-A48CDD981B8F"}
 */
function toggleLock(event) {
	
	// release any locks
	if(databaseManager.hasLocks()){
		databaseManager.releaseAllLocks();
		lock = 0;
		
	//	 lock record
	} else {
		if(databaseManager.acquireLock(foundset,0)){
			lock = 1;
			
		// handle failed lock
		} else {
			plugins.dialogs.showWarningDialog('Lock Record','Lock failed!');
		}
		
	}
}
