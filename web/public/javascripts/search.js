$("#search").on("keyup", () => {
    var searchValue = $("#search").val().toLowerCase();
    $(".card .card-body .card-title").each(function () {
        var title = $(this);
        if (title.text().toLowerCase().includes(searchValue)) {
            $(this).parent().parent().show();
        } else {
            $(this).parent().parent().hide();
        }
    });
});

$("#search-docs").on("keyup", () => {
    var searchValue = $("#search-docs").val().toLowerCase();
    $(".search-docs").each(function () {
        var title = $(this).children();
        if (title.text().toLowerCase().includes(searchValue)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

//refractor both searches