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

// close the alert bar
$closeAlert.on('click', () => {
  $alertBar.slideUp(800);
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
