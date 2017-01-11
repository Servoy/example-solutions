/**
 * Saves with NO error handling
 * @protected 
 * @properties={typeid:24,uuid:"7BFD0BD3-7C8F-4466-87D4-79F1763CB162"}
 */
function save1(){
	
	// don't do this. Always use if(...)
	databaseManager.saveData();
}

/**
 * Save with some error handling
 * @protected 
 * @properties={typeid:24,uuid:"19DC582B-43F4-407F-BE02-07CB76B64549"}
 */
function save2(){
	
	// attempt to save
	if(!databaseManager.saveData()){
		
		// notify user of problem
		notifyFailedSave();

	// notify user of success
	} else {
		plugins.webnotificationsToastr.success('All Changes Saved','Save Data');
	}
}

/**
 * Save with DB transaction
 * 
 * @protected 
 * @properties={typeid:24,uuid:"45E59B97-E206-4873-8045-C9156086B5AC"}
 */
function save3(){
	
	// open a DB transaction
	databaseManager.startTransaction();
	
	// immediately open a try/catch/finally after transaction starts
	try{
		
		// attempt to save
		if(!databaseManager.saveData()){
			
			// notify user of problem
			notifyFailedSave();
			
			// rollback transaction (w/o reverting edits)
			databaseManager.rollbackTransaction(false,false);
			return;
		}
		
		// attempt to commit transaction
		if(!databaseManager.commitTransaction()){
			throw 'Transaction failed';
		}
		
		// notify user of success
		plugins.webnotificationsToastr.success('All Changes Saved','Save Data');
		
	// handle ANY runtime error
	} catch(e){
		
		// rollback
		databaseManager.rollbackTransaction(false,false);

		// notify user of problem
		plugins.webnotificationsToastr.error(e.message,'Save Failed');
		
	}
}

/**
 * Save with record locking
 * 
 * @protected 
 * @properties={typeid:24,uuid:"ADFBE4FF-35CC-46A3-BDD1-BBD588BEC970"}
 */
function save4(){
	
	// up to 1 second(s) to acquire a lock
	var timeout = 30000;
	if(!acquireLock(timeout)){
		plugins.webnotificationsToastr.error('Record is currently locked.','Save Data');
		return
	}
	
	//	immediately open a try/catch/finally after locking
	try{
		
		// save with error handling
		save3();

	// always release lock
	} finally{
		databaseManager.releaseAllLocks();
	}
}

/**
 * Cancels all open edits
 * @protected 
 * @properties={typeid:24,uuid:"818067E0-2436-4DD2-AC4C-F419EC0C8994"}
 */
function cancel(){
	databaseManager.revertEditedRecords();
}

/**
 * Notifies user of failed save
 * @protected 
 * @properties={typeid:24,uuid:"ABF66CE4-3194-47FF-A495-E1E3E35B3DAB"}
 */
function notifyFailedSave(){
	
	// get records which did NOT save
	var failedRecords = databaseManager.getFailedRecords();
	for(var i in failedRecords){
		
		// get record's exception
		var exception = failedRecords[i].exception;
		
		// when save fails, it is usually a "DataException"
		if(exception instanceof DataException){
			/** @type {DataException} */
			var de = exception;
			
			// use exception's value or message property
			var msg = de.getMessage() || de.getValue(); 
			plugins.webnotificationsToastr.error(msg,'Save Data Failed');
			
		// other runtime error
		} else {
			plugins.webnotificationsToastr.error(exception.getMessage(),'Save Data Failed');
		}
		
	}
}

/**
 * @protected 
 * @param {Number} timeout in ms
 * @return {Boolean}
 * @properties={typeid:24,uuid:"569816CC-C942-40D5-B7C3-26283706B7D8"}
 */
function acquireLock(timeout){
	
	// the value to return
	var locked = false;
	
	// get current time to check against timeout
	var start = application.getTimeStamp().getTime();
	do {
		
		// attempt lock
		locked = databaseManager.acquireLock(foundset,0);
		
	// lock failed - keep trying until success or timeout
	} while (!locked && application.getTimeStamp().getTime() - start < timeout);
	
	return locked;
}
