

function toggleContent(contentToShow) {
    var contents = document.querySelectorAll('#bl, #net, #s ,#sc');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });
    document.getElementById(contentToShow).style.display = 'block';
}

document.getElementById("bel").addEventListener("click", function() {
    toggleContent("bl");
});

document.getElementById("flex").addEventListener("click", function() {
    toggleContent("net");
});

document.getElementById("shahd").addEventListener("click", function() {
    toggleContent("s");
});

document.getElementById("ssc").addEventListener("click", function() {
    toggleContent("sc");
});









document.getElementById("toggle").addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
});


document.getElementById("toggle").addEventListener("click", function() {
    var toggle = document.getElementById("toggle");
    if (toggle.src.includes("bx-moon.svg")) {
        toggle.src = "photonew/bx-sun.svg";
    } else {
        toggle.src = "photonew/bx-moon.svg";
    }
});

