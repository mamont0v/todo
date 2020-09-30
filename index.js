const popularity = '100%'
const users =  [
  {
    username: 'admin',
    password: 'admin'
  },
  {
    username: 'valya',
    password: 'valya'
  },
  {
    username: 'valya1',
    password: 'valya1'
  },

]

let isValid = null;

document.getElementById("uncryptPassword").addEventListener('click', showOrHidePassword)


function showOrHidePassword(){
  console.log('clicked')
  const password = document.getElementById('password');
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
};

function clearInputs() {
  document.getElementById("username").value ='';
  document.getElementById("password").value ='';
}



function getInputs() {
  console.log('clicked')
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i <= users.length; i++) {
    console.log('цикл был')
    if (username == users[i].username && password == users[i].password) {
      isValid = true;
      console.log(username + ' is logging in!')
      return
    } else {
      isValid = false;
      console.log('Пользователя не существует')
      return
    }
    console.log(isValid)
    
  }
}



if (isValid === true) {
  console.log('show new content')
}





const dotaHeroes = {
  hero001: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  hero002: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  hero003: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  hero004: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  hero005: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  //это называет методом объекта dotaHeroes
  //Добавляем функцию в ООП
  sayHi1: function() {
    alert('hello')
  },
  //Добавляем функцию в ООП так тоже работает
  sayHi2(){
    alert('hello hello')
  }
}
//Эти два методы не эквиваленты и они отличаются 
// но писать сокращено предпочтительней.





//Добавляем функцию в ООП так тоже
function anotherSayHello() {
  alert('Say hello new')
}
dotaHeroes.anotherSayHello = anotherSayHello;

//Добавляем функцию в ООП и так тоже работает
dotaHeroes.sayHello = function() {
  alert('say hello')
}



