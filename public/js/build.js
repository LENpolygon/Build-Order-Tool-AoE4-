import escapeHtml from './global.js';
import civilizations from '../json/civilizations.js';

//////////////////////////////////////////////////
// DEFINE menu structure
//////////////////////////////////////////////////
import headerData from '../json/headerData.js';
for (var header in headerData) {
    for (var genre in headerData[header]) {
        headerData[header][genre] = [[], [], [], []]; // add ages
    }
}

//////////////////////////////////////////////////
// READ URLSearchParams data
//////////////////////////////////////////////////
var selectedciv = null;
var buildorder = null;
var buildordercolumns = 2;
var usp = new URLSearchParams(window.location.search);
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"; import firebaseConfig from '../json/fs.js'; const app = initializeApp(firebaseConfig); import { getFirestore, doc, getDoc, setDoc, collection, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"; const db = getFirestore();
if (isNaN(usp.get("f"))) { // Update View counter
    var ref = doc(db, "Age4Builds", usp.get("f"));
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        var docData = docSnap.data();
        await updateDoc(
            ref, {
            views: docData.views + 1
        }).then(() => {
            //alert("data updated successfully");
            
        }).catch((error) => {
            console.log("Unsuccesful operation, error: " + error);
        });
        window.location.replace("build.html?c=" + docData.civ + "&" + docData.version + "=" + docData.build);
    }
    else {
        alert("No such Document");
    }

} else if (isNaN(usp.get("c"))) {
    for (let i = 0; i < civilizations.length; i++) {
        if (usp.get("c") == civilizations[i].abbr) {
            selectedciv = civilizations[i];
            break;
        }
    }
}
if (isNaN(usp.get("t"))) { // 6 column builds
    buildorder = LZString.decompressFromEncodedURIComponent(usp.get("t"));
    buildordercolumns = 6;
}
else if (isNaN(usp.get("s"))) { // 2 column builds (old)
    buildorder = LZString.decompressFromEncodedURIComponent(usp.get("s"));
}
else if (isNaN(usp.get("b"))) { // uncompressed 2 column builds (very old)
    buildorder = usp.get("b");
}
if (!selectedciv && !isNaN(usp.get("f"))) {
    window.location.href = "build.html?c=EN&t=AwWwPhEGIJYE4GcAuACAbCg3gVgMwF8UkB7LAdm3zFDDUjADkBTAD1RwKNMwqpoA56AFQAWTAHYoATFjyEARgFcYAGwAmWfgBZCKLAE4yhAIbiNIGOKblgVAIzhBEKWFyzOS1Rsz7OpjQDGiuxo-FRSjq7OYFruCsrqBkYo-igWVlho+lS4kbgxYC6YdpxWbHFcmWGukVoFLgBCCd52drYoAO4wSCLSFQBmcMQgNjmR2AXAYACC-UhMcCi4wMCZ2SgIEhrGKioDQyOYWYQkVVTYkXYuU43NWHb8YZ3dvbEchIPDZ2BAA";
}

//////////////////////////////////////////////////
// INITIALIZE
//////////////////////////////////////////////////
var buildingTimeModifier = selectedciv.abbr == "CH" ? 0.5 : 1;
const upgradeDSTimeModifier = [3, 3.5, 5, 15];
var str = "";
var index; // of table
var tooltipindex = -1;

//////////////////////////////////////////////////
// WRITE civilizations menu
//////////////////////////////////////////////////
for (let i = 0; i < civilizations.length; i++) {
    str += "<li";
    if (civilizations[i].abbr == selectedciv.abbr) {
        str += " class=\"active\"";
    }
    str += "><a href=\"build.html?c=" + civilizations[i].abbr + "\">" + civilizations[i].civilization + "</a></li>";
}
if (selectedciv) {
    str += "<li><a href=\"index.html?c=" + selectedciv.abbr + "\">[BACK TO BUILDS LIST]</a></li>";
} else {
    str += "<li><a href=\"index.html\">[BACK TO BUILDS LIST]</a></li>";
}
document.getElementById("civilizationsMenu").innerHTML = str;

//////////////////////////////////////////////////
// SELECT row
//////////////////////////////////////////////////
function getSelectedRow() {
    var table = document.getElementById("buildTable");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            if (typeof index !== "undefined") {
                table.rows[index].classList.toggle("selected");
            }
            index = this.rowIndex;
            this.classList.toggle("selected");
        };
    }
}

//////////////////////////////////////////////////
// GET page width
//////////////////////////////////////////////////
function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

//////////////////////////////////////////////////
// MANIPULATE table
//////////////////////////////////////////////////
function upNdown(direction) {
    var rows = document.getElementById("buildTable").rows;
    var parent = rows[index].parentNode;
    if (direction === "up") {
        if (index > 1) {
            parent.insertBefore(rows[index], rows[index - 1]);
            index--;
        }
    }
    if (direction === "down") {
        if (index < rows.length - 1) {
            parent.insertBefore(rows[index + 1], rows[index]);
            index++;
        }
    }
    parent.focus();
}
function up() { upNdown('up'); }
function down() { upNdown('down'); }
function createRow() {
    if (typeof index !== "undefined") {
        var row = document.getElementById("buildTable").insertRow(index + 1);
        var str = "";
        for (let i = 0; i < 6; i++) {
            str += "<td contenteditable=\"true\"";
            if (i == 5) {
                str += " style=\"text-align: left;\"";
            }
            str += "></td>";
        }
        row.innerHTML = str;
        getSelectedRow();
    }
    row.focus();
}
function deleteRow() {
    if (typeof index !== "undefined") {
        document.getElementById("buildTable").deleteRow(index);
        getSelectedRow();
        index = undefined;
    }
}
function clearTable() {
    var rows = document.getElementById("buildTable").rows;
    for (let i = 0; i < (rows.length - 1); i++) {
        var str = "";
        for (let i = 0; i < 6; i++) {
            str += "<td contenteditable=\"true\"";
            if (i == 5) {
                str += " style=\"text-align: left;\"";
            }
            str += "></td>";
        }
        rows[i + 1].innerHTML = str;
    }
}
document.getElementById("upNdownup").addEventListener("click", up);
document.getElementById("upNdowndown").addEventListener("click", down);
document.getElementById("createRowBtn").addEventListener("click", createRow);
document.getElementById("deleteRowBtn").addEventListener("click", deleteRow);
document.getElementById("clearTableBtn").addEventListener("click", clearTable);

//////////////////////////////////////////////////
// CONVERT seconds to time
//////////////////////////////////////////////////
function sToTime(input) {
    var output = "";
    if (input >= 60) {
        output += Math.floor(input / 60) + "m ";
    }
    output += Math.round(input % 60) + "s"
    return output;
}

//////////////////////////////////////////////////
// FORMAT and PRINT image
//////////////////////////////////////////////////
const imgstr = ["<a class=\"tooltip\">",
    "<img src=\"img/",
    ".png\" onerror=\"this.src = 'assets/placeholder.png';\"",
    "class=\"icon\" data-index=\"",
    "\" data-info=\"",
    "\" alt=\"",
    "\" style=\"background: radial-gradient(circle, rgba(60,68,66,0.8) 0%, ",
    " 80%); ",
    "\"\></a>"];
const tableitems = [["food", "resourcefoodicon"], ["wood", "resourcewoodicon"], ["gold", "resourcegoldicon"], ["stone", "resourcestoneicon"], ["time", "timetobuild"], ["pop", "house"]];
function formatImage(reference, value, showTooltip) {
    var tooltip = "";
    if (showTooltip) {
        tooltip = "<div class=\"tooltipColumn1\">";
        tooltip += imgstr[1] + reference[selectedciv.abbr] + imgstr[2] + "></img><br/><div class=\"smallIcons\">";
        for (let h = 0; h < tableitems.length; h++) {
            if (reference[tableitems[h][0]]) {
                if (selectedciv.abbr == "CH" && (reference.genre == "Building" || reference.genre == "Landmark") && tableitems[h][0] == "time") { // Chinese building modifier
                    tooltip += imgstr[1] + tableitems[h][1] + imgstr[2] + ">" + sToTime(reference[tableitems[h][0]] * buildingTimeModifier) + "<br/>";
                }
                else if (selectedciv.abbr == "DS" && (reference.genre == "Technology" || reference.genre == "Upgrade" || reference.genre == "Blacksmith")) { // Dehli upgrade modifier
                    if (tableitems[h][0] == "time") {
                        tooltip += imgstr[1] + tableitems[h][1] + imgstr[2] + ">" + sToTime(reference[tableitems[h][0]] * upgradeDSTimeModifier[reference.age - 1]) + "<br/>";
                    }
                }
                else {
                    tooltip += imgstr[1] + tableitems[h][1] + imgstr[2] + ">" + (tableitems[h][0] == "time" ? sToTime(reference[tableitems[h][0]]) : reference[tableitems[h][0]]) + "<br/>";
                }
            }
        }
        tooltip += "</div></div><div class=\"tooltipColumn2\"><header>" + reference.name + " (age: " + reference.age + "+)</header></br></br>" + reference.description + "</div>";
    }
    return reference.color == "transparent"
        ? (imgstr[0] + imgstr[1] + reference[selectedciv.abbr] + imgstr[2] + imgstr[3] + value + imgstr[4] + LZString.compressToEncodedURIComponent(tooltip) + imgstr[5] + reference.name + imgstr[8])
        : (imgstr[0] + imgstr[1] + reference[selectedciv.abbr] + imgstr[2] + imgstr[3] + value + imgstr[4] + LZString.compressToEncodedURIComponent(tooltip) + imgstr[5] + reference.name + imgstr[6] + reference.color + imgstr[7] + imgstr[8]);
}

//////////////////////////////////////////////////
// SANITIZE and CONVERT images to values
//////////////////////////////////////////////////
function sanitizeNconvert(input) {
    input = " " + input;
    var array = input.split("<");
    var output = array[0].substring(1);
    for (let i = 1; i < array.length; i++) {
        var array2 = array[i].split(">");
        if (/data-index+\S+/.test(array2[0])) {
            output += "{" + array2[0].match(/data-index+\S+/)[0].split("\"")[1] + "}";
        }
        for (let j = 1; j < array2.length; j++) {
            output += array2[j];
        }
    }
    return output.replace(/&nbsp;/g, " ");
}

//////////////////////////////////////////////////
// CONVERT value back to image
//////////////////////////////////////////////////
function convertBack(input, data) {
    input = " " + input;
    var array = input.split("{");
    var output = array[0].substring(1);
    for (let k = 1; k < array.length; k++) {
        var array2 = array[k].split("}");
        if (Number.isInteger(parseInt(array2[0]))) {
            const i = parseInt(array2[0]);
            output += formatImage(data[i], i, true);
        }
        for (let j = 1; j < array2.length; j++) {
            output += array2[j];
        }
    }
    return output;
}

//////////////////////////////////////////////////
// SAVE event
//////////////////////////////////////////////////
function saveToURL() {
    var rows = document.getElementById("buildTable").rows;
    var str = "";
    var ver = "t";
    for (let i = 1; i < rows.length; i++) {
        for (let j = 0; j < 6; j++) {
            str += sanitizeNconvert(rows[i].cells[j].innerHTML);
            str += "|";
        }
    }
    var build = LZString.compressToEncodedURIComponent(str);
    window.history.replaceState("Home", "AGE OF EMPIRES 4 - BUILD ORDER TOOL", 'build.html?c=' + selectedciv.abbr + "&" + ver + "=" + build);
    navigator.clipboard.writeText(window.location.href).then(function () {
        //console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
    return [selectedciv.abbr, ver, build];
}
document.getElementById("saveToURLBtn").addEventListener("click", saveToURL);

//////////////////////////////////////////////////
// UPLOAD new Build to Firestore
//////////////////////////////////////////////////
async function AddDocument_CustomID() {
    var titleText;
    var titleEntry;
    var attemptcounter = 0;
    while ((titleEntry == null || titleEntry == "") && attemptcounter < 3) {
        titleEntry = prompt("Please enter build title:", "");
        attemptcounter++;
    }
    if ((titleEntry == null || titleEntry == "")) {

    }
    else {
        titleText = titleEntry.replace(/&nbsp;/g, " ");
        var save = saveToURL();
        var ref = collection(db, "Age4Builds");
        await addDoc( // instead setDoc for customID
            ref, {
            user: "Anonymous",
            id: "",
            rank: "",
            timestamp: Date.now(),
            views: 0,
            title: titleText,
            description: "",
            civ: save[0],
            maps: [],
            build: save[2],
            video: "",
            version: save[1],
            patch: "14681",
            likers: [],
            likes: parseInt(document.getElementById("scoreU").value),
            option: document.getElementById("optionsU").value
        }
        )
            .then(() => {
                //alert("data added successfully");
                window.location.href = "index.html?c=" + save[0];
            })
            .catch((error) => {
                alert("Unsuccesful operation, error: " + error);
            });
    }
}
document.getElementById("AddDocument_CustomIDBtn").addEventListener("click", AddDocument_CustomID);

//////////////////////////////////////////////////
// READ json/icons.json data
//////////////////////////////////////////////////
async function loadiconsJSON() {
    const response = await fetch("json/icons.json");
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        var matching = true;
        if (data[i][selectedciv.abbr]) {
            for (var header in headerData) {
                for (var genre in headerData[header]) {
                    if (data[i].genre == genre) {
                        headerData[header][genre][data[i].age - 1].push(i);
                        matching = false;
                        break;
                    }
                }
                if (!matching) break;
            }
            if (matching) {
                headerData["Miscellaneous"]["Misc"][data[i].age - 1].push(i);
            }
        }
    }

    //////////////////////////////////////////////////
    // WRITE current civ
    //////////////////////////////////////////////////
    document.getElementById("civilizationFocus").innerHTML = selectedciv.focus;
    document.getElementById("civilizationFlag").innerHTML = "<img src=\"img/flag" + selectedciv.abbr + ".png\" onerror=\"this.src = 'assets/placeholder.png';\"></img>";
    var str = selectedciv.civilization + " ";
    for (let i = 0; i < 3; i++) {
        if (selectedciv.difficulty == i) {
            str += "<span style=\"color: #11141D\">";
        }
        str += "★";
    }
    str += "</span>";
    document.getElementById("civilizationName").innerHTML = str;
    str = "";
    selectedciv.uniqueunits.forEach(element => {
        str += formatImage(data[element], element, true);
    });
    document.getElementById("civilizationUniqueUnits").innerHTML = str;

    //////////////////////////////////////////////////
    // LOAD event
    //////////////////////////////////////////////////
    var buildarray;
    if (buildorder) {
        buildarray = sanitizeNconvert(buildorder).split("|");
    }
    else {
        let vilval = selectedciv.abbr == "FR" ? 54 : 53;
        let str = `0|Click to start editing your own build|1|Icons can be dragged from the menu on the right: {${vilval}} |2|When ready press \"Save to URL\" and share your build!|`;
        window.history.replaceState("Home", "AGE OF EMPIRES 4 - BUILD ORDER TOOL", 'build.html?c=' + selectedciv.abbr + "&b=" + str);
        buildarray = sanitizeNconvert(str).split("|");
    }
    var rows = document.getElementById("buildTable").rows;
    for (let i = buildarray.length / buildordercolumns - (rows.length - 1); i > 1; i--) {
        document.getElementById("buildTable").insertRow(2);
    }
    var rows = document.getElementById("buildTable").rows;
    for (let i = 0; i < (rows.length - 1); i++) {
        var rowstring = "";
        for (let j = 0; j < buildordercolumns; j++) {
            rowstring += "<td contenteditable=\"true\"";
            if (j == buildordercolumns - 1) {
                rowstring += " style=\"text-align: left;\"";
            }
            rowstring += ">" + convertBack(buildarray[(i * buildordercolumns) + j], data) + "</td>";
            if (j == 0 && buildordercolumns == 2) {
                for (let k = 0; k < (6 - buildordercolumns); k++) {
                    rowstring += "<td contenteditable=\"true\"></td>"
                }
            }
        }
        rows[i + 1].innerHTML = rowstring;
        //console.log(rowstring);
    }

    //////////////////////////////////////////////////
    // WRITE icons menu
    //////////////////////////////////////////////////
    var str = "";
    for (var header in headerData) {
        str += "<section><header class=\"fold\">" + header + "</header><article class=\"boxed\">";
        for (var genre in headerData[header]) {
            for (let age = 0; age < 4; age++) {
                for (let i = 0; i < headerData[header][genre][age].length; i++) {
                    str += formatImage(data[headerData[header][genre][age][i]], headerData[header][genre][age][i], true);
                }
            }
        }
        str += "</article></section>";
    }
    document.getElementById("buildIcons").innerHTML = str;

    //////////////////////////////////////////////////
    // COLLAPSE
    //////////////////////////////////////////////////
    var coll = document.getElementsByClassName("fold");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("unfold");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
    coll[0].click();
    //coll[1].click();

    ///////////////////////////////////////////////////
    // SHOW tooltips
    ///////////////////////////////////////////////////
    let tooltipContainer = document.getElementById('tooltipContainer');
    const tooltipBox = document.getElementById('tooltipBox');
    document.addEventListener('mousemove', function checkHover(e) {
        tooltipContainer.style.left = getWidth() > e.pageX + 400 ? e.pageX + 4 + 'px' : e.pageX - 404 + 'px';
        tooltipContainer.style.top = e.pageY + 2 + 'px';
        const allTooltips = document.getElementsByClassName('tooltip');
        if (tooltipindex < 0 || !allTooltips.item(tooltipindex).querySelector(':hover')) {
            for (var i = 0; i < allTooltips.length; i++) {
                if (allTooltips.item(i).querySelector(':hover')) {
                    tooltipBox.innerHTML = LZString.decompressFromEncodedURIComponent(allTooltips.item(i).firstChild.getAttribute('data-info'));
                    tooltipBox.style.display = "block";
                    tooltipindex = i;
                    return;
                }
            }
            tooltipBox.innerHTML = "";
            tooltipBox.style.display = "none";
            tooltipindex = -1;
        }

    });

    getSelectedRow();
} //////////////////////////////////////////////////
loadiconsJSON();
document.getElementById('tooltipBox').style.display = "none";

//////////////////////////////////////////////////
// RANDOMIZE background
//////////////////////////////////////////////////
const backgroundOptions = ["02celebration", "03focuslongbowmen", "04lordrobertsb", "07raisedstakestwoknights", "10mongoltrebuchet", "11chinesetradecaravans", "12mongolscharging", "15paytributeb", "alarm"];
document.getElementById("background").style.backgroundImage = "url(img/" + backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)] + ".png)";