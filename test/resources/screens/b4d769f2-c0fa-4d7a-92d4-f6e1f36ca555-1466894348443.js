jQuery("#simulation")
.on("click", ".s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Button_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Message-light",
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
})
.on("pageload", ".s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is(".s-Label_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": ".s-Label_4",
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
} else if(jFirer.is("#s-Category_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Category_1",
"value": {
"action": "jimSelectData",
"parameter": {
"datatype": "datamaster",
"datamaster": "employees",
"value": {
"field": "name"
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
"target": "#s-Category_1",
"value": {
"action": "jimConcat",
"parameter": [ {
"datatype": "property",
"target": "#s-Category_1",
"property": "jimGetValue"
},"," ]
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetSelection",
"parameter": {
"target": "#s-Category_1",
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
.on("change", ".s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 .change", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Category_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimUpdateData",
"parameter": {
"action": "jimFilterData",
"parameter": {
"datatype": "datalist",
"datamaster": "Quotes",
"element": "#s-quotesdetail",
"value": {
"datatype": "property",
"target": ".s-Input_12",
"property": "jimGetValue"
}
},
"fields": {
"Plans": null,
"Title": null,
"First Name": null,
"Middle initials": null,
"Family name": null,
"Date of birth": null,
"Gender": null,
"Nationality": null,
"Country of residence": null,
"Email": null,
"Phone": null,
"Heart disorders": null,
"Endocrine disorders": null,
"Breathing disorders": null,
"Stomach disorders": null,
"Assigned to": {
"datatype": "property",
"target": "#s-Category_1",
"property": "jimGetSelectedValue"
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
.on("mouseenter dragenter", ".s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Button_9") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 #s-Button_9": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 #s-Button_9": {
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
.on("mouseleave dragleave", ".s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Button_9")) {
jEvent.undoCases(jFirer);
}
});