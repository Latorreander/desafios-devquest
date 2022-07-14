const perguntas = document.querySelectorAll(".item");

perguntas.forEach(function (item) {
  item.addEventListener("click", function () {
      const respostaAtiva = document.querySelector(".ativo")

      if(respostaAtiva){

          respostaAtiva.classList.remove("ativo") 
      }
      
        item.classList.add("ativo");
    });
});




   







