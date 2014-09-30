var $ = require('jquery')
var maskedinput = require('maskedinput')

String.prototype.repeat = function(num) {
  return new Array(num+1).join(this);
}

function maskInputs() {
  var maskmo = $('input#dob')
  maskmo.mask('99/99/9999', {
    placeholder: '_'
  })
  var maskmo = $('input#tel')
  maskmo.mask('(999) 999-9999', {
    placeholder: '_'
  })
  $('#dob').focus(function(){
    setTimeout(function(){
      $('#tel').show()
    }, 500)
  })
  $('#tel').focus(function(){
    setTimeout(function(){
      $('footer').show()
    }, 500)
  })
}

maskInputs()

var nouislider = require('nouislider')
var slider = $('#nouislider')
var ded  = "ded"

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
      if (Number( slider.val() ) > 1) {
        $('#affirmative').text('Yurps McGurps!').addClass('affirmative')
      }
      $('.slider-tray').css('border-color', 'white')
      setTimeout(function(){$('#mask-tray').show()}, 500)
    }
  })
}

function slidded() {
  var mult = Math.floor(Math.random()*4)
    , deds = ded.repeat(mult)
  return $('output>.right').text("slid" + deds)
}

initSlider()
