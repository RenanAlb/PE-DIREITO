
let array: {
  nome: string;
  custo: number;
  img: string;
  estoque_atual: number;
  estoque_fixo: number;
  add_carrinho: number;
  desc: string;
  materias: string;
  id: number;
}[]


const containerProdutosArray = document.createElement('div') as HTMLDivElement
containerProdutosArray.classList.add('container-produtos-array')

const renderizarProdutos = (tipo: string):void => {
  const content = (array: {
    nome: string;
    custo: number;
    img: string;
    estoque_atual: number;
    estoque_fixo: number;
    add_carrinho: number;
    desc: string;
    materias: string;
    id: number;
  }[]
  ) => {
    buildHeader(tipo)
    containerProdutosArray.innerHTML = '' // Retiro todos os produtos para não haver duplicações de produtos

    for (let i = 0; i < array.length; i++) {
      containerProdutosArray.innerHTML += `
        <section class="produto" id="${array[i].id}" data-tipo="${tipo}">
          <span id="favorite-produto" class="material-symbols-outlined">
            favorite
          </span>
          <div class="img-produto-${i}" id="img-produto-style">
          </div>
          <section class="dados">
            <p>${array[i].nome}</p>
            <p>R$ ${array[i].custo.toFixed(2).replace('.',',')}</p>
          </section>
        </section>
      `

      main.appendChild(containerProdutosArray)
      const imgProduto = document.querySelector(`.img-produto-${i}`) as HTMLDivElement

      // Estilos da imagem dos produtos
      imgProduto.style.backgroundImage = `url(${array[i].img})`
      imgProduto.style.backgroundSize = 'cover'
      imgProduto.style.backgroundPosition = 'center center'
      imgProduto.style.width = '100%'
      imgProduto.style.margin = 'auto'
      imgProduto.style.justifyContent = 'end'
      imgProduto.style.alignItems = 'start'
      imgProduto.style.display = 'flex'
      //  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      // const escala = screenWidth > 950 ? 0.8 : 1.0;
    }
  }

  // Separo os tipos dos produtos e adiciono o array devido para tal
  if (tipo === 'moda') {
    array = modaArray
    content(array)
    viewMore(array)
  } else if (tipo === 'calcado') {
    array = calcadoArray
    content(array)
    viewMore(array)
  } else if (tipo === 'bolsa') {
    array = bolsaArray
    content(array)
    viewMore(array)
  }
}

// Após clicar no produto, aparece mais informações (materais, marca e etc)
const viewMore = (array:{
  nome: string;
  custo: number;
  img: string;
  estoque_atual: number;
  estoque_fixo: number;
  add_carrinho: number;
  desc: string;
  materias: string;
  id: number;
}[]) => {
  const produtos = document.querySelectorAll('.produto') as NodeListOf<HTMLDivElement>

  const divFlutuante = document.createElement('div') as HTMLDivElement
  divFlutuante.classList.add('div-flutuante')

  produtos.forEach(item => {
    item.addEventListener('click', () => {
      viewProduto(Number(item.getAttribute('id')), array)
    })
  })

  const viewProduto = (item: number, array: {
    nome: string;
    custo: number;
    img: string;
    estoque_atual: number;
    estoque_fixo: number;
    add_carrinho: number;
    desc: string;
    materias: string;
    id: number;
  }[]) => {
    divFlutuante.style.display = 'block'
    divFlutuante.innerHTML = `
      <a href="#" class="voltar">
        <span>
          <span class="material-symbols-outlined">
            arrow_back_ios
          </span>
          voltar
        </span>
      </a>
      <div class="container-dados-produto">
        <section class="img-produto">
        </section>
        <section class="dados-produto">
          <h3>Detalhes do produto</h3>
          <p>${array[item].nome}</p>
          <p>R$ ${array[item].custo.toFixed(2).replace('.',',')}</p>
          <p>${array[item].desc}</p>
          ${array[item].materias}
        </section>
      </div>
    `

    main.innerHTML = ''
    main.appendChild(divFlutuante)

    const imgProdutoModa = document.querySelector('.img-produto') as HTMLDivElement
    imgProdutoModa.style.backgroundImage = `url(${array[item].img})`

    const voltar = document.querySelector('.voltar') as HTMLAnchorElement

    voltar.addEventListener('click', (event) => {
      event.preventDefault()
      if (array === calcadoArray) {
        calcadoPage()
      } else if (array === modaArray) {
        modaPage()
      } else if (array === bolsaArray) {
        bolsaPage()
      }
    })
    windowTop()
  }
}