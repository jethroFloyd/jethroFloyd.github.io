jQuery("#simulation")
.on("click", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#m-e7ba14db-Input_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#m-e7ba14db-Input_3"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimFocusOn",
"parameter": {
"target": "#m-e7ba14db-Input_3"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#m-e7ba14db-Flat-button")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimAnd",
"parameter": [ {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#m-e7ba14db-Input_1",
"property": "jimGetValue"
},"admin" ]
},{
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#m-e7ba14db-Input_3",
"property": "jimGetValue"
},"medicalcare" ]
} ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "logged employee",
"value": "Admin"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimNavigation",
"parameter": {
"target": "screens/b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555"
},
"exectype": "serial",
"delay": 0
}
]
},
{
"condition": {
"action": "jimGreater",
"parameter": [ {
"action": "jimCountData",
"parameter": {
"action": "jimFilterData",
"parameter": {
"datatype": "datamaster",
"datamaster": "employees",
"value": {
"action": "jimAnd",
"parameter": [ {
"action": "jimEquals",
"parameter": [ {
"field": "name"
},{
"datatype": "property",
"target": "#m-e7ba14db-Input_1",
"property": "jimGetValue"
} ]
},{
"action": "jimEquals",
"parameter": [ {
"field": "password"
},{
"datatype": "property",
"target": "#m-e7ba14db-Input_3",
"property": "jimGetValue"
} ]
} ]
}
}
}
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "logged employee",
"value": {
"datatype": "property",
"target": "#m-e7ba14db-Input_1",
"property": "jimGetValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimNavigation",
"parameter": {
"target": "screens/86cb39e7-7833-40be-9b35-772fd88e3779"
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#m-e7ba14db-Label_3"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#m-e7ba14db-Label_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "logged employee",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimNavigation",
"parameter": {
"target": "screens/e144d61f-b155-47cc-bf0b-842a70dae4af"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#m-e7ba14db-Button_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#m-e7ba14db-Group_1",
"effect": {
"type": "fade",
"duration": 500
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("keyup.jim", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .keyup", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#m-e7ba14db-Input_1")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#m-e7ba14db-Input_3"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimFocusOn",
"parameter": {
"target": "#m-e7ba14db-Input_3"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
if(data.which === 9) {
return false;
}
}
})
.on("pageload", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#m-e7ba14db-Label_1")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimNotEquals",
"parameter": [ {
"datatype": "variable",
"element": "logged employee"
},"" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#m-e7ba14db-Panel_2"
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#m-e7ba14db-Panel_1"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("focusin", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .focusin", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#m-e7ba14db-Input_1")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimNotEquals",
"parameter": [ {
"datatype": "property",
"target": "#m-e7ba14db-Input_1",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#m-e7ba14db-Input_1",
"value": ""
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#m-e7ba14db-Input_1",
"value": "Email"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("focusout", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .focusout", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#m-e7ba14db-Input_1")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#m-e7ba14db-Input_1",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#m-e7ba14db-Input_1",
"value": "Email"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#m-e7ba14db-Input_3")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#m-e7ba14db-Input_3",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#m-e7ba14db-Input_3"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#m-e7ba14db-Input_3",
"value": ""
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("mouseenter dragenter", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#m-e7ba14db-Flat-button")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Flat-button": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Flat-button": {
"attributes-ie": {
"-pie-background": "#666666",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "tooltip signin",
"value": "true"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 1000
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "tooltip signin"
},"true" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#m-e7ba14db-Group_1",
"effect": {
"type": "fade",
"duration": 500
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("mouseleave dragleave", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#m-e7ba14db-Flat-button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#m-e7ba14db-Flat-button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#m-e7ba14db-Flat-button") !== jFirer)) {
event.stopPropagation();
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "tooltip signin",
"value": ""
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Flat-button": {
"attributes": {
"background-color": "#43B6C7",
"background-image": "none"
}
}
},{
"#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Flat-button": {
"attributes-ie": {
"-pie-background": "#43B6C7",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("mouseenter dragenter", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#m-e7ba14db-Button_9") && jFirer.has(event.relatedTarget).length === 0) {
event.backupState = true;
event.target = jFirer;
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Button_9": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Button_9": {
"attributes-ie": {
"-pie-background": "#666666",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
jEvent.launchCases(cases);
}
})
.on("mouseleave dragleave", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#m-e7ba14db-Button_9")) {
jEvent.undoCases(jFirer);
}
});