let ganaLocal = 1.5;
let ganaVisitante = 3;
let empate = 1;

for (let i=1; i<=3; i+=1){
    let apuesta = prompt("Ingresar apuesta en $")
    let ganador = prompt("Insertar Ganador")
    document.write("Apostaste " + apuesta + " Dolares" + "<br/>")
    switch(ganador){
        case "local":
            document.write("Ganaste " + apuesta*ganaLocal + " Dolares" + "<br/>"); //poner br
            break;
        case "visitante":
            document.write("Ganaste " + apuesta*ganaVisitante + " Dolares" + "<br/>");
            break;
        case "empate":
            document.write("Ganaste " + apuesta*empate + " Dolares" + "<br/>");
            break;
    }
}