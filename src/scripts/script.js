

$(document).ready(function () {
    function getPay(){
        let oldValue = $('.js-calculator__input_payment').val()
        let newValue = oldValue.substring(0, oldValue.length - 2)
        return newValue
    }
    $( function() {
        $( "#js-slider-cost-min" ).slider({
            range: "min",
            value: 1500000,
            min: 1500000,
            max: 10000000,
            slide: function( event, ui ) {
                $( "#js-cost-rub" ).val( ui.value );
            }
        });
        $( "#js-cost-rub" ).val($("#js-slider-cost-min" ).slider( "value" ) );
    } );
    $( function() {
        $( "#js-slider-deposit" ).slider({
            range: "min",
            value: 42000,
            min: 1,
            max: 200000,
            slide: function( event, ui ) {
                $( "#js-calculator-lising" ).val( ui.value + " ₽");
            }
        });
        $( "#js-calculator-lising" ).val( $( "#js-slider-deposit" ).slider( "value" ) + " ₽");
    } );
    $( function() {
        $( "#js-slider-month" ).slider({
            range: "min",
            value: 6,
            min: 1,
            max: 120,
            slide: function( event, ui ) {
                $( "#js-calculator-month" ).val(ui.value );
            }
        });
        $( "#js-calculator-month" ).val($( "#js-slider-month" ).slider( "value" ) );
    } );

    $('.calculator__input_cost').keyup(function (){
        $("#js-slider-cost-min" ).slider( "value", $('.calculator__input_cost').val())
    })

    $('.calculator__input_month').keyup(function (){
        $('#js-slider-month').slider("value", $('.calculator__input_month').val())
    })

    $('.js-calculator__input_payment').focus(()=>{
            let oldValue = $('.js-calculator__input_payment').val()
            let newValue = oldValue.substring(0, oldValue.length - 2)
            $('.js-calculator__input_payment').val(newValue)
    })
    $('.js-calculator__input_payment').blur(()=>{
        $( "#js-calculator-lising" ).val( $( "#js-slider-deposit" ).slider( "value" ) + " ₽");

    })
});