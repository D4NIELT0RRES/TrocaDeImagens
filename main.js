"use strict"

const botaoTrocaImagem = document.getElementById("trocar-imagem")


function trocarFoto(){
    const body = document.querySelector('body');

    const imagens = [
        'url("./img/img1.webp")',
        'url("./img/img2.jpg")',
        'url("./img/img3.jpg")',
        'url("./img/img4.jpg")',
        'url("./img/img5.jpg")'
      ];

    let fundoAtual = 0;


    return function(){
        fundoAtual = (fundoAtual + 1) % imagens.length;
        body.style.backgroundImage = imagens[fundoAtual];    
    }
    
}

const mudarFundo = trocarFoto()

botaoTrocaImagem.addEventListener('click', mudarFundo)