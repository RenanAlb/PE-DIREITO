"use strict";
const renderizarProdutosCalcado = () => {
    renderizarProdutos('calcado');
};
const calcadoPage = () => {
    main.innerHTML = '';
    renderizarProdutosCalcado();
    document.body.appendChild(main);
    windowTop();
};
