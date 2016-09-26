/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E93DC789-C44C-4B63-B37D-3830874FEF17"}
 */
function animate(event) {
	/** @type {RuntimeComponent} */
	var e = event.getSource();
	var moved = e.getClientProperty('moved');
	if(moved){
		e.removeStyleClass('is-moved');
	} else {
		e.addStyleClass('is-moved');
	}
	e.putClientProperty('moved',!moved);
	
}
