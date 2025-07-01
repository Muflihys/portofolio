// Inisialisasi EmailJS
(function() {
  emailjs.init("7glfx1NRbJaqwB72t"); // ← Ganti dengan Public Key dari EmailJS
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contact-form');
  const message = document.getElementById('form-message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_vybpe3z', 'template_ufk39qd', this)
      .then(function() {
        form.reset();
        message.classList.remove('hidden');
      }, function(error) {
        alert('Failed to send message: ' + JSON.stringify(error));
      });
  });
});
