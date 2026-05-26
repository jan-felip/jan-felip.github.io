// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  smallMenu.classList.toggle('header__sm-menu--active')
  headerHamMenuBtn.classList.toggle('d-none')
  headerHamMenuCloseBtn.classList.toggle('d-none')
})

headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
})

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

const contactForm = document.querySelector('.contact__form')

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const overlay = document.createElement('div')
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999;
    `

    const popup = document.createElement('div')
    popup.style.cssText = `
      background: white; width: 90%; max-width: 450px;
      border-radius: 12px; overflow: hidden; position: relative;
      box-shadow: 0 20px 40px rgba(0,0,0,0.2); font-family: inherit;
    `

    popup.innerHTML = `
      <div style="background: #EC4549; padding: 2rem; text-align: left;">
        <h2 style="color: white; margin: 0; font-size: 2.2rem; font-weight: 700; padding-left: 1rem;">Error</h2>
      </div>
      <div style="padding: 3rem; text-align: center;">
        <p style="color: black; font-size: 1.6rem; margin-bottom: 2.5rem; line-height: 1.5;">
          Actualment aquest servei no està disponible, però pots enviar-me un correu directament!
        </p>
        <a href="mailto:janfelip6@gmail.com" style="
          display: inline-flex; align-items: center; justify-content: center;
          padding: 1.2rem 2.5rem; background: #1d1f29;
          color: white; text-decoration: none; border-radius: 6px;
          font-size: 1.5rem; font-weight: 600; transition: opacity 0.2s;
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 10px;">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          Enviar correu
        </a>
      </div>
      <button style="
        position: absolute; top: 1rem; right: 1.5rem; background: none;
        border: none; color: white; font-size: 2.5rem; cursor: pointer; line-height: 1;
      ">&times;</button>
    `

    overlay.appendChild(popup)
    document.body.appendChild(overlay)
    document.body.style.overflow = 'hidden'

    const closePopup = () => {
      document.body.removeChild(overlay)
      document.body.style.overflow = ''
    }

    popup.querySelector('button').onclick = closePopup
    overlay.onclick = (e) => { if (e.target === overlay) closePopup() }
  })
}
