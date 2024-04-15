async function custom_onload(debug_hidden) {
    console.log("Custom onload");
    // Additional onload customizations
}

function custom_prerun(){
    console.log("Custom prerun");
    // Additional prerun actions
}

function custom_postrun(){
    console.log("Custom postrun");
    // Additional postrun actions
}

function debug() {
    // Debug functionality
    console.log("Debug mode enabled");
}

function info_inline(data){
    document.getElementById("info").innerHTML = data;
}

function info_online(url) {
    fetch(url)
        .then((response) => response.text())
        .then((html) => {
            info_inline(html);
        })
        .catch((error) => {
            console.warn(error);
        });
}

function frame_online(url) {
    window.frames["iframe"].location = url;
}
