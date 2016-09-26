/**
 * @type {Number}
 * @protected 
 *
 * @properties={typeid:35,uuid:"DE09B393-B90C-4C6A-866D-92698FF29517",variableType:4}
 */
var DEFAULT_SIZE = 300;

/**
 * @protected 
 * 
 * @properties={typeid:35,uuid:"F004F2D2-9FFD-4B30-BB6F-6C4152967821",variableType:-4}
 */
var MODE_PANE = {
	SPLIT: 1,
	LEFT: 2,
	RIGHT: 3
};

/**
 * @private  
 * @properties={typeid:35,uuid:"2C4C8923-AD6C-4044-AD9C-86F07E443F3C",variableType:-4}
 */
var paneMode = MODE_PANE.SPLIT;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"89FD323F-54BA-44B3-96DA-AEC18DF10803"}
 */
function onLoad(event) {
	openPanes();
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"182602F3-C06E-4C72-BCD3-A43BCDF3B6C1"}
 */
function updateUI() {
	switch (paneMode) {
	case MODE_PANE.SPLIT:
	case MODE_PANE.RIGHT:
		// expand splitpane
		elements.splitpane.dividerLocation = DEFAULT_SIZE; 
		elements.splitpane.removeStyleClass('select-pane-2');
		elements.splitpane.addStyleClass('select-pane-1');
		// hide toggle in xs screens
//		elements.fa_icon_1.addStyleClass('hidden-xs');
//		elements.fa_icon_1.setLocation(DEFAULT_SIZE,2);
		break;
	case MODE_PANE.LEFT:
		// collapse splitpane to the left
		elements.splitpane.dividerLocation = 1;
		elements.splitpane.removeStyleClass('select-pane-1');
		elements.splitpane.addStyleClass('select-pane-2');
		
		// move toggle and make it always visible
//		elements.fa_icon_1.removeStyleClass('hidden-xs');
//		elements.fa_icon_1.setLocation(0,2);
		break;
	default:
		break;
	}
	application.updateUI();
}

/**
 * @public 
 * @properties={typeid:24,uuid:"F9E5F230-F8C8-4C22-952C-819B702D3165"}
 */
function openPanes() {
	paneMode = MODE_PANE.SPLIT;
	updateUI();
}

/**
 * @public 
 * @properties={typeid:24,uuid:"26B4322D-1A07-4F13-8235-B2CECCF41EAD"}
 */
function collapseLeftPane() {
	paneMode = MODE_PANE.LEFT;
	updateUI();
}

/**
 * @public 
 * @properties={typeid:24,uuid:"FEA37828-D0EA-4EEF-A8C5-ADB5BB669F21"}
 */
function collapseRightPane() {
	paneMode = MODE_PANE.RIGHT;
	updateUI();
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C8B5FF57-8ED4-49F4-B82E-BF8545236496"}
 */
function toggleSplitPane(event) {
	paneMode = (paneMode === MODE_PANE.SPLIT ? MODE_PANE.LEFT : MODE_PANE.SPLIT);
	updateUI();
}
