var $ = require('jquery')

var maskedinput = require('maskedinput')

function maskInputs() {
  return $('input#zip').mask('99999')
}
maskInputs()

var nouislider = require('nouislider')

function initSlider() {
  $('small').hide()
  return $('div#slider').noUISlider()
}

initSlider()
