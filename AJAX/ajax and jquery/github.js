$userslist = $('.users');
$(function () {
    $('#submit').on("click", function (event) {
        event.preventDefault();
        var username = $('#search').val();
        var request = $.ajax({
            url: "https://api.github.com/search/users?q=" + username,
            method: "GET",

        });

        request.done(function (response) {
            $('.users').html(request.url);
            console.log(response);
//trebaju da se naprave elementi i da ih appenduje

            // $("#log").html(msg);
            response.items.forEach(element => {
                $slika = $("<img>");
                $slika.attr('src',element.avatar_url);
                $userslist.append($slika);
                $ime = $('<p>');
                $ime.text(element.login);
                $userslist.append($ime);


                
            });
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

    });
});