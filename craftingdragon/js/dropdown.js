// To toggle between hiding and showing dropdown content when user clicks

function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if(!event.target.matches('drop')) {
        let dropdowns = document.getElementsByClassName("content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}