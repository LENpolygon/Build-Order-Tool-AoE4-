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
const loadLimit = 20;
const titleLength = 48;
const nameLength = 24;
var usp = new URLSearchParams(window.location.search);
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"; import firebaseConfig from '../json/fs.js'; const app = initializeApp(firebaseConfig);
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, query, deleteDoc, updateDoc, addDoc, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"; const db = getFirestore();
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"; const auth = getAuth();
if (isNaN(usp.get("c"))) {
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
    window.location.href = "view.html?c=EN&t=AwWwPhEGIJYE4GcAuACAbCg3gVgMwF8UkB7LAdm3zFDDUjADkBTAD1RwKNMwqpoA56AFQAWTAHYoATFjyEARgFcYAGwAmWfgBZCKLAE4yhAIbiNIGOKblgVAIzhBEKWFyzOS1Rsz7OpjQDGiuxo-FRSjq7OYFruCsrqBkYo-igWVlho+lS4kbgxYC6YdpxWbHFcmWGukVoFLgBCCd52drYoAO4wSCLSFQBmcMQgNjmR2AXAYACC-UhMcCi4wMCZ2SgIEhrGKioDQyOYWYQkVVTYkXYuU43NWHb8YZ3dvbEchIPDZ2BAA";
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
str += "<li class=\"mobile-only\"><p>Select Civilization:</p></li>";
for (let i = 0; i < civilizations.length; i++) {
    str += "<li";
    if (civilizations[i].abbr == selectedciv.abbr) {
        str += " class=\"active\"";
    }
    str += "><a href=\"build.html?c=" + civilizations[i].abbr + "\">✎ " + civilizations[i].civilization + "</a></li>";
}
str += "<li class=\"mobile-only\"><a class =\"gold\" href=\"index.html\">👁 Browse all Builds</a></li>";
str += "<li class=\"mobile-only\"><a href=\"#\" class=\"logged-in modal-trigger\" data-target=\"modal-account\">👤 Your Account</a></li>";
str += "<li class=\"mobile-only\"><a href=\"#\" class=\"logged-out modal-trigger\" data-target=\"modal-signup\">👤 Login / Signup</a></li>";
str += "<li class=\"mobile-only\"><a href=\"https://github.com/LENpolygon/Build-Order-Tool-AoE4-\">💻 View Github Page</a></li>";
str += "<li class=\"mobile-only\"><a href=\"https://ko-fi.com/lenpolygon\">💰 Support Website</a></li>";
str += "<li class=\"mobile-only\"><a style=\"color: aqua;\" id=\"copyForOverlayBtnMobile\">🗗 Build to Clipboard (text)</a></li>";
str += "<li class=\"mobile-only\"><a style=\"color: #c4c4c4;\" href=\"https://github.com/FluffyMaguro/AoE4_Overlay\">？ Learn about AoE4_Overlay</a></li>";
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
    //"\" style=\"background: radial-gradient(circle, rgba(60,68,66,0.8) 0%, ",
    "\" style=\"background: radial-gradient(circle, rgba(69,69,69,0.69) 0%, ",
    " 69%); ",
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
        tooltip += "</div></div><div class=\"tooltipColumn2\"><h3>" + reference.name + " (age: " + reference.age + "+)</h3></br></br>" + reference.description + "</div>";
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
// SANITIZE and CONVERT images to names for AoE4_Overlay
//////////////////////////////////////////////////
function sanitizeNconvertToName(input) {
    input = " " + input;
    var array = input.split("<");
    var output = array[0].substring(1);
    for (let i = 1; i < array.length; i++) {
        var array2 = array[i].split(">");
        if (/alt.+?".+?"/.test(array2[0])) {
            output += " " + array2[0].match(/alt.+?".+?"/)[0].split("\"")[1] + " ";
        }
        for (let j = 1; j < array2.length; j++) {
            output += array2[j];
        }
    }
    return output.replace(/&nbsp;/g, " ");
}

//////////////////////////////////////////////////
// COPY for AoE4_Overlay event 
// https://github.com/FluffyMaguro/AoE4_Overlay
//////////////////////////////////////////////////
function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}
function copyForOverlay() {
    var rows = document.getElementById("buildTable").rows;
    var str = "";
    var newline = "\r\n";
    for (let i = 1; i < rows.length; i++) {
        for (let j = 0; j < 6; j++) {
            if (j == 1) {
                str += "[";
            } else if (j == 5) {
                str += "] ";
            }
            if (rows[i].cells[j].innerHTML != "" && rows[i].cells[j].innerHTML != " ") {
                if (j == 0) {
                    str += "@" + sanitizeNconvertToName(rows[i].cells[j].innerHTML) + " ";
                } else {
                    str += sanitizeNconvertToName(rows[i].cells[j].innerHTML);
                }
            } else if (j > 0 && j < 5) {
                str += "0";
            }
            if (j > 0 && j < 4) {
                str += "/";
            }
        }
        str += newline;
    }
    //console.log(str);
    navigator.clipboard.writeText(htmlDecode(str)).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}
document.getElementById("copyForOverlayBtn").addEventListener("click", copyForOverlay);
document.getElementById("copyForOverlayBtnMobile").addEventListener("click", copyForOverlay);

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
        //str += "<h1>" + header + "</h1>";
        for (var genre in headerData[header]) {
            for (let age = 0; age < 4; age++) {
                for (let i = 0; i < headerData[header][genre][age].length; i++) {
                    str += formatImage(data[headerData[header][genre][age][i]], headerData[header][genre][age][i], true);
                }
            }
        }
        str += "";
    }
    document.getElementById("buildIcons").innerHTML = str;

    ///////////////////////////////////////////////////
    // SHOW tooltips
    ///////////////////////////////////////////////////
    let tooltipContainer = document.getElementById('tooltipContainer');
    const tooltipBox = document.getElementById('tooltipBox');
    document.addEventListener('mousemove', function checkHover(e) {
        tooltipContainer.style.left = getWidth() > e.pageX + 330 ? e.pageX + 4 + 'px' : e.pageX - 333 + 'px';
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
// GET Personal builds from Firestore
//////////////////////////////////////////////////
async function GetYourBuilds(uid) {
    var q = query(collection(db, "Age4Builds"), where("uid", "==", uid), orderBy("timestamp", "desc"), limit(loadLimit));
    const querySnapshot = await getDocs(q);
    var html = "";
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        var docId = doc.id;
        var docData = doc.data();
        html += `<tr><td><a href="#" class="delete-builds" bid="${docId}" style="color: red" onmouseover="this.style['text-decoration']='underline';" onmouseout="this.style['text-decoration']='none';">Delete Build?</a></td>`;
        html += "<td><img src=\"img/flag" + docData.civ + ".png\" height=\"24\" onerror=\"this.src = 'assets/placeholder.png';\"><a href=\"view.html?f=" + docId + "\"></img> " + escapeHtml(docData.title).substring(0, titleLength) + " (by " + escapeHtml(docData.user).substring(0, nameLength) + ")</a></td></tr>";
    });
    document.querySelector('#yourBuilds').innerHTML = `
    <table id="yourTable" style="border: 1px solid">
        <thead style="border: 1px solid">
            <tr>
                <th class="buildTime">Action:</th>
                <th>View <span class="gold">Your</span> Builds:</th>
            </tr>
        </thead>
        <tbody style="border: 1px solid">
        ${html}
        </tbody>
    </table>
    <p style="color: red">Deleting builds cannot be undone!! (you might need to manually refresh the page)</p>
    `
    const deleteYourDocs = document.querySelectorAll('.delete-builds');
    deleteYourDocs.forEach(link => {
        link.addEventListener('click', (e) => {
            //console.log(link.getAttribute('bid'));
            deleteDoc(doc(db, "Age4Builds", link.getAttribute('bid')));
        })
    });
}

//////////////////////////////////////////////////
// RANDOMIZE background
//////////////////////////////////////////////////
//const backgroundOptions = ["02celebration", "03focuslongbowmen", "04lordrobertsb", "07raisedstakestwoknights", "10mongoltrebuchet", "11chinesetradecaravans", "12mongolscharging", "15paytributeb", "alarm"];
//document.getElementById("background").style.backgroundImage = "url(img/" + backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)] + ".png)";

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    // sign up the user
    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        return setDoc(doc(db, "users", cred.user.uid), { user: signupForm['username'].value });
    }).then(() => {
        // console.log(cred.user);
        // close the signup modal & reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector('#modal-account');
    M.Modal.getInstance(modal).close();
    auth.signOut();
})

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    signInWithEmailAndPassword(auth, email, password).then(cred => {
        // console.log(cred.user);
        // close the login modal & reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})

// listen for auth status changes
auth.onAuthStateChanged(user => {
    //console.log(user);
    if (user) {
        setupUI(user);
    } else {
        setupUI();
    }

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
            var payLoad = {
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
                dislikers: [],
                likes: parseInt(document.getElementById("scoreU").value),
                option: document.getElementById("optionsU").value,
                score: 30
            };
            if (user) {
                const docSnap2 = await getDoc(doc(db, "users", user.uid));
                payLoad.uid = user.uid;
                if (docSnap2.exists()) {
                    payLoad.user = docSnap2.data().user;
                }
            };
            //console.log(payLoad);
            await addDoc(ref, payLoad)
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
})

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const setupUI = (user) => {
    if (user) {
        accountDetails.innerHTML = `<div>Logged in as ${user.email}</div>`;
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        GetYourBuilds(user.uid);
    } else {
        // hide account info
        accountDetails.innerHTML = '';
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}
// setup materialize components
document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});