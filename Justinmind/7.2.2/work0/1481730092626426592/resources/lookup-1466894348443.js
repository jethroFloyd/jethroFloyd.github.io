(function(window, undefined) {
var dictionary = {
"9390cc95-7713-47d9-875b-142fb75a7294": "Contact us",
"b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555": "Backend Administrator",
"620b4236-46e8-44fc-a79c-c6532aca547c": "Mission & values",
"deb9bdf6-f097-42d1-9924-ea3790c7b7f9": "Step 3 - Medical History",
"44f9f3d3-fc84-431d-ae2e-e5b2730d6bfc": "blank",
"86cb39e7-7833-40be-9b35-772fd88e3779": "Backend Employee",
"13f89107-5c2f-4515-a766-088944a36cfb": "About us",
"272db33c-1f0b-4641-8582-538d89e9549a": "Step 4 - Payment",
"e144d61f-b155-47cc-bf0b-842a70dae4af": "Home",
"6754f284-5b0c-479f-96c4-e97958f93a7a": "Step 1 - Personal Details",
"4a62240e-9bcb-465a-afa2-e7cfb50e75e6": "Step 2 - Choose plans",
"a8aec9a1-253f-439c-9ba8-f308737cccb9": "banner extralarge",
"e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4": "login",
"dd729ba7-284d-48ee-a935-6978438cf9ed": "Steps",
"399d47e1-a72d-429a-85a0-332ef814a05c": "New Quote",
"8cd087ea-a3de-46aa-b850-26cc7631b085": "Quote assignation"
};

var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);