const scriptURL = "https://script.google.com/macros/s/AKfycbxKngWaXaJznHvdM_TttzbDv0WOV830BmEw4ltOdLzSAANLQWdH6hotNhpMkgGFxpQb/exec";
const form = document.getElementById("contact-form");
const feedback = document.getElementById("contact-feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  feedback.textContent = "Mengirim...";

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nama: document.getElementById("nama").value,
      email: document.getElementById("email").value,
      wa: document.getElementById("wa").value,
      pesanan: document.getElementById("pesanan").value
    })
  })
  .then(() => {
    feedback.textContent = "Pesanan berhasil dikirim! Kami akan menghubungi Anda.";
    form.reset();
  })
  .catch(() => {
    feedback.textContent = "Gagal mengirim. Coba lagi.";
  });
});