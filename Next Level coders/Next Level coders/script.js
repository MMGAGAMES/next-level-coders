const audio = document.getElementById("erro");
audio.volume = 0.2;

function iniciarExperiencia(){

    document.getElementById("inicio").style.display = "none";

    audio.play();

    const mensagens = [
        "VOCÊ GANHOU UM IPHONE!",
        "Seu celular está infectado!",
        "Hackers acessaram suas fotos!",
        "Seu antivírus expirou!",
        "Seu WhatsApp será bloqueado!",
        "Seu IP foi vazado!",
        "Detectamos atividade suspeita!",
        "Sua conta está em risco!",
        "Atualização crítica necessária!",
        "Seu PC está lento!",
        "Clique para remover vírus!",
        "Sistema comprometido!"
    ];

    const titulos = [
        "Google Chrome",
        "Microsoft Edge",
        "Avast Free Antivirus",
        "Central de Segurança",
        "Atualização do Sistema",
        "Windows Security"
    ];

    for(let i = 0; i < mensagens.length; i++){

        let popup = document.createElement("div");

        popup.className = "popup";

        popup.style.animationDelay =
            (i * 0.15) + "s";

        popup.style.left =
            Math.random() *
            (window.innerWidth - 350) + "px";

        popup.style.top =
            Math.random() *
            (window.innerHeight - 250) + "px";

        popup.innerHTML = `
            <div class="janela-topo">
                <span>
                    ${titulos[Math.floor(Math.random() * titulos.length)]}
                </span>

                <button class="fechar">✕</button>
            </div>

            <div class="janela-conteudo">

                <div class="alerta">

                    <div class="icone-alerta">
                        ⚠️
                    </div>

                    <div>
                        ${mensagens[i]}
                    </div>

                </div>

                <button onclick="falsoGolpe()">
                    Resolver Problema
                </button>

            </div>
        `;

        document
            .getElementById("popups")
            .appendChild(popup);

        popup
            .querySelector(".fechar")
            .addEventListener("click", ()=>{

                popup.remove();

            });

        tornarArrastavel(popup);
    }

    // JANELA PRINCIPAL

    let principal = document.createElement("div");

    principal.className =
        "popup popup-principal";

    principal.style.left =
        (window.innerWidth / 2 - 225) + "px";

    principal.style.top =
        (window.innerHeight / 2 - 120) + "px";

    principal.innerHTML = `
        <div class="janela-topo">

            <span>
                Avast Antivirus
            </span>

            <button class="fechar">✕</button>

        </div>

        <div class="janela-conteudo">

            <div class="alerta">

                <div class="icone-alerta">
                    ⚠️
                </div>

                <div>
                    Uma ameaça grave foi detectada
                    no seu computador.
                </div>

            </div>

            <button onclick="cairNoGolpe()">
                Remover Ameaças
            </button>

        </div>
    `;

    document
        .getElementById("popups")
        .appendChild(principal);

    principal
        .querySelector(".fechar")
        .addEventListener("click", ()=>{

            principal.remove();

        });

    tornarArrastavel(principal);

    // SOMENTE OS POPUPS SECUNDÁRIOS SE MOVEM

    setInterval(()=>{

        document
            .querySelectorAll(".popup:not(.popup-principal)")
            .forEach(popup=>{

                if(Math.random() > 0.8){

                    popup.style.left =
                        Math.random() *
                        (window.innerWidth - 350)
                        + "px";

                    popup.style.top =
                        Math.random() *
                        (window.innerHeight - 250)
                        + "px";

                }

            });

    }, 3000);
}

function falsoGolpe(){

    alert(
        "Essa mensagem simulava um golpe ou propaganda enganosa."
    );

}

function cairNoGolpe(){

    document.body.classList.add("escuro");

    document.getElementById("popups").innerHTML = "";

    document.getElementById("final").style.display =
        "flex";

}

function tornarArrastavel(elemento){

    const topo =
        elemento.querySelector(".janela-topo");

    let segurando = false;

    let offsetX = 0;
    let offsetY = 0;

    topo.addEventListener("mousedown",(e)=>{

        segurando = true;

        offsetX =
            e.clientX - elemento.offsetLeft;

        offsetY =
            e.clientY - elemento.offsetTop;

        elemento.style.zIndex = 9999;

    });

    document.addEventListener("mousemove",(e)=>{

        if(!segurando) return;

        elemento.style.left =
            (e.clientX - offsetX) + "px";

        elemento.style.top =
            (e.clientY - offsetY) + "px";

    });

    document.addEventListener("mouseup",()=>{

        segurando = false;

    });
}