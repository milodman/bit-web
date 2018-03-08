let a = new XMLHttpRequest();
a.open("GET", "http://freegeoip.net/xml/4.2.2.2");
a.send();
a.onload = function (){
    let a = xmlhttp.responseXML;
    console.log(a);

}