function validar() {
  const campoFormulario = document.querySelectorAll(".area");
  campoFormulario.forEach(function (area) {
      if (area.value == "") {
        area.nextElementSibling.classList.add("ativo")
        area.classList.add("nao-preenchido") 
      } else area.classList.add("preenchido")
  });
}
