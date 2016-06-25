jQuery("#simulation")
.on("click", ".s-9390cc95-7713-47d9-875b-142fb75a7294 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Contact-over")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/9390cc95-7713-47d9-875b-142fb75a7294"
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
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_10",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_5"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_10"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_19": {
"attributes": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_19": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_19": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
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
"target": "#s-Input_11",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_6"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_11"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
} ],
"exectype": "serial",
"delay": 0
}
]
},
{
"condition": {
"action": "jimNot",
"parameter": [ {
"action": "jimRegExp",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_11",
"property": "jimGetValue"
},"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
} ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_6",
"value": "This is not a valid email"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_11"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_6"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#FF0000",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
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
"action": "jimAnd",
"parameter": [ {
"action": "jimAnd",
"parameter": [ {
"action": "jimNotEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_10",
"property": "jimGetValue"
},"" ]
},{
"action": "jimNotEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_11",
"property": "jimGetValue"
},"" ]
} ]
},{
"action": "jimRegExp",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_11",
"property": "jimGetValue"
},"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
} ]
},
"actions": [
{
"action": "jimCreateData",
"parameter": {
"datatype": "datamaster",
"datamaster": "contact",
"fields": {
"name": {
"datatype": "property",
"target": "#s-Input_10",
"property": "jimGetValue"
},
"mail": {
"datatype": "property",
"target": "#s-Input_11",
"property": "jimGetValue"
},
"message": {
"datatype": "property",
"target": "#s-Input_9",
"property": "jimGetValue"
},
"phone": {
"datatype": "property",
"target": "#s-Input_6",
"property": "jimGetValue"
},
"city": {
"datatype": "property",
"target": "#s-Input_8",
"property": "jimGetValue"
}
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_3"
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
},
{
"action": "jimHide",
"parameter": {
"target": "#s-Label_3"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_6",
"value": "Phone Number"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_8",
"value": "City"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_9",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_11",
"value": "Email*"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_10",
"value": "Name*"
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
.on("focusin", ".s-9390cc95-7713-47d9-875b-142fb75a7294 .focusin", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_6")) {
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
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_6 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_6 input": {
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
"target": "#s-Input_6",
"property": "jimGetValue"
},"Phone Number" ]
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
} else if(jFirer.is("#s-Input_8")) {
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
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_8 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_8 input": {
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
},"City" ]
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
} else if(jFirer.is("#s-Input_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_9",
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
} else if(jFirer.is("#s-Input_10")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_10",
"property": "jimGetValue"
},"Name *" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_10",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_19": {
"attributes": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#D9D9D9",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_19": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#D9D9D9",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_19": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#D9D9D9",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
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
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_10 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_10 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
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
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Input_11")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_11",
"property": "jimGetValue"
},"Email *" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_11",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#D9D9D9",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#D9D9D9",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Line_21": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#D9D9D9",
"border-right-width": "0px",
"border-right-style": "none",
"border-right-color": "#000000",
"border-bottom-width": "0px",
"border-bottom-style": "none",
"border-bottom-color": "#000000",
"border-left-width": "0px",
"border-left-style": "none",
"border-left-color": "#000000",
"border-radius": "0px 0px 0px 0px"
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
"action": "jimShow",
"parameter": {
"target": "#s-Line_21",
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
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_11 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_11 input": {
"attributes": {
"color": "#434343",
"text-align": "left",
"text-decoration": "none",
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
event.data = data;
jEvent.launchCases(cases);
}
})
.on("focusout", ".s-9390cc95-7713-47d9-875b-142fb75a7294 .focusout", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_6")) {
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
"value": "Phone Number"
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
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_6 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_6 input": {
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
"value": "City"
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
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_8 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_8 input": {
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
} else if(jFirer.is("#s-Input_10")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_10",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_10",
"value": "Name *"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_5": {
"attributes": {
"font-size": "8.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_5 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_5 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "8.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_10": {
"attributes": {
"font-size": "14.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_10 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "14.0pt"
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
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_10 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_10 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
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
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Input_11")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_11",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_11",
"value": "Name *"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_6": {
"attributes": {
"font-size": "8.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_6 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_6 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "8.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_11": {
"attributes": {
"font-size": "14.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_11 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Label_11 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "14.0pt"
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
"action": "jimHide",
"parameter": {
"target": "#s-Line_21"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_11 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_11 input": {
"attributes": {
"color": "#808080",
"text-align": "left",
"text-decoration": "none",
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
event.data = data;
jEvent.launchCases(cases);
}
})
.on("mouseenter dragenter", ".s-9390cc95-7713-47d9-875b-142fb75a7294 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Flat-button") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Flat-button": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Flat-button": {
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
.on("mouseleave dragleave", ".s-9390cc95-7713-47d9-875b-142fb75a7294 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Flat-button")) {
jEvent.undoCases(jFirer);
}
});