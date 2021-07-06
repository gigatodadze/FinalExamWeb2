var rates = [];
$(document).ready(function () {


    const request_one = {
        "url": "https://api.exchangerate-api.com/v4/latest/USD",
        "method": "GET"
    };


    $.ajax(request_one).done(function (response) {

        rates = (response.rates)

        var rateNames = [];
        var rateNumbers = [];
        for(var i in rates) {
            rateNames.push(i);
            rateNumbers.push(rates[i]);
        }


        console.log(rateNumbers);
        console.log(rateNames);
        console.log(rates);

        var select = document.getElementById("selectCurrency");
        var select2 = document.getElementById("selectSecondCurrency");
        for(var i = 0; i < rateNames.length; i++) {
            var opt = rateNames[i];
            var el = document.createElement("option");
            el.setAttribute("id", "first"+i);
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
            var el2 = document.createElement("option");
            el2.setAttribute("id", "second"+i);
            el2.textContent = opt;
            el2.value = opt;
            select2.appendChild(el2);
        }


    });



});

$("#selectCurrency").change(function(){
    var selectedCountry = $(this).children("option:selected").val();
    alert("You have selected the country - " + selectedCountry);
});

function Convert(){
    var first = $('#selectCurrency').children("option:selected").val();
    // alert(first)
    var second = $('#selectSecondCurrency').children("option:selected").val();
    // alert(second);

    var firstNum = $('#numberToConvert').val();

    var secondNum = rates[second]*firstNum/rates[first];



    $( "#secondNum" ).text(secondNum);

    return false;
    // const request_two = {
    //     "url": "https://api.exchangerate-api.com/v4/latest/USD",
    //     "method": "GET"
    // };
    // $.ajax(request_two).done(function (response) {
    //
    //     rates = (response.rates)
    //
    //     alert(rates[first]);
    //     // var rateNames = [];
    //     // var rateNumbers = [];
    //     // for(var i in rates) {
    //     //     rateNames.push(i);
    //     //     rateNumbers.push(rates[i]);
    //     // }
    //     //
    //     //
    //     // console.log(rateNumbers);
    //     // console.log(rateNames);
    //     // console.log(rates);
    //     //
    //     // var select = document.getElementById("selectCurrency");
    //     // var select2 = document.getElementById("selectSecondCurrency");
    //     // for(var i = 0; i < rateNames.length; i++) {
    //     //     var opt = rateNames[i];
    //     //     var el = document.createElement("option");
    //     //     el.setAttribute("id", "first"+i);
    //     //     el.textContent = opt;
    //     //     el.value = opt;
    //     //     select.appendChild(el);
    //     //     var el2 = document.createElement("option");
    //     //     el2.setAttribute("id", "second"+i);
    //     //     el2.textContent = opt;
    //     //     el2.value = opt;
    //     //     select2.appendChild(el2);
    //     // }
    //
    //
    // });



}