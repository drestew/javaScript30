// store element for each key from Dom
// function for 'keydown' eventlistener
// inside function toggle active class

window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`)
  document.querySelector('.key').classList.toggle('playing')
  console.log(audio)
  audio.play()
  document.querySelector('.key').classList.toggle('playing')
})

// const keyPress = function (e) {
//   console.log('yse')
// }

// curKey.forEach(key => {
//     if (key.dataset.key = "65") {
//         key.classList.add("playing")
//     }
// })
