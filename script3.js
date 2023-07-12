const scriptURL = 'https://script.google.com/macros/s/AKfycbzI5orpGxW5nxi4koNoTk7kNyLHu_UjY23j-zB2JAJ__4WgzhBJuMz5XV6O3JFM8lzI/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for contacting me..! I will contact you soon..."))
    .catch(error => console.error('Error!', error.message))
})