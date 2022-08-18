// Help when hovering the simple TXT build (entering)
function simpleTxtOverlayEnterHelp() {
    document.getElementById('hybridSimpleTxtOverlayText').innerHTML = 'What is the simple TXT format for AoE4_Overlay?';
    document.getElementById('hybridSimpleTxtOverlayText').style.color = '#fff';
}

// Help when hovering the simple TXT build (leaving)
function simpleTxtOverlayLeaveHelp() {
    document.getElementById('hybridSimpleTxtOverlayText').innerHTML = 'Simple TXT Build Order to Clipboard';
    document.getElementById('hybridSimpleTxtOverlayText').style.color = 'aqua';
}

// Help when hovering the Illustrated Build Order (entering)
function illustratedOverlayEnterHelp() {
    document.getElementById('hybridIllustratedOverlayText').innerHTML = 'What is the Illustrated format for AoE4_Overlay?';
    document.getElementById('hybridIllustratedOverlayText').style.color = '#fff';
}

// Help when hovering the Illustrated Build Order (leaving)
function illustratedOverlayLeaveHelp() {
    document.getElementById('hybridIllustratedOverlayText').innerHTML = 'Illustrated Build Order to Clipboard';
    document.getElementById('hybridIllustratedOverlayText').style.color = 'aqua';
}