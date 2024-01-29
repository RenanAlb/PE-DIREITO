const bagIcon = document.querySelector('#bag') as HTMLSpanElement
const bagDiv = document.createElement('div') as HTMLDivElement
bagDiv.classList.add('bag-div')

const montarBagDiv = () => {
  bagDiv.innerHTML = `
    <span id="close-bag" class="material-symbols-outlined">
      close
    </span>
    <h1>Meu carrinho</h1>
  `
  const produtosAdicionados = document.createElement('div') as HTMLDivElement
  produtosAdicionados.classList.add('produtos-adicionados-no-carrinho')

  for (let i = 0; i < carrinho.length; i++) {
    produtosAdicionados.innerHTML += `
      <section>
        <div class="img-${i}" id="img-carrinho">
          <p>R$${carrinho[i].custo.toFixed(2).replace('.',',')}</p>
        </div>
        <div>
          <button class="subtrair" data-id="${carrinho[i].id}" data-produto="${carrinho[i].img}">-</button>
            <p class="number">${carrinho[i].add_carrinho}</p>
          <button class="somar">+</button>
        </div>
        <p id="nome">${carrinho[i].nome}</p>
      </section>
    `

    bagDiv.appendChild(produtosAdicionados)
    main.appendChild(bagDiv)
    const img = document.querySelector(`.img-${i}`) as HTMLElement

    img.style.backgroundImage = `url(${carrinho[i].img})`
    img.style.backgroundSize = 'cover'
    img.style.backgroundPosition = 'center center'
    img.style.width = '100px'
    img.style.height = '150px'
  }

  bagDiv.appendChild(produtosAdicionados)
  main.appendChild(bagDiv)
  const closeBag = document.getElementById('close-bag') as HTMLSpanElement
  closeBag.addEventListener('click', controleBag)

  const subtriar = document.querySelectorAll('.subtrair') as NodeListOf<HTMLButtonElement>

  subtriar.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id')
      const produto = item.getAttribute('data-produto')
      executarSubtracao(Number(id), String(produto))
    })
  })
}

const executarSubtracao = (id: number, produto: string) => {
  carrinho[id].estoque_atual++
  carrinho[id].add_carrinho--
  montarBagDiv()
}

const controleBag = () => {
  if (bagDiv.style.display === 'block') {
    bagDiv.style.display = 'none'
    blurbk.style.display = 'none'
    divSearch.style.display = 'none'
  } else {
    bagDiv.style.display = 'block'
    blurbk.style.display = 'block'
    divSearch.style.display = 'none'
    montarBagDiv()
  }
}

bagIcon.addEventListener('click', controleBag)