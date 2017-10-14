var dropdown = document.querySelector(".action")
var list = document.querySelector(".dropdown")
var radio = document.querySelectorAll(".radios")



function show_menu() {
    if(list.style.height === "") {
        list.style.height = "210px"
    } else {
        list.style.height = ""
    }
}

function block () {
    radio.forEach(function (t) {
        t.onchange = function() {
            console.log(this.value)
            if(this.value === "off") {
                dropdown.setAttribute("disabled", true)
                dropdown.style.cursor = "not-allowed"
            } else {
                dropdown.removeAttribute("disabled")
                dropdown.style.cursor = "default"
            }
        }
    })
}

document.querySelector(".radio_buttons").addEventListener("click", block)
dropdown.addEventListener("click", show_menu)

// Excercise #3
// ==============================

var more_btn = document.querySelector(".more")

function show_content() {
    var content_hight = document.querySelector(".text_content")
    if(content_hight.style.height !== "250px") {
        content_hight.style.height = "250px"
        more_btn.textContent = "hide..."
    } else {
        content_hight.style.height = "60px"
        more_btn.textContent = "more..."
    }
}
more_btn.addEventListener("click", show_content)

// ==============================

// Excercise #4 drag&drop
// ==============================
function allow_drop(e) {
    e.preventDefault()
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id)
}
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}

document.querySelector("#drag_text").addEventListener("dragstart", drag)
document.querySelector("#drag").addEventListener("drop", drop)
document.querySelector("#drag").addEventListener("dragover", allow_drop)


document.querySelector("#drop").addEventListener("drop", drop)
document.querySelector("#drop").addEventListener("dragover", allow_drop)

// ==============================

// Excercise #5 popup
// ==============================

var popup_window = document.querySelector(".popup_window")
var pop_button = document.querySelector(".click_on_me")

function popup() {
    if(popup_window.style.display !== "block")
        popup_window.style.display = "block"
    else
        popup_window.style.display = "none"
}

pop_button.addEventListener("click", popup)
document.querySelector(".close_popup").addEventListener("click", popup)
