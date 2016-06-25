jQuery("#simulation")
.on("click", ".s-620b4236-46e8-44fc-a79c-c6532aca547c .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-mission-over")) {
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
}
});