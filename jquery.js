$(function () {
    var string = "";
    $('button').on("click", function () {
        if ($(this).text() == '=') {
            string = eval(string);
            $('input').val(string);
        }
        else if ($(this).text() == 'C') {
            string = "";
            $('input').val(string);
        }
        else {
            string += $(this).text();
            $('input').val(string);
        }
    });
});