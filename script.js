// ===== MENU MOBILE =====
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Fecha o menu ao clicar em um item
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});

// ===== CONTATO =====
const statusEl = document.getElementById("status");
const btnWhats = document.getElementById("btnWhats");
const btnEmail = document.getElementById("btnEmail");

// Seu número: 55 + DDD + número (somente dígitos)
const WHATS = "5569999372755";

// Troque pelo seu e-mail real se quiser
const EMAIL = "adrielguerra599@gmail.com";

const MSG = "Olá! Vi sua landing page e gostaria de falar sobre um projeto.";

// WhatsApp (abre na mesma aba para não ser bloqueado)
btnWhats.addEventListener("click", () => {
  const url = `https://wa.me/${WHATS}?text=${encodeURIComponent(MSG)}`;
  statusEl.textContent = "Abrindo WhatsApp...";
  window.location.href = url;
});

// Copiar e-mail
btnEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    statusEl.textContent = "E-mail copiado! ✅";
  } catch {
    statusEl.textContent = "Não consegui copiar automaticamente. Copie: " + EMAIL;
  }
});
