const itemsEl = document.getElementsByClassName("items");
const clearBtn = document.getElementById("clear");
let cross = true;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.background = "#000"
}

for (let i = 0; i < itemsEl.length; i++) {
    itemsEl[i].addEventListener("click", function () {
        if (itemsEl[i].innerHTML == "") {
            itemsEl[i].innerHTML = `${tickIt()}`;
            itemsEl[i].style.cursor = "not-allowed";
        }
    })

    itemsEl[i].addEventListener("mouseover", function() {
        if (itemsEl[i].innerHTML != "") {
            itemsEl[i].style.cursor = "not-allowed";
        }
    })
}

function tickIt() {
    if (cross) {
        cross = false;
        return "X";
    } else {
        cross = true;
        return "O";
    }
}

clearBtn.addEventListener("click", function () {
    for (let i = 0; i < itemsEl.length; i++) {
        itemsEl[i].style.cursor = "pointer";
        itemsEl[i].innerHTML = "";
    }
})

