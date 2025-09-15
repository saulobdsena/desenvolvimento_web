// botão modo escuro
const btn = document.getElementById("btn-dark");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// manter escolha ao recarregar
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
  document.getElementById("ano").textContent = new Date().getFullYear();
});
