$(function () {
    $(".newBurgerForm").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/add", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".devourBtn").on("click", function (event) {
        event.preventDefault();
        var updateBurger = {
            id: this.id
        }
        $.ajax("api/update", {
            type: "PUT",
            data: updateBurger
        }).then(function () {
            location.reload();
        })

    });
});