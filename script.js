const texto = "Um Pouco Sobre Mim...";
let caractereIndex = 0;

function digitarEfeito() {
    const elementoSubtitulo = document.getElementById("subtitulo");
    
    if (caractereIndex < texto.length) {
        elementoSubtitulo.textContent += texto.charAt(caractereIndex);
        caractereIndex++;
        setTimeout(digitarEfeito, 100);
    }
}

function copiarCodigo() {
    const codigoElemento = document.getElementById("codigo-para-copiar");
    const botao = document.querySelector(".copy-btn");
    
    navigator.clipboard.writeText(codigoElemento.textContent).then(() => {
        botao.textContent = "Copiado!";
        botao.style.backgroundColor = "#e8f5e9";
        botao.style.color = "#43a047";
        
        setTimeout(() => {
            botao.textContent = "Copiar";
            botao.style.backgroundColor = "#e3f2fd";
            botao.style.color = "#1e88e5";
        }, 2000);
    });
}

window.onload = digitarEfeito;
