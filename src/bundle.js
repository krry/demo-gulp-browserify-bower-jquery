var $ = require('jquery')
var maskedinput = require('maskedinput')
var nouislider = require('nouislider')
var slider = $('#nouislider')
var ded  = "ded"


String.prototype.repeat = function(num) {
  return new Array(num+1).join(this);
}

function loadItIn(){
  $('#find-out').addClass('in')
}

function loadSuspense(){
  setTimeout(function(){
    if (selfQuasiSemiHalfPartPseudo === true) {
      veryNextStep()
    }
  }, 3500)
}

function goToVeryNext(){
  $('#next-step').on('click', function(){
    veryNextStep()
  })
}

function veryNextStep() {
  $('body > header').addClass('introd')
  $('main, #slider-tray, footer').addClass('in')
}

function stealSouls() {
  $('#steal').on('click', function(){
    $('#resolve-tray').addClass('in')
  })
}

function showResults(){
  $('.results').on('click', function(){
    $('#result').text($(this).data('result'))
    setTimeout(function(){
      $('#code-tray').addClass('in')
    }, 500)
  })
}


function maskInputs() {
  var zip = $('input#zip')
  var tel = $('input#tel')
  var dob = $('input#dob')
  var ssn = $('input#ssn')
  var inp = $('#mask-tray input')

  zip.mask('99999', {
    placeholder: '@'
  }).data('last', '@')
  tel.mask('(999) 999-9999', {
    placeholder: '_'
  }).data('last', '_')
  dob.mask('99/99/9999', {
    placeholder: '•'
  }).data('last', '•')
  ssn.mask('999-99-9999', {
    placeholder: '*'
  }).data('last', '*')

  inp.on('keyup', function(){
    var $this = $(this)
    advanceFocus($this)
  })
}


function advanceFocus(el) {
  var val = el.val()
  var last = el.data('last')
  var target = el.parents('label').next('label').find('input')
  if (val.slice(-1) !== last) {
    return $(target).focus()
  }
}

function initSlider() {
  slider.next('small').hide()
  slider.noUiSlider({
    start: [ 50 ],
    step: 1,
    connect: 'lower',
    orientation: 'horizontal',
    range: {
      'min': [   0 ],
      'max': [ 100 ]
    },
    format: wNumb({
      decimals: 0
    })
  })
  slider.on({
    slide: function(){
      slider.parents('tray').css('border-color', 'yellow')
      $('output>.left').html(slider.val())
      if (!$('output').hasClass('slid')) {
        $('output').addClass('slid')
      }
      slidded()
    },
    set: function(){
      $('.slider-tray').css('border-color', 'white')

      setTimeout(function(){
        $('#slider-credit').addClass('in')
      }, 400)


      setTimeout(function(){
        $('#mask-tray').addClass('in')
      }, 4000)
    }
  })
}

function slidded() {
  var mult = Math.floor(Math.random()*4)
    , deds = ded.repeat(mult)
  return $('output>.right').text("slid" + deds)
}

initSlider()
maskInputs()
stealSouls()
loadItIn()
goToVeryNext()
showResults()