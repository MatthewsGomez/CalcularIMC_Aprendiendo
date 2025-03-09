document.querySelectorAll("input").forEach((input, index, inputs) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        let siguienteInput = inputs[index + 1];
        if (siguienteInput) {
          siguienteInput.focus();
        }
      }
    });
  });

  const guardar = () => {

  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

    if (altura==="" || peso==="") {
        alert("Por favor digite su peso y altura")
        return;
        } 
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);
    
        if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0 || pesoNum <= 0) {
            alert("Por favor ingresar datos que sean válidos");
            return;
        }
    else {
            const nuevaltura = altura / 100;
            const result = peso / nuevaltura ** 2;
            const div = document.getElementById("resultado").innerText = `Tu IMC (Indice de masa corporal) aproximado es de: ${Math.round(result)}` ;    
      }
}
