jQuery("#simulation")
.on("click", ".s-86cb39e7-7833-40be-9b35-772fd88e3779 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is(".s-Label_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Message-popup",
"top": {
"type": "exprvalue",
"value": {
"action": "jimPlus",
"parameter": [ {
"action": "jimWindowScrollY"
},"200" ]
}
},
"left": {
"type": "nomove"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-plans",
"value": {
"action": "jimFilterData",
"parameter": {
"datatype": "datamaster",
"datamaster": "Plans",
"value": {
"action": "jimContains",
"parameter": [ {
"action": "jimSelectData",
"parameter": {
"datatype": "datarow",
"datamaster": "Quotes",
"element": "#s-quotesdetail",
"value": {
"field": "Plans"
}
}
},{
"field": "Name"
} ]
}
}
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Message-popup",
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
} else if(jFirer.is("#s-Button_11")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Message-popup",
"effect": {
"type": "fade",
"easing": "linear",
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
jFirer.parents("tr.datarow").trigger("click", true);
})
.on("click", ".s-86cb39e7-7833-40be-9b35-772fd88e3779 .toggle", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is(".s-Label_1")) {
if(jFirer.data("jimHasToggle")) {
jFirer.removeData("jimHasToggle");
jEvent.undoCases(jFirer);
} else {
jFirer.data("jimHasToggle", true);
event.backupState = true;
event.target = jFirer;
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimResize",
"parameter": {
"target": ".s-Row_cell_4",
"width": {
"type": "exprvalue",
"value": "1200"
},
"height": {
"type": "exprvalue",
"value": "231"
},
"effect": {
"type": "none",
"easing": "linear",
"duration": 500
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": ".s-Label_1",
"value": "Hide details"
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
jEvent.launchCases(cases);
}
}
})
.on("pageload", ".s-86cb39e7-7833-40be-9b35-772fd88e3779 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-86cb39e7-7833-40be-9b35-772fd88e3779")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-quotesdetail",
"value": {
"action": "jimFilterData",
"parameter": {
"datatype": "datamaster",
"datamaster": "Quotes",
"value": {
"action": "jimEquals",
"parameter": [ {
"field": "Assigned to"
},{
"datatype": "variable",
"element": "logged employee"
} ]
}
}
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
} else if(jFirer.is(".s-Label_16")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": ".s-Label_16",
"value": {
"action": "jimConcat",
"parameter": [ {
"action": "jimConcat",
"parameter": [ {
"action": "jimSelectData",
"parameter": {
"datatype": "datarow",
"datamaster": "Quotes",
"element": "#s-quotesdetail",
"value": {
"field": "First Name"
}
}
}," " ]
},{
"action": "jimSelectData",
"parameter": {
"datatype": "datarow",
"datamaster": "Quotes",
"element": "#s-quotesdetail",
"value": {
"field": "Family name"
}
}
} ]
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
} else if(jFirer.is(".s-Input_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "rowplans",
"value": {
"action": "jimSelectData",
"parameter": {
"datatype": "datarow",
"datamaster": "Quotes",
"element": "#s-quotesdetail",
"value": {
"field": "Plans"
}
}
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-plans",
"value": {
"action": "jimFilterData",
"parameter": {
"datatype": "datamaster",
"datamaster": "Plans",
"value": {
"action": "jimContains",
"parameter": [ {
"datatype": "variable",
"element": "rowplans"
},{
"field": "Name"
} ]
}
}
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
.on("mouseenter dragenter", ".s-86cb39e7-7833-40be-9b35-772fd88e3779 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is(".s-Flat-button") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-86cb39e7-7833-40be-9b35-772fd88e3779 #s-quotesdetail .s-Flat-button": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-86cb39e7-7833-40be-9b35-772fd88e3779 #s-quotesdetail .s-Flat-button": {
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
} else if(jFirer.is("#s-Button_11") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-86cb39e7-7833-40be-9b35-772fd88e3779 #s-Button_11": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-86cb39e7-7833-40be-9b35-772fd88e3779 #s-Button_11": {
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
.on("mouseleave dragleave", ".s-86cb39e7-7833-40be-9b35-772fd88e3779 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is(".s-Flat-button")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#s-Button_11")) {
jEvent.undoCases(jFirer);
}
});