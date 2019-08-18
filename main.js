var counter = 0;

function changeCounter(value) {
    switch (value) {
        case "-":
            counter--;
            break;
        case "+":
            counter++;
            break;
        default:
            counter = value;
            $(`.button[value=${value}]`).attr("state", "pressed");
            setTimeout(function(){$(`.button[value=${value}]`).attr("state", "normal");}, 100);
            break;
    }
    $("#counter").text(counter);
}

$(".button").on("mousedown", function() {
    $(this).attr("state", "pressed");
    changeCounter($(this).attr("value"));
});

$(document).on("mouseup", function() {
    $(".button[state='pressed']").attr("state", "normal");
});

$(document).on("keypress", function(event) {
    if (/^\d+$/.test(event.key)) {
        changeCounter(event.key);
    }
});
