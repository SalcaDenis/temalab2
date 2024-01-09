window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt) {
    var alpha = evt.alpha;
    var beta = evt.beta;
    var gamma = evt.gamma;

    document.getElementById("a").innerHTML = "alpha = " + alpha;
    document.getElementById("b").innerHTML = "beta = " + beta;
    document.getElementById("c").innerHTML = "gamma = " + gamma;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var centru = { x: canvas.width / 2, y: canvas.height / 2 };

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    var latura_patrat = 50;
    var lungime_forma = Math.abs(gamma) * 2; // Modificarea dimensiunii în funcție de valoarea unghiului Gamma
    var pozitie_x = centru.x - lungime_forma / 2;
    var pozitie_y = centru.y - latura_patrat / 2;

    context.fillStyle = "#6A0888";
    context.beginPath();
    context.fillRect(pozitie_x, pozitie_y, lungime_forma, latura_patrat);
}
