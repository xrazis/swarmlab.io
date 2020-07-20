$("#search").on("keyup", () => {
    var searchValue = $("#search").val().toLowerCase();
    $(".card .card-body .card-title").each(function () { // es6 arrow function wont work with 'this'
        var title = $(this);
        if (title.text().toLowerCase().includes(searchValue)) {
            $(this).parent().parent().show();
        } else {
            $(this).parent().parent().hide();
        }
    });
});