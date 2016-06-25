jQuery("#simulation")
.on("click", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .click", function(event, data) {
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
} else if(jFirer.is("#s-Flat-button")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Category_5",
"property": "jimGetSelectedValue"
},"Title *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},"First Name *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},"Family Name *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},"Date of Birth *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Category_2",
"property": "jimGetSelectedValue"
},"Gender *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Category_6",
"property": "jimGetSelectedValue"
},"Nationality *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Category_3",
"property": "jimGetSelectedValue"
},"Country of Residence *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},"Email *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_8"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Line_30": {
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Line_30": {
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Line_30": {
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
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},
{
"blocks": [
{
"condition": {
"action": "jimNot",
"parameter": [ {
"action": "jimRegExp",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_8",
"property": "jimGetValue"
},"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_21"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_9"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Line_26": {
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Line_26": {
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Line_26": {
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
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Label_21"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},"Phone Number *" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},
{
"blocks": [
{
"condition": {
"action": "jimOr",
"parameter": [ {
"action": "jimNotEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_8",
"property": "jimGetValue"
},{
"datatype": "property",
"target": "#s-Input_14",
"property": "jimGetValue"
} ]
},{
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_14",
"property": "jimGetValue"
},"Confirm Email *" ]
} ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Label_22"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimPlus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
}
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
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Label_22"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"1" ]
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
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "errorplan1"
},"0" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "title",
"value": {
"datatype": "property",
"target": "#s-Category_5",
"property": "jimGetSelectedValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "fist name",
"value": {
"datatype": "property",
"target": "#s-Input_3",
"property": "jimGetValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "family",
"value": {
"datatype": "property",
"target": "#s-Input_5",
"property": "jimGetValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "middle",
"value": {
"datatype": "property",
"target": "#s-Input_1",
"property": "jimGetValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "date",
"value": {
"datatype": "property",
"target": "#s-Input_6",
"property": "jimGetValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "age",
"value": {
"datatype": "property",
"target": "#s-Input_4",
"property": "jimGetValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "gender",
"value": {
"datatype": "property",
"target": "#s-Category_2",
"property": "jimGetSelectedValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "nationality",
"value": {
"datatype": "property",
"target": "#s-Category_6",
"property": "jimGetSelectedValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "residence",
"value": {
"datatype": "property",
"target": "#s-Category_3",
"property": "jimGetSelectedValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "email",
"value": {
"datatype": "property",
"target": "#s-Input_8",
"property": "jimGetValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "phone",
"value": {
"datatype": "property",
"target": "#s-Input_7",
"property": "jimGetValue"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimNavigation",
"parameter": {
"target": "screens/4a62240e-9bcb-465a-afa2-e7cfb50e75e6"
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
"target": "#s-Group_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": "errorplan1",
"value": "0"
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
}
})
.on("keyup.jim", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .keyup", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Category_5")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Input_3"
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
} else if(jFirer.is("#s-Input_5")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
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
} else if(jFirer.is("#s-Input_1")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Input_6"
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
} else if(jFirer.is("#s-Input_6")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Input_4"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_4",
"value": {
"action": "jimMinus",
"parameter": [ {
"action": "jimSystemDate"
},{
"datatype": "property",
"target": "#s-Input_6",
"property": "jimGetValue"
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
if(data.which === 9) {
return false;
}
} else if(jFirer.is("#s-Input_4")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Category_2"
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
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
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
} else if(jFirer.is("#s-Input_14")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
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
} else if(jFirer.is("#s-Input_8")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Input_14"
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
} else if(jFirer.is("#s-Input_3")) {
cases = [
{
"blocks": [
{
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
"actions": [
{
"action": "jimFocusOn",
"parameter": {
"target": "#s-Input_5"
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
"condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
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
}
})
.on("pageunload", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .pageunload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Category_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "title",
"value": {
"datatype": "property",
"target": "#s-Category_5",
"property": "jimGetSelectedValue"
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
"action": "jimSetValue",
"parameter": {
"variable": "family",
"value": {
"datatype": "property",
"target": "#s-Input_5",
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
} else if(jFirer.is("#s-Input_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "middle",
"value": {
"datatype": "property",
"target": "#s-Input_1",
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
} else if(jFirer.is("#s-Input_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "date",
"value": {
"datatype": "property",
"target": "#s-Input_6",
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
} else if(jFirer.is("#s-Line_18")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": "age",
"value": null
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
"action": "jimSetValue",
"parameter": {
"variable": "nationality",
"value": {
"datatype": "property",
"target": "#s-Category_6",
"property": "jimGetSelectedValue"
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
"action": "jimSetValue",
"parameter": {
"variable": "phone",
"value": {
"datatype": "property",
"target": "#s-Input_7",
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
.on("change", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .change", function(event, data) {
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
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_18",
"value": {
"action": "jimSubstring",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_6",
"property": "jimGetValue"
},{
"action": "jimPlus",
"parameter": [ {
"action": "jimIndexOf",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_6",
"property": "jimGetValue"
},"/" ]
},"1" ]
},{
"action": "jimCount",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_6",
"property": "jimGetValue"
} ]
} ]
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_18",
"value": {
"action": "jimSubstring",
"parameter": [ {
"datatype": "property",
"target": "#s-Label_18",
"property": "jimGetValue"
},{
"action": "jimPlus",
"parameter": [ {
"action": "jimIndexOf",
"parameter": [ {
"datatype": "property",
"target": "#s-Label_18",
"property": "jimGetValue"
},"/" ]
},"1" ]
},{
"action": "jimCount",
"parameter": [ {
"datatype": "property",
"target": "#s-Label_18",
"property": "jimGetValue"
} ]
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_19",
"value": {
"action": "jimSubstring",
"parameter": [ {
"action": "jimSystemDate"
},{
"action": "jimPlus",
"parameter": [ {
"action": "jimIndexOf",
"parameter": [ {
"action": "jimSystemDate"
},"/" ]
},"1" ]
},{
"action": "jimCount",
"parameter": [ {
"action": "jimSystemDate"
} ]
} ]
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_19",
"value": {
"action": "jimSubstring",
"parameter": [ {
"datatype": "property",
"target": "#s-Label_19",
"property": "jimGetValue"
},{
"action": "jimPlus",
"parameter": [ {
"action": "jimIndexOf",
"parameter": [ {
"datatype": "property",
"target": "#s-Label_19",
"property": "jimGetValue"
},"/" ]
},"1" ]
},{
"action": "jimCount",
"parameter": [ {
"datatype": "property",
"target": "#s-Label_19",
"property": "jimGetValue"
} ]
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_4",
"value": {
"action": "jimMinus",
"parameter": [ {
"datatype": "property",
"target": "#s-Label_19",
"property": "jimGetValue"
},{
"datatype": "property",
"target": "#s-Label_18",
"property": "jimGetValue"
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
}
})
.on("focusin", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .focusin", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_4",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_10 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_10 input": {
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
"target": "#s-Input_10",
"property": "jimGetValue"
},"Title *" ]
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
"target": "#s-Line_4",
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
"target": "#s-Line_8",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_5 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_5 input": {
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
"target": "#s-Input_5",
"property": "jimGetValue"
},"Family Name *" ]
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
} else if(jFirer.is("#s-Input_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_12",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_1 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_1 input": {
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
},"Middle Initials" ]
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
} else if(jFirer.is("#s-Input_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_14",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_6 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_6 input": {
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
},"Date of Birth *" ]
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
} else if(jFirer.is("#s-Input_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_18",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_4 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_4 input": {
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
"target": "#s-Input_4",
"property": "jimGetValue"
},"Age" ]
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
} else if(jFirer.is("#s-Input_13")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_24",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_13 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_13 input": {
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
"target": "#s-Input_13",
"property": "jimGetValue"
},"Nationality *" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_13",
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
"target": "#s-Line_24",
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
} else if(jFirer.is("#s-Input_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_26",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_14 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_14 input": {
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
"target": "#s-Input_14",
"property": "jimGetValue"
},"Confirm Email *" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_14",
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
} else if(jFirer.is("#s-Input_7")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_28",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_7 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_7 input": {
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
},"Phone Number *" ]
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
"target": "#s-Line_30",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_8 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_8 input": {
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
},"Email *" ]
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
} else if(jFirer.is("#s-Input_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_16",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2 input": {
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
} else if(jFirer.is("#s-Category_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_16",
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
"target": "#s-Line_2",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_3 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_3 input": {
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
"target": "#s-Input_3",
"property": "jimGetValue"
},"First Name *" ]
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
} else if(jFirer.is("#s-Input_11")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Line_6",
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_11 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_11 input": {
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
"target": "#s-Input_11",
"property": "jimGetValue"
},"To" ]
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
"target": "#s-Line_6",
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
}
})
.on("focusout", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .focusout", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input_10")) {
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
"target": "#s-Line_4"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_10 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_10 input": {
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
"target": "#s-Line_4"
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
"value": "Family Name *"
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
"target": "#s-Line_8"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_5 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_5 input": {
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
} else if(jFirer.is("#s-Input_1")) {
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
"value": "Middle Initials"
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
"target": "#s-Line_12"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_1 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_1 input": {
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
"value": "Date of Birth *"
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
"target": "#s-Line_14"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_6 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_6 input": {
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
"value": "Age"
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
"target": "#s-Line_18"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_4 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_4 input": {
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
} else if(jFirer.is("#s-Input_13")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_13",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_13",
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
"target": "#s-Line_24"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_13 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_13 input": {
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
"target": "#s-Line_24"
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
} else if(jFirer.is("#s-Input_14")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input_14",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input_14",
"value": "Confirm Email *"
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
"target": "#s-Line_26"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_14 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_14 input": {
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
"value": "Phone Number *"
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
"target": "#s-Line_28"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_7 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_7 input": {
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
"value": "Email *"
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
"target": "#s-Line_30"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_8 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_8 input": {
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
"value": "Country of Residence *"
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
"target": "#s-Line_16"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2 input": {
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
"target": "#s-Line_16"
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
"value": "First Name *"
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
"target": "#s-Line_2"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_3 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "11.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_3 input": {
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
"target": "#s-Line_6"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_11 .valign": {
"attributes": {
"vertical-align": "middle",
"line-height": "10.0pt"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_11 input": {
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
"target": "#s-Line_6"
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
.on("mouseenter dragenter", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .mouseenter", function(event, data) {
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
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Flat-button": {
"attributes": {
"background-color": "#666666",
"background-image": "none"
}
}
},{
"#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Flat-button": {
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
.on("mouseleave dragleave", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Flat-button")) {
jEvent.undoCases(jFirer);
}
});