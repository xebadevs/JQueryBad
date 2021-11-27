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


// ------------------------------  FUNCTIONS ------------------------------

function scrolling() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        let target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']')
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500)
            return false
        }
    })
}

// FULL PAGE SCROLL
$('#fullpage').fullpage()