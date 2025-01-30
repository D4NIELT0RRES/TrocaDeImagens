"use strict"

const botaoTrocaImagem = document.getElementById("trocar-imagem")

const imagens = [

    'url("./img/img1.webp")',
    'url("./img/img2.jpg")',
    'url("./img/img3.jpg")',
    'url("./img/img4.jpg")',
    'url("./img/img5.jpg")'

];

document.getElementById('trocar-imagem').addEventListener('click', function() {

    //RandomIndex - É usado para gerar um número aleatório percorrendo um array.
    const randomIndex = Math.floor(Math.random() * imagens.length);
    document.body.style.setProperty('--imagem1', imagens[randomIndex]);
});



botaoTrocaImagem.addEventListener("click", trocarImagem)