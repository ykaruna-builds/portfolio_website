const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.textContent = "Thank you! Form submitted successfully.";
    form.reset();
});
