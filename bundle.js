var $ = require('jquery')
var nouislider = require('nouislider')
var maskedinput = require('maskedinput')

function initSlider() {
  return $('div#slider').noUISlider()
}

function maskInputs() {
  return $('input#zip').mask('99999')
}

initSlider()
maskInputs()
