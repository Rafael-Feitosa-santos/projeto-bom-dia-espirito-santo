const hora = new Date().getHours();
const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
document.querySelector("#saudacao").textContent = saudacao + ",";


const versiculos = [
    '"Bem-aventurados os mansos, porque herdarão a terra." – Mateus 5:5',
    '"O Senhor é o meu pastor, nada me faltará." – Salmos 23:1',
    '"Entrega o teu caminho ao Senhor; confia nele, e ele o fará." – Salmos 37:5',
    '"Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração." – Romanos 12:12',
    '"Lâmpada para os meus pés é tua palavra, e luz para o meu caminho." – Salmos 119:105'
];

const elemento = document.getElementById("versiculo");
let index = 0;

setTimeout(() => {
    elemento.style.animation = "none";
}, 1600); 

setInterval(() => {
    // fade-out
    elemento.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % versiculos.length;
        elemento.textContent = versiculos[index];
        // fade-in
        elemento.style.opacity = 1;
    }, 600);
}, 7000);

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("show");
    overlay.classList.add("show");

    // esconder hambúrguer
    menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
    menu.classList.remove("show");
    overlay.classList.remove("show");

    // mostrar hambúrguer de volta
    menuBtn.style.display = "block";
}

