jQuery("#simulation")
.on("click", ".s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Healthplans-over")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/6754f284-5b0c-479f-96c4-e97958f93a7a"
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
} else if(jFirer.is("#s-Label_18")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/6754f284-5b0c-479f-96c4-e97958f93a7a"
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
} else if(jFirer.is(".s-Input_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_3",
"value": {
"action": "jimSelectData",
"parameter": {
"datatype": "datarow",
"datamaster": "Plans",
"element": "#s-plans",
"value": {
"field": "Name"
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
"target": "#s-Rectangle_2",
"value": {
"action": "jimSelectData",
"parameter": {
"datatype": "datarow",
"datamaster": "Plans",
"element": "#s-plans",
"value": {
"field": "Description"
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
} else if(jFirer.is("#s-Flat-button")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "Plans",
"value": {
"action": "jimFilterData",
"parameter": {
"datatype": "datalist",
"datamaster": "Plans",
"element": "#s-plans",
"value": {
"datatype": "property",
"target": ".s-Input_4",
"property": "jimGetValue"
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
"variable": "sum",
"value": {
"action": "jimSumData",
"parameter": {
"datatype": "variable",
"element": "Plans",
"value": {
"field": "Price"
}
}
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimNavigation",
"parameter": {
"target": "screens/deb9bdf6-f097-42d1-9924-ea3790c7b7f9"
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
} else if(jFirer.is("#s-Button_9")) {
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
.on("mouseenter dragenter", ".s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Label_18") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 #s-Label_18": {
"attributes": {
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 #s-Label_18 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 #s-Label_18 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "underline",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
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
} else if(jFirer.is("#s-Flat-button") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 #s-Flat-button": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 #s-Flat-button": {
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
} else if(jFirer.is("#s-Button_9") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 #s-Button_9": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 #s-Button_9": {
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
.on("mouseleave dragleave", ".s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Label_18")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#s-Flat-button")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#s-Button_9")) {
jEvent.undoCases(jFirer);
}
});