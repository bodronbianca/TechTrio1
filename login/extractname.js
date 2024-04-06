  const scriptURL = 'https://script.google.com/macros/s/AKfycbzR2VspZWQtHBVPyexte3Pgtcjc8JkxXhEnl86vYZk3eQR0TceGegJ8x1bgwGq2cAua/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })