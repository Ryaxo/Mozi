// (ANO, MÊS-1, DIA, HORA, MINUTO, SEGUNDO)
const dataInicio = new Date(2023, 9, 28, 22, 0, 0); // 28 de outubro de 2023 às 22:00

function atualizarContador() {
    const agora = new Date();
    
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    
    if (dias < 0) {
        meses -= 1;
        let ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoMes;
    }
    
    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    const diff = agora - dataInicio;
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("contador").innerHTML = 
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s 💕`;
}

setInterval(atualizarContador, 1000);
atualizarContador();


function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.style.left = Math.random() * 100 + "vw";
    let duracao = Math.random() * 2 + 3;
    coracao.style.animationDuration = duracao + "s";

    coracao.innerHTML = "❤️";

    document.body.appendChild(coracao);

    setTimeout(() => coracao.remove(), duracao * 1000);
}


setInterval(criarCoracao, 200);
