//////////////////////////////////////////////////
// DEFINE civilizations
//////////////////////////////////////////////////
const civilizations = [
    {
        "civilization": "Abbasid Dynasty",
        "abbr": "AD",
        "focus": "Technology, Camels and City Planning",
        "difficulty": 2,
        "icon": "flagAD.png",
        "uniqueunits": [306, 176]
    },
    {
        "civilization": "Chinese",
        "abbr": "CH",
        "focus": "Dynasties, Gunpowder and Expansion",
        "difficulty": 3,
        "icon": "flagCH.png",
        "uniqueunits": [310, 307, 52, 287, 175, 437, 261]
    },
    {
        "civilization": "Delhi Sultanate",
        "abbr": "DS",
        "focus": "Military, Research and Defense",
        "difficulty": 3,
        "icon": "flagDS.png",
        "uniqueunits": [59, 136, 311, 300]
    },
    {
        "civilization": "French",
        "abbr": "FR",
        "focus": "Trade, Cavalry and Keeps",
        "difficulty": 1,
        "uniqueunits": [181, 301, 410, 432]
    },
    {
        "civilization": "English",
        "abbr": "EN",
        "focus": "Defense, Longbows and Economy",
        "difficulty": 1,
        "uniqueunits": [174]
    },
    {
        "civilization": "Holy Roman Empire",
        "abbr": "HR",
        "focus": "Infantry, Religion and Defense",
        "difficulty": 2,
        "uniqueunits": [58, 305]
    },
    {
        "civilization": "Mongols",
        "abbr": "MO",
        "focus": "Aggression, Nomadic and Mobility",
        "difficulty": 3,
        "uniqueunits": [60, 177, 292, 262]
    },
    {
        "civilization": "Rus",
        "abbr": "RU",
        "focus": "Expansion, Cavalry and Hunting",
        "difficulty": 2,
        "uniqueunits": [440, 304, 295, 138, 255, 252, 263, 415]
    }
    ];
    
    //////////////////////////////////////////////////
    // DEFINE menu structure
    //////////////////////////////////////////////////
    var headerData =
    {
    "Units": {
        "Land Unit": [],
        "Water Unit": []
    },
    "Buildings": {
        "Structure": [],
        "Landmark": []
    },
    "Technologies": {
        "Economic": [],
        "Blacksmith": [],
        "Upgrade": [],
        "Technology": [],
        "Empl": []
    },
    "Miscellaneous": {
        "Resource": [],
        "Age": [],
        "Ability": [],
        "Dynasty": [],
        "Flag": [],
        "Formation": [],
        "Influence": [],
        "Move": [],
        "Victory": [],
        "Misc": []
    }
    };
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
    var usp = new URLSearchParams(window.location.search);
    if (isNaN(usp.get("c"))) {
    for (let i = 0; i < civilizations.length; i++) {
        if (usp.get("c") == civilizations[i].abbr) {
        selectedciv = civilizations[i];
        break;
        }
    }
    }
    if (isNaN(usp.get("s"))) {
    buildorder = LZString.decompressFromEncodedURIComponent(usp.get("s"));
    }
    else if (isNaN(usp.get("b"))) {
    buildorder = usp.get("b");
    }
    if (!selectedciv) {
    window.location.href = "index.html?c=EN&s=AwLmwHwMQSwJwM4BcAEA2FBvArAZgL4pID2WA7NvhKOBAHICmAHqjgUaZhVaAEyQAVABYMAdil5Y8hAEYBXGABsAJlgAcAFkIosATjKEAhqNUBbGKIblgVAIxhIuKe3lLVmXe2OqAxnNZoalS8DhAazrIKKnoGKN4o5pZYaLpUuCD8EJi27JYsERzJQRDpuJAAQlHutrY2KADuMEhCEgUAZnDEptZpIBqQAIJtSAxwKGXAyakoCGKqhoqK7Z3dmCmEJEVU2KGVbli2akENTS3hbIQdXVsQQA";
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
    str += "><a href=\"index.html?c=" + civilizations[i].abbr + "\">" + civilizations[i].civilization + "</a></li>";
    }
    str+="<li><div id=\"favorite_build_button_container\"></div></li>"
    
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
    function createRow() {
    if (typeof index !== "undefined") {
        var row = document.getElementById("buildTable").insertRow(index + 1);
        row.innerHTML = "<td contenteditable=\"true\">0:00</td><td contenteditable=\"true\"></td>";
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
    function clearRow() {
    var rows = document.getElementById("buildTable").rows;
    for (let i = 0; i < (rows.length - 1); i++) {
        rows[i + 1].innerHTML = "<td contenteditable=\"true\"></td><td contenteditable=\"true\"></td>";
    }
    }
    
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
    const imgstr = ["<a class=\"tooltip\"><img src=\"img/",
    ".png\" class=\"icon\" data-index=\"",
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
        tooltip += "<img src=\"img/" + reference[selectedciv.abbr] + ".png\"></img><br/><div class=\"smallIcons\">";
        for (let h = 0; h < tableitems.length; h++) {
        if (reference[tableitems[h][0]]) {
            if (selectedciv.abbr == "CH" && (reference.genre == "Building" || reference.genre == "Landmark") && tableitems[h][0] == "time") { // Chinese building modifier
            tooltip += "<img src=\"img/" + tableitems[h][1] + ".png\">" + sToTime(reference[tableitems[h][0]] * buildingTimeModifier) + "<br/>";
            }
            else if (selectedciv.abbr == "DS" && (reference.genre == "Technology" || reference.genre == "Upgrade" || reference.genre == "Blacksmith")) { // Dehli upgrade modifier
            if (tableitems[h][0] == "time") {
                tooltip += "<img src=\"img/" + tableitems[h][1] + ".png\">" + sToTime(reference[tableitems[h][0]] * upgradeDSTimeModifier[reference.age - 1]) + "<br/>";
            }
            }
            else {
            tooltip += "<img src=\"img/" + tableitems[h][1] + ".png\">" + (tableitems[h][0] == "time" ? sToTime(reference[tableitems[h][0]]) : reference[tableitems[h][0]]) + "<br/>";
            }
        }
        }
        tooltip += "</div></div><div class=\"tooltipColumn2\"><header>" + reference.name + " (age: " + reference.age + "+)</header></br></br>" + reference.description + "</div>";
    }
    return reference.color == "transparent"
        ? (imgstr[0] + reference[selectedciv.abbr] + imgstr[1] + value + imgstr[2] + LZString.compressToEncodedURIComponent(tooltip) + imgstr[3] + reference.name + imgstr[6])
        : (imgstr[0] + reference[selectedciv.abbr] + imgstr[1] + value + imgstr[2] + LZString.compressToEncodedURIComponent(tooltip) + imgstr[3] + reference.name + imgstr[4] + reference.color + imgstr[5] + imgstr[6]);
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
    return output.replace(/&nbsp;/g, " ").replace(/&/g, "");
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
    for (let i = 1; i < rows.length; i++) {
        str += sanitizeNconvert(rows[i].cells[0].innerHTML);
        str += "|";
        str += sanitizeNconvert(rows[i].cells[1].innerHTML);
        str += "|";
    }
    window.history.replaceState("Home", "AGE OF EMPIRES 4 - BUILD ORDER TOOL", 'index.html?c=' + selectedciv.abbr + "&s=" + LZString.compressToEncodedURIComponent(str));
    navigator.clipboard.writeText(window.location.href).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
    }
    
    //////////////////////////////////////////////////
    // READ icons.JSON data
    //////////////////////////////////////////////////
    async function loadiconsJSON() {
    const response = await fetch("icons.json");
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
    document.getElementById("civilizationFlag").innerHTML = "<img src=\"img/flag" + selectedciv.abbr + ".png\"></img>";
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
        let str = "0:00|Click here to start editing your own build (only on PC for now...)|0:00|You can add icons by dragging them from the menu: {" + vilval + "} |0:00|When you're happy press \"Save and Copy\" and share your build!|";
        window.history.replaceState("Home", "AGE OF EMPIRES 4 - BUILD ORDER TOOL", 'index.html?c=' + selectedciv.abbr + "&b=" + str);
        buildarray = sanitizeNconvert(str).split("|");
    }
    var rows = document.getElementById("buildTable").rows;
    for (let i = buildarray.length / 2 - (rows.length - 1); i > 1; i--) {
        document.getElementById("buildTable").insertRow(2);
    }
    var rows = document.getElementById("buildTable").rows;
    for (let i = 0; i < (rows.length - 1); i++) {
        rows[i + 1].innerHTML = "<td contenteditable=\"true\">"
        + convertBack(buildarray[i * 2], data) + "</td><td contenteditable=\"true\">"
        + convertBack(buildarray[(i * 2) + 1], data) + "</td>";
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
    coll[1].click();
    
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
            console.log(allTooltips.item(i).firstChild.getAttribute('data-info'));
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