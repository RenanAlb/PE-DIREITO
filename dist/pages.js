"use strict";
const main = document.getElementById('content-main');
const links = document.querySelectorAll('.link-page'); // seleciono todos os links no index.html e aqui faço a separação das páginas
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        if (window.innerWidth < 850) {
            menu.style.display = 'none';
            blurbk.style.display = 'none';
            iconMenu.innerHTML = 'density_medium';
        }
        const tipo = link.getAttribute('id');
        pagesHtml(String(tipo));
        renderizarProdutos(String(tipo)); // renderiza os produtos pelo tipo
    });
});
const pagesHtml = (tipo) => {
    switch (tipo) {
        case 'home':
            homePage();
            break;
        case 'moda':
            modaPage();
            break;
        case 'calcado':
            calcadoPage();
            break;
        default:
            alert('Página não encontrada');
            main.innerHTML = 'Página não encontrada :(';
            break;
    }
};
const windowTop = () => {
    window.scrollTo(0, 0);
};
