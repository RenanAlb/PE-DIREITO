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

  main.appendChild(bagDiv)
  const closeBag = document.getElementById('close-bag') as HTMLSpanElement

  closeBag.addEventListener('click', controleBag)
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