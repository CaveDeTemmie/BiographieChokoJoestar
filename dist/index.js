"use strict";
function buttonClick() {
    function genNumber() {
        return Math.floor(1000 + Math.random() * 599500);
    }
    var hentai = "https://3hentai.net/d";
    var link = "".concat(hentai, "/").concat(genNumber);
    var doc = document.getElementById("hentai");
    doc.innerHTML = "<a href=".concat(link, " style=\"color: white\">Il a un petit secret</a>");
}
//# sourceMappingURL=index.js.map