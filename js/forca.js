let listaDinamica = [];
let palavraSecretaCategoria
let palavraSecretaSorteada
let dicaSorteada
let chances = 6
const palavras = [
    palavra001 = {
        nome: "TERESINA",
        categoria: "LUGARES",
        dica: "A única capital do país que não é ligada ao mar"
    },
    palavra002 = {
        nome: "BOBESPONJA",
        categoria: "PERSONAGEM",
        dica: "ele mora num abacaxi"
    },
    palavra003 = {
        nome: "MASSINHA",
        categoria: "BRINQUEDO",
        dica: "Molda no oque você quiser, vem em varias cores diferentes"
    },
    palavra004 = {
        nome: "CACHORRO",
        categoria: "ANIMAL",
        dica: "O melhor amigo do homem"
    },
    palavra005 = {
        nome: "HOMEMARANHA",
        categoria: "SUPER HERÓI",
        dica: "ele tem os poderes de uma ..."
    },
    palavra006 = {
        nome: "CACHORROQUENTE",
        categoria: "COMIDA",
        dica: "Apesar de compartilhar o nome não tem nada a ver com o animal"
    },
    palavra007 = {
        nome: "CAPOEIRA",
        categoria: "CULTURA BRASILEIRA",
        dica: "é uma dança ? é uma arte marcial? eu sei que é muito bonito de se ver"
    },
    palavra008 = {
        nome: "HOTWHEELS",
        categoria: "BRINQUEDO",
        dica: "Marca de carrinhos feitos com ferro"
    },
    palavra009 = {
        nome: "ELEFANTE",
        categoria: "ANIMAL",
        dica: "o único animal que não pode pular"
    },
    palavra010 = {
        nome: "SATELITENATURAL",
        categoria: "CORPO CELESTE",
        dica: "A Lua é um ... da Terra"
    },

];


A();
function A() {
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaCategoria = palavras[indexPalavra].categoria
    palavraSecretaSorteada = palavras[indexPalavra].nome
    dicaSorteada = palavras[indexPalavra].dica
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
    console.log(dicaSorteada)
};

PalavraJogo();
function PalavraJogo() {
    const categoria = document.getElementById("categoria")
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta")
    palavraTela.innerHTML = palavraSecretaSorteada;

    const dica = document.getElementById("dica")
    dica.innerHTML = dicaSorteada;

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class= 'letras'>" + listaDinamica[i] + "</div>"
        }
        else { palavraTela.innerHTML = palavraTela.innerHTML + "<div class= 'letras'>" + listaDinamica[i] + "</div>" }
    }

};


function verificarLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (chances > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        PalavraJogo();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#000";
    document.getElementById(tecla).style.color = "#ffff00";
}

function comparaListas(letra) {
    const X = palavraSecretaSorteada.indexOf(letra)
    if (X < 0) {
        chances--
        imagemForca();

        if (chances == 0) {
            abreModal("Fim de jogo", "A reposta era <br>" + palavraSecretaSorteada);
        }
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }
    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }
    if (vitoria == true) {
        abreModal("Você Venceu", "Parabéns você acertou, jogue uma nova palavra");
        chances = 0
    }
}
function imagemForca() {
    switch (chances) {
        case 5:
            document.getElementById("imagem").style.backgroundImage = "url('./img/forca1.png')";
            break;
        case 4:
            document.getElementById("imagem").style.backgroundImage = "url('./img/forca2.png')";
            break;
        case 3:
            document.getElementById("imagem").style.backgroundImage = "url('./img/forca3.png')";
            break;
        case 2:
            document.getElementById("imagem").style.backgroundImage = "url('./img/forca4.png')";
            break;
        case 1:
            document.getElementById("imagem").style.backgroundImage = "url('./img/forca5.png')";
            break;
        case 0:
            document.getElementById("imagem").style.backgroundImage = "url('./img/forca.png')";
            break;
        default:
            document.getElementById("imagem").style.backgroundImage = "url('./img/hangman.png')";
            break;
    }
}
function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });

}
let restart = document.querySelector("#restart")
restart.addEventListener("click", function () {
    location.reload()
}

);