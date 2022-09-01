const copyBtnEl = document.querySelector('.copy-btn');
const copyAlertEl = document.querySelector('.copy-alert');
const passwordEl = document.querySelector('.password');
const lenEl = document.querySelector('.len');
const upperEl = document.querySelector('.upper');
const lowerEl = document.querySelector('.lower');
const numberEl = document.querySelector('.number');
const symbolEl = document.querySelector('.symbol');
const generateBtnEl = document.querySelector('.generate-btn');

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLiterals = lowerLetters.toUpperCase();
const numbers = '0123456789';
const symbols = '~!@#$%^&*()_+=|';

// generate random number from string length
const randomNumber = (str) => {
  return Math.floor(Math.random() * str.length);
};

// return random character from string
const randomChar = (str) => {
  return str[randomNumber(str)];
}

// generate random character of type characters selected
const generateX = () => {
  const x = [];

  if (lowerEl.checked) {
    x.push(randomChar(lowerLetters))
  }
  if (upperEl.checked) {
    x.push(randomChar(upperLiterals))
  }
  if (numberEl.checked) {
    x.push(randomChar(numbers))
  }
  if (symbolEl.checked) {
    x.push(randomChar(symbols))
  }

  return randomChar(x);
}

// generate password
generateBtnEl.addEventListener('click', () => {
  if (lenEl.value > 50 || lenEl.value < 1) {
    alert('طول رمز باید بین 1 تا 50 باشد.');
  } 
  else
  {
    let password = '';
    for (let i = 0; i < lenEl.value; i++) {
      password += generateX();
    }
    if (password.slice(0, 9) == 'undefined') {
      alert('حداقل باید یک نوع کاراکتر برای رمز انتخاب کنید.');
    }
    else
    {
      passwordEl.value = password;
    }
  }
});

// copy password
copyBtnEl.addEventListener('click', () => {
  if (passwordEl.value == '') {
    alert('لطفا یک رمز برای کپی کردن تولید کنید.');
  }
  else 
  {
    /* Select the text field */
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(passwordEl.value);

    /* Alert the copied text */
    copyAlertEl.classList.remove('d-none');
    setTimeout(() => {
      copyAlertEl.classList.add('d-none');
    }, 2999);
  }
});
