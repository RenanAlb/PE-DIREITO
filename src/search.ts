const searchIcon = document.getElementById('search') as HTMLElement
const divSearch = document.createElement('div') as HTMLDivElement
divSearch.classList.add('search')


const construirSearch = () => {
  divSearch.innerHTML = `
    <span id="close-search" class="material-symbols-outlined">
      close
    </span>
    <input type="text" placeholder="O que você busca?">
    <button>Buscar</button>
  `
  main.appendChild(divSearch)

  const spanClose = document.querySelector('#close-search') as HTMLSpanElement

  spanClose.addEventListener('click', controleSpan)
}

const controleSpan = () => {
  if (divSearch.style.display === 'block') {
    divSearch.style.display = 'none'
    blurbk.style.display = 'none'
  } else {
    divSearch.style.display = 'block'
    blurbk.style.display = 'block'
    construirSearch()
  }
}

searchIcon.addEventListener('click', controleSpan)