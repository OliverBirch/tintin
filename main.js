const coverItems = document.querySelectorAll(".cover-img");

coverItems.forEach( cover => {
    cover.addEventListener("click", toggleItemOwned)
});

function toggleItemOwned(e) {
    if (e.target.classList.contains("item-missing")) {
        e.target.classList.remove("item-missing");
    } else {
        e.target.classList.add("item-missing");
    }
}

