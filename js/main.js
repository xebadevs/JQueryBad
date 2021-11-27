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
$('#section2').on('click', staticView)
$('#section3').on('click', staticView)
$('#section4').on('click', staticView)

// STATIC VIEW clicking NAV BUTTONS
function staticView(){
    // alert('click')
    unableWheel($(this).attr('href'))
}

$('#form_send').on('click', reload)

function reload(){
    location.reload(true)
}