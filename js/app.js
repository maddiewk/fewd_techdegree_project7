// close the alert bar

const alertBar = document.querySelector('.alert');
const closeAlert = document.getElementById('alert_close');

closeAlert.addEventListener('click', () =>{
  alertBar.style.visibility = 'hidden';
});

// send message button

const send = document.getElementById('send_btn');
const hiddenMessage = document.querySelector('.hidden');
const closeMsg = document.getElementById('msg_close');
const search = document.getElementById('user_search');
const message = document.getElementById('user_message');

send.addEventListener('click', (e) => {

  if (search.value == '' || message.value == '') {
    console.log("NO");
  } else {
  // do this if form is filled out correctly
  hiddenMessage.classList.remove('hidden');
  hiddenMessage.classList.add('show');
  e.preventDefault();
  }
});

closeMsg.addEventListener('click', () => {
  hiddenMessage.classList.remove('show');
  hiddenMessage.classList.add('hidden');
})
