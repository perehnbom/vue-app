
let sheet, index = 0;

function addCSSRule(selector, ruleString) {

	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + ruleString + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, ruleString, index);
	}
  index++;
}

function createSheet() {
  var style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	document.head.appendChild(style);
	return style.sheet;
}


function toRuleString(ruleObject){
  var s = '';
  for(var key in ruleObject){
    s += '' + key;
    s += ': ';
    s += ruleObject[key];
    s += ';'
  }
  return s;
}

export default function (selector, rules){
  if(sheet == null) {
    sheet = createSheet();
    index = 0;
  }

  return addCSSRule(selector, toRuleString(rules));

}
