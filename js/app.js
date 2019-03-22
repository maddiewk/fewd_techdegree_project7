// close the alert bar

const alertBar = document.querySelector('.alert');
const close = document.getElementById('close');

close.addEventListener('click', () =>{
  alertBar.style.visibility = 'hidden';
})
