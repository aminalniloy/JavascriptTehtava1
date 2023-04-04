var button = document.querySelector("button");

button.addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var message = document.getElementById("message");

    if (name && age) {
        if (age < 18) {
            message.innerHTML = "Hi " + name + ", You are not adult."
        } else {
            message.innerHTML = "Hi " + name + ", you are an adult."
        }
    } else {
        message.innerHTML = "Enter your name and age, please.";
    }
});