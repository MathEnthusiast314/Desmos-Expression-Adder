// ==UserScript==
// @name        Desmos enter expressions using latex
// @namespace   Scripts
// @match       *://www.desmos.com/calculator*
// @grant       none
// @version     1.0
// @run-at      document-start
// @author      MathEnthusiast314
// @description To add expressions in desmos directly through "notes"
// @downloadURL https://github.com/MathEnthusiast314/Desmos-Expression-Adder/raw/note-expression.js
// @updateURL   https://github.com/MathEnthusiast314/Desmos-Expression-Adder/raw/note-expression.js
// ==/UserScript==

var tid = setInterval(mycode, 500);
function mycode() {
state = Calc.getState()
state.expressions.list.forEach(a=>{
if (a.text){
if (a.text.substring(0,5)=="latex"){
  a2 = state.expressions.list[-1+Number((a.text.substring(5,a.text.indexOf("\n"))))];
  a2.latex = a.text.substring(a.text.indexOf("\n")+1,a.text.length)
}
Calc.setExpression(a2)
}})
}
/*
function abortTimer() { // to be called when you want to stop the timer
  clearInterval(tid);
}*/
