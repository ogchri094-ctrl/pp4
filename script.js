// ---------- SLIDER ----------
const slides = document.querySelector('.slides')
const nextButtons = document.querySelectorAll('.next')

let index = 0

if (slides && nextButtons.length > 0) {
  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      index++
      slides.style.transform = `translateX(-${index * 100}vw)`
    })
  })
}

// ---------- BOTÓN START ----------
const btnStart = document.querySelector('.start')

if (btnStart) {
  btnStart.addEventListener('click', () => {
    window.location.href = 'registrarse.html'
  })
}

 
const formulario = document.querySelector('.formulario')
const boton = document.querySelector('#boton')

const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

const errorEmail = document.querySelector('#email-error')
const errorPassword = document.querySelector('#password-error')

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

formulario.addEventListener ('submit', function(e) {
  e.preventDefault()

  errorEmail.textContent = ''
  errorPassword.textContent= ''

  const email = emailInput.value.trim()
  const password = passwordInput.value.trim()

  let valido = true

  if (email === '') {
    errorEmail.textContent= 'agrega un email'
    valido = false
  } else if (!regexEmail.test(email)) {
    errorEmail.textContent = 'agrega un email valido'
    valido =false
  }

  if (password === '') {
    errorPassword.textContent = 'agrega una contraseña'
    valido = false
  } else if (password.length<6) {
    errorPassword.textContent = 'agrega al menos 6 carcateres'
    valido = false
  }

  if (valido) {
    boton.addEventListener ('click', () => {{
      window.location.href = 'app.html'
    }})
  }

})