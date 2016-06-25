jQuery("#simulation")
.on("click", ".s-272db33c-1f0b-4641-8582-538d89e9549a .click", function(event, data) {
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
} else if(jFirer.is("#s-Label_8")) {
cases = [
{
"blocks": [
{
"actions": [
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
} else if(jFirer.is("#s-Flat-button")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimCreateData",
"parameter": {
"datatype": "datamaster",
"datamaster": "Quotes",
"fields": {
"Plans": {
"action": "jimSelectData",
"parameter": {
"datatype": "variable",
"element": "Plans",
"value": {
"field": "Name"
}
}
},
"Title": {
"datatype": "variable",
"element": "title"
},
"First Name": {
"datatype": "variable",
"element": "fist name"
},
"Middle initials": {
"datatype": "variable",
"element": "middle"
},
"Family name": {
"datatype": "variable",
"element": "family"
},
"Date of birth": {
"datatype": "variable",
"element": "date"
},
"Gender": {
"datatype": "variable",
"element": "gender"
},
"Nationality": {
"datatype": "variable",
"element": "nationality"
},
"Country of residence": {
"datatype": "variable",
"element": "residence"
},
"Email": {
"datatype": "variable",
"element": "email"
},
"Phone": {
"datatype": "variable",
"element": "phone"
},
"Heart disorders": {
"datatype": "variable",
"element": "heart"
},
"Endocrine disorders": {
"datatype": "variable",
"element": "endocrine"
},
"Breathing disorders": {
"datatype": "variable",
"element": "breathing"
},
"Stomach disorders": {
"datatype": "variable",
"element": "stomach"
},
"Assigned to": null
}
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
} else if(jFirer.is("#s-Category_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimPause",
"parameter": {
"pause": 250
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
} else if(jFirer.is("#s-Category_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimPause",
"parameter": {
"pause": 250
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
} else if(jFirer.is("#s-Category_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimPause",
"parameter": {
"pause": 250
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
} else if(jFirer.is("#s-Category_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimPause",
"parameter": {
"pause": 250
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
} else if(jFirer.is("#s-Category_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimPause",
"parameter": {
"pause": 250
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
.on("keyup.jim", ".s-272db33c-1f0b-4641-8582-538d89e9549a .keyup", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Category_3"
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
} else if(jFirer.is("#s-Category_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Input_1"
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
} else if(jFirer.is("#s-Category_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Category_4"
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
} else if(jFirer.is("#s-Category_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Category_5"
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
} else if(jFirer.is("#s-Category_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Category_6"
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
} else if(jFirer.is("#s-Category_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Input_7"
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
} else if(jFirer.is("#s-Input_7")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Input_8"
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
.on("focusin", ".s-272db33c-1f0b-4641-8582-538d89e9549a .focusin", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_3",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_1 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_1 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
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
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_1",
"property": "jimGetValue"
},"Card Number *" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_1",
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
} else if(jFirer.is("#s-Input_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_5",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_2 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_2 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
},"To" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_2",
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
} else if(jFirer.is("#s-Category_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_5",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
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
} else if(jFirer.is("#s-Input_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_7",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_3 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_3 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
},"To" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_3",
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
} else if(jFirer.is("#s-Category_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_7",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
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
} else if(jFirer.is("#s-Input_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_11",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_4 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_4 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_4",
"property": "jimGetValue"
},"To" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_4",
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
} else if(jFirer.is("#s-Category_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_11",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
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
} else if(jFirer.is("#s-Input_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_13",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_5 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_5 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_5",
"property": "jimGetValue"
},"To" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_5",
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
} else if(jFirer.is("#s-Category_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_13",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
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
} else if(jFirer.is("#s-Input_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_15",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_6 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_6 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_6",
"property": "jimGetValue"
},"To" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_6",
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
} else if(jFirer.is("#s-Category_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_15",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
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
} else if(jFirer.is("#s-Input_7")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_17",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_7 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_7 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
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
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_7",
"property": "jimGetValue"
},"Name on card *" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_7",
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
} else if(jFirer.is("#s-Input_8")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_19",
"effect": {
"type": "slide",
"easing": "linear",
"duration": 200,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_8 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_8 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
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
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_8",
"property": "jimGetValue"
},"Security number *" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_8",
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
.on("focusout", ".s-272db33c-1f0b-4641-8582-538d89e9549a .focusout", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_1")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_1",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_1",
"value": "Card Number *"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_3"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_1 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_1 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
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
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Input_2")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_2",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_2",
"value": "To"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_5"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_2 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_2 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
} else if(jFirer.is("#s-Category_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Line_5"
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
} else if(jFirer.is("#s-Input_3")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_3",
"value": "To"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_7"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_3 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_3 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
} else if(jFirer.is("#s-Category_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Line_7"
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
} else if(jFirer.is("#s-Input_4")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_4",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_4",
"value": "To"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_11"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_4 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_4 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
} else if(jFirer.is("#s-Category_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Line_11"
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
} else if(jFirer.is("#s-Input_5")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_5",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_5",
"value": "To"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_13"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_5 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_5 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
} else if(jFirer.is("#s-Category_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Line_13"
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
} else if(jFirer.is("#s-Input_6")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_6",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_6",
"value": "To"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_15"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_6 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_6 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
"font-size": "10.0pt"
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
} else if(jFirer.is("#s-Category_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Line_15"
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
} else if(jFirer.is("#s-Input_7")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_7",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_7",
"value": "Name on card *"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_17"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_7 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_7 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
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
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Input_8")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_8",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_8",
"value": "Security number *"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_19"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_8 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Input_8 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Light,Arial",
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
event.data = data;
jEvent.launchCases(cases);
}
})
.on("mouseenter dragenter", ".s-272db33c-1f0b-4641-8582-538d89e9549a .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Label_8": {
"attributes": {
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Label_8 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Label_8 span": {
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
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Flat-button": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-272db33c-1f0b-4641-8582-538d89e9549a #s-Flat-button": {
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
.on("mouseleave dragleave", ".s-272db33c-1f0b-4641-8582-538d89e9549a .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Label_8")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#s-Flat-button")) {
jEvent.undoCases(jFirer);
}
});