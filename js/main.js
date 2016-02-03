$(document).ready(function() {
    var cal = "",
        temp = "";

    $('.display-text').text(0);

    $('.one').on( "click", function() {
        temp += "1"
        $('.display-text').text(temp);
    });
    
    $('.two').on( "click", function() {
        temp += "2";
        $('.display-text').text(temp);
    });
    
    $('.three').on( "click", function() {
        temp += "3";
        $('.display-text').text(temp);
    });

    $('.four').on( "click", function() {
        temp += "4";
        $('.display-text').text(temp);
    });

    $('.five').on( "click", function() {
        temp += "5";
        $('.display-text').text(temp);
    });
    
    $('.six').on( "click", function() {
        temp += "6";
        $('.display-text').text(temp);
    });

    $('.seven').on( "click", function() {
        temp += "7"
        $('.display-text').text(temp);
    });

    $('.eight').on( "click", function() {
        temp += "8"
        $('.display-text').text(temp);
    });
    
    $('.nine').on( "click", function() {
        temp += "9"
        $('.display-text').text(temp);
    });
    
    $('.zero').on( "click", function() {
        temp += "0"
        $('.display-text').text(temp);
    });
    
    $('.dot').on( "click", function() {
        if (temp.indexOf('.')) {
            temp += "."
            $('.display-text').text(temp);
        }
    });

    $('.divide').on( "click", function() {
        cal += temp;
        cal += "/";
        temp = "";
    });

    $('.multiply').on( "click", function() {
        cal += temp;
        cal += "*";
        temp = "";
    });

    $('.minus').on( "click", function() {
        cal += temp;
        cal += "-";
        temp = "";
    });

    $('.plus').on( "click", function() {
        cal += temp;
        cal += "+";
        temp = "";
    });
    
    $('.equals').on( "click", function() {
        cal += temp;
        $('.display-text').text(eval(cal));
        cal = (eval(cal));
        temp = "";
    });
    
    $('.clear').on( "click", function() {
        cal = "";
        temp = "";
        $('.display-text').text(0);
    });
    
    $('.negative').on( "click", function() {
        cal = -cal;
        temp = -temp;
        $('.display-text').text(temp);
    });
    
    $('.percent').on("click", function() {
        cal = cal/100;
        temp = temp/100;
        $('.display-text').text(temp);
    })

  
});