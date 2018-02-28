// // var list = document.querySelectorAll('ul');

// // list[1].className = "colorSecond";

// // var list = document.querySelectorAll('ul');
// // var x = list[1].childNodes[1];
// // x.className = "";

// // // console.log(x);

// // var firstList = list[0].childNodes[1];
// // firstList.className = "active";

// var img = document.querySelector('img.selected');
// img.className = "";
// // console.log(img);
// // img[0].className = "";
// // img[5].className = "selected";
// var par = img.parentElement;
// // console.log(par);
// var parnext = par.nextElementSibling;
// // console.log(parnext);
// var deca = parnext.children;
// deca[1].className = "selected"

// (function aaaa() {
//     // var txt = document.querySelector('ul li').textContent;

//     // var last = document.querySelector("ul li:nth-child(3)").textContent = txt;


//     // //  alert(txt);
// })();


function creation(arr, parent) {
    var select = document.createElement("select");

    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        option.value = arr[i];
        var text = document.createTextNode(arr[i]);
        option.appendChild(text);
        select.appendChild(option);
    }

    parent.appendChild(select);
}


var fristDiv = document.querySelector("div");
var secDiv = document.querySelector("div").nextElementSibling;

creation(["volvo","saab","opel","audi"], fristDiv);
creation(["pizza","gulash", "meat pie"],secDiv)