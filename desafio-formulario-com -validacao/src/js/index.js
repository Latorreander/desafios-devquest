function validar() {
  const campoFormulario = document.querySelectorAll("input");
  campoFormulario.forEach(function (input) {
    if (input.value == "") {
      input.nextElementSibling.classList.add("ativo");
      input.classList.add("nao-preenchido");
    } else input.classList.add("preenchido");
  });
}
