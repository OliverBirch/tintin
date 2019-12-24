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

function logCollectedItems() {
    const collectedItems = document.querySelectorAll(".cover-img");
    console.log(collectedItems);

    for (i = 0; i < collectedItems.length+1; i++) {
        if (collectedItems[i].classList.contains("item-missing")) {
            localStorage.setItem(`${i+1}`, "missing");
        } else {
            localStorage.setItem(`${i+1}`, "owned");
        }
    }
}

window.addEventListener("beforeunload", function(e){
    e.preventDefault();
    logCollectedItems();

})

window.addEventListener("DOMContentLoaded", (e) => {
    for(i = 1; i < localStorage.length+1; i++) {
        const volume = document.getElementById(i).querySelector(".cover-img");
        if (localStorage.getItem(i) === "missing") {
            if (volume.classList.contains("item-missing") === false) { 
                document.getElementById(i).querySelector(".cover-img").classList.add("item-missing");
            }
        } else if (localStorage.getItem(i) === "owned") {
            volume.classList.remove("item-missing");
        }
    }
})
