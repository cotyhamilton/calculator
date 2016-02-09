$(document).ready(function() {
    function display() {
        if (num.length > 9) {
            $(".display").css("font-size", "3em");
        }
        else {
            $(".display").css("font-size", "5em");
        }
        $('.display-text').text(num);
    }
    
    var num = "",
        newnum = "",
        operator = "";

    $('.display-text').text(0);

    $('.number').on( "click", function() {
        num += $(this).text();
        display();
    });
    
    $('.dot').on( "click", function() {
        var dotCount = 0;
        for (var i = 0; i < num.length; i++) {
            if (num[i] === ".") {
                dotCount++;
            }
        }
        if (dotCount === 0) {
            num += ".";
        }
        display();
    });
    
    $('.operator').on( "click", function() {
        operator = $(this).text();
        if (newnum) {
            $('.equals').click();
            newnum = num;
            num = "";
            return;
        }
        newnum = num;
        num = "";
    })
    
    $('.sqrt').on( "click", function() {
        num = Math.sqrt(parseFloat(num, 10)).toString();
        display();
    })
    
    $('.equals').on( "click", function() {
        if (operator === "÷") {
            num = (parseFloat(newnum, 10) / parseFloat(num, 10)).toString(10);
        }
        else if (operator === "×") {
            num = (parseFloat(newnum, 10) * parseFloat(num, 10)).toString(10);
        }
        else if (operator === "−") {
            num = (parseFloat(newnum, 10) - parseFloat(num, 10)).toString(10);
        }
        else if (operator === "+") {
            num = (parseFloat(newnum, 10) + parseFloat(num, 10)).toString(10);
        }
        display();
        newnum = "";
    });
    
    $('.clear').on( "click", function() {
        num = "";
        newnum = "";
        $('.display-text').text(0);
    });
    
    $('.negative').on( "click", function() {
        num = (-(parseFloat(newnum, 10)).toString(10));
        display();
    });
    
    $('.percent').on("click", function() {
        num = num / 100;
        display();
    })

  
});