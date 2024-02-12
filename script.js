let contador = 0;

let valorTextarea = ""

let area_de_decodificacao = ""




function pegarValorPelaClasse(classe) {
    var valor = document.querySelector(`.${classe}`).value;
    return valor
}


function exibirMensagem() {
    area_de_decodificacao = document.querySelector(".conteudo__area-decodificacao-texto__container-conteudo");

    valorTextarea = pegarValorPelaClasse("conteudo__area-insercao-texto__campo-texto__textarea");

    if (valorTextarea.trim() === "") {
        contador = 0;
        area_de_decodificacao.innerHTML = `<img src="./img/mensagem-nao-encontrada.svg" alt="Nenhuma mensagem encontrada"><p>Nenhuma mensagem digitada.</p>`;

    } else if (contador == 0) {
        contador++;
        MensagemDecodificando();
    }
}




function MensagemDecodificando() {
    area_de_decodificacao = document.querySelector(".conteudo__area-decodificacao-texto__container-conteudo");
    area_de_decodificacao.innerHTML = `<img src="./img/codificando.svg" alt="Codificando"> <p class = "conteudo__area-decodificacao-texto__container-conteudo__p">Decodificando<span class = "conteudo__area-decodificacao-texto__container-conteudo__span"></span></p>`;

    var span = document.querySelector(".conteudo__area-decodificacao-texto__container-conteudo__span");

    function exibirPonto() {

        if (span.textContent === "" || span.textContent === "." || span.textContent === "..") {
            span.textContent += "."
        } else {
            span.textContent = ""
        }

        setTimeout(exibirPonto, 600);
    }

    if (span != null) {
        exibirPonto();
    }
}



function criptografar() {

    area_de_decodificacao = document.querySelector(".conteudo__area-decodificacao-texto__container-conteudo");

    if (valorTextarea != "") {

        valorTextarea = pegarValorPelaClasse("conteudo__area-insercao-texto__campo-texto__textarea");

        valorTextarea = valorTextarea.split('');

        for (let i = 0; i < valorTextarea.length; i++) {
            if (valorTextarea[i] === "e") {
                valorTextarea[i] = "enter";
            } else if (valorTextarea[i] === "i") {
                valorTextarea[i] = "imes";
            } else if (valorTextarea[i] === "a") {
                valorTextarea[i] = "ai";
            } else if (valorTextarea[i] === "o") {
                valorTextarea[i] = "ober";
            } else if (valorTextarea[i] === "u") {
                valorTextarea[i] = "ufat";
            } else if (valorTextarea[i] === "E") {
                valorTextarea[i] = "ENTER";
            } else if (valorTextarea[i] === "I") {
                valorTextarea[i] = "Imes";
            } else if (valorTextarea[i] === "A") {
                valorTextarea[i] = "Ai";
            } else if (valorTextarea[i] === "O") {
                valorTextarea[i] = "Ober";
            } else if (valorTextarea[i] === "U") {
                valorTextarea[i] = "Ufat";
            }
        }

        valorTextarea = valorTextarea.join("");
        area_de_decodificacao.innerHTML = `<div><p>${valorTextarea}</p></div>
    <button onclick="copiarTexto(${valorTextarea})" class="conteudo__area-decodificacao-texto__container-conteudo__botao-copiar" type="button">Copiar</button>`;

        botaoCopiar()

        contador = 0;
    }
}

function descriptografar() {
    valorTextarea = pegarValorPelaClasse("conteudo__area-insercao-texto__campo-texto__textarea");
    if (valorTextarea != "") {
        area_de_decodificacao = document.querySelector(".conteudo__area-decodificacao-texto__container-conteudo");

        valorTextarea = valorTextarea.split('');

        for (let i = 0; i < valorTextarea.length; i++) {
            if (valorTextarea[i] === "e" || valorTextarea[i] === "E") {
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
            } else if (valorTextarea[i] === "i" || valorTextarea[i] === "I") {
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
            } else if (valorTextarea[i] === "a" || valorTextarea[i] === "A") {
                valorTextarea.splice(i + 1, 1);
            } else if (valorTextarea[i] === "o" || valorTextarea[i] === "O") {
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
            } else if (valorTextarea[i] === "u" || valorTextarea[i] === "U") {
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
                valorTextarea.splice(i + 1, 1);
            }
        }

        valorTextarea = valorTextarea.join("");
        area_de_decodificacao.innerHTML = `<div><p>${valorTextarea}</p></div>
    <button class="conteudo__area-decodificacao-texto__container-conteudo__botao-copiar" type="button">Copiar</button>`;

        botaoCopiar()

        contador = 0;
    }
}

function botaoCopiar() {
    // Adicionando um evento de clique ao botão de copiar
    var botaoCopiar = document.querySelector(".conteudo__area-decodificacao-texto__container-conteudo__botao-copiar");
    botaoCopiar.addEventListener('click', function () {


        // Usando a API Clipboard para copiar o texto
        navigator.clipboard.writeText(valorTextarea)
            .then(() => {
                botaoCopiar.style.backgroundColor = 'gray';
                setTimeout(function () {
                    botaoCopiar.style.backgroundColor = 'var(--green)'
                }, 1000);
            })

    });
}


