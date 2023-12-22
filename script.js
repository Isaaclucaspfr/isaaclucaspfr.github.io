function sim() {
    alert("Agora você é automaticamente 100% mais feliz!")
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(0, 100);
    btn.style.left = geraPosicao(0, 100);
    console.log("opa, desviei.....")
}

randomNumber(0, 100);

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}