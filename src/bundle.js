var $ = require('jquery')
var maskedinput = require('maskedinput')

function maskInputs() {
  return $('input#zip').mask('(999) 999-9999', {
    placeholder: ' '
  })
}
maskInputs()

var nouislider = require('nouislider')
var slider = $('div#nouislider')

function initSlider() {
  $('small').hide()
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
      decimals: 0,
      postfix: '% slid'
    })
  })
  slider.on({
    slide: function(){
      slider.parents('tray').css('border-color', 'yellow')
      $('output').html(slider.val())
      if (Number( slider.val().substr(0,slider.val().indexOf('%')) ) > 1) {
        $('#affirmative').text('Yuppers!').addClass('affirmative')
      } else {
        // $('#affirmative').css('opacity', '0')
      }
    },
    set: function(){
      $('.slider-tray').css('border-color', 'white')
    }
  })
}

initSlider()
