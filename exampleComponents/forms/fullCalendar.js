/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9FC476E3-33CF-4EDC-9702-3406AF5D1D29"}
 */
function onLoad(event) {
	/** @type {svy-fullcalendar.FullCalendarOptions} */
	var options = {
			allDayText: '',
			lang: 'en',
			businessHours: {
				start: '09:00:00',
				end: '20:00:00',
				dow: [1,2,3,4,5,6]
			},
			columnFormat: {
				month: 'ddd',
				week: 'ddd M/D',
				day: 'dddd M/D'
			},
//			dayNamesShort : dayNamesShort,
			defaultDate : new Date(2016, 4, 1),
			defaultView: 'agendaWeek', // fullCalendar.CALENDAR_VIEW_TYPE.AGENDAWEEK,
			editable: true,
//			eventSources : eventSources,
			eventConstraint: 'businessHours',
			firstDay: 1,
			handleWindowResize: true,
			header: {
				left: 'title',
				center: '',
				right: ''
			},
			minTime: "07:00:00",
			nowIndicator: true,
			scrollTime: "8:00:00",
			selectable: true,
			selectConstraint: 'businessHours',
//			timeFormat: {
//				agenda: 'h:mm',
//				'': 'h(:mm)t'
//			},
			titleFormat: {
				month: 'MMMM YYYY',
				week: 'MMMM D YYYY',
				day: 'MMMM D YYYY'
			},
			weekends: true
		};
	elements.calendar.fullCalendar(options);
	
	var events = {
		id : "array1",
		events: [{
			title: "All day event",
			start: new scopes.svyDateUtils.DateTime().addDays(-2).date,
			editable: true,
			rendering : 'background'

		}, {
			title: "2 day event",
			start: new scopes.svyDateUtils.DateTime().toStartOfDay().date,
			end: new scopes.svyDateUtils.DateTime().toEndOfDay().addDays(1).date,
			allDay: true,
			editable: true
		}, {
			title: "lunch event",
			start: new scopes.svyDateUtils.DateTime().toStartOfDay().addHours(12).date,
			end: new scopes.svyDateUtils.DateTime().toStartOfDay().addHours(13).date,
			allDay: false,
			editable: true,
			rendering : 'background'
		}]
	};

	var eventSource = {
		id: 'abc',
		events: resourceEventSourceCallback, // the callback method which is going to populate the calendar
		data: { }, // provide to the callback method the resource_id; will be used to filter the events by resource
		backgroundColor: '#008000',
		editable: true,
		startEditable: true,
		durationEditable: true,
		allDayDefault: false
	}
	elements.calendar.addEventSource({
		id : "array2",
		events: [{
			title: "lunch event",
			start: new scopes.svyDateUtils.DateTime().toStartOfDay().addDays(-4).addHours(12).date,
			end: new scopes.svyDateUtils.DateTime().toStartOfDay().addDays(-4).addHours(13).date,
			allDay: false,
			editable: true
		}],
		color: 'gray'
	});
	elements.calendar.addEventSource(eventSource);
	elements.calendar.today();
}

/**
 * FunctionEventSourceType callback method.
 * Populate the calendar with the returned array of EventType object for any event_object related to the resource
 *
 * @param {Date} start
 * @param {Date} end
 * @param {Object<String>} params
 *
 * @return {Array}
 * @private 
 *
 * @properties={typeid:24,uuid:"A4524BB8-44DA-4283-A14C-05517CA0FED8"}
 *
 * @AllowToRunInFind
 */
function resourceEventSourceCallback(start, end, params) {
	return [{
		title: "All day event",
		start: new scopes.svyDateUtils.DateTime().addDays(-2).date,
		editable: true,
		rendering : 'background'

	}, {
		title: "2 day event",
		start: new scopes.svyDateUtils.DateTime().toStartOfDay().date,
		end: new scopes.svyDateUtils.DateTime().toEndOfDay().addDays(1).date,
		allDay: true,
		editable: true
	}, {
		title: "lunch event",
		start: new scopes.svyDateUtils.DateTime().toStartOfDay().addHours(12).date,
		end: new scopes.svyDateUtils.DateTime().toStartOfDay().addHours(13).date,
		allDay: false,
		editable: true,
		rendering : 'background'
	}];
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"EDD27168-0F5F-43B9-A100-57F0511A8168"}
 */
function month(event) {
	elements.calendar.changeView(scopes.svyFullCalendar.CALENDAR_VIEW_TYPE.MONTH);
	updateUI(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"925BD8AD-2C7A-4D02-A3A4-15A04D353537"}
 */
function agendaDay(event) {
	elements.calendar.changeView(scopes.svyFullCalendar.CALENDAR_VIEW_TYPE.AGENDADAY);
	updateUI(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"A15783CF-917B-4C34-8A96-4CB29B5F7958"}
 */
function agendaWeek(event) {
	elements.calendar.changeView(scopes.svyFullCalendar.CALENDAR_VIEW_TYPE.AGENDAWEEK);
	updateUI(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action

 * @protected
 *
 * @properties={typeid:24,uuid:"C9CAC1DD-BEDB-4E5A-A88B-7ECA05B93C63"}
 */
function today(event) {
	elements.calendar.today()
}

/**
 * @param {JSEvent} event
 * @protected 
 *
 * @properties={typeid:24,uuid:"7336F55E-DFFE-4246-B273-47EB4930D83F"}
 */
function updateUI(event) {
	elements.btnAgendaDayView.removeStyleClass('btn-primary');
	elements.btnAgendaWeekView.removeStyleClass('btn-primary');
	elements.btnMonthView.removeStyleClass('btn-primary');
	var btn = elements[event.getElementName()];
	if (btn) {
		btn.addStyleClass('btn-primary');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"48161EAF-79CC-4E1F-875C-D782905B7721"}
 */
function showPopup(event) {
	var configMenu = plugins.window.createPopupMenu();
	var menuItem;
	
	menuItem = configMenu.addMenuItem();
	menuItem.text = "Weekends";
	menuItem.selected = true;
	menuItem.setMethod(setCalendarOption,["weekends", false]);
	menuItem.methodArguments = ["weekends", false];
	configMenu.show(elements[event.getElementName()]);
}

/**
 * @param {Number} itemIndex
 * @param {Number} parentIndex
 * @param {Boolean} isSelected
 * @param {String} parentText
 * @param {String} menuText
 * @param {String} option
 * @param {Object} value
 * 
 * @private 
 *
 * @properties={typeid:24,uuid:"A208A710-FF1E-4E07-A844-FFB9C8588BE1"}
 */
function setCalendarOption(itemIndex, parentIndex, isSelected, parentText, menuText, option, value) {
	
//	var menu;
//	if (parentIndex === -1) {
//		menu = configMenu;
//	} else {
//		menu = configMenu.getItem(parentIndex);
//	}
//	var menuItem = menu.getItem(itemIndex);
	
	var options = elements.calendar.getFullCalendarOptions();
	var calendarValue = options[option];
	
	if (calendarValue && calendarValue instanceof Array) {
		value = value.concat(calendarValue);
	} else if (value instanceof Boolean) {
		value = isSelected ? false : true;
	} else {
		// TODO disable it by removing it
	}
//	if (menuItem) {
//		menuItem.selected = isSelected ? false : true;
//	}
	
	delete options[option]
	
	options[option] = value;
	elements.calendar.fullCalendar(options);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B41B1799-244F-407E-B5FF-72FE9E11FCDA"}
 */
function next(event) {
	elements.calendar.next()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"7B00AD47-8C04-44F3-B219-2D40C0F20BA3"}
 */
function nextyear(event) {
	elements.calendar.nextYear()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"090DAC12-C82D-435D-95C7-5A697DCA54A7"}
 */
function prev(event) {
	elements.calendar.prev()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1164BB88-F66F-46E4-9DA0-C1B8267BCA3C"}
 */
function prevyear(event) {
	elements.calendar.prevYear()
}
