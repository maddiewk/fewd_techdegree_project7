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


// autocomplete function
// array of users
const users = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];

function auto(input, arr) {
  let currentInput;
  // add and remove active status for user autocomplete list based on key up or down
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentInput >= x.length) {
      currentInput = 0;
    }
    if (currentInput < 0) {
      currentInput = (x.length - 1);
    }
      x[currentInput].classList.add('active');
    }
    function removeActive(x) {
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('active');
      }
    }
// listen for user input on search bar
  input.addEventListener('input', function(e) {
    let val = this.value;
    close();
    if (!val) {
      return false;
    }
    currentInput = -1;

    let autoItem = document.createElement('div');
    autoItem.setAttribute('id', this.id + 'auto-list');
    autoItem.setAttribute('class', 'autocomplete-list list');
    this.parentNode.appendChild(autoItem);
    for (let i = 0; i < arr.length; i++) {
      let match = arr[i].toUpperCase();
      if (match.includes(val.toUpperCase())) {
        let matchItem = document.createElement('div');
        matchItem.setAttribute('class', 'list');
        matchItem.innerHTML += "<input value='" + arr[i] + "'>";
        matchItem.addEventListener('click', function(e) {
          input.value = this.getElementsByTagName('input')[0].value;
          close();
        });
          autoItem.appendChild(matchItem);
        }
      }
  });
  // listen for key press
  input.addEventListener('keydown', function(e) {
    let x = document.getElementById(this.id + 'auto-list');
    if ($search.val() == '') {
      const allAutoDivs = $('.list');
      allAutoDivs.each(function() {
        $(this).remove();
      });
    }
    if (x) {
      x = x.getElementsByTagName('div');
      if (e.keyCode == 40) {
        currentInput++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentInput--;
        addActive(x);
      }
        else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentInput > -1) {
          if (x) {
            x[currentInput].click();
          }
        }
      }
    }

  });
  // close autocomplete when user clicks outside search box
    function close(element) {
      let x = document.getElementsByClassName('autocomplete-list');
      for (let i = 0; i < x.length; i++) {
        if (element !=x[i] && element!= input) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener('click', function(e) {
      close(e.target);
    });
  }

auto(document.getElementById('user_search'), users);

// local storage

const emailCheckBox = document.getElementById('email_notif');
const profileCheckBox = document.getElementById('pub_profile');
const timezoneSelect = document.getElementById('timezone');
const saveBtn = document.getElementById('save_btn');
const cancelBtn = document.getElementById('cancel_btn');

function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch(e) {
    return false;
  }
}

function saveToLocalStorage() {
  localStorage.setItem('emailCheckBox', emailCheckBox.checked);
  localStorage.setItem('profileCheckBox', profileCheckBox.checked);
  localStorage.setItem('timezone', timezone.selectedIndex);
  location.reload();
}

function clearLocalStorage() {
  localStorage.clear();
  location.reload();
}

function rememberSaved() {
  let emailSettings = JSON.parse(localStorage.getItem('emailCheckBox'));
  emailCheckBox.checked = emailSettings;
  let profileSettings = JSON.parse(localStorage.getItem('profileCheckBox'));
  profileCheckBox.checked = profileSettings;
  let savedTimezone = localStorage.getItem('timezone');
  timezone.selectedIndex = savedTimezone;
}

saveBtn.addEventListener('click', function(e) {
  if (e.target.type === 'submit') {
    saveToLocalStorage();
    e.preventDefault();
  }
});

cancelBtn.addEventListener('click', function(e) {
  if (e.target.type === 'reset') {
    clearLocalStorage();
  }
});

window.onload = function() {
  if (supportsLocalStorage) {
    rememberSaved();
  }
};
