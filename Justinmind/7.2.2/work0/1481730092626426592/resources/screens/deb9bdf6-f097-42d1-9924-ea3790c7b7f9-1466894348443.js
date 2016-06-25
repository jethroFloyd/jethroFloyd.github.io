jQuery("#simulation")
.on("click", ".s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 .click", function(event, data) {
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
} else if(jFirer.is("#s-Label_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/4a62240e-9bcb-465a-afa2-e7cfb50e75e6"
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
"action": "jimNavigation",
"parameter": {
"target": "screens/272db33c-1f0b-4641-8582-538d89e9549a"
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
} else if(jFirer.is("#s-Radio_button_13")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "stomach",
"value": "true"
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
} else if(jFirer.is("#s-Radio_button_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "stomach",
"value": "false"
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
} else if(jFirer.is("#s-Radio_button_11")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "breathing",
"value": "true"
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
} else if(jFirer.is("#s-Radio_button_12")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "breathing",
"value": "false"
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
} else if(jFirer.is("#s-Radio_button_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "endocrine",
"value": "true"
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
} else if(jFirer.is("#s-Radio_button_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "endocrine",
"value": "false"
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
} else if(jFirer.is("#s-Radio_button_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "heart",
"value": "true"
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
} else if(jFirer.is("#s-Radio_button_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "heart",
"value": "false"
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
.on("pageload", ".s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-selectedplans_1",
"value": {
"datatype": "variable",
"element": "Plans"
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
} else if(jFirer.is("#s-Label_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_14",
"value": {
"action": "jimSumData",
"parameter": {
"datatype": "datalist",
"datamaster": "Plans",
"element": "#s-selectedplans_1",
"value": {
"datatype": "property",
"target": ".s-Input_5",
"property": "jimGetValue"
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
.on("pageunload", ".s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 .pageunload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "total",
"value": {
"datatype": "property",
"target": "#s-Label_14",
"property": "jimGetValue"
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
.on("mouseenter dragenter", ".s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 #s-Label_6": {
"attributes": {
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 #s-Label_6 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 #s-Label_6 span": {
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
"#s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 #s-Flat-button": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 #s-Flat-button": {
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 #s-Flat-button": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 #s-Flat-button": {
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
.on("mouseleave dragleave", ".s-deb9bdf6-f097-42d1-9924-ea3790c7b7f9 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Label_6")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#s-Flat-button")) {
jEvent.undoCases(jFirer);
}
});