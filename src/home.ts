
const partOne = document.createElement('div') as HTMLDivElement
partOne.classList.add('part-one')

const partTwo = document.createElement('div') as HTMLDivElement
partTwo.classList.add('part-two')

const homePage = () => {
  main.innerHTML = ''
  partOne.innerHTML = `
    <section class="text-part-one">
      <video src="../img/pd1.mp4" autoplay muted loop></video>
      <h1>SEJA PÉ DIREITO</h1>
      <p>Seja um cliente Pé Direito e aproveite as novidades e benefícios</p>
      <button>Ver mais</button>
    </section>
    `
    // <video src="../img/video.mp4" autoplay muted loop></video>


  partTwo.innerHTML = `
    <h1>BOLSAS VICTOR HUGO</h1>
    <p>LUXO E BELEZA</p>
    <a href="#">Ver mais</a>
  `

  main.appendChild(partOne)
  main.appendChild(partTwo)
  windowTop()
}