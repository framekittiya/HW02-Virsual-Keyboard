function main() {
    var shift = false;
    var caps = false;

    $("td").hover(function () {
        $(this).css('cursor','pointer');
    }, function() {
        $(this).css('cursor','auto');
    });

    $("td").click(function () {
        var input = $(this).text();
        if (input == "  Shift") {
            if (shift == true) {
                $(this).css('background-color', '#FFCCCC');
                shift = false;
            } else {
                $(this).css('background-color', '#ff9999');
                shift = true;
            }
        }
        else if (input == "  Delete") {
            var input = $(".display-screen").text();
            var lastChar = input.length - 1;
            $(".display-screen").text(input.substring(0, lastChar));
        }
        else if (input == "Caps") {
            if (caps == true) {
                $(this).css('background-color', '#FFCCCC');
                caps = false;
            } else {
                $(this).css('background-color', '#ff9999');
                caps = true;
            }
        }
        else {
            $("td.shift").css('background-color','#FFCCCC');

            if (shift == true || caps == true) {
                input = input.toUpperCase();
            } else {
                input = input.toLowerCase();
            }

            var output = $(".display-screen").text() + input;
            $(".display-screen").text(output);
            shift = false;
        }
    });
}

$(document).ready(function() {
    main();
});