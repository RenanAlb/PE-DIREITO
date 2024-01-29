
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

const carrinho: any = []

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
    viewMore(array, tipo)
  } else if (tipo === 'calcado') {
    array = calcadoArray
    content(array)
    viewMore(array, tipo)
  } else if (tipo === 'bolsa') {
    array = bolsaArray
    content(array)
    viewMore(array, tipo)
  }

  console.log('separação array', array)
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
}[], tipo: string) => {
  const produtos = document.querySelectorAll('.produto') as NodeListOf<HTMLDivElement>

  const divFlutuante = document.createElement('div') as HTMLDivElement
  divFlutuante.classList.add('div-flutuante')

  produtos.forEach(item => {
    item.addEventListener('click', () => {
      viewProduto(Number(item.getAttribute('id')), array)
    })
  })

  const viewProduto = (id: number, array: {
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
          <p>${array[id].nome}</p>
          <p>R$ ${array[id].custo.toFixed(2).replace('.',',')}</p>
          <p>${array[id].desc}</p>
          ${array[id].materias}
          <button class="add-produto" data-id="${array[id].id}" data-tipo="${tipo}">Adicionar ao carrinho</button>
        </section>
      </div>
    `

    main.innerHTML = ''
    main.appendChild(divFlutuante)

    const imgProdutoModa = document.querySelector('.img-produto') as HTMLDivElement
    imgProdutoModa.style.backgroundImage = `url(${array[id].img})`

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

    const buttons = document.querySelectorAll('.add-produto') as NodeListOf<HTMLButtonElement>

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const idProduto = button.getAttribute('data-id')
        adicionarProdutoCarrinho(Number(idProduto))
      })
    })
    const adicionarProdutoCarrinho = (id: number): void => {
      const filtrarRepetidos = carrinho.filter((item: { img: string }) => item.img === array[id].img)

      console.log(filtrarRepetidos)

      if (filtrarRepetidos.length === 0) {
        array[id].estoque_atual--
        array[id].add_carrinho++
        carrinho.push({ ...array[id] })
      } else {
        const indexNoCarrinho = carrinho.findIndex((item: { img: string }) => item.img === array[id].img)

        if (indexNoCarrinho !== -1) {
          const produtoNoCarrinho = carrinho[indexNoCarrinho]

          if (produtoNoCarrinho.estoque_atual < produtoNoCarrinho.estoque_fixo) {
            if (produtoNoCarrinho.estoque_atual !== 0) {
              produtoNoCarrinho.estoque_atual--
              produtoNoCarrinho.add_carrinho++
            } else {
              alert('Estoque esgotado')
            }
          }
        }
      }
      console.log(carrinho)

      if (carrinho.length > 0) {
        bagIcon.innerHTML = `
          shopping_bag
          <span class="notificar">
            ${carrinho.length}
          </span>
        `
      } else {
        bagIcon.innerHTML = `
          shopping_bag
        `
      }

    }


    windowTop()
  }
}