"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pseudoroku_1 = require("pseudoroku");
function genDate(date) {
    new pseudoroku_1.PseudoRoku({
        input: "./" + date + ".txt",
        output: "docs/" + date + ".html",
        template: "./" + date + "-template.html",
        profile_lookup: './profile_lookup.tsv',
        getIconPathFromCensoredName: function (name) { return "icons/" + name + ".webp"; },
        getMediaPath: function (media) { return "media/" + media; },
    }).doEverything();
}
genDate("2022-09-16");
