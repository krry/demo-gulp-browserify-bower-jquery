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
  $('#slider-tray').addClass('in')
}

function stealSouls() {
  $('#steal').on('click', function(){
    $('#resolve-tray').addClass('in')
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
    // if ($this.count) {
    //   $this.count = 1
    // } else {
    //   $this.count++
    // }
    advanceFocus($this.val(), $this.data('places'), $this.next())
  })
}


function advanceFocus(val, last, targ) {
  console.log('fart')
  console.log('val')
  console.log(val)
  console.log('last')
  console.log(last)
  console.log('targ')
  console.log(targ)

  if (val.slice(-1) !== last) {
    return targ.focus()
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