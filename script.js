// ================= CONTACT FORM =================

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");

    form.reset();
});


// ================= NAVIGATION =================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});


// ================= MENU BUTTON =================

const menuButtons = document.querySelectorAll(".menu-card");

menuButtons.forEach(function(card) {

    card.addEventListener("click", function() {

        const itemName = card.querySelector("h3").textContent;

        alert(itemName + " selected!");

    });

});