const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`)
  const key = document.querySelector(`.key[data-key="${e.code}"]`)
  key.classList.add('playing')
  console.log(key)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
}

const removeTransition = function (e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')

window.addEventListener('keydown', playSound)
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
