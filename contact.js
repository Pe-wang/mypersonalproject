document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate form submission response
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can extend this)
    if (name === "" || email === "" || message === "") {
        document.getElementById('response-message').innerText = "Please fill out all fields.";
    } else {
        document.getElementById('response-message').innerText = "Thank you, " + name + ". Your message has been sent!";
    }

    // Clear form after submission
    document.getElementById('contactForm').reset();
});
