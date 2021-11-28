// ------------------------------ CONSTANTS ------------------------------ 

const element_He = $('.element_He');
const element_C = $('.element_C');
const element_B = $('.element_B');
const element_U = $('.element_U');
const element_P = $('.element_P');
const element_V = $('.element_V');
const element_Ta = $('.element_Ta');

const btn_aboutus = $('#btn_aboutus');
const btn_products = $('#btn_products');
const btn_privacy = $('#btn_privacy');
const btn_contact = $('#btn_contact_bgc');

const iframe = $('#iframe');

const form_send = $('#form_send');

const section1 = $('#section1').attr('href').substring(1)
const section2 = $('#section2').attr('href').substring(1)
const section3 = $('#section3').attr('href').substring(1)
const section4 = $('#section4').attr('href').substring(1)


// ------------------------------  FUNCTIONS ------------------------------

// FULL PAGE SCROLL
$('#fullpage').fullpage()

// UNABLE WHEEL
function unableWheel(section){
    $(section).bind('mousewheel', function(){
        return false
    })
}

// ABLE WHEEL
function ableWheel(section){
    $(section).bind('mousewheel', function(){
        return true
    })
}

// STATIC SECTIONS from NAV BUTTONS
$('#section1').on('click', staticView)
$('#section2').on('click', staticView2)
$('#section3').on('click', staticView3)
$('#section4').on('click', staticView)


// STATIC VIEW clicking NAV BUTTONS
$('#section1top').css('opacity', 0)
$('#section2top').css('opacity', 0)
$('#section3top').css('opacity', 0)

function staticView(){
    unableWheel($(this).attr('href'))
    $('#section1top').css('opacity', 1)
}

function staticView2(){
    unableWheel($(this).attr('href'))
    $('#section2top').css('opacity', 1)
}

function staticView3(){
    unableWheel($(this).attr('href'))
    $('#section3top').css('opacity', 1)
}


// FORM
$(function(){
    let $form = $('#crystal-form')

    // Reg Exp for Number: +54
    $.validator.addMethod('addPlus',function(val, elem){
        return this.optional(elem) || /^(?:[+\d].*\d)$/gm.test(val)
    })

    // Reg Exp for Alias
    $.validator.addMethod('justLetters', function(val, elem){
        return this.optional(elem) || /^[a-zA-Z]+$/.test(val)
    })

    // Reg Exp for Message
    $.validator.addMethod('avoidNinjas', function(val, elem){
        return this.optional(elem) || /^[^<>%$]*$/.test(val)
    })

    // Form validation
    if($form.length){
        $form.validate({
            rules:{
                alias:{
                    required: true,
                    minlength: 3,
                    maxlength: 15,
                    justLetters: true
                },
                number1:{
                    required: true,
                    minlength: 2,
                    maxlength: 4,
                    addPlus: true
                },
                number2:{
                    required: true,
                    digits: true,
                    minlength: 3,
                    maxlength: 4,
                },
                number3:{
                    required: true,
                    digits: true,
                    minlength: 5,
                    maxlength: 9,
                },
                message:{
                    required: true,
                    minlength: 7,
                    maxlength: 200,
                    avoidNinjas: true
                }
            },
            messages:{
                alias:{
                    required: '<br>Really? Nothing?',
                    minlength: '<br>Insert at least 3 characters',
                    maxlength: '<br>The maximum allowed is 15',
                    justLetters: '<br>Just regular letters'
                },
                number1:{
                    required: '!!',
                    minlength: 'Min: 1 number',
                    maxlength: 'Max: 4',
                    addPlus: 'Ex: +99'
                },
                number2:{
                    required: '!!',
                    minlength: 'Min: 3',
                    maxlength: 'Max: 4',
                    digits: 'Numbers only',
                },
                number3:{
                    required: '!!',
                    minlength: 'Min: 5',
                    maxlength: 'Max: 9',
                    digits: 'Numbers only',
                },
                message:{
                    required: 'Again... HOW CAN I HELP YOU?',
                    minlength: 'Write a more extensive message',
                    maxlength: 'Just be brief',
                    avoidNinjas: 'No special characters allowed here'
                }
            }
        })
    }
})


// SEND BUTTON
$('#form_send').on('click', function(e){
    e.preventDefault()
    $('#confirmation').removeClass('invisible')
    $('#confirmation').addClass('received')
    $('#crystal-form')[0].reset()
})