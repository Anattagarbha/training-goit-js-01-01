/* возращает новую строку, в которой первое или все 
совпадения (replaceAll) заменяются указанным значением */

"use strict";

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // script.min.js

// replaceAll

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCSSFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCSSFileNames); // styles.min.css, about.min.css, portfolio.min.css
