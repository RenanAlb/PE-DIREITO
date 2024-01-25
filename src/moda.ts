
const containerModa = document.createElement('div') as HTMLDivElement
containerModa.classList.add('container-moda')

const headerModa = document.createElement('div') as HTMLDivElement
headerModa.classList.add('header-moda')
headerModa.innerHTML = `
  <section class="img-fundo-moda">
    <h1>MODA</h1>
    <p>Looks incríveis para você contando com, vestidos, macacões, conjuntos e mais.</p>
  </section>
  <section class="filtros">

  </section>
`

const renderizarProdutosModa = () => {
  for (let i = 0; i < modaArray.length; i++) {
    containerModa.innerHTML += `
      <section class="produto" id="${modaArray[i].id}">
        <div class="img-produto-${i}">
          <span id="ver" class="material-symbols-outlined">
            photo_library
          </span>
          <span id="favorite-produto" class="material-symbols-outlined">
            favorite
          </span>
        </div>
        <p>${modaArray[i].nome}</p>
        <p>R$ ${modaArray[i].custo.toFixed(2).replace('.',',')}</p>
      </section>
    `

    main.appendChild(containerModa)
    const imgProduto = document.querySelector(`.img-produto-${i}`) as HTMLDivElement

    imgProduto.style.backgroundImage = `url(${modaArray[i].img})`
    imgProduto.style.backgroundSize = 'cover'
    imgProduto.style.backgroundPosition = 'center top'
    imgProduto.style.width = '100%'
    imgProduto.style.height = '500px'
    imgProduto.style.justifyContent = 'end'
    imgProduto.style.alignItems = 'start'
    imgProduto.style.display = 'flex'
  }
}

const viewMore = () => {
  const produtos = document.querySelectorAll('.produto') as NodeListOf<HTMLDivElement>

  const divFlutuante = document.createElement('div') as HTMLDivElement
  divFlutuante.classList.add('div-flutuante')

  produtos.forEach(item => {
    item.addEventListener('click', () => {
      viewProduto(Number(item.getAttribute('id')))
    })
  })

  const viewProduto = (item: number) => {
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
      <div class="container-dados-produto-moda">
        <section class="img-produto-moda">
        </section>
        <section class="dados-produto-moda">
          <h3>Detalhes do produto</h3>
          <p>${modaArray[item].nome}</p>
          <p>R$ ${modaArray[item].custo.toFixed(2).replace('.',',')}</p>
          <p>${modaArray[item].desc}</p>
          ${modaArray[item].materias}
        </section>
      </div>
    `

    main.innerHTML = ''
    main.appendChild(divFlutuante)

    const imgProdutoModa = document.querySelector('.img-produto-moda') as HTMLDivElement
    imgProdutoModa.style.backgroundImage = `url(${modaArray[item].img})`

    const voltar = document.querySelector('.voltar') as HTMLAnchorElement

    voltar.addEventListener('click', (event) => {
      event.preventDefault()
      modaPage()
    })
  }
}

const dadosProdutoModa = document.querySelector('.dados-produto-moda') as HTMLDivElement

const modaPage = () => {
  main.innerHTML = ''
  main.appendChild(headerModa)
  renderizarProdutosModa()
  document.body.appendChild(main)
  viewMore()
  windowTop()
}