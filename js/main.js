$(document).ready(function() {
    function lenCheck(num) {
        if (num.length > 9) {
            $('.display-text').text(num.substr(num.length-9,9));
            if (num.length > 15) {
                num = "";
                $('.display-text').text("Err");
            }
        } 
    };
    
    var num = "",
        newnum = "",
        operator = "";

    $('.display-text').text(0);

    $('.number').on( "click", function() {
        num += $(this).text();
        $('.display-text').text(num);
        lenCheck(num);
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
        $('.display-text').text(num);
        lenCheck(num);
    });
    
    $('.operator').on( "click", function() {
        operator = $(this).text();
        newnum = num;
        num = "";
    })
    
    $('.sqrt').on( "click", function() {
        num = Math.sqrt(parseFloat(num, 10)).toString();
        $('.display-text').text(num);
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
        $('.display-text').text(num);
        lenCheck(num);
        newnum = "";
    });
    
    $('.clear').on( "click", function() {
        num = "";
        newnum = "";
        $('.display-text').text(0);
    });
    
    $('.negative').on( "click", function() {
        num = (-(parseFloat(newnum, 10)).toString(10));
        $('.display-text').text(num);
    });
    
    $('.percent').on("click", function() {
        num = num / 100;
        $('.display-text').text(num);
    })

  
});