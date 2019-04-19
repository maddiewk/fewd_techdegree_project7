// Set up Globabl variables
const $alertBar = $('.alert');
const $closeAlert = $('#alert_close');
const $send = $('#send_btn');
const $hiddenMessage = $('.hidden');
const $closeMsg = $('#msg_close');
const $search = $('#user_search');
const $message = $('#user_message');
const $parentDiv = $('.message');
const $appendDiv = $('#dynamic');
const $errorMsgClose = $('#msg_close');
const $bellIcon = $('.main-img');
const $notificationBox = $('.notifications');
const $newNotifications = $('.dot');
const $closeNotifications = $('.close-notification');
const $auto = $('.autocomplete');

// close the alert bar
$closeAlert.on('click', () => {
  $alertBar.slideUp(700);
});

// handle submit button
$send.on('click', (e) => {
  e.preventDefault();
  $appendDiv.css('display', 'block');
  $appendDiv.html('');
  if ($search.val() === '' || $message.val() === '') {
    $appendDiv.delay(3000).append(`<span>! Please make sure both form fields are correctly filled in.</span>`).slideDown(1500).removeClass('hidden').hide(1000);
  } else {
    $appendDiv.css('display', 'none');
    $hiddenMessage.addClass('show').removeClass('hidden');
    $search.val('');
    $message.val('');
  }
});

$errorMsgClose.on('click', () => {
  $hiddenMessage.addClass('hidden').removeClass('show');
});

// handle notification box dropdown
$bellIcon.on('click', () => {
  $notificationBox.css('display', 'block');
  $newNotifications.css('display', 'none');
});

$closeNotifications.on('click', () => {
  $notificationBox.css('display', 'none');
});


// test autocomplete function here

const users = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];

$search.on('keyup', () => {
  // test to see if input matches any of the data in array (use for loop)
  // if it matches display in autcomplete 'div'

  let userInput = $search.val();
  users.forEach(function(el) {
    let splint = el.split('');
    // console.log(split);
    if (splint.indexOf(userInput) > -1) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  })
});


// function autocomplete (inp, arr) {
//   let currentUser;
//   search.addEventListener('keydown', (e) => {
//     let a, b, i, val = this.value;
//     if (!val) {
//       return false;
//     }
//     currentUser = -1;
//     a = document.createElement('div');
//     a.setAttribute('class', 'autocomplete-list');
//     this.parentNode.appendChild(a);
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//         b = document.createElement('div');
//         b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//         b.innerHTML += arr[i].substr(val.length);
//         b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//           b.addEventListener('click', function(e) {
//             inp.value = this.getElementsByTagName('input'[0].value);
//           });
//           a.appendChild(b);
//       }
//     }
//   });
// }
//
// autocomplete(search, users);
