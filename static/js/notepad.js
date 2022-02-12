function escapeHtml(b) {
    var a = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return b.replace(/[&<>"']/g, (c) => {
        return a[c];
    });
}
$(".ribbon_btn").bind("mousedown", (a) => {
    $("#notepad_container").click();
    a.preventDefault();
});
$(".bold_btn").on("click", () => {
    var a = document.getElementById("notepad_container");
    document.execCommand("bold");
});
$(".italic_btn").on("click", () => {
    var a = document.getElementById("notepad_container");
    document.execCommand("italic");
});
$(".underline_btn").on("click", () => {
    var a = document.getElementById("notepad_container");
    document.execCommand("underline");
});
$(".strike_through_btn").on("click", () => {
    var a = document.getElementById("notepad_container");
    document.execCommand("strikeThrough");
});
$(".align-left_btn").on("click", () => {
    var a = document.getElementById("notepad_container");
    document.execCommand("justifyLeft");
});
$(".align-center_btn").on("click", () => {
    var a = document.getElementById("notepad_container");
    document.execCommand("justifyCenter");
});
$(".align-right_btn").on("click", () => {
    var a = document.getElementById("notepad_container");
    document.execCommand("justifyRight");
});
$(".align-justify_btn").on("click", () => {
    var a = document.getElementById("notepad_container");
    document.execCommand("justifyFull");
});
document.getElementById("notepad_container").addEventListener("paste", (e) => {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    document.execCommand("insertText", false, text);
});
setInterval(() => {
    var a = document.getElementById("notepad_container");
    if (document.queryCommandState("bold")) {
        $(".bold_btn").css("background-color", "lightblue");
        $(".bold_btn").addClass("bg-blue-300");
    } else {
        $(".bold_btn").css("background-color", "#ffffff");
    }
}, 1);
setInterval(() => {
    var a = document.getElementById("notepad_container");
    if (document.queryCommandState("italic")) {
        $(".italic_btn").css("background-color", "lightblue");
    } else {
        $(".italic_btn").css("background-color", "#ffffff");
    }
}, 1);
setInterval(() => {
    var a = document.getElementById("notepad_container");
    if (document.queryCommandState("underline")) {
        $(".underline_btn").css("background-color", "lightblue");
    } else {
        $(".underline_btn").css("background-color", "#ffffff");
    }
}, 1);
setInterval(() => {
    var a = document.getElementById("notepad_container");
    if (document.queryCommandState("strikeThrough")) {
        $(".strike_through_btn").css("background-color", "lightblue");
    } else {
        $(".strike_through_btn").css("background-color", "#ffffff");
    }
}, 1);
setInterval(() => {
    var a = document.getElementById("notepad_container");
    if (document.queryCommandState("justifyLeft")) {
        $(".align-left_btn").css("background-color", "lightblue");
    } else {
        $(".align-left_btn").css("background-color", "#ffffff");
    }
}, 1);
setInterval(() => {
    var a = document.getElementById("notepad_container");
    if (document.queryCommandState("justifyCenter")) {
        $(".align-center_btn").css("background-color", "lightblue");
    } else {
        $(".align-center_btn").css("background-color", "#ffffff");
    }
}, 1);
setInterval(() => {
    var a = document.getElementById("notepad_container");
    if (document.queryCommandState("justifyRight")) {
        $(".align-right_btn").css("background-color", "lightblue");
    } else {
        $(".align-right_btn").css("background-color", "#ffffff");
    }
}, 1);
setInterval(() => {
    var a = document.getElementById("notepad_container");
    if (document.queryCommandState("justifyFull")) {
        $(".align-justify_btn").css("background-color", "lightblue");
    } else {
        $(".align-justify_btn").css("background-color", "#ffffff");
    }
}, 1);


// Saving the notepad to localstorage

let save = () =>{
    let a = localStorage.setItem("notepad", document.getElementById("notepad_container").innerHTML);
    return true
}

let notepad_container = document.getElementById("notepad_container");

notepad_container.addEventListener('input', ()=> {save()});

notepad_container.innerHTML = localStorage.getItem("notepad");

