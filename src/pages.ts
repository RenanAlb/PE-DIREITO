const main = document.getElementById('content-main') as HTMLElement
const links = document.querySelectorAll('.link-page') as NodeListOf<HTMLAnchorElement>

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    if (window.innerWidth < 850) {
      menu.style.display = 'none'
      blurbk.style.display = 'none'
      iconMenu.innerHTML = 'density_medium'
    }
    const tipo = link.getAttribute('id')
    pagesHtml(String(tipo))
  })
})

const pagesHtml = (tipo: string) => {
  switch (tipo) {
    case 'home':
      homePage()
    break
    case 'moda':
      modaPage()
    break
    case 'calcado':
      calcadoPage()
    break
    default:
      alert('Página não encontrada')
      main.innerHTML = 'Página não encontrada :('
    break
  }
}

const windowTop = () => {
  window.addEventListener('load', () => {
    window.scrollTo(0, 0)
  })
}