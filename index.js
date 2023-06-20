var my_checkbox = document.getElementById("checkb");
my_checkbox.checked = false;
var my_password = document.getElementById("password-input");

my_checkbox.addEventListener("click", function () {
    activate_checkbox()
})

document.querySelector("h5").addEventListener("click", function () {
    if (my_checkbox.checked === false){
        my_checkbox.checked = true;
    } else {
        my_checkbox.checked = false;
    }
    activate_checkbox()
})


function activate_checkbox () {
    if (my_checkbox.checked == true) {
        my_password.type = "text";
    } else {
        my_password.type = "password";
    }
}