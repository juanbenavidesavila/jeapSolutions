document.addEventListener("DOMContentLoaded", function () {
  const phoneNumber = "56940832347"; // ← cambia esto por tu número real (sin +)
  const message = "Hola, quisiera solicitar información de sus servicios";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const button = document.createElement("a");
  button.href = whatsappLink;
  button.id = "whatsapp-button";
  button.target = "_blank";
  button.rel = "noopener";

  const icon = document.createElement("img");
  icon.src = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"; // o tu icono local en assets/
  icon.alt = "WhatsApp";

  button.appendChild(icon);
  document.getElementById("whatsapp-button-container").appendChild(button);
});
