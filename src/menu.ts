const menu = document.querySelector('nav') as HTMLElement
const iconMenu = document.querySelector('#menu') as HTMLSpanElement
const blurbk = document.querySelector('.blur') as HTMLDivElement

menu.style.display = 'none'
iconMenu.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none'
    iconMenu.innerHTML = 'density_medium'
    blurbk.style.display = 'none'
    dadosProdutoModa.style.zIndex = '1'
  } else {
    menu.style.display = 'block'
    iconMenu.innerHTML = 'close'
    blurbk.style.display = 'block'
    dadosProdutoModa.style.zIndex = '-1'
  }
})

const controleMenu = () => {
  if (window.innerWidth > 850) {
    menu.style.display = 'block'
    blurbk.style.display = 'none'
    iconMenu.style.display = 'none'
    iconMenu.innerHTML = 'density_medium'
  } else {
    menu.style.display = 'none'
    blurbk.style.display = 'none'
    iconMenu.style.display = 'block'
    iconMenu.innerHTML = 'density_medium'
  }
}

window.addEventListener('resize', controleMenu)
window.addEventListener('load', controleMenu)