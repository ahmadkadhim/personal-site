// This changes everything
'use strict';

// retrieve the element
var element = document.getElementById('hand');

// reset the transition by...
element.addEventListener('click', function(e){
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove('run-animation');
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
  // element.offsetWidth = element.offsetWidth;
  
  element.getClientRects();
  
  // -> and re-adding the class
  element.classList.add('run-animation');
}, false);


var copyTextareaBtn = document.querySelector('.js-textareaCopyBtn');
// var copyTextareaTooltip = document.querySelector('.js-textareaCopyBtn .tooltip');

copyTextareaBtn.addEventListener('click', function (event) {
  var copyTextarea = document.querySelector('.js-copytextArea');
  // copyTextareaTooltip.classList.toggle('tooltip-visible')
  copyTextareaBtn.focus();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
