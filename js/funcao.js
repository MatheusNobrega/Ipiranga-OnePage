function contraste() {
  $('body, header, nav, main, footer, button,a,h1,h2,h3,h4,h5,label,input,textarea, select,span')
    .addClass("coresImportantes")
}

function risco() {
  $('footer').
  addClass("risco")
}

function bot() {
  $('button').
  addClass("bot")
}

function fonteG() {
  $('p, h3, h4, h5, H6, a, label, input, span, select, textarea')
    .addClass("fonteG")
}

function fonteP() {
  $('p, h3, h4, h5, H6, a, label, input, span, select, textarea')
    .addClass("fonteP")
}

//reference https://codepen.io/nicolas-justin/pen/jXQjQr?editors=1000

// Toogle Click Math
var toggle = document.getElementById('toggle');
var toggleIcon = document.getElementById('toggleIcon');

// Math Captcha
var math = document.getElementById('math');
var calc = document.getElementById('calc');
var result = 0;
// Numbers
toggle.addEventListener('click', toggleFunction);

function toggleFunction() {
  if (toggle.value == 1) {
    // Numbers
    v1 = Math.floor(Math.random() * 10);
    v2 = Math.floor(Math.random() * 10);
    result = v1 + v2;
    math.innerHTML = v1 + ' + ' + v2;
    //alert(v1 + ' + ' + v2 + ' = ' + result);
    toggleIcon.setAttribute('class', 'fas fa-toggle-on toggle-off');
    toggle.style.opacity = ('.3');
    toggle.value = 0;
  } else {
    // Numbers
    var v1 = Math.floor(Math.random() * 10);
    var v2 = Math.floor(Math.random() * 10);
    result = v1 * v2;
    math.innerHTML = v1 + ' * ' + v2;
    //alert(v1 + ' * ' + v2 + ' = ' + result);
    toggleIcon.setAttribute('class', 'fas fa-toggle-on toggle-on');
    toggle.style.opacity = ('1');
    toggle.value = 1;
  }
}

function calcMath() {
  if (calc.value == result) {
    btnSI.removeAttribute('disabled');
    calc.style.borderColor = "#ccc";
  } else {
    btnSI.setAttribute('disabled', 'disabled');
    calc.style.borderColor = "#f00";
    alert('Valor incorreto');
  }
}

// Disabled button sign in

var btnSI = document.getElementById('btnSubmit');

function btnDisabled() {
  if (calc.value == '') {
    btnSI.setAttribute('disabled', 'disabled');
  } else {
    btnSI.setAttribute('disabled', 'none');
    btnSI.style.backgroundColor = "#f00"
  }
}


$('#btnSubmit').click(
  function () {
    let contato = {
      "Nome Completo": $("#tName").val(),
      "Email": $("#tEmail").val(),
      "Telefone": $("#tPhone").val(),
      "Mensagem": $("#tMessage").val(),
    }
    let html = JSON.stringify(contato);
    console.log(contato)
    alert('Obrigado! Sua mensagem foi enviada')
    return false;
  })


$('#tPhone').blur(
  function () {
    let phone = $('#tPhone').val();
    let phoneNovo = ''
    for (let x = 0; x <= phone.length; x++) {
      phoneNovo += phone.charAt(x);
      if (x == 3) {
        phoneNovo += '-'
      }
      // else if (x == 8) {
      //   phoneNovo += '-'
      // }
      $('#tPhone').val(phoneNovo)
    }
  });