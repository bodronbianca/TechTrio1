const scriptURL = 'https://script.google.com/macros/s/AKfycbyTzzjrF0AMA5lq56DgBV9XxUkzXAUEa-DY9W_rK48pAO6YLtsrj087KPyZOXh9jzw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
