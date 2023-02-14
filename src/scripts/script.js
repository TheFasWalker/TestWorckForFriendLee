

$(document).ready(function () {
    $( function() {
        $( "#js-slider-cost-min" ).slider({
            range: "min",
            value: 15,
            min: 1,
            max: 200,
            slide: function( event, ui ) {
                $( "#js-cost-rub" ).val( ui.value );
            }
        });

        $( "#js-cost-rub" ).val($("#js-slider-cost-min" ).slider( "value" ) );
    } );
    // $('.calculator__input_cost').keyup(function (){
    //     let inputValue = $('.calculator__input_cost').val()
    //     $("#js-slider-cost-min" ).slider( "value", inputValue)
    // })

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
            value: 60,
            min: 1,
            max: 200,
            slide: function( event, ui ) {
                $( "#js-calculator-month" ).val(ui.value );
            }
        });
        $( "#js-calculator-month" ).val($( "#js-slider-month" ).slider( "value" ) );
    } );
});