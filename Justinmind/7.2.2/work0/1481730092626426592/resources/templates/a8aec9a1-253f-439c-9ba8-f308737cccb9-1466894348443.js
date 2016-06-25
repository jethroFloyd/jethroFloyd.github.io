jQuery("#simulation")
.on("click", ".t-a8aec9a1-253f-439c-9ba8-f308737cccb9 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#t-Button_1")) {
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
} else if(jFirer.is("#t-Image_2")) {
cases = [
{
"blocks": [
{
"actions": [
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
} else if(jFirer.is("#t-Label_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/13f89107-5c2f-4515-a766-088944a36cfb"
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
} else if(jFirer.is("#t-Label_4")) {
cases = [
{
"blocks": [
{
"actions": [
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
} else if(jFirer.is("#t-Label_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/620b4236-46e8-44fc-a79c-c6532aca547c"
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
} else if(jFirer.is("#t-Label_6")) {
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
} else if(jFirer.is("#t-Label_9")) {
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
}
})
.on("mouseenter dragenter", ".t-a8aec9a1-253f-439c-9ba8-f308737cccb9 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#t-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-a8aec9a1-253f-439c-9ba8-f308737cccb9 #t-Button_1": {
"attributes": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#4CB9CE",
"border-right-width": "2px",
"border-right-style": "solid",
"border-right-color": "#4CB9CE",
"border-bottom-width": "2px",
"border-bottom-style": "solid",
"border-bottom-color": "#4CB9CE",
"border-left-width": "2px",
"border-left-style": "solid",
"border-left-color": "#4CB9CE",
"border-radius": "0px 0px 0px 0px",
"font-size": "10.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#t-a8aec9a1-253f-439c-9ba8-f308737cccb9 #t-Button_1 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#t-a8aec9a1-253f-439c-9ba8-f308737cccb9 #t-Button_1 span": {
"attributes": {
"color": "#4CB9CE",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "10.0pt"
}
}
},{
"#t-a8aec9a1-253f-439c-9ba8-f308737cccb9 #t-Button_1": {
"attributes-ie": {
"border-top-width": "2px",
"border-top-style": "solid",
"border-top-color": "#4CB9CE",
"border-right-width": "2px",
"border-right-style": "solid",
"border-right-color": "#4CB9CE",
"border-bottom-width": "2px",
"border-bottom-style": "solid",
"border-bottom-color": "#4CB9CE",
"border-left-width": "2px",
"border-left-style": "solid",
"border-left-color": "#4CB9CE",
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
}
];
jEvent.launchCases(cases);
}
})
.on("mouseleave dragleave", ".t-a8aec9a1-253f-439c-9ba8-f308737cccb9 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#t-Button_1")) {
jEvent.undoCases(jFirer);
}
});