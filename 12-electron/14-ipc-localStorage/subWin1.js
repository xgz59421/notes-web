window.onload = function () {
  let oInput = document.getElementById('txt')
  let val = localStorage.getItem('name')

  oInput.value = val
}