
const headerPage = document.createElement('div') as HTMLDivElement
headerPage.classList.add('header')

const dadosHeaderModa = {
  h1: 'MODA',
  p: 'Looks incríveis para você contando com, vestidos, macacões, conjuntos e mais.',
  img: '../img/f1.jpg'
}
const dadosHeaderCalcado = {
  h1: 'CALÇADOS',
  p: 'Calçados incríveis para você contando com, sandálias, rasteirinhas, tênis e muito mais.',
  img: '../img/f2.jpg'
}
const dadosHeaderBolsa = {
  h1: 'BOLSAS',
  p: 'Bolsas incríveis para você contando com marcas exclusivas, VICTOR HUGO, SCHUTZ e muito mais.',
  img: '../img/f1.jpg'
}

const buildHeader = (tipo: string) => {

  const renderizarHeader = (dadosHeader: {
    h1: string,
    p: string,
    img: string
  }) => {

    headerPage.innerHTML = ''
    headerPage.innerHTML = `
      <section class="img-fundo">
        <h1>${dadosHeader.h1}</h1>
        <p>${dadosHeader.p}</p>
      </section>
      <section class="filtros">
      </section>
    `
    main.appendChild(headerPage)

    const imgFundo = document.querySelector('.img-fundo') as HTMLElement
    imgFundo.style.backgroundImage = `url(${dadosHeader.img})`
    const h1ImgFundo = document.querySelector('.img-fundo h1') as HTMLElement
    const pImgFundo = document.querySelector('.img-fundo p') as HTMLElement

    if (tipo === 'moda') {
      h1ImgFundo.style.color = 'white'
      pImgFundo.style.color = 'white'
    } else if (tipo === 'calcado') {
      h1ImgFundo.style.color = 'black'
      pImgFundo.style.color = 'black'
    } else if (tipo === 'bolsa') {
    }
  }

  if (tipo === 'moda') {
    renderizarHeader(dadosHeaderModa)
  } else if (tipo === 'calcado') {
    renderizarHeader(dadosHeaderCalcado)
  } else if (tipo === 'bolsa') {
    renderizarHeader(dadosHeaderBolsa)
  } else {
    console.error('Erro ao carregar o headerPage')
  }
}