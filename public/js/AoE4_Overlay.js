function overlayEnterHelp() 
{
    document.getElementById('hybridOverlayText').innerHTML = "What's AoE4_Overlay?";
    document.getElementById('hybridOverlayText').style.color = "#fff";
}

function overlayLeaveHelp() 
{
    document.getElementById('hybridOverlayText').innerHTML = "Text to Clipboard";
    document.getElementById('hybridOverlayText').style.color = "aqua";
}