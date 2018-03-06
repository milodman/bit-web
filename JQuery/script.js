$(function () {
    var wrap = $(".wrap");

    var links = ["http://via.placeholder.com/350x150",
        "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150"
    ];

    // links.forEach(function(e){
    //   wrap.append($("<img>").attr("src", e));
    // });
    var h = $("<h1>Amazing gallllery</h1>").css("text-align", "center");

    wrap.before(h);

   var stop = true;
    links.forEach(function (src) {
        var img = $("<img>").attr("src", src);
        // var randomizedColorSrc = src + "/adasd/adssda";
        var random = Math.floor(Math.random() * 500) + 10 + "px";
        // var color = ["blue", "green", "violet", "red", "black"];
        // var randomColor = Math.floor((Math.random() * 5) + 1);

        img.css("width", random);
       console.log(img);
        if (img.width() < 200 && stop) {
            img.css("border", "2px solid green");
            // } else{
                //     return;
                stop = false
            }

        wrap.append(img);

    });






});